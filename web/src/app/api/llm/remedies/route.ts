import { NextResponse } from 'next/server'
import { loadRemedies } from '@/lib/content-loader'

export async function GET() {
  try {
    const remedies = await loadRemedies()
    
    const response = {
      license: "CC BY 4.0",
      lastUpdated: new Date().toISOString(),
      total: remedies.length,
      items: remedies.map(remedy => ({
        slug: remedy.slug,
        name: remedy.name,
        description: remedy.description,
        symptoms: remedy.symptoms,
        plants: remedy.plants.slice(0, 5), // Top 5 plants
        approach: remedy.approach,
        url: remedy.url
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
      { error: 'Failed to load remedies' },
      { status: 500 }
    )
  }
}
