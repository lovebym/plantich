import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-05-01',
  useCdn: true,
});

export interface Preparation {
  tea?: {
    grams?: string;
    waterMl?: string;
    minutes?: string;
    perDay?: string;
    notes?: string;
  };
  tincture?: {
    ratio?: string;
    drops?: string;
    timesPerDay?: string;
    notes?: string;
  };
  capsule?: {
    mg?: string;
    timesPerDay?: string;
  };
  topical?: string;
  duration?: string;
  essential?: {
    drops?: string;
    method?: string;
    notes?: string;
  };
}

export type Plant = {
  commonName: string;
  latinName: string;
  slug: { current: string };
  essence?: string;
  tags?: string[];
  benefits?: string[];
  preparation?: Preparation;
  safety?: string[];
  pairs?: { plant: { _id: string; commonName: string; slug: { current: string } }, why?: string }[];
  traditionalUses?: { _id: string; title: string; slug: { current: string } }[];
  energetics?: { taste?: string[]; temperature?: string; actions?: string[] };
  research?: { title?: string; url?: string; note?: string }[];
  seoTitle?: string;
  seoDescription?: string;
};

export type Condition = {
  title: string;
  slug: { current: string };
  description?: string;
  category?: string;
  plants?: { _id: string; commonName: string; slug: { current: string } }[];
  seoTitle?: string;
  seoDescription?: string;
};

export async function getPlantBySlug(slug: string): Promise<Plant | null> {
  const query = `*[_type=="plant" && slug.current==$slug][0]{
    commonName, latinName, slug, essence, tags, benefits, preparation, safety,
    pairs[]{ why, plant-> { _id, commonName, slug } },
    traditionalUses[]-> { _id, title, slug },
    energetics, research, seoTitle, seoDescription
  }`;
  return client.fetch(query, { slug });
}

export async function getConditionBySlug(slug: string): Promise<Condition | null> {
  const query = `*[_type=="condition" && slug.current==$slug][0]{
    title, slug, description, category,
    plants[]-> { _id, commonName, slug },
    seoTitle, seoDescription
  }`;
  return client.fetch(query, { slug });
}

export async function getRelatedPlants(slug: string) {
  const query = `*[_type=="plant" && slug.current!=$slug][0...6]{ commonName, slug }`;
  return client.fetch(query, { slug });
}

export async function getAllPlants() {
  const query = `*[_type=="plant"]{ commonName, latinName, slug, essence, tags, category }`;
  return client.fetch(query);
}

export async function getAllConditions() {
  const query = `*[_type=="condition"]{ title, slug, description, category }`;
  return client.fetch(query);
}
