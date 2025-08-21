// TypeScript types for Plantich content structure

export interface Source {
  name: string;
  url: string;
}

export interface Plant {
  name: string;
  latin: string;
  slug: string;
  uses: string[]; // Array of condition names that this plant helps with
  description: string;
  preparation: string;
  sources: Source[];
  category?: 'Mind' | 'Body' | 'Spirit';
  image?: string;
}

export interface Remedy {
  condition: string;
  slug: string;
  description: string;
  herbs: string[]; // Array of plant names that help with this condition
  approach: string;
  category?: 'Mind' | 'Body' | 'Spirit';
}

// Utility type for the plant-remedy relationship mapping
export interface PlantRemedyMap {
  [plantName: string]: string[]; // plant name -> array of condition names
}

export interface RemedyPlantMap {
  [conditionName: string]: string[]; // condition name -> array of plant names
}
