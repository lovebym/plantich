import type { Metadata } from 'next';

export function buildMetadata(node:{title:string, seo?:unknown, description?:string, slug:string}): Metadata {
  const title = node.seo?.title || node.title;
  const description = node.seo?.description || (node.description?.slice(0,155) ?? '');
  const base = process.env.SITE_URL || 'https://plantich.com';
  const url = `${base}/${node.slug}`.replace(/\/+/, '/');
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: 'Plantich' },
  };
}
