import { NextRequest, NextResponse } from 'next/server'
import { aiSearch } from '@/lib/ai'
import type { AIQuery } from '@/lib/ai/types'

export async function POST(request: NextRequest) {
  try {
    const body: AIQuery = await request.json() || {}
    
    if (!body.q || typeof body.q !== "string") {
      return NextResponse.json(
        { error: "missing_q", message: "Query parameter 'q' is required" },
        { status: 400 }
      )
    }

    const data = await aiSearch({ 
      q: body.q, 
      locale: body.locale || "en", 
      maxItems: body.maxItems 
    })

    return NextResponse.json(
      { ok: true, data },
      {
        headers: {
          'Cache-Control': 'public, max-age=60, stale-while-revalidate=300',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      }
    )
  } catch (error: unknown) {
    console.error('AI Search error:', error)
          const errorMessage = error instanceof Error ? error.message : "unknown"
      return NextResponse.json(
        { 
          ok: false, 
          error: "server_error", 
          detail: errorMessage
        },
        { status: 500 }
      )
  }
}

// Handle CORS preflight
export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  })
}
