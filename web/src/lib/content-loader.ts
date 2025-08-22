import { allPlants, allRemedies } from '@/content'

export interface LLMPlant {
  slug: string
  name: string
  latinName: string
  description: string
  uses: string[]
  dosage: string
  cautions: string[]
  sources: { title: string; url: string }[]
  lastUpdated: string
  url: string
}

export interface LLMRemedy {
  slug: string
  name: string
  description: string
  symptoms: string[]
  plants: string[]
  approach: string
  cautions: string[]
  sources: { title: string; url: string }[]
  lastUpdated: string
  url: string
}

export async function loadPlants(): Promise<LLMPlant[]> {
  return allPlants.map(plant => ({
    slug: plant.slug,
    name: plant.name,
    latinName: plant.latin,
    description: plant.description,
    uses: plant.uses,
    dosage: plant.preparation,
    cautions: [], // Will be populated from comprehensive data
    sources: plant.sources,
    lastUpdated: new Date().toISOString(),
    url: `https://plantich.com/plants/${plant.slug}`
  }))
}

export async function loadRemedies(): Promise<LLMRemedy[]> {
  return allRemedies.map(remedy => ({
    slug: remedy.slug,
    name: remedy.condition,
    description: remedy.description,
    symptoms: [remedy.condition],
    plants: remedy.herbs,
    approach: remedy.approach,
    cautions: [], // Will be populated from comprehensive data
    sources: [], // Will be populated from comprehensive data
    lastUpdated: new Date().toISOString(),
    url: `https://plantich.com/remedies/${remedy.slug}`
  }))
}

export async function loadPlantBySlug(slug: string): Promise<LLMPlant | null> {
  const plants = await loadPlants()
  return plants.find(p => p.slug === slug) || null
}

export async function loadRemedyBySlug(slug: string): Promise<LLMRemedy | null> {
  const remedies = await loadRemedies()
  return remedies.find(r => r.slug === slug) || null
}
