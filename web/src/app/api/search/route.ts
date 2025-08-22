import { NextRequest, NextResponse } from 'next/server'
import { searchPlants, searchRemedies } from '@/lib/content-loader'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')

    if (!query || query.trim() === '') {
      return NextResponse.json({ plants: [], conditions: [] })
    }

    // Search in both plants and remedies
    const plants = searchPlants(query.trim())
    const conditions = searchRemedies(query.trim())

    return NextResponse.json({
      plants: plants,
      conditions: conditions
    })

  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json(
      { error: 'Search failed' },
      { status: 500 }
    )
  }
}
