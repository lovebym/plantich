import { NextResponse } from 'next/server'
import { loadPlants, loadRemedies } from '@/lib/content-loader'

export async function GET() {
  try {
    const [plants, remedies] = await Promise.all([
      loadPlants(),
      loadRemedies()
    ])
    
    const items = [
      ...plants.map(p => ({
        type: "plant",
        slug: p.slug,
        title: p.title,
        lastUpdated: p.lastUpdated,
        url: `/plants/${p.slug}`
      })),
      ...remedies.map(r => ({
        type: "remedy",
        slug: r.slug,
        title: r.title,
        lastUpdated: r.lastUpdated,
        url: `/remedies/${r.slug}`
      }))
    ].sort((a, b) => {
      const aDate = a.lastUpdated || new Date(0).toISOString()
      const bDate = b.lastUpdated || new Date(0).toISOString()
      return aDate < bDate ? 1 : -1
    }).slice(0, 100)

    const response = {
      license: "CC BY 4.0",
      lastUpdated: new Date().toISOString(),
      total: items.length,
      items
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
      { error: 'Failed to load changes' },
      { status: 500 }
    )
  }
}
