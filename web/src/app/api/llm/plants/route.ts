import { NextResponse } from 'next/server'
import { loadPlants } from '@/lib/content-loader'

export async function GET() {
  try {
    const plants = await loadPlants()
    
    const response = {
      license: "CC BY 4.0",
      lastUpdated: new Date().toISOString(),
      total: plants.length,
      items: plants.map(plant => ({
        slug: plant.slug,
        name: plant.name,
        latinName: plant.latinName,
        description: plant.description,
        uses: plant.uses.slice(0, 3), // Top 3 uses
        dosage: plant.dosage,
        url: plant.url
      }))
    }

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load plants' },
      { status: 500 }
    )
  }
}
