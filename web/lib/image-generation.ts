/**
 * Plantich Botanical Illustration Generator
 * Standardized prompts for consistent Nordic flora style
 */

export interface PlantIllustrationConfig {
  plantName: string;
  latinName: string;
  category?: 'adaptogen' | 'nervine' | 'immunomodulator' | 'anti-inflammatory' | 'digestive' | 'antioxidant' | 'hormone-regulator';
  specialFeatures?: string[];
}

export function generateBotanicalPrompt(config: PlantIllustrationConfig): string {
  const { plantName, latinName, category, specialFeatures } = config;
  
  let prompt = `Botanical illustration of ${plantName} (${latinName}), inspired by Nordic flora style but with a modern minimal twist. Clean white background. Fine ink linework combined with soft watercolor textures. Scientific accuracy, high detail, elegant and exclusive like a vintage botanical plate. Soft earthy tones, harmonious composition, timeless and refined.`;
  
  // Add category-specific styling
  if (category) {
    const categoryStyles = {
      'adaptogen': 'Focus on root structure and overall plant form, earthy brown and gold tones',
      'nervine': 'Emphasize flowers and leaves, soft lavender and sage green tones',
      'immunomodulator': 'Highlight fruiting bodies and spores, rich terracotta and deep green',
      'anti-inflammatory': 'Show root and rhizome details, warm yellow and orange tones',
      'digestive': 'Focus on seeds and flowers, gentle beige and soft green',
      'antioxidant': 'Emphasize berries and fruits, vibrant but muted red and purple',
      'hormone-regulator': 'Show flowering parts and seeds, balanced pink and green tones'
    };
    prompt += ` ${categoryStyles[category]}.`;
  }
  
  // Add special features
  if (specialFeatures?.length) {
    prompt += ` Special focus on: ${specialFeatures.join(', ')}.`;
  }
  
  return prompt;
}

// Pre-defined plant configurations
export const PLANT_ILLUSTRATIONS: Record<string, PlantIllustrationConfig> = {
  'ashwagandha': {
    plantName: 'Ashwagandha',
    latinName: 'Withania somnifera',
    category: 'adaptogen',
    specialFeatures: ['root structure', 'berries', 'leaves']
  },
  'rhodiola': {
    plantName: 'Rhodiola',
    latinName: 'Rhodiola rosea',
    category: 'adaptogen',
    specialFeatures: ['root', 'yellow flowers', 'succulent leaves']
  },
  'reishi': {
    plantName: 'Reishi',
    latinName: 'Ganoderma lucidum',
    category: 'immunomodulator',
    specialFeatures: ['fruiting body', 'spores', 'wood substrate']
  },
  'chaga': {
    plantName: 'Chaga',
    latinName: 'Inonotus obliquus',
    category: 'immunomodulator',
    specialFeatures: ['sclerotium', 'black exterior', 'orange interior']
  },
  'lavender': {
    plantName: 'Lavender',
    latinName: 'Lavandula angustifolia',
    category: 'nervine',
    specialFeatures: ['purple flowers', 'silver-green leaves', 'essential oil glands']
  },
  'turmeric': {
    plantName: 'Turmeric',
    latinName: 'Curcuma longa',
    category: 'anti-inflammatory',
    specialFeatures: ['rhizome', 'yellow flowers', 'curcumin content']
  },
  'ginger': {
    plantName: 'Ginger',
    latinName: 'Zingiber officinale',
    category: 'digestive',
    specialFeatures: ['rhizome', 'pale yellow flowers', 'aromatic compounds']
  },
  'lion-mane': {
    plantName: "Lion's Mane",
    latinName: 'Hericium erinaceus',
    category: 'nervine',
    specialFeatures: ['cascading spines', 'white fruiting body', 'brain-like structure']
  },
  'chamomile': {
    plantName: 'Chamomile',
    latinName: 'Matricaria chamomilla',
    category: 'nervine',
    specialFeatures: ['daisy-like flowers', 'feathery leaves', 'essential oils']
  },
  'echinacea': {
    plantName: 'Echinacea',
    latinName: 'Echinacea purpurea',
    category: 'immunomodulator',
    specialFeatures: ['cone-shaped center', 'purple petals', 'immune-stimulating compounds']
  }
};

export function getPlantPrompt(slug: string): string | null {
  const config = PLANT_ILLUSTRATIONS[slug];
  if (!config) return null;
  return generateBotanicalPrompt(config);
}

export function getAllPlantPrompts(): Array<{slug: string, prompt: string}> {
  return Object.entries(PLANT_ILLUSTRATIONS).map(([slug, config]) => ({
    slug,
    prompt: generateBotanicalPrompt(config)
  }));
}
