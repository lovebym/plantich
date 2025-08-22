import { NextRequest, NextResponse } from 'next/server';
import { getPlantPrompt, getAllPlantPrompts } from '@/lib/image-generation';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  
  if (slug) {
    const prompt = getPlantPrompt(slug);
    if (!prompt) {
      return NextResponse.json({ error: 'Plant not found' }, { status: 404 });
    }
    
    return NextResponse.json({ 
      slug, 
      prompt,
      instructions: 'Use this prompt in your AI image generator (DALL-E, Midjourney, etc.) to create a botanical illustration'
    });
  }
  
  // Return all prompts if no specific slug
  const allPrompts = getAllPlantPrompts();
  return NextResponse.json({ 
    plants: allPrompts,
    instructions: 'Use these prompts to generate botanical illustrations for all plants'
  });
}

export async function POST(request: NextRequest) {
  try {
    const { slug, customPrompt } = await request.json();
    
    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }
    
    const basePrompt = getPlantPrompt(slug);
    const finalPrompt = customPrompt || basePrompt;
    
    if (!finalPrompt) {
      return NextResponse.json({ error: 'Plant not found' }, { status: 404 });
    }
    
    // Here you could integrate with actual AI image generation APIs
    // For now, we return the prompt for manual generation
    return NextResponse.json({
      slug,
      prompt: finalPrompt,
      status: 'ready_for_generation',
      nextSteps: [
        'Copy the prompt above',
        'Use it in your preferred AI image generator',
        'Download the generated image',
        'Convert to SVG using Vectorizer.AI or Illustrator',
        'Save as /public/assets/plants/{slug}.svg'
      ]
    });
    
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
