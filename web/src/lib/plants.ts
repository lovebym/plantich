// Dynamic plants loader for categorized structure
import { Plant } from './content-loader'

export function transformPlantForAI(plant: Plant) {
  return {
    name: plant.title,
    commonName: plant.title,
    latinName: plant.latinName,
    description: plant.description,
    preparation: plant.dosage || 'Not specified',
    sources: plant.references || [],
    uses: plant.uses,
    category: plant.category || 'General'
  }
}

// Legacy loader for backward compatibility
export const plants = Object.fromEntries(
  [] // Will be populated by content-loader
)

// Categorized plants for easy access
export const categorizedPlants = {
  mind: [] as Plant[],
  body: [] as Plant[],
  spirit: [] as Plant[]
}

// This function will be populated by content-loader
export function getPlantsByCategory(category: string): Plant[] {
  return categorizedPlants[category as keyof typeof categorizedPlants] || []
}
