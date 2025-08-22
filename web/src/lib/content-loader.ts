// Content loader for plants and remedies
// This file dynamically loads all content files

export interface Plant {
  slug: string
  title: string
  latinName: string
  description: string
  image?: string
  uses: string[]
  tags?: string[]
  activeCompounds?: string[]
  forms?: string[]
  dosage?: string
  cautions?: string[]
  interactions?: string[]
  pregnancyLactation?: string
  ritualIdea?: string
  relatedPlants?: string[]
  relatedRemedies?: string[]
  references?: { title: string; url: string }[]
  lastUpdated?: string
  dna?: {
    activeCompounds: string[]
    effects: string[]
    molecularStructure: string
  }
  worldMap?: {
    origin: string
    traditions: string[]
    coordinates: [number, number]
  }
  whispers?: {
    quotes: string[]
    folklore: string[]
    wisdom: string[]
  }
  category?: string
}

export interface Remedy {
  slug: string
  title: string
  description: string
  category: string
  plants: string[]
  approach?: string
  symptoms?: string[]
  image?: string
  lastUpdated?: string
}

export interface Category {
  slug: string
  title: string
  description: string
  image?: string
  keywords?: string[]
}

// Sample data for now - replace with actual imports
export const allPlants: Plant[] = [
  {
    slug: 'ashwagandha',
    title: 'Ashwagandha',
    latinName: 'Withania somnifera',
    description: 'A powerful adaptogen used in Ayurvedic medicine for stress, energy, and vitality.',
    uses: ['stress', 'anxiety', 'energy', 'immunity'],
    category: 'Mind',
    dosage: '300-600mg daily',
    tags: ['adaptogen', 'ayurvedic', 'stress-relief']
  },
  {
    slug: 'turmeric',
    title: 'Turmeric',
    latinName: 'Curcuma longa',
    description: 'Anti-inflammatory spice with powerful healing properties.',
    uses: ['inflammation', 'pain', 'digestion', 'immunity'],
    category: 'Body',
    dosage: '500-1000mg daily',
    tags: ['anti-inflammatory', 'spice', 'healing']
  }
]

export const allRemedies: Remedy[] = [
  {
    slug: 'anxiety',
    title: 'Anxiety',
    description: 'Natural remedies for anxiety and stress relief.',
    category: 'Mind',
    plants: ['ashwagandha', 'chamomile', 'lavender', 'passionflower'],
    approach: 'Calming herbs and adaptogens'
  },
  {
    slug: 'inflammation',
    title: 'Inflammation',
    description: 'Anti-inflammatory remedies for chronic inflammation.',
    category: 'Body',
    plants: ['turmeric', 'ginger', 'boswellia', 'white-willow'],
    approach: 'Anti-inflammatory herbs and spices'
  }
]

export const categories: Category[] = [
  {
    slug: 'mind',
    title: 'Mind',
    description: 'Mental health and cognitive support',
    keywords: ['anxiety', 'depression', 'focus', 'sleep', 'stress']
  },
  {
    slug: 'body',
    title: 'Body',
    description: 'Physical health and wellness',
    keywords: ['pain', 'inflammation', 'energy', 'immunity', 'digestion']
  },
  {
    slug: 'spirit',
    title: 'Spirit',
    description: 'Spiritual and emotional balance',
    keywords: ['balance', 'harmony', 'wellness', 'vitality']
  }
]

// Helper functions
export function getPlantBySlug(slug: string): Plant | undefined {
  return allPlants.find(plant => plant.slug === slug)
}

export function getRemedyBySlug(slug: string): Remedy | undefined {
  return allRemedies.find(remedy => remedy.slug === slug)
}

export function getPlantsByCategory(category: string): Plant[] {
  return allPlants.filter(plant => plant.category?.toLowerCase() === category.toLowerCase())
}

export function getRemediesByCategory(category: string): Remedy[] {
  return allRemedies.filter(remedy => remedy.category.toLowerCase() === category.toLowerCase())
}

export function searchPlants(query: string): Plant[] {
  const lowercaseQuery = query.toLowerCase()
  return allPlants.filter(plant => 
    plant.title.toLowerCase().includes(lowercaseQuery) ||
    plant.latinName.toLowerCase().includes(lowercaseQuery) ||
    plant.description.toLowerCase().includes(lowercaseQuery) ||
    plant.uses.some(use => use.toLowerCase().includes(lowercaseQuery))
  )
}

export function searchRemedies(query: string): Remedy[] {
  const lowercaseQuery = query.toLowerCase()
  return allRemedies.filter(remedy => 
    remedy.title.toLowerCase().includes(lowercaseQuery) ||
    remedy.description.toLowerCase().includes(lowercaseQuery) ||
    remedy.plants.some(plant => plant.toLowerCase().includes(lowercaseQuery))
  )
}

export function getPlantsForRemedy(remedyTitle: string): Plant[] {
  const remedy = allRemedies.find(r => r.title === remedyTitle)
  if (!remedy) return []
  
  return allPlants.filter(plant => 
    remedy.plants.includes(plant.title)
  )
}

export function getRemediesForPlant(plantName: string): Remedy[] {
  return allRemedies.filter(remedy =>
    remedy.plants.includes(plantName)
  )
}

export function generateSitemapData() {
  const plantUrls = allPlants.map(plant => ({
    url: `/plants/${plant.slug}`,
    lastModified: plant.lastUpdated || new Date().toISOString()
  }))
  
  const remedyUrls = allRemedies.map(remedy => ({
    url: `/remedies/${remedy.slug}`,
    lastModified: remedy.lastUpdated || new Date().toISOString()
  }))
  
  const categoryUrls = categories.map(category => ({
    url: `/remedies/${category.slug}`,
    lastModified: new Date().toISOString()
  }))
  
  return [...plantUrls, ...remedyUrls, ...categoryUrls]
}

// Export functions for AI
export function loadAllPlantsForAI() {
  return allPlants
}

export function loadAllRemediesForAI() {
  return allRemedies
}

export function loadPlantBySlug(slug: string) {
  return getPlantBySlug(slug)
}

export function loadRemedyBySlug(slug: string) {
  return getRemedyBySlug(slug)
}

export function loadPlants() {
  return allPlants
}

export function loadRemedies() {
  return allRemedies
}
