// Auto-import system for all content files
import { Metadata } from 'next'

// Plant interface
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

// Remedy interface
export interface Remedy {
  slug: string
  title: string
  description: string
  category: string
  symptoms?: string[]
  plants: string[]
  image?: string
  approach?: string
  rituals?: string[]
  lifestyle?: string[]
  safetyNotes?: string[]
  whenToSeekCare?: string[]
  faq?: { q: string; a: string }[]
  relatedRemedies?: string[]
  relatedPlants?: string[]
  references?: { title: string; url: string }[]
  lastUpdated?: string
}

// Category interface
export interface Category {
  slug: string
  title: string
  description: string
  icon: string
  color: string
  keywords?: string[]
  image?: string
}

// Auto-import all plant files
const plantModules = import.meta.glob('/src/content/plants/*.ts', { eager: true })

export const allPlants: Plant[] = Object.entries(plantModules).map(([path, module]) => {
  const plant = (module as unknown).default
  return {
    ...plant,
    slug: plant.slug || path.split('/').pop()?.replace('.ts', '')
  }
})

// Auto-import all remedy files
const remedyModules = import.meta.glob('/src/content/remedies/**/*.ts', { eager: true })

export const allRemedies: Remedy[] = Object.entries(remedyModules).map(([path, module]) => {
  const remedy = (module as unknown).default
  const category = path.split('/').slice(-2, -1)[0] // Extract category from path
  return {
    ...remedy,
    slug: remedy.slug || path.split('/').pop()?.replace('.ts', ''),
    category: remedy.category || category
  }
})

// Categories data
export const categories: Category[] = [
  {
    slug: 'mental-health',
    title: 'Mental Health',
    description: 'Anxiety, depression, stress, focus, and cognitive support',
    icon: '🧠',
    color: 'bg-blue-50 border-blue-200 text-blue-800',
    keywords: ['anxiety', 'depression', 'stress', 'focus', 'adhd', 'mood', 'sleep']
  },
  {
    slug: 'skin-hair',
    title: 'Skin & Hair',
    description: 'Acne, eczema, hair loss, aging, and skin health',
    icon: '✨',
    color: 'bg-pink-50 border-pink-200 text-pink-800',
    keywords: ['acne', 'eczema', 'hair loss', 'aging', 'skin', 'dermatitis']
  },
  {
    slug: 'digestion',
    title: 'Digestion',
    description: 'Bloating, IBS, constipation, acid reflux, and gut health',
    icon: '🌿',
    color: 'bg-green-50 border-green-200 text-green-800',
    keywords: ['bloating', 'ibs', 'constipation', 'acid reflux', 'digestion', 'gut']
  },
  {
    slug: 'immunity',
    title: 'Immunity',
    description: 'Cold, flu, infections, and immune system support',
    icon: '🛡️',
    color: 'bg-purple-50 border-purple-200 text-purple-800',
    keywords: ['cold', 'flu', 'infection', 'immune', 'immunity', 'virus']
  },
  {
    slug: 'hormones',
    title: 'Hormones',
    description: 'PMS, menopause, thyroid, libido, and hormonal balance',
    icon: '⚖️',
    color: 'bg-red-50 border-red-200 text-red-800',
    keywords: ['pms', 'menopause', 'thyroid', 'libido', 'hormones', 'endocrine']
  },
  {
    slug: 'pain-inflammation',
    title: 'Pain & Inflammation',
    description: 'Joint pain, headaches, muscle soreness, and inflammation',
    icon: '🔥',
    color: 'bg-orange-50 border-orange-200 text-orange-800',
    keywords: ['pain', 'inflammation', 'joint', 'headache', 'muscle', 'arthritis']
  },
  {
    slug: 'energy',
    title: 'Energy & Fatigue',
    description: 'Fatigue, burnout, low energy, and adrenal support',
    icon: '⚡',
    color: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    keywords: ['fatigue', 'energy', 'burnout', 'adrenal', 'tired', 'exhaustion']
  },
  {
    slug: 'detox',
    title: 'Detox & Liver',
    description: 'Liver support, detoxification, and cleansing',
    icon: '🌱',
    color: 'bg-emerald-50 border-emerald-200 text-emerald-800',
    keywords: ['detox', 'liver', 'cleansing', 'toxins', 'purification']
  }
]

// Helper functions
export function getPlantsByCategory(category: string): Plant[] {
  return allPlants.filter(plant => 
    plant.tags?.some(tag => 
      categories.find(cat => cat.slug === category)?.keywords?.includes(tag)
    )
  )
}

export function getRemediesByCategory(category: string): Remedy[] {
  return allRemedies.filter(remedy => remedy.category === category)
}

export function getPlantBySlug(slug: string): Plant | undefined {
  return allPlants.find(plant => plant.slug === slug)
}

export function getRemedyBySlug(slug: string): Remedy | undefined {
  return allRemedies.find(remedy => remedy.slug === slug)
}

export function searchPlants(query: string): Plant[] {
  const searchTerm = query.toLowerCase()
  return allPlants.filter(plant => 
    plant.title.toLowerCase().includes(searchTerm) ||
    plant.latinName.toLowerCase().includes(searchTerm) ||
    plant.uses.some(use => use.toLowerCase().includes(searchTerm)) ||
    plant.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
  )
}

export function searchRemedies(query: string): Remedy[] {
  const searchTerm = query.toLowerCase()
  return allRemedies.filter(remedy => 
    remedy.title.toLowerCase().includes(searchTerm) ||
    remedy.description.toLowerCase().includes(searchTerm) ||
    remedy.symptoms?.some(symptom => symptom.toLowerCase().includes(searchTerm)) ||
    remedy.plants.some(plant => plant.toLowerCase().includes(searchTerm))
  )
}

export function getRelatedPlants(plantSlug: string): Plant[] {
  const plant = getPlantBySlug(plantSlug)
  if (!plant?.relatedPlants) return []
  
  return plant.relatedPlants
    .map(slug => getPlantBySlug(slug))
    .filter(Boolean) as Plant[]
}

export function getRelatedRemedies(plantSlug: string): Remedy[] {
  const plant = getPlantBySlug(plantSlug)
  if (!plant?.relatedRemedies) return []
  
  return plant.relatedRemedies
    .map(slug => getRemedyBySlug(slug))
    .filter(Boolean) as Remedy[]
}

// Generate sitemap data
export function generateSitemapData() {
  const plants = allPlants.map(plant => ({
    url: `/plants/${plant.slug}`,
    lastModified: plant.lastUpdated || new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }))

  const remedies = allRemedies.map(remedy => ({
    url: `/remedies/${remedy.slug}`,
    lastModified: remedy.lastUpdated || new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }))

  const categoryUrls = categories.map(category => ({
    url: `/category/${category.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.6
  }))

  return [...plants, ...remedies, ...categoryUrls]
}

// Export everything
export { categories as allCategories }

// AI-specific exports for API routes
export function loadAllPlantsForAI() {
  return allPlants.map(plant => ({
    title: plant.title,
    latinName: plant.latinName,
    description: plant.description,
    uses: plant.uses,
    tags: plant.tags,
    slug: plant.slug
  }))
}

export function loadAllRemediesForAI() {
  return allRemedies.map(remedy => ({
    title: remedy.title,
    description: remedy.description,
    symptoms: remedy.symptoms,
    plants: remedy.plants,
    slug: remedy.slug,
    category: remedy.category
  }))
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

export function getPlantsForRemedy(conditionName: string): Plant[] {
  const remedy = allRemedies.find(r => r.title === conditionName);
  if (!remedy) return [];
  
  return allPlants.filter(plant => 
    remedy.plants.includes(plant.title)
  );
}

export function getRemediesForPlant(plantName: string): Remedy[] {
  return allRemedies.filter(remedy => 
    remedy.plants.includes(plantName)
  );
}
