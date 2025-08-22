// Simple content loader for static files
export interface PlantDoc {
  slug: string;
  commonName: string;
  latinName?: string;
  aliases?: string[];
  summary: string;
  body: string;
  safety: string;
  references: { label: string; url?: string }[];
  lastmod: string;
}

export interface RemedyDoc {
  slug: string;
  name: string;
  category?: string;
  summary: string;
  symptoms?: string[];
  recommendedPlants?: string[];
  body: string;
  lastmod: string;
}

// For now, return empty arrays to avoid build errors
export const allPlants: PlantDoc[] = [];
export const allRemedies: RemedyDoc[] = [];

export function getPlantBySlug(slug: string): PlantDoc | null {
  return null;
}

export function getRemedyBySlug(slug: string): RemedyDoc | null {
  return null;
}

export function getRelatedPlants(slug: string): PlantDoc[] {
  return [];
}

export function getAllPlants(): PlantDoc[] {
  return [];
}

export function getAllRemedies(): RemedyDoc[] {
  return [];
}

export function getConditionBySlug(slug: string): RemedyDoc | null {
  return null;
}

export function getAllConditions(): RemedyDoc[] {
  return [];
}
