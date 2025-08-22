// Dynamic plants loader for categorized structure
import { allPlants } from '@/content'

// Legacy loader for backward compatibility
export const plants = Object.fromEntries(
  allPlants.map(plant => [
    plant.slug,
    {
      slug: plant.slug,
      commonName: plant.name,
      latinName: plant.latin,
      description: plant.description,
      uses: plant.uses,
      preparation: plant.preparation,
      sources: plant.sources,
      category: plant.category || 'Body'
    }
  ])
)

// New categorized structure
export const categorizedPlants = {
  mind: allPlants.filter(p => p.category === 'Mind' || p.uses.some(use => use.toLowerCase().includes('anxiety') || use.toLowerCase().includes('depression') || use.toLowerCase().includes('stress') || use.toLowerCase().includes('sleep') || use.toLowerCase().includes('focus') || use.toLowerCase().includes('adhd'))),
  body: allPlants.filter(p => p.category === 'Body' || p.uses.some(use => use.toLowerCase().includes('pain') || use.toLowerCase().includes('inflammation') || use.toLowerCase().includes('joint') || use.toLowerCase().includes('muscle'))),
  immunity: allPlants.filter(p => p.uses.some(use => use.toLowerCase().includes('immune') || use.toLowerCase().includes('cold') || use.toLowerCase().includes('flu') || use.toLowerCase().includes('infection'))),
  skin: allPlants.filter(p => p.uses.some(use => use.toLowerCase().includes('skin') || use.toLowerCase().includes('acne') || use.toLowerCase().includes('eczema'))),
  digestion: allPlants.filter(p => p.uses.some(use => use.toLowerCase().includes('digest') || use.toLowerCase().includes('stomach') || use.toLowerCase().includes('gut') || use.toLowerCase().includes('bloating'))),
  energy: allPlants.filter(p => p.uses.some(use => use.toLowerCase().includes('energy') || use.toLowerCase().includes('fatigue') || use.toLowerCase().includes('tired'))),
  hormones: allPlants.filter(p => p.uses.some(use => use.toLowerCase().includes('hormone') || use.toLowerCase().includes('pms') || use.toLowerCase().includes('menopause') || use.toLowerCase().includes('thyroid'))),
  pain: allPlants.filter(p => p.uses.some(use => use.toLowerCase().includes('pain') || use.toLowerCase().includes('inflammation') || use.toLowerCase().includes('joint') || use.toLowerCase().includes('muscle'))),
  detox: allPlants.filter(p => p.uses.some(use => use.toLowerCase().includes('detox') || use.toLowerCase().includes('liver') || use.toLowerCase().includes('cleanse')))
}

// Helper function to get plants by category
export function getPlantsByCategory(category: string) {
  return categorizedPlants[category as keyof typeof categorizedPlants] || []
}

// Helper function to get all categories
export function getAllPlantCategories() {
  return Object.keys(categorizedPlants)
}

export default plants
