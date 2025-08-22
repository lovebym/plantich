const fs = require('fs');
const path = require('path');

// Function to get all remedy files
function getRemedyFiles() {
  const remediesDir = path.join(__dirname, '../src/content/remedies');
  const files = fs.readdirSync(remediesDir);
  return files
    .filter(file => file.endsWith('.ts'))
    .map(file => file.replace('.ts', ''));
}

// Function to get all plant files
function getPlantFiles() {
  const plantsDir = path.join(__dirname, '../src/content/plants');
  const files = fs.readdirSync(plantsDir);
  return files
    .filter(file => file.endsWith('.ts'))
    .map(file => file.replace('.ts', ''));
}

// Function to generate import statements
function generateImports(files, type) {
  return files.map(file => {
    const camelCase = file.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    return `import ${camelCase}${type} from './${type}s/${file}';`;
  }).join('\n');
}

// Function to generate array entries
function generateArrayEntries(files, type) {
  return files.map(file => {
    const camelCase = file.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    return `  ${camelCase}${type},`;
  }).join('\n');
}

// Function to update the index file
function updateIndex() {
  const indexPath = path.join(__dirname, '../src/content/index.ts');
  const currentContent = fs.readFileSync(indexPath, 'utf8');
  
  // Get all files
  const remedyFiles = getRemedyFiles();
  const plantFiles = getPlantFiles();
  
  // Generate new imports
  const plantImports = generateImports(plantFiles, '');
  const remedyImports = generateImports(remedyFiles, 'Remedy');
  
  // Generate new arrays
  const plantArray = generateArrayEntries(plantFiles, '');
  const remedyArray = generateArrayEntries(remedyFiles, 'Remedy');
  
  // Create new content
  const newContent = `// Central index for all content with utility functions
import { Plant, Remedy, PlantRemedyMap, RemedyPlantMap } from './types';

// Import all plants
${plantImports}

// Import all remedies
${remedyImports}

// Exported collections
export const allPlants: Plant[] = [
${plantArray}
];

export const allRemedies: Remedy[] = [
${remedyArray}
];

// Utility functions
export function getPlantBySlug(slug: string): Plant | undefined {
  return allPlants.find(plant => plant.slug === slug);
}

export function getRemedyBySlug(slug: string): Remedy | undefined {
  return allRemedies.find(remedy => remedy.slug === slug);
}

export function getPlantsForRemedy(conditionName: string): Plant[] {
  const remedy = allRemedies.find(r => r.condition === conditionName);
  if (!remedy) return [];
  
  return allPlants.filter(plant => 
    remedy.herbs.includes(plant.name)
  );
}

export function getRemediesForPlant(plantName: string): Remedy[] {
  const plant = allPlants.find(p => p.name === plantName);
  if (!plant) return [];
  
  return allRemedies.filter(remedy => 
    plant.uses.some(use => remedy.condition === use)
  );
}

export function searchPlants(query: string): Plant[] {
  const lowercaseQuery = query.toLowerCase();
  return allPlants.filter(plant => 
    plant.name.toLowerCase().includes(lowercaseQuery) ||
    plant.latin.toLowerCase().includes(lowercaseQuery) ||
    plant.description.toLowerCase().includes(lowercaseQuery) ||
    plant.uses.some(use => use.toLowerCase().includes(lowercaseQuery))
  );
}

export function searchRemedies(query: string): Remedy[] {
  const lowercaseQuery = query.toLowerCase();
  return allRemedies.filter(remedy => 
    remedy.condition.toLowerCase().includes(lowercaseQuery) ||
    remedy.description.toLowerCase().includes(lowercaseQuery) ||
    remedy.herbs.some(herb => herb.toLowerCase().includes(lowercaseQuery))
  );
}

export function getPlantsByCategory(category: 'Mind' | 'Body' | 'Spirit'): Plant[] {
  return allPlants.filter(plant => plant.category === category);
}

export function getRemediesByCategory(category: 'Mind' | 'Body' | 'Spirit'): Remedy[] {
  return allRemedies.filter(remedy => remedy.category === category);
}

// Generate relationship maps
export function generatePlantRemedyMap(): PlantRemedyMap {
  const map: PlantRemedyMap = {};
  
  allPlants.forEach(plant => {
    map[plant.name] = plant.uses;
  });
  
  return map;
}

export function generateRemedyPlantMap(): RemedyPlantMap {
  const map: RemedyPlantMap = {};
  
  allRemedies.forEach(remedy => {
    map[remedy.condition] = remedy.herbs;
  });
  
  return map;
}
`;

  // Write the new content
  fs.writeFileSync(indexPath, newContent);
  
  console.log(`Updated index.ts with:`);
  console.log(`- ${plantFiles.length} plants`);
  console.log(`- ${remedyFiles.length} remedies`);
}

// Run the update
updateIndex();
