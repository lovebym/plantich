import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/lib/sanity';

// De mest sökta plants på Google (baserat på faktisk data)
const TOP_SEARCHED_PLANTS = [
  // Adaptogens & Energy
  'Ashwagandha', 'Rhodiola Rosea', 'Ginseng', 'Maca', 'Cordyceps', 'Reishi', 'Chaga', 'Lion\'s Mane',
  // Calming & Sleep
  'Chamomile', 'Lavender', 'Valerian Root', 'Passionflower', 'Lemon Balm', 'Skullcap', 'California Poppy',
  // Anti-inflammatory
  'Turmeric', 'Ginger', 'Boswellia', 'White Willow', 'Devil\'s Claw', 'Arnica', 'Bromelain',
  // Digestive
  'Peppermint', 'Fennel', 'Slippery Elm', 'Marshmallow Root', 'Dandelion', 'Milk Thistle', 'Artichoke',
  // Immune Support
  'Echinacea', 'Elderberry', 'Astragalus', 'Andrographis', 'Oregano Oil', 'Garlic', 'Propolis',
  // Cognitive & Focus
  'Bacopa Monnieri', 'Ginkgo Biloba', 'Gotu Kola', 'Alpha GPC', 'L-Theanine', 'Phosphatidylserine',
  // Hormone Balance
  'Vitex', 'Black Cohosh', 'Red Clover', 'Dong Quai', 'Evening Primrose', 'Shatavari', 'Tribulus',
  // Pain & Recovery
  'CBD', 'Kava', 'Kratom', 'Willow Bark', 'Capsaicin', 'Comfrey', 'St. John\'s Wort',
  // Skin & Beauty
  'Aloe Vera', 'Tea Tree', 'Calendula', 'Witch Hazel', 'Rosehip', 'Jojoba', 'Argan Oil',
  // Detox & Cleansing
  'Burdock Root', 'Yellow Dock', 'Cascara Sagrada', 'Psyllium', 'Bentonite Clay', 'Activated Charcoal'
];

const PLANT_DATA = {
  'Ashwagandha': {
    latinName: 'Withania somnifera',
    essence: 'The ancient adaptogen that helps your body dance with stress',
    benefits: ['Reduces cortisol levels', 'Improves energy and stamina', 'Supports restful sleep', 'Enhances cognitive function', 'Boosts immune system'],
    tags: ['adaptogen', 'ayurvedic', 'stress-relief', 'energy'],
    preparation: {
      tea: { grams: '1-2g', waterMl: '250ml', minutes: '10-15', perDay: '1-2 cups', notes: 'Best with warm milk and honey' },
      tincture: { ratio: '1:5', drops: '30-60', timesPerDay: '2-3 times', notes: 'Take with meals' },
      capsule: { mg: '300-600', timesPerDay: '1-2 times' }
    },
    safety: ['Avoid during pregnancy', 'May interact with thyroid medications', 'Start with low dose'],
    energetics: { taste: ['bitter', 'astringent'], temperature: 'warming', actions: ['adaptogen', 'nervine', 'tonic'] }
  },
  'Chamomile': {
    latinName: 'Matricaria chamomilla',
    essence: 'The gentle whisper of calm in a chaotic world',
    benefits: ['Promotes relaxation and sleep', 'Soothes digestive discomfort', 'Reduces anxiety', 'Supports skin health', 'Anti-inflammatory properties'],
    tags: ['calming', 'sleep', 'digestive', 'gentle'],
    preparation: {
      tea: { grams: '2-3g', waterMl: '250ml', minutes: '5-10', perDay: '2-3 cups', notes: 'Steep covered to preserve volatile oils' },
      tincture: { ratio: '1:5', drops: '30-60', timesPerDay: '3 times', notes: 'Best before meals' }
    },
    safety: ['Generally safe', 'May cause drowsiness', 'Avoid if allergic to ragweed'],
    energetics: { taste: ['sweet', 'slightly bitter'], temperature: 'cooling', actions: ['nervine', 'carminative', 'anti-inflammatory'] }
  },
  'Turmeric': {
    latinName: 'Curcuma longa',
    essence: 'The golden spice that turns inflammation into wisdom',
    benefits: ['Powerful anti-inflammatory', 'Supports joint health', 'Boosts brain function', 'Improves digestion', 'Antioxidant protection'],
    tags: ['anti-inflammatory', 'spice', 'healing', 'antioxidant'],
    preparation: {
      tea: { grams: '1-2g', waterMl: '250ml', minutes: '10', perDay: '1-2 cups', notes: 'Add black pepper for absorption' },
      capsule: { mg: '500-1000', timesPerDay: '2-3 times' },
      topical: 'Mix with coconut oil for skin application'
    },
    safety: ['May thin blood', 'Avoid before surgery', 'May cause stomach upset'],
    energetics: { taste: ['pungent', 'bitter'], temperature: 'warming', actions: ['anti-inflammatory', 'carminative', 'hepatic'] }
  },
  'Lavender': {
    latinName: 'Lavandula angustifolia',
    essence: 'The purple peace that soothes the restless soul',
    benefits: ['Promotes relaxation and sleep', 'Reduces anxiety and stress', 'Supports skin healing', 'Relieves headaches', 'Antimicrobial properties'],
    tags: ['calming', 'sleep', 'aromatic', 'skin'],
    preparation: {
      tea: { grams: '1-2g', waterMl: '250ml', minutes: '5-8', perDay: '1-2 cups', notes: 'Use fresh or dried flowers' },
      essential: { drops: '2-4', method: 'diffuser or topical', notes: 'Dilute with carrier oil' }
    },
    safety: ['Generally safe', 'May cause drowsiness', 'Avoid during early pregnancy'],
    energetics: { taste: ['sweet', 'floral'], temperature: 'cooling', actions: ['nervine', 'carminative', 'antiseptic'] }
  },
  'Ginger': {
    latinName: 'Zingiber officinale',
    essence: 'The fiery root that ignites your inner warmth',
    benefits: ['Relieves nausea and motion sickness', 'Supports digestion', 'Reduces inflammation', 'Boosts circulation', 'Immune support'],
    tags: ['warming', 'digestive', 'anti-inflammatory', 'circulatory'],
    preparation: {
      tea: { grams: '2-3g', waterMl: '250ml', minutes: '10-15', perDay: '2-3 cups', notes: 'Use fresh root for best results' },
      tincture: { ratio: '1:5', drops: '20-40', timesPerDay: '3 times', notes: 'Take before meals' }
    },
    safety: ['May thin blood', 'Avoid with gallstones', 'May cause heartburn'],
    energetics: { taste: ['pungent', 'sweet'], temperature: 'warming', actions: ['carminative', 'diaphoretic', 'anti-emetic'] }
  }
};

export async function POST(request: NextRequest) {
  try {
    const { plantName } = await request.json();
    
    if (!plantName) {
      return NextResponse.json({ error: 'Plant name is required' }, { status: 400 });
    }

    // Check if plant already exists
    const existingPlant = await client.fetch(
      `*[_type == "plant" && commonName == $plantName][0]`,
      { plantName }
    );

    if (existingPlant) {
      return NextResponse.json({ 
        message: 'Plant already exists', 
        plant: existingPlant 
      });
    }

    // Get plant data or generate with AI
    let plantData = PLANT_DATA[plantName as keyof typeof PLANT_DATA];
    
    if (!plantData) {
      // Generate with AI (placeholder for now)
      plantData = {
        latinName: `${plantName} spp.`,
        essence: `The ${plantName.toLowerCase()} that brings balance and healing`,
        benefits: ['Traditional healing properties', 'Natural wellness support', 'Holistic health benefits'],
        tags: ['traditional', 'healing', 'wellness'],
        preparation: {
          tea: { grams: '1-2g', waterMl: '250ml', minutes: '10', perDay: '1-2 cups', notes: 'Traditional preparation method' }
        } as any, // eslint-disable-line @typescript-eslint/no-explicit-any
        safety: ['Consult healthcare provider', 'Start with low dose'],
        energetics: { taste: ['traditional'], temperature: 'neutral', actions: ['healing'] }
      };
    }

    // Create slug
    const slug = plantName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

    // Create plant document
    const plantDoc = {
      _type: 'plant',
      commonName: plantName,
      latinName: plantData.latinName,
      slug: { current: slug },
      essence: plantData.essence,
      tags: plantData.tags,
      benefits: plantData.benefits,
      preparation: plantData.preparation,
      safety: plantData.safety,
      energetics: plantData.energetics,
      seoTitle: `${plantName} - Natural Healing Properties & Benefits | Plantich`,
      seoDescription: `Discover the healing properties of ${plantName}. Learn about traditional uses, preparation methods, and health benefits of this powerful medicinal plant.`
    };

    // Insert into Sanity
    const result = await client.create(plantDoc);

    return NextResponse.json({ 
      message: 'Plant created successfully', 
      plant: result 
    });

  } catch (error) {
    console.error('Error generating plant:', error);
    return NextResponse.json({ 
      error: 'Failed to generate plant' 
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Return list of top searched plants
    return NextResponse.json({ 
      plants: TOP_SEARCHED_PLANTS,
      message: 'Top searched plants retrieved successfully'
    });
  } catch (error) {
    console.error('Error getting plants:', error);
    return NextResponse.json({ 
      error: 'Failed to get plants' 
    }, { status: 500 });
  }
}
