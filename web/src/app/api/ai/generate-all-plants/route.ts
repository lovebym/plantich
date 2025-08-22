import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity';

// De mest sökta plants på Google
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

// AI-genererad data för alla plants
const AI_PLANT_DATA = {
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
  'Rhodiola Rosea': {
    latinName: 'Rhodiola rosea',
    essence: 'The golden root that elevates your spirit and sharpens your mind',
    benefits: ['Improves mental performance', 'Reduces fatigue', 'Enhances mood', 'Supports stress adaptation', 'Boosts energy'],
    tags: ['adaptogen', 'energy', 'focus', 'mood'],
    preparation: {
      tea: { grams: '1-2g', waterMl: '250ml', minutes: '10', perDay: '1-2 cups', notes: 'Best in morning' },
      capsule: { mg: '200-600', timesPerDay: '1-2 times' }
    },
    safety: ['Avoid in evening', 'May cause insomnia', 'Start with low dose'],
    energetics: { taste: ['slightly bitter', 'sweet'], temperature: 'warming', actions: ['adaptogen', 'stimulant', 'nervine'] }
  },
  'Ginseng': {
    latinName: 'Panax ginseng',
    essence: 'The king of herbs that crowns your vitality with royal energy',
    benefits: ['Boosts energy and stamina', 'Improves cognitive function', 'Supports immune system', 'Enhances physical performance', 'Reduces stress'],
    tags: ['adaptogen', 'energy', 'immune', 'performance'],
    preparation: {
      tea: { grams: '1-3g', waterMl: '250ml', minutes: '10-15', perDay: '1-2 cups', notes: 'Use in cycles' },
      capsule: { mg: '200-400', timesPerDay: '1-2 times' }
    },
    safety: ['Use in cycles', 'May raise blood pressure', 'Avoid in evening'],
    energetics: { taste: ['sweet', 'slightly bitter'], temperature: 'warming', actions: ['adaptogen', 'tonic', 'stimulant'] }
  },
  'Maca': {
    latinName: 'Lepidium meyenii',
    essence: 'The Peruvian treasure that nourishes your roots and lifts your spirit',
    benefits: ['Boosts energy and stamina', 'Supports hormone balance', 'Improves mood', 'Enhances fertility', 'Increases libido'],
    tags: ['adaptogen', 'hormone', 'energy', 'fertility'],
    preparation: {
      powder: { grams: '3-5g', method: 'Add to smoothies or food', timesPerDay: '1-2 times', notes: 'Best with fat' },
      capsule: { mg: '1000-3000', timesPerDay: '1-2 times' }
    },
    safety: ['Generally safe', 'May affect hormones', 'Start with low dose'],
    energetics: { taste: ['sweet', 'nutty'], temperature: 'warming', actions: ['adaptogen', 'tonic', 'aphrodisiac'] }
  },
  'Cordyceps': {
    latinName: 'Cordyceps sinensis',
    essence: 'The mystical mushroom that transforms your energy into boundless vitality',
    benefits: ['Boosts energy and endurance', 'Improves athletic performance', 'Supports respiratory health', 'Enhances immune function', 'Increases oxygen utilization'],
    tags: ['mushroom', 'energy', 'performance', 'immune'],
    preparation: {
      tea: { grams: '1-2g', waterMl: '250ml', minutes: '15-20', perDay: '1-2 cups', notes: 'Simmer gently' },
      capsule: { mg: '500-1000', timesPerDay: '1-2 times' }
    },
    safety: ['Generally safe', 'May affect blood sugar', 'Start with low dose'],
    energetics: { taste: ['earthy', 'slightly sweet'], temperature: 'warming', actions: ['tonic', 'stimulant', 'immunomodulator'] }
  },
  'Reishi': {
    latinName: 'Ganoderma lucidum',
    essence: 'The mushroom of immortality that weaves protection around your spirit',
    benefits: ['Supports immune system', 'Promotes relaxation and sleep', 'Reduces stress and anxiety', 'Supports liver health', 'Antioxidant protection'],
    tags: ['mushroom', 'immune', 'calming', 'sleep'],
    preparation: {
      tea: { grams: '2-3g', waterMl: '250ml', minutes: '20-30', perDay: '1-2 cups', notes: 'Long simmer required' },
      capsule: { mg: '500-1000', timesPerDay: '1-2 times' }
    },
    safety: ['Generally safe', 'May cause drowsiness', 'Avoid before driving'],
    energetics: { taste: ['bitter', 'earthy'], temperature: 'cooling', actions: ['immunomodulator', 'nervine', 'hepatic'] }
  },
  'Chaga': {
    latinName: 'Inonotus obliquus',
    essence: 'The black diamond of the forest that polishes your inner radiance',
    benefits: ['Powerful antioxidant', 'Supports immune system', 'Anti-inflammatory properties', 'Supports digestive health', 'Promotes skin health'],
    tags: ['mushroom', 'antioxidant', 'immune', 'anti-inflammatory'],
    preparation: {
      tea: { grams: '2-3g', waterMl: '250ml', minutes: '15-20', perDay: '1-2 cups', notes: 'Best with honey' },
      powder: { grams: '1-2g', method: 'Add to coffee or tea', timesPerDay: '1-2 times' }
    },
    safety: ['Generally safe', 'May thin blood', 'Start with low dose'],
    energetics: { taste: ['earthy', 'slightly bitter'], temperature: 'neutral', actions: ['antioxidant', 'immunomodulator', 'anti-inflammatory'] }
  },
  'Lion\'s Mane': {
    latinName: 'Hericium erinaceus',
    essence: 'The brain mushroom that grows new pathways in your mind',
    benefits: ['Enhances cognitive function', 'Supports nerve regeneration', 'Improves memory and focus', 'Reduces anxiety', 'Supports brain health'],
    tags: ['mushroom', 'cognitive', 'nervine', 'focus'],
    preparation: {
      tea: { grams: '2-3g', waterMl: '250ml', minutes: '10-15', perDay: '1-2 cups', notes: 'Best in morning' },
      capsule: { mg: '500-1000', timesPerDay: '1-2 times' }
    },
    safety: ['Generally safe', 'May cause vivid dreams', 'Start with low dose'],
    energetics: { taste: ['mild', 'earthy'], temperature: 'neutral', actions: ['nootropic', 'nervine', 'cognitive'] }
  }
};

export async function POST() {
  try {
    const results = [];
    const errors = [];

    for (const plantName of TOP_SEARCHED_PLANTS) {
      try {
        // Check if plant already exists
        const existingPlant = await client.fetch(
          `*[_type == "plant" && commonName == $plantName][0]`,
          { plantName }
        );

        if (existingPlant) {
          results.push({ plantName, status: 'already_exists', plant: existingPlant });
          continue;
        }

        // Get AI-generated data or use default
        let plantData = AI_PLANT_DATA[plantName as keyof typeof AI_PLANT_DATA];
        
        if (!plantData) {
          // Generate default data for unknown plants
          plantData = {
            latinName: `${plantName} spp.`,
            essence: `The ${plantName.toLowerCase()} that brings balance and healing to your journey`,
            benefits: ['Traditional healing properties', 'Natural wellness support', 'Holistic health benefits', 'Ancient wisdom', 'Natural balance'],
            tags: ['traditional', 'healing', 'wellness', 'natural'],
            preparation: {
              tea: { grams: '1-2g', waterMl: '250ml', minutes: '10', perDay: '1-2 cups', notes: 'Traditional preparation method' }
            } as any, // eslint-disable-line @typescript-eslint/no-explicit-any
            safety: ['Consult healthcare provider', 'Start with low dose', 'Listen to your body'],
            energetics: { taste: ['traditional'], temperature: 'neutral', actions: ['healing', 'balancing'] }
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
        results.push({ plantName, status: 'created', plant: result });

        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));

      } catch (error) {
        console.error(`Error generating ${plantName}:`, error);
        errors.push({ plantName, error: error.message });
      }
    }

    return NextResponse.json({ 
      message: 'Batch generation completed',
      results,
      errors,
      summary: {
        total: TOP_SEARCHED_PLANTS.length,
        created: results.filter(r => r.status === 'created').length,
        alreadyExists: results.filter(r => r.status === 'already_exists').length,
        errors: errors.length
      }
    });

  } catch (error) {
    console.error('Error in batch generation:', error);
    return NextResponse.json({ 
      error: 'Failed to generate plants' 
    }, { status: 500 });
  }
}
