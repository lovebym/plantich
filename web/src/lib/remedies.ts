import { Remedy } from './content-loader'

export function transformRemedyForAI(remedy: Remedy) {
  return {
    name: remedy.title,
    description: remedy.description,
    herbs: remedy.plants,
    category: remedy.category,
    approach: remedy.approach || 'Not specified'
  }
}

// Categorized remedies for easy access
export const categorizedRemedies = {
  mind: [] as Remedy[],
  body: [] as Remedy[],
  spirit: [] as Remedy[]
}

// This function will be populated by content-loader
export function getRemediesByCategory(category: string): Remedy[] {
  return categorizedRemedies[category as keyof typeof categorizedRemedies] || []
}

// Get all categories
export function getAllCategories(): string[] {
  return Object.keys(categorizedRemedies)
}

// Legacy exports for backward compatibility
export const remedies = Object.fromEntries(
  [] // Will be populated by content-loader
)
