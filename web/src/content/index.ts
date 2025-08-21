// Central index for all content with utility functions
import { Plant, Remedy, PlantRemedyMap, RemedyPlantMap } from './types';

// Import all plants
import lemonBalm from './plants/lemon-balm';
import ashwagandha from './plants/ashwagandha';
import passionflower from './plants/passionflower';
import chamomile from './plants/chamomile';
import lavender from './plants/lavender';

// Import all remedies
import anxietyRemedy from './remedies/anxiety';
import insomniaRemedy from './remedies/insomnia';
import digestiveIssuesRemedy from './remedies/digestive-issues';
import stressRemedy from './remedies/stress';
import fatigueRemedy from './remedies/fatigue';

// Exported collections
export const allPlants: Plant[] = [
  lemonBalm,
  ashwagandha,
  passionflower,
  chamomile,
  lavender,
];

export const allRemedies: Remedy[] = [
  anxietyRemedy,
  insomniaRemedy,
  digestiveIssuesRemedy,
  stressRemedy,
  fatigueRemedy,
];

// Utility functions
export function getPlantBySlug(slug: string): Plant | undefined {
  return allPlants.find(plant => plant.slug === slug);
}

export function getRemedyBySlug(slug: string): Remedy | undefined {
  return allRemedies.find(remedy => remedy.slug === slug);
}

export function getPlantsForRemedy(conditionName: string): Plant[] {
  const remedy = allRemedies.find(r => r.condition === conditionName);
  if (!remedy) return [];
  
  return allPlants.filter(plant => 
    remedy.herbs.includes(plant.name)
  );
}

export function getRemediesForPlant(plantName: string): Remedy[] {
  const plant = allPlants.find(p => p.name === plantName);
  if (!plant) return [];
  
  return allRemedies.filter(remedy => 
    plant.uses.some(use => remedy.condition === use)
  );
}

export function searchPlants(query: string): Plant[] {
  const lowercaseQuery = query.toLowerCase();
  return allPlants.filter(plant => 
    plant.name.toLowerCase().includes(lowercaseQuery) ||
    plant.latin.toLowerCase().includes(lowercaseQuery) ||
    plant.description.toLowerCase().includes(lowercaseQuery) ||
    plant.uses.some(use => use.toLowerCase().includes(lowercaseQuery))
  );
}

export function searchRemedies(query: string): Remedy[] {
  const lowercaseQuery = query.toLowerCase();
  return allRemedies.filter(remedy => 
    remedy.condition.toLowerCase().includes(lowercaseQuery) ||
    remedy.description.toLowerCase().includes(lowercaseQuery) ||
    remedy.herbs.some(herb => herb.toLowerCase().includes(lowercaseQuery))
  );
}

export function getPlantsByCategory(category: 'Mind' | 'Body' | 'Spirit'): Plant[] {
  return allPlants.filter(plant => plant.category === category);
}

export function getRemediesByCategory(category: 'Mind' | 'Body' | 'Spirit'): Remedy[] {
  return allRemedies.filter(remedy => remedy.category === category);
}

// Generate relationship maps
export function generatePlantRemedyMap(): PlantRemedyMap {
  const map: PlantRemedyMap = {};
  
  allPlants.forEach(plant => {
    map[plant.name] = plant.uses;
  });
  
  return map;
}

export function generateRemedyPlantMap(): RemedyPlantMap {
  const map: RemedyPlantMap = {};
  
  allRemedies.forEach(remedy => {
    map[remedy.condition] = remedy.herbs;
  });
  
  return map;
}
