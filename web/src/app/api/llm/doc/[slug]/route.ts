import { NextRequest, NextResponse } from 'next/server'
import { loadPlantBySlug, loadRemedyBySlug } from '@/lib/content-loader'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    
    // Try to find as plant first, then as remedy
    const plant = await loadPlantBySlug(slug)
    let remedy = null
    
    if (!plant) {
      remedy = await loadRemedyBySlug(slug)
    }
    
    if (!plant && !remedy) {
      return NextResponse.json(
        { error: 'Document not found' },
        { status: 404 }
      )
    }
    
    const response = {
      license: "CC BY 4.0",
      lastUpdated: new Date().toISOString(),
      slug,
      type: plant ? 'plant' : 'remedy',
      data: plant || remedy,
      sourceUrl: plant ? `/plants/${slug}` : `/remedies/${slug}`
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
      { error: 'Failed to load document' },
      { status: 500 }
    )
  }
}
