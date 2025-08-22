import { NextRequest, NextResponse } from 'next/server'
import { remedySynonyms, plantSynonyms } from '@/lib/ai/synonyms'
import { allPlants, allRemedies } from '@/lib/content-loader'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q') || ''
  
  if (!query) {
    return NextResponse.json({ error: 'Query parameter "q" is required' }, { status: 400 })
  }

  try {
    // Normalize query
    const normalizedQuery = query.toLowerCase().trim()
    
    // Expand synonyms
    const expandedTerms = new Set([normalizedQuery])
    
    // Add remedy synonyms
    if (remedySynonyms[normalizedQuery]) {
      expandedTerms.add(remedySynonyms[normalizedQuery])
    }
    
    // Add plant synonyms
    if (plantSynonyms[normalizedQuery]) {
      expandedTerms.add(plantSynonyms[normalizedQuery])
    }

    // Search remedies
    const matchingRemedies = allRemedies.filter(remedy => {
      const condition = remedy.title.toLowerCase()
      return Array.from(expandedTerms).some(term => 
        condition.includes(term) ||
        remedy.plants.some(plant => plant.toLowerCase().includes(term))
      )
    })

    // Search plants
    const matchingPlants = allPlants.filter(plant => {
      const plantName = plant.title.toLowerCase()
      const latinName = plant.latinName.toLowerCase()
      return Array.from(expandedTerms).some(term => 
        plantName.includes(term) ||
        latinName.includes(term) ||
        plant.uses.some(use => use.toLowerCase().includes(term))
      )
    })

    // Format results
    const results = {
      query: normalizedQuery,
      remedies: matchingRemedies.slice(0, 5).map(remedy => ({
        slug: remedy.slug,
        title: remedy.title,
        description: remedy.description,
        plants: remedy.plants
      })),
      plants: matchingPlants.slice(0, 5).map(plant => ({
        slug: plant.slug,
        title: plant.title,
        latinName: plant.latinName,
        description: plant.description,
        uses: plant.uses
      })),
      totalResults: matchingRemedies.length + matchingPlants.length
    }

    return NextResponse.json(results)
  } catch (error) {
    console.error('AI search error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
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
