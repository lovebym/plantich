import { NextResponse } from 'next/server'

export async function GET() {
  const body = {
    name: "Plantich",
    website: "https://plantich.com",
    description: "Nordic herbal apothecary: plants, conditions, safe guidance.",
    license: "CC BY 4.0",
    feeds: {
      llmIndex: "https://plantich.com/api/llm/openapi.json",
      listPlants: "https://plantich.com/api/llm/plants",
      listRemedies: "https://plantich.com/api/llm/remedies",
      doc: "https://plantich.com/api/llm/doc/{slug}",
      changes: "https://plantich.com/api/llm/changes",
      rss: "https://plantich.com/feed.xml"
    },
    sitemaps: [
      "https://plantich.com/sitemap.xml",
      "https://plantich.com/sitemap-plants.xml",
      "https://plantich.com/sitemap-remedies.xml",
      "https://plantich.com/sitemap-llm.xml"
    ],
    contact: "hello@plantich.com",
    lastUpdated: new Date().toISOString()
  }

  return NextResponse.json(body, {
    headers: {
      'Cache-Control': 'public, max-age=86400',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  })
}
