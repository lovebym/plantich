const fs = require('fs');
const path = require('path');

// Import the top 100 data
const { top100Remedies, top100Plants } = require('../src/content/top-100-remedies.ts');

// Herbal recommendations for each condition category
const herbalRecommendations = {
  // Mental Health
  'anxiety': ['ashwagandha', 'passionflower', 'lemon-balm', 'chamomile', 'lavender'],
  'depression': ['st-johns-wort', 'ashwagandha', 'rhodiola', 'saffron', 'omega-3'],
  'stress': ['ashwagandha', 'rhodiola', 'holy-basil', 'ginseng', 'reishi'],
  'insomnia': ['valerian-root', 'passionflower', 'chamomile', 'lavender', 'lemon-balm'],
  'adhd': ['bacopa', 'ginkgo-biloba', 'lions-mane', 'rhodiola', 'omega-3'],
  'focus-concentration': ['bacopa', 'ginkgo-biloba', 'lions-mane', 'rhodiola', 'gotu-kola'],
  'memory-issues': ['bacopa', 'ginkgo-biloba', 'lions-mane', 'ashwagandha', 'omega-3'],
  'brain-fog': ['bacopa', 'ginkgo-biloba', 'lions-mane', 'rhodiola', 'ashwagandha'],
  'ptsd': ['ashwagandha', 'passionflower', 'skullcap', 'valerian-root', 'reishi'],
  'mood-swings': ['st-johns-wort', 'ashwagandha', 'chasteberry', 'omega-3', 'vitamin-d'],
  'mental-clarity': ['bacopa', 'ginkgo-biloba', 'lions-mane', 'rhodiola', 'ashwagandha'],
  'cognitive-decline': ['bacopa', 'ginkgo-biloba', 'lions-mane', 'ashwagandha', 'omega-3'],
  'nervousness': ['passionflower', 'lemon-balm', 'chamomile', 'lavender', 'skullcap'],
  'panic-attacks': ['passionflower', 'skullcap', 'valerian-root', 'lemon-balm', 'chamomile'],
  'ocd': ['st-johns-wort', 'passionflower', 'ashwagandha', 'inositol', 'omega-3'],
  'bipolar-disorder': ['omega-3', 'magnesium', 'vitamin-d', 'ashwagandha', 'reishi'],
  'seasonal-depression': ['st-johns-wort', 'vitamin-d', 'omega-3', 'rhodiola', 'ashwagandha'],
  'social-anxiety': ['ashwagandha', 'passionflower', 'lemon-balm', 'rhodiola', 'l-theanine'],
  'mental-fatigue': ['rhodiola', 'ashwagandha', 'ginseng', 'cordyceps', 'maca'],
  'emotional-balance': ['ashwagandha', 'st-johns-wort', 'passionflower', 'omega-3', 'reishi'],

  // Energy & Vitality
  'fatigue': ['rhodiola', 'ashwagandha', 'ginseng', 'cordyceps', 'maca'],
  'low-energy': ['rhodiola', 'ashwagandha', 'ginseng', 'cordyceps', 'maca'],
  'chronic-fatigue': ['rhodiola', 'ashwagandha', 'ginseng', 'cordyceps', 'reishi'],
  'adrenal-fatigue': ['rhodiola', 'ashwagandha', 'holy-basil', 'licorice-root', 'vitamin-c'],
  'burnout': ['rhodiola', 'ashwagandha', 'holy-basil', 'reishi', 'vitamin-b-complex'],
  'weakness': ['rhodiola', 'ashwagandha', 'ginseng', 'maca', 'vitamin-d'],
  'lethargy': ['rhodiola', 'ashwagandha', 'ginseng', 'cordyceps', 'green-tea'],
  'physical-exhaustion': ['rhodiola', 'ashwagandha', 'ginseng', 'cordyceps', 'maca'],
  'low-stamina': ['rhodiola', 'cordyceps', 'ginseng', 'maca', 'ashwagandha'],
  'recovery-support': ['rhodiola', 'ashwagandha', 'reishi', 'cordyceps', 'protein'],
  'post-exercise-fatigue': ['rhodiola', 'cordyceps', 'ashwagandha', 'protein', 'electrolytes'],
  'morning-fatigue': ['rhodiola', 'ginseng', 'cordyceps', 'green-tea', 'vitamin-d'],
  'afternoon-slump': ['rhodiola', 'green-tea', 'ginseng', 'cordyceps', 'protein'],
  'energy-boost': ['rhodiola', 'ashwagandha', 'ginseng', 'cordyceps', 'maca'],
  'vitality-support': ['rhodiola', 'ashwagandha', 'ginseng', 'reishi', 'maca'],

  // Digestive Health
  'digestive-issues': ['ginger', 'peppermint', 'chamomile', 'fennel', 'marshmallow-root'],
  'ibs': ['peppermint', 'chamomile', 'ginger', 'fennel', 'marshmallow-root'],
  'bloating': ['peppermint', 'fennel', 'ginger', 'chamomile', 'activated-charcoal'],
  'constipation': ['senna', 'psyllium', 'aloe-vera', 'triphala', 'magnesium'],
  'diarrhea': ['black-tea', 'ginger', 'chamomile', 'activated-charcoal', 'probiotics'],
  'acid-reflux': ['marshmallow-root', 'slippery-elm', 'licorice-root', 'ginger', 'chamomile'],
  'gut-health': ['probiotics', 'prebiotics', 'ginger', 'chamomile', 'marshmallow-root'],
  'nausea': ['ginger', 'peppermint', 'chamomile', 'fennel', 'lemon'],
  'stomach-pain': ['chamomile', 'ginger', 'peppermint', 'marshmallow-root', 'licorice-root'],
  'food-intolerance': ['quercetin', 'bromelain', 'ginger', 'probiotics', 'digestive-enzymes'],
  'leaky-gut': ['l-glutamine', 'probiotics', 'marshmallow-root', 'slippery-elm', 'licorice-root'],
  'gastritis': ['marshmallow-root', 'slippery-elm', 'licorice-root', 'chamomile', 'ginger'],
  'ulcer-support': ['marshmallow-root', 'slippery-elm', 'licorice-root', 'chamomile', 'aloe-vera'],
  'digestive-enzymes': ['bromelain', 'papain', 'ginger', 'fennel', 'peppermint'],
  'microbiome-support': ['probiotics', 'prebiotics', 'ginger', 'chamomile', 'fermented-foods'],

  // Immune System
  'immune-support': ['echinacea', 'elderberry', 'astragalus', 'reishi', 'vitamin-c'],
  'immune-boost': ['echinacea', 'elderberry', 'astragalus', 'reishi', 'vitamin-c'],
  'cold-prevention': ['echinacea', 'elderberry', 'astragalus', 'vitamin-c', 'zinc'],
  'flu-prevention': ['elderberry', 'echinacea', 'astragalus', 'reishi', 'vitamin-d'],
  'viral-infections': ['elderberry', 'echinacea', 'astragalus', 'reishi', 'vitamin-c'],
  'bacterial-infections': ['garlic', 'oregano', 'echinacea', 'astragalus', 'vitamin-c'],
  'recovery-from-illness': ['astragalus', 'reishi', 'vitamin-c', 'zinc', 'probiotics'],
  'seasonal-immunity': ['astragalus', 'reishi', 'vitamin-d', 'zinc', 'elderberry'],
  'autoimmune-support': ['reishi', 'turmeric', 'omega-3', 'vitamin-d', 'probiotics'],
  'inflammation': ['turmeric', 'ginger', 'boswellia', 'omega-3', 'quercetin'],

  // Pain & Inflammation
  'joint-pain': ['turmeric', 'ginger', 'boswellia', 'willow-bark', 'omega-3'],
  'arthritis': ['turmeric', 'ginger', 'boswellia', 'willow-bark', 'omega-3'],
  'back-pain': ['turmeric', 'ginger', 'willow-bark', 'boswellia', 'magnesium'],
  'neck-pain': ['turmeric', 'ginger', 'willow-bark', 'magnesium', 'omega-3'],
  'muscle-pain': ['turmeric', 'ginger', 'willow-bark', 'magnesium', 'arnica'],
  'headache': ['feverfew', 'ginger', 'willow-bark', 'peppermint', 'magnesium'],
  'migraine': ['feverfew', 'ginger', 'butterbur', 'magnesium', 'riboflavin'],
  'chronic-pain': ['turmeric', 'ginger', 'willow-bark', 'omega-3', 'magnesium'],
  'fibromyalgia': ['turmeric', 'ginger', 'magnesium', 'omega-3', 'vitamin-d'],
  'inflammatory-conditions': ['turmeric', 'ginger', 'boswellia', 'omega-3', 'quercetin'],

  // Hormonal Health
  'hormone-balance': ['maca', 'ashwagandha', 'holy-basil', 'chasteberry', 'black-seed'],
  'pms': ['chasteberry', 'evening-primrose-oil', 'maca', 'red-clover', 'dong-quai'],
  'menopause-symptoms': ['black-cohosh', 'red-clover', 'dong-quai', 'wild-yam', 'soy'],
  'pcos': ['chasteberry', 'maca', 'cinnamon', 'inositol', 'vitamin-d'],
  'thyroid-support': ['ashwagandha', 'selenium', 'zinc', 'vitamin-d', 'iodine'],
  'adrenal-support': ['ashwagandha', 'holy-basil', 'licorice-root', 'rhodiola', 'vitamin-c'],
  'testosterone-support': ['tribulus', 'maca', 'ashwagandha', 'zinc', 'vitamin-d'],
  'estrogen-balance': ['red-clover', 'dong-quai', 'black-cohosh', 'soy', 'flaxseed'],
  'fertility-support': ['maca', 'chasteberry', 'ashwagandha', 'vitamin-d', 'omega-3'],
  'endocrine-health': ['ashwagandha', 'holy-basil', 'maca', 'vitamin-d', 'omega-3'],

  // Cardiovascular
  'heart-health': ['garlic', 'hawthorn', 'ginger', 'turmeric', 'green-tea'],
  'high-blood-pressure': ['hawthorn', 'garlic', 'cinnamon', 'hibiscus', 'olive-leaf'],
  'high-cholesterol': ['garlic', 'artichoke', 'red-yeast-rice', 'omega-3', 'plant-sterols'],
  'circulation': ['ginger', 'cayenne', 'ginkgo-biloba', 'garlic', 'hawthorn'],
  'cardiovascular-support': ['hawthorn', 'garlic', 'ginger', 'turmeric', 'omega-3'],
  'blood-sugar-balance': ['cinnamon', 'fenugreek', 'ginseng', 'bitter-melon', 'chromium'],
  'diabetes-support': ['cinnamon', 'fenugreek', 'ginseng', 'bitter-melon', 'chromium'],
  'metabolic-health': ['cinnamon', 'ginger', 'turmeric', 'green-tea', 'omega-3'],

  // Skin Health
  'acne': ['tea-tree', 'aloe-vera', 'calendula', 'zinc', 'vitamin-a'],
  'eczema': ['aloe-vera', 'calendula', 'chamomile', 'colloidal-oatmeal', 'vitamin-e'],
  'psoriasis': ['aloe-vera', 'tea-tree', 'turmeric', 'vitamin-d', 'omega-3'],
  'skin-aging': ['vitamin-c', 'vitamin-e', 'collagen', 'hyaluronic-acid', 'retinol'],
  'skin-inflammation': ['aloe-vera', 'calendula', 'chamomile', 'turmeric', 'tea-tree'],
  'hair-loss': ['saw-palmetto', 'biotin', 'zinc', 'iron', 'vitamin-d'],
  'skin-health': ['vitamin-c', 'vitamin-e', 'collagen', 'hyaluronic-acid', 'omega-3'],

  // Respiratory
  'asthma': ['ginger', 'turmeric', 'honey', 'vitamin-d', 'magnesium'],
  'allergies': ['quercetin', 'nettle', 'butterbur', 'vitamin-c', 'probiotics'],
  'sinus-issues': ['ginger', 'turmeric', 'peppermint', 'eucalyptus', 'vitamin-c'],
  'cough': ['honey', 'ginger', 'thyme', 'marshmallow-root', 'vitamin-c'],
  'respiratory-support': ['ginger', 'turmeric', 'eucalyptus', 'peppermint', 'vitamin-c'],

  // Detox & Cleansing
  'detox': ['milk-thistle', 'dandelion-root', 'burdock-root', 'nettle', 'turmeric'],
  'liver-detox': ['milk-thistle', 'dandelion-root', 'burdock-root', 'turmeric', 'artichoke'],
  'kidney-health': ['nettle', 'dandelion-root', 'cranberry', 'vitamin-c', 'magnesium'],
  'toxin-removal': ['milk-thistle', 'dandelion-root', 'burdock-root', 'chlorella', 'spirulina'],
  'cleansing-support': ['milk-thistle', 'dandelion-root', 'burdock-root', 'nettle', 'turmeric'],

  // Sleep & Recovery
  'sleep-support': ['valerian-root', 'passionflower', 'chamomile', 'lavender', 'lemon-balm'],
  'sleep-apnea': ['valerian-root', 'passionflower', 'magnesium', 'vitamin-d', 'weight-management'],
  'restless-sleep': ['valerian-root', 'passionflower', 'chamomile', 'magnesium', 'melatonin'],
  'sleep-quality': ['valerian-root', 'passionflower', 'chamomile', 'magnesium', 'l-theanine'],
  'recovery-sleep': ['valerian-root', 'passionflower', 'magnesium', 'melatonin', 'l-theanine']
};

// Generate slug from condition name
function generateSlug(condition) {
  return condition.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Generate description for condition
function generateDescription(condition, category) {
  const descriptions = {
    'Mind': `Support for ${condition.toLowerCase()} through natural herbal remedies that promote mental wellness and emotional balance.`,
    'Body': `Natural support for ${condition.toLowerCase()} using traditional herbal medicine and modern wellness approaches.`
  };
  return descriptions[category] || `Herbal support for ${condition.toLowerCase()} using traditional and evidence-based natural remedies.`;
}

// Generate approach for condition
function generateApproach(condition, herbs) {
  const herbList = herbs.slice(0, 3).join(', ');
  return `Combine ${herbList} with lifestyle changes including proper nutrition, stress management, and adequate rest. Consult healthcare providers for personalized guidance.`;
}

// Generate remedy file content
function generateRemedyFile(condition, category, herbs) {
  const slug = generateSlug(condition);
  const description = generateDescription(condition, category);
  const approach = generateApproach(condition, herbs);
  
  return `import { Remedy } from '../types';

const ${slug.replace(/-/g, '')}Remedy: Remedy = {
  condition: "${condition}",
  slug: "${slug}",
  description:
    "${description}",
  herbs: ${JSON.stringify(herbs.map(h => h.charAt(0).toUpperCase() + h.slice(1).replace(/-/g, ' ')))},
  approach:
    "${approach}",
  category: "${category}",
};

export default ${slug.replace(/-/g, '')}Remedy;
`;
}

// Main function to generate all remedy files
function generateAllRemedies() {
  const remediesDir = path.join(__dirname, '../src/content/remedies');
  
  // Ensure directory exists
  if (!fs.existsSync(remediesDir)) {
    fs.mkdirSync(remediesDir, { recursive: true });
  }

  let generatedCount = 0;
  let skippedCount = 0;

  top100Remedies.forEach(remedy => {
    const slug = generateSlug(remedy.condition);
    const filePath = path.join(remediesDir, `${slug}.ts`);
    
    // Check if file already exists
    if (fs.existsSync(filePath)) {
      console.log(`Skipping ${slug}.ts (already exists)`);
      skippedCount++;
      return;
    }

    // Get herbs for this condition
    const herbs = herbalRecommendations[slug] || ['ashwagandha', 'ginger', 'turmeric'];
    
    // Generate file content
    const content = generateRemedyFile(remedy.condition, remedy.category, herbs);
    
    // Write file
    fs.writeFileSync(filePath, content);
    console.log(`Generated ${slug}.ts`);
    generatedCount++;
  });

  console.log(`\nGeneration complete!`);
  console.log(`Generated: ${generatedCount} files`);
  console.log(`Skipped: ${skippedCount} files (already exist)`);
}

// Run the generator
generateAllRemedies();
