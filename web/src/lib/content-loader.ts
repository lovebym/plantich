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

// Comprehensive plant data
export const allPlants: Plant[] = [
  {
    slug: 'ashwagandha',
    title: 'Ashwagandha',
    latinName: 'Withania somnifera',
    description: 'A powerful adaptogenic herb from Ayurvedic tradition, known for its ability to help the body manage stress. It supports healthy cortisol levels, improves energy, and promotes restful sleep.',
    uses: ['Anxiety', 'Stress', 'Insomnia', 'Fatigue', 'Low Energy'],
    category: 'Body',
    dosage: 'Standardized extract in capsules, powder mixed in warm milk, or tincture. Best taken with food.',
    tags: ['adaptogen', 'ayurvedic', 'stress-relief'],
    references: [
      { title: 'Mount Sinai', url: 'https://www.mountsinai.org/health-library/herb/ashwagandha' },
      { title: 'PubMed Research', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=ashwagandha' }
    ]
  },
  {
    slug: 'turmeric',
    title: 'Turmeric',
    latinName: 'Curcuma longa',
    description: 'Anti-inflammatory spice with powerful healing properties, used for centuries in Ayurvedic and traditional medicine.',
    uses: ['Inflammation', 'Pain', 'Digestion', 'Immunity'],
    category: 'Body',
    dosage: '500-1000mg daily of curcumin extract',
    tags: ['anti-inflammatory', 'spice', 'healing']
  },
  {
    slug: 'chamomile',
    title: 'Chamomile',
    latinName: 'Matricaria chamomilla',
    description: 'Gentle calming herb known for its soothing properties and ability to promote relaxation and sleep.',
    uses: ['Anxiety', 'Insomnia', 'Digestion', 'Skin Irritation'],
    category: 'Mind',
    dosage: 'Tea: 1-3 cups daily, Tincture: 30-60 drops',
    tags: ['calming', 'sleep', 'digestive']
  },
  {
    slug: 'lavender',
    title: 'Lavender',
    latinName: 'Lavandula angustifolia',
    description: 'Aromatic herb with calming and soothing properties, widely used for stress relief and sleep support.',
    uses: ['Anxiety', 'Insomnia', 'Stress', 'Skin Health'],
    category: 'Mind',
    dosage: 'Tea: 1-2 cups daily, Essential oil: 2-4 drops',
    tags: ['aromatic', 'calming', 'sleep']
  },
  {
    slug: 'ginger',
    title: 'Ginger',
    latinName: 'Zingiber officinale',
    description: 'Warming root with powerful anti-inflammatory and digestive properties.',
    uses: ['Nausea', 'Digestion', 'Inflammation', 'Pain'],
    category: 'Body',
    dosage: 'Fresh: 1-2 inches daily, Powder: 1-2g',
    tags: ['warming', 'digestive', 'anti-inflammatory']
  },
  {
    slug: 'rhodiola',
    title: 'Rhodiola',
    latinName: 'Rhodiola rosea',
    description: 'Adaptogenic herb that helps the body adapt to stress and improves mental and physical performance.',
    uses: ['Fatigue', 'Stress', 'Focus', 'Energy'],
    category: 'Mind',
    dosage: '200-600mg daily of standardized extract',
    tags: ['adaptogen', 'energy', 'focus']
  },
  {
    slug: 'passionflower',
    title: 'Passionflower',
    latinName: 'Passiflora incarnata',
    description: 'Calming herb traditionally used for anxiety, insomnia, and nervous tension.',
    uses: ['Anxiety', 'Insomnia', 'Nervousness', 'Stress'],
    category: 'Mind',
    dosage: 'Tea: 1-3 cups daily, Tincture: 30-60 drops',
    tags: ['calming', 'sleep', 'anxiety']
  },
  {
    slug: 'lemon-balm',
    title: 'Lemon Balm',
    latinName: 'Melissa officinalis',
    description: 'Gentle calming herb with a pleasant lemon scent, used for stress relief and digestive support.',
    uses: ['Anxiety', 'Stress', 'Digestion', 'Sleep'],
    category: 'Mind',
    dosage: 'Tea: 1-3 cups daily, Tincture: 30-60 drops',
    tags: ['calming', 'digestive', 'aromatic']
  },
  {
    slug: 'valerian-root',
    title: 'Valerian Root',
    latinName: 'Valeriana officinalis',
    description: 'Powerful sleep-inducing herb that helps with insomnia and anxiety.',
    uses: ['Insomnia', 'Anxiety', 'Sleep Quality', 'Restlessness'],
    category: 'Mind',
    dosage: '300-600mg extract 30-60 minutes before bed',
    tags: ['sleep', 'sedative', 'calming']
  },
  {
    slug: 'echinacea',
    title: 'Echinacea',
    latinName: 'Echinacea purpurea',
    description: 'Immune-boosting herb that helps prevent and shorten the duration of colds and infections.',
    uses: ['Immune Support', 'Cold Prevention', 'Infection', 'Recovery'],
    category: 'Body',
    dosage: '300-500mg 3 times daily at first sign of illness',
    tags: ['immune', 'cold', 'infection']
  }
]

// Comprehensive remedy data
export const allRemedies: Remedy[] = [
  {
    slug: 'anxiety',
    title: 'Anxiety',
    description: 'Natural remedies for anxiety and stress relief using calming herbs and adaptogens.',
    category: 'Mind',
    plants: ['Ashwagandha', 'Chamomile', 'Lavender', 'Passionflower', 'Lemon Balm'],
    approach: 'Calming herbs and adaptogens to support nervous system'
  },
  {
    slug: 'insomnia',
    title: 'Insomnia',
    description: 'Natural sleep support using herbs that promote relaxation and restful sleep.',
    category: 'Mind',
    plants: ['Valerian Root', 'Chamomile', 'Lavender', 'Passionflower', 'Lemon Balm'],
    approach: 'Sedative herbs and sleep-promoting compounds'
  },
  {
    slug: 'stress',
    title: 'Stress',
    description: 'Adaptogenic herbs and calming remedies to help the body manage stress effectively.',
    category: 'Mind',
    plants: ['Ashwagandha', 'Rhodiola', 'Lavender', 'Chamomile', 'Passionflower'],
    approach: 'Adaptogens and stress-supporting herbs'
  },
  {
    slug: 'inflammation',
    title: 'Inflammation',
    description: 'Anti-inflammatory remedies for chronic inflammation and pain relief.',
    category: 'Body',
    plants: ['Turmeric', 'Ginger', 'Boswellia', 'White Willow', 'Devil\'s Claw'],
    approach: 'Anti-inflammatory herbs and natural pain relievers'
  },
  {
    slug: 'digestion',
    title: 'Digestion',
    description: 'Herbal remedies to support healthy digestion and relieve digestive discomfort.',
    category: 'Body',
    plants: ['Ginger', 'Chamomile', 'Peppermint', 'Fennel', 'Slippery Elm'],
    approach: 'Digestive herbs and gut-supporting compounds'
  },
  {
    slug: 'immune-support',
    title: 'Immune Support',
    description: 'Natural immune-boosting remedies to strengthen the body\'s defenses.',
    category: 'Body',
    plants: ['Echinacea', 'Elderberry', 'Astragalus', 'Reishi', 'Chaga'],
    approach: 'Immune-modulating herbs and adaptogens'
  },
  {
    slug: 'fatigue',
    title: 'Fatigue',
    description: 'Energy-boosting herbs and adaptogens to combat fatigue and improve vitality.',
    category: 'Body',
    plants: ['Ashwagandha', 'Rhodiola', 'Ginseng', 'Maca', 'Cordyceps'],
    approach: 'Adaptogens and energy-supporting herbs'
  },
  {
    slug: 'depression',
    title: 'Depression',
    description: 'Mood-supporting herbs and natural remedies for emotional balance.',
    category: 'Mind',
    plants: ['St. John\'s Wort', 'Saffron', 'Rhodiola', 'Lavender', 'Passionflower'],
    approach: 'Mood-elevating herbs and nervous system support'
  },
  {
    slug: 'pain',
    title: 'Pain',
    description: 'Natural pain relief using anti-inflammatory and analgesic herbs.',
    category: 'Body',
    plants: ['Turmeric', 'White Willow', 'Devil\'s Claw', 'Boswellia', 'Arnica'],
    approach: 'Anti-inflammatory and pain-relieving herbs'
  },
  {
    slug: 'focus',
    title: 'Focus',
    description: 'Cognitive-enhancing herbs to improve concentration and mental clarity.',
    category: 'Mind',
    plants: ['Bacopa', 'Ginkgo Biloba', 'Rhodiola', 'Lion\'s Mane', 'Gotu Kola'],
    approach: 'Nootropic herbs and cognitive enhancers'
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
