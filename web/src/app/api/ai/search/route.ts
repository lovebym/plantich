import { NextRequest, NextResponse } from 'next/server'
import { loadAllPlantsForAI, loadAllRemediesForAI } from '@/lib/content-loader'
import { CONDITION_ALIASES, PLANT_ALIASES } from '@/lib/ai/synonyms'

export async function POST(req: NextRequest) {
  try {
    const { query, plants, remedies, categorizedPlants, categorizedRemedies } = await req.json()

    if (!query) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 })
    }

    // Normalize query
    const normalizedQuery = query.toLowerCase().trim()
    const queryWords = normalizedQuery.split(/\s+/)

    // Find matching conditions
    const matchingConditions = []
    for (const [alias, condition] of Object.entries(CONDITION_ALIASES)) {
      if (queryWords.some((word: string) => word.includes(alias) || alias.includes(word))) {
        matchingConditions.push(condition)
      }
    }

    // Find matching plants
    const matchingPlants = []
    for (const [alias, plant] of Object.entries(PLANT_ALIASES)) {
      if (queryWords.some((word: string) => word.includes(alias) || alias.includes(word))) {
        matchingPlants.push(plant)
      }
    }

    // Get results from categorized data
    const results = []

    // Add matching remedies
    for (const condition of matchingConditions) {
      const remedy = remedies[condition]
      if (remedy) {
        results.push({
          type: 'remedy',
          slug: remedy.slug,
          name: remedy.name,
          category: remedy.category || 'Body',
          description: remedy.description,
          why: `Matches your search for "${condition}"`,
          url: `/remedies/${remedy.slug}`
        })
      }
    }

    // Add matching plants
    for (const plantSlug of matchingPlants) {
      const plant = plants[plantSlug]
      if (plant) {
        results.push({
          type: 'plant',
          slug: plant.slug,
          name: plant.commonName,
          category: plant.category || 'Body',
          description: plant.description,
          why: `Directly matches your search for "${plantSlug}"`,
          url: `/plants/${plant.slug}`
        })
      }
    }

    // Add related plants from matching remedies
    for (const condition of matchingConditions) {
      const remedy = remedies[condition]
      if (remedy && remedy.herbs) {
        for (const herbSlug of remedy.herbs.slice(0, 3)) {
          const plant = plants[herbSlug]
          if (plant && !results.some(r => r.slug === plant.slug)) {
            results.push({
              type: 'plant',
              slug: plant.slug,
              name: plant.commonName,
              category: plant.category || 'Body',
              description: plant.description,
              why: `Commonly used for ${condition}`,
              url: `/plants/${plant.slug}`
            })
          }
        }
      }
    }

    // Add category-based recommendations
    const categoryKeywords = {
      mind: ['anxiety', 'stress', 'depression', 'sleep', 'focus', 'adhd', 'mood'],
      energy: ['tired', 'fatigue', 'exhausted', 'energy', 'burnout'],
      digestion: ['stomach', 'bloating', 'gas', 'digestion', 'ibs', 'gut'],
      immunity: ['cold', 'flu', 'immune', 'infection', 'sick'],
      skin: ['skin', 'acne', 'eczema', 'rash'],
      pain: ['pain', 'inflammation', 'joint', 'muscle', 'headache'],
      hormones: ['hormone', 'pms', 'menopause', 'thyroid'],
      detox: ['detox', 'liver', 'cleanse']
    }

    for (const [category, keywords] of Object.entries(categoryKeywords)) {
      if (keywords.some(keyword => queryWords.some((word: string) => word.includes(keyword)))) {
        // Add top plants from this category
        const categoryPlants = categorizedPlants[category] || []
        for (const plant of categoryPlants.slice(0, 2)) {
          if (!results.some(r => r.slug === plant.slug)) {
            results.push({
              type: 'plant',
              slug: plant.slug,
              name: plant.name,
              category: category,
              description: plant.description,
              why: `Top recommendation for ${category} concerns`,
              url: `/plants/${plant.slug}`
            })
          }
        }

        // Add top remedies from this category
        const categoryRemedies = categorizedRemedies[category] || []
        for (const remedy of categoryRemedies.slice(0, 2)) {
          if (!results.some(r => r.slug === remedy.slug)) {
            results.push({
              type: 'remedy',
              slug: remedy.slug,
              name: remedy.condition,
              category: category,
              description: remedy.description,
              why: `Comprehensive guide for ${category} health`,
              url: `/remedies/${remedy.slug}`
            })
          }
        }
      }
    }

    // Remove duplicates and limit results
    const uniqueResults = results.filter((result, index, self) => 
      index === self.findIndex(r => r.slug === result.slug)
    ).slice(0, 9)

    return NextResponse.json({
      success: true,
      results: uniqueResults,
      query: normalizedQuery,
      categories: Object.keys(categorizedRemedies)
    })

  } catch (error) {
    console.error('AI search error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle CORS preflight
export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
