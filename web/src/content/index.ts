// Barrel file for content - prevents "not a module" errors
// Re-exports everything from content-loader for backward compatibility

export * from '../lib/content-loader'

// Also export specific items for direct access
export {
  allPlants,
  allRemedies,
  categories,
  getPlantBySlug,
  getRemedyBySlug,
  getPlantsByCategory,
  getRemediesByCategory,
  searchPlants,
  searchRemedies,
  getPlantsForRemedy,
  getRemediesForPlant,
  generateSitemapData
} from '../lib/content-loader'

// Export types
export type { Plant, Remedy, Category } from '../lib/content-loader'
