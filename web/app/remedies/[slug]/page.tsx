import { getRemedyBySlug } from '@/lib/sanity';
import { buildMetadata } from '@/app/components/Seo';
import { JsonLd } from '@/app/components/JsonLd';
import { FaqSchema } from '@/app/components/FaqSchema';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params:{ slug:string }}){
  const doc = await getRemedyBySlug(params.slug);
  return buildMetadata({ title: doc?.title || 'Remedy', seo: doc?.seo, description: doc?.excerpt, slug: `remedies/${params.slug}` });
}

export default async function Page({ params }:{ params:{ slug:string }}){
  const doc = await getRemedyBySlug(params.slug);
  if(!doc) return <div className="p-6">Not found</div> as any;
  return (
    <main className="prose mx-auto p-6">
      <h1>{doc.title}</h1>
      <JsonLd json={doc.seo?.jsonLd} />
      <FaqSchema faq={doc.faq} />
      <p className="opacity-70">Slug: {params.slug}</p>
    </main>
  );
}
