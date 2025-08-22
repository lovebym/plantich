#!/usr/bin/env node

/**
 * Generate all botanical illustration prompts for Plantich
 * Run this script to get all prompts ready for AI generation
 */

const fs = require('fs');
const path = require('path');

// Import the prompt generation functions
const { getAllPlantPrompts } = require('../lib/image-generation.ts');

function generatePromptFile() {
  console.log('🌿 Generating botanical illustration prompts...\n');

  try {
    const plants = getAllPlantPrompts();
    
    // Create prompts directory
    const promptsDir = path.join('prompts');
    if (!fs.existsSync(promptsDir)) {
      fs.mkdirSync(promptsDir, { recursive: true });
    }

    // Generate individual prompt files
    plants.forEach((plant) => {
      const fileName = `${plant.slug}-prompt.txt`;
      const filePath = path.join(promptsDir, fileName);
      
      const content = `Botanical Illustration Prompt for ${plant.slug}

${plant.prompt}

---
Instructions:
1. Use this prompt in your AI image generator (DALL-E, Midjourney, etc.)
2. Generate a high-resolution PNG image
3. Convert to SVG using Vectorizer.AI or Adobe Illustrator
4. Save as: /public/assets/plants/${plant.slug}.svg
5. Ensure white background and clean vector lines
`;

      fs.writeFileSync(filePath, content);
      console.log(`✅ Created: ${fileName}`);
    });

    // Generate a master prompt file
    const masterContent = `Plantich Botanical Illustration Prompts
Generated on: ${new Date().toISOString()}

${plants.map((plant, index) => `
${index + 1}. ${plant.slug.toUpperCase()}
${plant.prompt}
`).join('\n')}

---
Batch Generation Instructions:
1. Copy each prompt above
2. Generate images one by one in your AI tool
3. Convert all PNGs to SVG format
4. Save in /public/assets/plants/ directory
5. Use consistent naming: {slug}.svg
`;

    const masterPath = path.join(promptsDir, 'all-prompts.txt');
    fs.writeFileSync(masterPath, masterContent);
    console.log(`✅ Created: all-prompts.txt`);

    // Generate a JSON file for programmatic use
    const jsonPath = path.join(promptsDir, 'prompts.json');
    fs.writeFileSync(jsonPath, JSON.stringify(plants, null, 2));
    console.log(`✅ Created: prompts.json`);

    console.log(`\n🎉 Generated ${plants.length} botanical illustration prompts!`);
    console.log(`📁 Check the 'prompts' directory for all files`);
    console.log(`🌐 Visit /admin/illustrations for the web interface`);

  } catch (error) {
    console.error('❌ Error generating prompts:', error);
  }
}

// Run the generator
generatePromptFile();
