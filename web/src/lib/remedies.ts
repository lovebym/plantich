// Dynamic remedies loader for categorized structure
import { allRemedies } from '@/content'

// Legacy loader for backward compatibility
export const remedies = Object.fromEntries(
  allRemedies.map(remedy => [
    remedy.slug,
    {
      slug: remedy.slug,
      name: remedy.condition,
      category: remedy.category || 'Body',
      description: remedy.description,
      herbs: remedy.herbs,
      approach: remedy.approach
    }
  ])
)

// New categorized structure with dynamic imports
const modules = import.meta.glob('/src/content/remedies/**/*.ts', { eager: true })

const categorizedRemedies = {
  mind: [],
  body: [],
  immunity: [],
  skin: [],
  digestion: [],
  energy: [],
  hormones: [],
  pain: [],
  detox: []
}

// Process all remedy files and categorize them
Object.entries(modules).forEach(([path, mod]) => {
  const parts = path.split('/')
  const filename = parts.pop()!.replace('.ts', '')
  const category = parts[parts.length - 1]
  
  if (categorizedRemedies[category as keyof typeof categorizedRemedies]) {
    const remedy = (mod as unknown).default
    if (remedy) {
      categorizedRemedies[category as keyof typeof categorizedRemedies].push({
        ...remedy,
        category: category.charAt(0).toUpperCase() + category.slice(1)
      })
    }
  }
})

// Also categorize existing remedies from allRemedies
allRemedies.forEach(remedy => {
  const category = remedy.category?.toLowerCase() || 'body'
  if (categorizedRemedies[category as keyof typeof categorizedRemedies]) {
    const existing = categorizedRemedies[category as keyof typeof categorizedRemedies].find(r => r.slug === remedy.slug)
    if (!existing) {
      categorizedRemedies[category as keyof typeof categorizedRemedies].push({
        slug: remedy.slug,
        name: remedy.condition,
        category: remedy.category || 'Body',
        description: remedy.description,
        herbs: remedy.herbs,
        approach: remedy.approach
      })
    }
  }
})

// Helper function to get remedies by category
export function getRemediesByCategory(category: string) {
  return categorizedRemedies[category as keyof typeof categorizedRemedies] || []
}

// Helper function to get all categories
export function getAllCategories() {
  return Object.keys(categorizedRemedies)
}

// Get all remedies as a flat array
export function getAllRemedies() {
  return Object.values(categorizedRemedies).flat()
}

export { categorizedRemedies }
export default remedies
