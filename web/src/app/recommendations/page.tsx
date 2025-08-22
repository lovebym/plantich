import { Metadata } from 'next'
import RemedyRecommender from '@/components/RemedyRecommender'

export const metadata: Metadata = {
  title: 'Personalized Herbal Recommendations - Plantich',
  description: 'Get personalized herbal remedy recommendations with specific dosages, frequency, and usage guidelines based on your symptoms. Expert-curated combinations for optimal results.',
  keywords: [
    'herbal recommendations',
    'personalized remedies',
    'herbal dosages',
    'natural medicine',
    'herbal combinations',
    'symptom relief',
    'holistic wellness'
  ],
  openGraph: {
    title: 'Personalized Herbal Recommendations - Plantich',
    description: 'Get personalized herbal remedy recommendations with specific dosages and usage guidelines.',
    type: 'website',
    images: [
      {
        url: '/api/og?title=Personalized Recommendations&subtitle=Herbal Dosage Guide',
        width: 1200,
        height: 630,
        alt: 'Personalized Herbal Recommendations',
      },
    ],
  },
}

export default function RecommendationsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-sand py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6">
            Personalized Herbal Recommendations
          </h1>
          <p className="text-lg text-herbal font-sans max-w-2xl mx-auto leading-relaxed">
            Discover the perfect herbal combinations for your unique needs. Our expert-curated recommendations include specific dosages, timing, and safety guidelines to help you achieve optimal results.
          </p>
        </div>
      </section>

      {/* Main Recommender */}
      <RemedyRecommender />

      {/* Additional Information */}
      <section className="py-16 px-6 bg-clay">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-ink mb-8 text-center">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-herbal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="font-serif text-xl text-ink mb-2">Select Symptoms</h3>
              <p className="text-sm text-herbal font-sans">
                Choose from common symptoms across mind, body, and hormonal health categories.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-herbal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="font-serif text-xl text-ink mb-2">Get Recommendations</h3>
              <p className="text-sm text-herbal font-sans">
                Receive personalized herbal combinations with specific dosages and usage guidelines.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-herbal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="font-serif text-xl text-ink mb-2">Follow Safely</h3>
              <p className="text-sm text-herbal font-sans">
                Use our safety guidelines and consult healthcare providers for optimal results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-ink mb-8 text-center">Safety Guidelines</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="apothecary-card p-6">
              <h3 className="font-serif text-xl text-ink mb-4">Before Starting</h3>
              <ul className="space-y-2 text-sm text-herbal font-sans">
                <li>• Consult with a qualified healthcare provider</li>
                <li>• Check for potential drug interactions</li>
                <li>• Start with lower dosages</li>
                <li>• Monitor your response carefully</li>
                <li>• Be aware of any allergies</li>
              </ul>
            </div>
            
            <div className="apothecary-card p-6">
              <h3 className="font-serif text-xl text-ink mb-4">During Use</h3>
              <ul className="space-y-2 text-sm text-herbal font-sans">
                <li>• Follow recommended dosages exactly</li>
                <li>• Take with or without food as directed</li>
                <li>• Maintain consistent timing</li>
                <li>• Keep track of any side effects</li>
                <li>• Don&apos;t exceed recommended duration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
