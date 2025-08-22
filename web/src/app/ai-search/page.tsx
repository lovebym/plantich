import { Metadata } from 'next'
import AISearch from '@/components/AISearch'

export const metadata: Metadata = {
  title: 'AI Herbal Search - Plantich',
  description: 'Ask questions about herbs, conditions, and natural remedies. Get personalized recommendations with safety information and scientific sources.',
  keywords: 'herbal search, natural remedies, plant medicine, AI search, herbal recommendations',
  openGraph: {
    title: 'AI Herbal Search - Plantich',
    description: 'Ask questions about herbs, conditions, and natural remedies. Get personalized recommendations with safety information and scientific sources.',
    type: 'website',
  },
}

export default function AISearchPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-sand/20 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-ink mb-6">
            AI Herbal Search
          </h1>
          <p className="text-xl text-ink/70 mb-8 max-w-2xl mx-auto">
            Ask questions about herbs, conditions, and natural remedies. Get personalized recommendations with safety information and scientific sources.
          </p>
          
          {/* Example queries */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="text-sm text-ink/50">Try:</span>
            <button className="text-sm bg-herbal/10 text-herbal px-3 py-1 rounded-full hover:bg-herbal/20 transition-colors">
              &ldquo;I can&apos;t sleep&rdquo;
            </button>
            <button className="text-sm bg-herbal/10 text-herbal px-3 py-1 rounded-full hover:bg-herbal/20 transition-colors">
              &ldquo;anxiety and stress&rdquo;
            </button>
            <button className="text-sm bg-herbal/10 text-herbal px-3 py-1 rounded-full hover:bg-herbal/20 transition-colors">
              &ldquo;digestive issues&rdquo;
            </button>
            <button className="text-sm bg-herbal/10 text-herbal px-3 py-1 rounded-full hover:bg-herbal/20 transition-colors">
              &ldquo;ashwagandha benefits&rdquo;
            </button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <AISearch />
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-6 bg-sand/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-ink mb-8 text-center">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-herbal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-herbal font-bold">1</span>
              </div>
              <h3 className="font-medium text-ink mb-2">Ask Your Question</h3>
              <p className="text-sm text-ink/70">
                Describe your symptoms, condition, or ask about specific herbs in natural language.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-herbal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-herbal font-bold">2</span>
              </div>
              <h3 className="font-medium text-ink mb-2">AI Analysis</h3>
              <p className="text-sm text-ink/70">
                Our AI searches through our comprehensive database of herbs and remedies to find relevant matches.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-herbal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-herbal font-bold">3</span>
              </div>
              <h3 className="font-medium text-ink mb-2">Get Recommendations</h3>
              <p className="text-sm text-ink/70">
                Receive personalized recommendations with dosage info, safety cautions, and scientific sources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="font-medium text-red-800 mb-2">Important Safety Information</h3>
            <p className="text-sm text-red-700">
              This information is for educational purposes only and should not replace professional medical advice. 
              Always consult with a qualified healthcare provider before starting any herbal supplement, especially if you are pregnant, 
              nursing, taking medications, or have underlying health conditions.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
