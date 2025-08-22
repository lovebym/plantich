import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    { 
      ok: true, 
      timestamp: new Date().toISOString(),
      version: "1.0.0",
      service: "Plantich LLM API"
    },
    {
      headers: {
        'Cache-Control': 'public, max-age=60',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    }
  )
}
