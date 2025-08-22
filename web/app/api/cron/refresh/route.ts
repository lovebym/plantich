import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { createClient } from '@sanity/client';

export const runtime = 'edge';

async function getGaRows(){
  if (process.env.USE_MOCK_GA4 === '1'){
    const mock = (await import('../_mock_ga4.mjs')).default as any;
    return mock.rows as any[];
  }
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON || '{}'),
    scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
  });
  const ga = google.analyticsdata({ version: 'v1beta', auth });
  const property = `properties/${process.env.GA4_PROPERTY_ID}`;
  const res = await ga.properties.runReport({
    property,
    requestBody:{
      dateRanges:[{startDate:'28daysAgo', endDate:'yesterday'}],
      dimensions:[{name:'pagePath'}],
      metrics:[{name:'screenPageViews'},{name:'averageSessionDuration'},{name:'bounceRate'}],
    }
  });
  return res.data.rows || [];
}

export async function GET(){
  const rows = await getGaRows();

  const byPath: Record<string,{views:number;avgTime:number;bounce:number}> = {};
  for(const r of rows){
    const path = r?.dimensionValues?.[0]?.value || '';
    byPath[path] = {
      views: Number(r?.metricValues?.[0]?.value||0),
      avgTime: Number(r?.metricValues?.[1]?.value||0),
      bounce: Number(r?.metricValues?.[2]?.value||0),
    };
  }

  const sanity = createClient({
    projectId: process.env.SANITY_PROJECT_ID!,
    dataset: process.env.SANITY_DATASET!,
    token: process.env.SANITY_TOKEN!,
    apiVersion: process.env.SANITY_API_VERSION || '2025-08-01',
    useCdn: false,
  });

  const docs: Array<{_id:string; slug:{current:string}}> = await sanity.fetch(`*[_type in ['plant','remedy']]{_id, slug}`);

  const patches: Array<{id:string; set:any; score:number; slug:string}> = [];
  const norm = (v:number)=> Math.min(1, Math.log10(1+v)/3);

  for(const d of docs){
    const path = `/${d.slug?.current}`;
    const p = byPath[path];
    if(!p) continue;
    const score = Math.round(norm(p.views)*40 + norm(p.avgTime)*40 - norm(p.bounce)*20);
    patches.push({ id: d._id, slug: d.slug.current, score, set: { performance: { ...p, score }, featured: false, 'seo.lastAiRefresh': new Date().toISOString() } });
  }

  patches.sort((a,b)=> b.score - a.score);
  patches.slice(0,6).forEach(p=> p.set.featured = true);

  const tx = sanity.transaction();
  for(const p of patches){ tx.patch(p.id, { set: p.set }); }
  if(patches.length) await tx.commit();

  return NextResponse.json({ updated: patches.length, mode: process.env.USE_MOCK_GA4 === '1' ? 'mock' : 'live' });
}
