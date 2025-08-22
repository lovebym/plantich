const fs = require('fs');
const path = require('path');

// Import the top 100 data
const { top100Plants } = require('../src/content/top-100-remedies.ts');

// Generate slug from plant name
function generateSlug(name) {
  return name.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Generate description for plant
function generateDescription(name, category) {
  const descriptions = {
    'Mind': `A traditional herb used for mental wellness and cognitive support. ${name} has been valued for its calming and focus-enhancing properties.`,
    'Body': `A powerful herbal remedy known for its physical health benefits. ${name} supports various bodily systems and promotes overall wellness.`
  };
  return descriptions[category] || `A traditional herbal remedy with multiple health benefits. ${name} has been used for centuries in natural medicine.`;
}

// Generate preparation instructions
function generatePreparation(name, category) {
  const preparations = {
    'Mind': `Available as tea, tincture, capsules, or essential oil. Can be taken daily for consistent support.`,
    'Body': `Available as capsules, tea, tincture, or powder. Take as directed for optimal results.`
  };
  return preparations[category] || `Available in various forms including capsules, tea, and tincture. Follow dosage recommendations.`;
}

// Generate uses for plant
function generateUses(name, category) {
  const baseUses = {
    'Mind': ['Mental Clarity', 'Stress Support', 'Focus & Concentration'],
    'Body': ['Immune Support', 'Energy Boost', 'Digestive Health']
  };
  
  const uses = baseUses[category] || ['General Wellness', 'Health Support', 'Natural Healing'];
  return uses;
}

// Generate plant file content
function generatePlantFile(plant) {
  const slug = generateSlug(plant.name);
  const description = generateDescription(plant.name, plant.category);
  const preparation = generatePreparation(plant.name, plant.category);
  const uses = generateUses(plant.name, plant.category);
  
  return `import { Plant } from '../types';

const ${slug.replace(/-/g, '')}: Plant = {
  name: "${plant.name}",
  latin: "${plant.latin}",
  slug: "${slug}",
  uses: ${JSON.stringify(uses)},
  description: "${description}",
  preparation: "${preparation}",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(plant.name)}" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-${slug}" }
  ],
  category: "${plant.category}",
};

export default ${slug.replace(/-/g, '')};
`;
}

// Main function to generate all plant files
function generateAllPlants() {
  const plantsDir = path.join(__dirname, '../src/content/plants');
  
  // Ensure directory exists
  if (!fs.existsSync(plantsDir)) {
    fs.mkdirSync(plantsDir, { recursive: true });
  }

  let generatedCount = 0;
  let skippedCount = 0;

  top100Plants.forEach(plant => {
    const slug = generateSlug(plant.name);
    const filePath = path.join(plantsDir, `${slug}.ts`);
    
    // Check if file already exists
    if (fs.existsSync(filePath)) {
      console.log(`Skipping ${slug}.ts (already exists)`);
      skippedCount++;
      return;
    }

    // Generate file content
    const content = generatePlantFile(plant);
    
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
generateAllPlants();
