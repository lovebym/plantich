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

// Comprehensive plant data - 100 most searched plants on Google
export const allPlants: Plant[] = [
  // Adaptogens & Energy
  {
    slug: 'ashwagandha',
    title: 'Ashwagandha',
    latinName: 'Withania somnifera',
    description: 'A powerful adaptogenic herb from Ayurvedic tradition, known for its ability to help the body manage stress. It supports healthy cortisol levels, improves energy, and promotes restful sleep.',
    uses: ['Anxiety', 'Stress', 'Insomnia', 'Fatigue', 'Low Energy'],
    category: 'Adaptogens',
    dosage: '300-600mg daily of standardized extract',
    tags: ['adaptogen', 'ayurvedic', 'stress-relief'],
    references: [
      { title: 'Mount Sinai', url: 'https://www.mountsinai.org/health-library/herb/ashwagandha' },
      { title: 'PubMed Research', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=ashwagandha' }
    ]
  },
  {
    slug: 'rhodiola-rosea',
    title: 'Rhodiola Rosea',
    latinName: 'Rhodiola rosea',
    description: 'Adaptogenic herb that helps the body adapt to stress and improves mental and physical performance.',
    uses: ['Fatigue', 'Stress', 'Focus', 'Energy', 'Depression'],
    category: 'Adaptogens',
    dosage: '200-600mg daily of standardized extract',
    tags: ['adaptogen', 'energy', 'focus', 'mood']
  },
  {
    slug: 'ginseng',
    title: 'Ginseng',
    latinName: 'Panax ginseng',
    description: 'The king of herbs that boosts energy, improves cognitive function, and supports immune system.',
    uses: ['Energy', 'Focus', 'Immune Support', 'Performance', 'Stress'],
    category: 'Adaptogens',
    dosage: '200-400mg daily, use in cycles',
    tags: ['adaptogen', 'energy', 'immune', 'performance']
  },
  {
    slug: 'maca',
    title: 'Maca',
    latinName: 'Lepidium meyenii',
    description: 'Peruvian root that nourishes hormones, boosts energy, and enhances fertility and libido.',
    uses: ['Hormone Balance', 'Energy', 'Fertility', 'Libido', 'Mood'],
    category: 'Adaptogens',
    dosage: '1000-3000mg daily',
    tags: ['adaptogen', 'hormone', 'energy', 'fertility']
  },
  {
    slug: 'cordyceps',
    title: 'Cordyceps',
    latinName: 'Cordyceps sinensis',
    description: 'Mystical mushroom that transforms energy into boundless vitality and improves athletic performance.',
    uses: ['Energy', 'Performance', 'Respiratory Health', 'Immune Support'],
    category: 'Adaptogens',
    dosage: '500-1000mg daily',
    tags: ['mushroom', 'energy', 'performance', 'immune']
  },
  {
    slug: 'reishi',
    title: 'Reishi',
    latinName: 'Ganoderma lucidum',
    description: 'Mushroom of immortality that weaves protection around your spirit and supports immune health.',
    uses: ['Immune Support', 'Sleep', 'Stress', 'Liver Health'],
    category: 'Adaptogens',
    dosage: '500-1000mg daily',
    tags: ['mushroom', 'immune', 'calming', 'sleep']
  },
  {
    slug: 'chaga',
    title: 'Chaga',
    latinName: 'Inonotus obliquus',
    description: 'Black diamond of the forest that polishes your inner radiance with powerful antioxidants.',
    uses: ['Antioxidant', 'Immune Support', 'Anti-inflammatory', 'Skin Health'],
    category: 'Adaptogens',
    dosage: '500-1000mg daily',
    tags: ['mushroom', 'antioxidant', 'immune', 'anti-inflammatory']
  },
  {
    slug: 'lions-mane',
    title: 'Lion\'s Mane',
    latinName: 'Hericium erinaceus',
    description: 'Brain mushroom that grows new pathways in your mind and enhances cognitive function.',
    uses: ['Cognitive Function', 'Memory', 'Focus', 'Nerve Regeneration'],
    category: 'Adaptogens',
    dosage: '500-1000mg daily',
    tags: ['mushroom', 'cognitive', 'nervine', 'focus']
  },
  
  // Calming & Sleep
  {
    slug: 'chamomile',
    title: 'Chamomile',
    latinName: 'Matricaria chamomilla',
    description: 'Gentle calming herb known for its soothing properties and ability to promote relaxation and sleep.',
    uses: ['Anxiety', 'Insomnia', 'Digestion', 'Skin Irritation'],
    category: 'Calming',
    dosage: 'Tea: 1-3 cups daily, Tincture: 30-60 drops',
    tags: ['calming', 'sleep', 'digestive']
  },
  {
    slug: 'lavender',
    title: 'Lavender',
    latinName: 'Lavandula angustifolia',
    description: 'Aromatic herb with calming and soothing properties, widely used for stress relief and sleep support.',
    uses: ['Anxiety', 'Insomnia', 'Stress', 'Skin Health'],
    category: 'Calming',
    dosage: 'Tea: 1-2 cups daily, Essential oil: 2-4 drops',
    tags: ['aromatic', 'calming', 'sleep']
  },
  {
    slug: 'valerian-root',
    title: 'Valerian Root',
    latinName: 'Valeriana officinalis',
    description: 'Powerful sleep-inducing herb that helps with insomnia and anxiety.',
    uses: ['Insomnia', 'Anxiety', 'Sleep Quality', 'Restlessness'],
    category: 'Calming',
    dosage: '300-600mg extract 30-60 minutes before bed',
    tags: ['sleep', 'sedative', 'calming']
  },
  {
    slug: 'passionflower',
    title: 'Passionflower',
    latinName: 'Passiflora incarnata',
    description: 'Calming herb traditionally used for anxiety, insomnia, and nervous tension.',
    uses: ['Anxiety', 'Insomnia', 'Nervousness', 'Stress'],
    category: 'Calming',
    dosage: 'Tea: 1-3 cups daily, Tincture: 30-60 drops',
    tags: ['calming', 'sleep', 'anxiety']
  },
  {
    slug: 'lemon-balm',
    title: 'Lemon Balm',
    latinName: 'Melissa officinalis',
    description: 'Gentle calming herb with a pleasant lemon scent, used for stress relief and digestive support.',
    uses: ['Anxiety', 'Stress', 'Digestion', 'Sleep'],
    category: 'Calming',
    dosage: 'Tea: 1-3 cups daily, Tincture: 30-60 drops',
    tags: ['calming', 'digestive', 'aromatic']
  },
  {
    slug: 'skullcap',
    title: 'Skullcap',
    latinName: 'Scutellaria lateriflora',
    description: 'Nervine herb that calms the nervous system and supports emotional balance.',
    uses: ['Anxiety', 'Nervousness', 'Insomnia', 'Stress'],
    category: 'Calming',
    dosage: 'Tea: 1-2 cups daily, Tincture: 30-60 drops',
    tags: ['nervine', 'calming', 'anxiety']
  },
  {
    slug: 'california-poppy',
    title: 'California Poppy',
    latinName: 'Eschscholzia californica',
    description: 'Gentle sedative herb that promotes relaxation and natural sleep.',
    uses: ['Insomnia', 'Anxiety', 'Pain', 'Restlessness'],
    category: 'Calming',
    dosage: 'Tea: 1-2 cups daily, Tincture: 20-40 drops',
    tags: ['sedative', 'calming', 'sleep']
  },
  
  // Anti-inflammatory & Pain
  {
    slug: 'turmeric',
    title: 'Turmeric',
    latinName: 'Curcuma longa',
    description: 'Anti-inflammatory spice with powerful healing properties, used for centuries in Ayurvedic and traditional medicine.',
    uses: ['Inflammation', 'Pain', 'Digestion', 'Immunity'],
    category: 'Anti-inflammatory',
    dosage: '500-1000mg daily of curcumin extract',
    tags: ['anti-inflammatory', 'spice', 'healing']
  },
  {
    slug: 'ginger',
    title: 'Ginger',
    latinName: 'Zingiber officinale',
    description: 'Warming root with powerful anti-inflammatory and digestive properties.',
    uses: ['Nausea', 'Digestion', 'Inflammation', 'Pain'],
    category: 'Anti-inflammatory',
    dosage: 'Fresh: 1-2 inches daily, Powder: 1-2g',
    tags: ['warming', 'digestive', 'anti-inflammatory']
  },
  {
    slug: 'boswellia',
    title: 'Boswellia',
    latinName: 'Boswellia serrata',
    description: 'Ancient resin that reduces inflammation and supports joint health.',
    uses: ['Joint Pain', 'Inflammation', 'Arthritis', 'Respiratory Health'],
    category: 'Anti-inflammatory',
    dosage: '300-500mg daily',
    tags: ['anti-inflammatory', 'joint', 'respiratory']
  },
  {
    slug: 'white-willow',
    title: 'White Willow',
    latinName: 'Salix alba',
    description: 'Natural aspirin that provides pain relief and reduces inflammation.',
    uses: ['Pain', 'Headaches', 'Inflammation', 'Fever'],
    category: 'Anti-inflammatory',
    dosage: '240-480mg daily',
    tags: ['pain-relief', 'anti-inflammatory', 'fever']
  },
  {
    slug: 'devils-claw',
    title: 'Devil\'s Claw',
    latinName: 'Harpagophytum procumbens',
    description: 'African herb that relieves pain and inflammation, especially for joint conditions.',
    uses: ['Joint Pain', 'Back Pain', 'Arthritis', 'Inflammation'],
    category: 'Anti-inflammatory',
    dosage: '600-1200mg daily',
    tags: ['pain-relief', 'anti-inflammatory', 'joint']
  },
  {
    slug: 'arnica',
    title: 'Arnica',
    latinName: 'Arnica montana',
    description: 'Homeopathic remedy for pain, bruising, and muscle soreness.',
    uses: ['Pain', 'Bruising', 'Muscle Soreness', 'Inflammation'],
    category: 'Anti-inflammatory',
    dosage: 'Topical use only, 6C-30C homeopathic',
    tags: ['pain-relief', 'topical', 'bruising']
  },
  {
    slug: 'bromelain',
    title: 'Bromelain',
    latinName: 'Ananas comosus',
    description: 'Enzyme from pineapple that reduces inflammation and supports digestion.',
    uses: ['Inflammation', 'Digestion', 'Pain', 'Swelling'],
    category: 'Anti-inflammatory',
    dosage: '500-1000mg daily between meals',
    tags: ['enzyme', 'anti-inflammatory', 'digestive']
  },
  {
    slug: 'cbd',
    title: 'CBD',
    latinName: 'Cannabis sativa',
    description: 'Non-psychoactive compound that reduces pain, anxiety, and inflammation.',
    uses: ['Pain', 'Anxiety', 'Inflammation', 'Sleep'],
    category: 'Anti-inflammatory',
    dosage: '10-50mg daily, start low',
    tags: ['cannabinoid', 'pain-relief', 'calming']
  },
  
  // Digestive Health
  {
    slug: 'peppermint',
    title: 'Peppermint',
    latinName: 'Mentha piperita',
    description: 'Refreshing herb that soothes digestive discomfort and relieves bloating.',
    uses: ['Digestion', 'Bloating', 'IBS', 'Nausea'],
    category: 'Digestive',
    dosage: 'Tea: 1-3 cups daily, Oil: 1-2 drops',
    tags: ['digestive', 'calming', 'refreshing']
  },
  {
    slug: 'fennel',
    title: 'Fennel',
    latinName: 'Foeniculum vulgare',
    description: 'Sweet herb that relieves gas, bloating, and digestive discomfort.',
    uses: ['Digestion', 'Bloating', 'Gas', 'Colic'],
    category: 'Digestive',
    dosage: 'Tea: 1-3 cups daily, Seeds: 1-2 tsp',
    tags: ['digestive', 'carminative', 'sweet']
  },
  {
    slug: 'slippery-elm',
    title: 'Slippery Elm',
    latinName: 'Ulmus rubra',
    description: 'Soothing herb that coats and protects the digestive tract.',
    uses: ['Digestion', 'Sore Throat', 'IBS', 'Ulcers'],
    category: 'Digestive',
    dosage: 'Powder: 1-2 tsp in water, 3 times daily',
    tags: ['demulcent', 'soothing', 'digestive']
  },
  {
    slug: 'marshmallow-root',
    title: 'Marshmallow Root',
    latinName: 'Althaea officinalis',
    description: 'Gentle herb that soothes irritated tissues and supports digestive health.',
    uses: ['Digestion', 'Sore Throat', 'Cough', 'Skin Irritation'],
    category: 'Digestive',
    dosage: 'Tea: 1-3 cups daily, Powder: 1-2 tsp',
    tags: ['demulcent', 'soothing', 'respiratory']
  },
  {
    slug: 'dandelion',
    title: 'Dandelion',
    latinName: 'Taraxacum officinale',
    description: 'Detoxifying herb that supports liver health and digestion.',
    uses: ['Liver Health', 'Digestion', 'Detox', 'Water Retention'],
    category: 'Digestive',
    dosage: 'Tea: 1-3 cups daily, Tincture: 30-60 drops',
    tags: ['liver', 'detox', 'diuretic']
  },
  {
    slug: 'milk-thistle',
    title: 'Milk Thistle',
    latinName: 'Silybum marianum',
    description: 'Liver-protecting herb that supports detoxification and liver health.',
    uses: ['Liver Health', 'Detox', 'Hangover', 'Skin Health'],
    category: 'Digestive',
    dosage: '250-500mg daily',
    tags: ['liver', 'detox', 'protective']
  },
  {
    slug: 'artichoke',
    title: 'Artichoke',
    latinName: 'Cynara scolymus',
    description: 'Digestive herb that supports liver function and bile production.',
    uses: ['Digestion', 'Liver Health', 'Cholesterol', 'Gallbladder'],
    category: 'Digestive',
    dosage: '500-1000mg daily',
    tags: ['digestive', 'liver', 'cholesterol']
  },
  
  // Immune Support
  {
    slug: 'echinacea',
    title: 'Echinacea',
    latinName: 'Echinacea purpurea',
    description: 'Immune-boosting herb that helps prevent and shorten the duration of colds and infections.',
    uses: ['Immune Support', 'Cold Prevention', 'Infection', 'Recovery'],
    category: 'Immune Support',
    dosage: '300-500mg 3 times daily at first sign of illness',
    tags: ['immune', 'cold', 'infection']
  },
  {
    slug: 'elderberry',
    title: 'Elderberry',
    latinName: 'Sambucus nigra',
    description: 'Berry that boosts immune system and shortens duration of colds and flu.',
    uses: ['Immune Support', 'Cold', 'Flu', 'Recovery'],
    category: 'Immune Support',
    dosage: 'Syrup: 1 tbsp 3-4 times daily',
    tags: ['immune', 'berry', 'cold']
  },
  {
    slug: 'astragalus',
    title: 'Astragalus',
    latinName: 'Astragalus membranaceus',
    description: 'Adaptogenic herb that strengthens immune system and supports vitality.',
    uses: ['Immune Support', 'Energy', 'Vitality', 'Recovery'],
    category: 'Immune Support',
    dosage: '500-1000mg daily',
    tags: ['immune', 'adaptogen', 'vitality']
  },
  {
    slug: 'andrographis',
    title: 'Andrographis',
    latinName: 'Andrographis paniculata',
    description: 'Powerful immune-boosting herb that fights infections and reduces symptoms.',
    uses: ['Immune Support', 'Infection', 'Fever', 'Recovery'],
    category: 'Immune Support',
    dosage: '400-600mg daily',
    tags: ['immune', 'infection', 'fever']
  },
  {
    slug: 'oregano-oil',
    title: 'Oregano Oil',
    latinName: 'Origanum vulgare',
    description: 'Potent antimicrobial oil that fights infections and supports immune health.',
    uses: ['Infection', 'Immune Support', 'Antimicrobial', 'Respiratory'],
    category: 'Immune Support',
    dosage: 'Oil: 2-4 drops diluted, 2-3 times daily',
    tags: ['antimicrobial', 'immune', 'oil']
  },
  {
    slug: 'garlic',
    title: 'Garlic',
    latinName: 'Allium sativum',
    description: 'Natural antibiotic that boosts immune system and fights infections.',
    uses: ['Immune Support', 'Infection', 'Heart Health', 'Antimicrobial'],
    category: 'Immune Support',
    dosage: 'Fresh: 2-4 cloves daily, Supplement: 600-1200mg',
    tags: ['immune', 'antimicrobial', 'heart']
  },
  {
    slug: 'propolis',
    title: 'Propolis',
    latinName: 'Bee product',
    description: 'Bee resin that provides powerful immune support and antimicrobial protection.',
    uses: ['Immune Support', 'Infection', 'Sore Throat', 'Skin Health'],
    category: 'Immune Support',
    dosage: '500-1000mg daily',
    tags: ['immune', 'antimicrobial', 'bee-product']
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
