type Ref = { label: string; url: string };

export interface PlantDoc {
  slug: string;
  commonName: string;
  latinName?: string;
  aliases?: string[];
  summary: string;
  body: string; // markdown
  safety: string;
  references: Ref[];
  lastmod: string; // YYYY-MM-DD
}

export interface RemedyDoc {
  slug: string;
  name: string;
  category?: string;
  summary: string;
  symptoms?: string[];
  recommendedPlants?: string[]; // slugs
  body: string; // markdown
  lastmod: string;
}
