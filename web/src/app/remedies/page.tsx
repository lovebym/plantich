import { Metadata } from 'next'
import { getAllCategories, getRemediesByCategory } from '@/lib/remedies'

export const metadata: Metadata = {
  title: 'Herbal Remedies by Category - Plantich',
  description: 'Browse our comprehensive collection of herbal remedies organized by health categories: Mind, Body, Immunity, Skin, Digestion, Energy, Hormones, Pain, and Detox.',
  keywords: 'herbal remedies, natural medicine, health categories, mind health, body health, immunity, skin health, digestion, energy, hormones, pain relief, detox',
  openGraph: {
    title: 'Herbal Remedies by Category - Plantich',
    description: 'Browse our comprehensive collection of herbal remedies organized by health categories.',
    type: 'website',
  },
}

export default function RemediesPage() {
  const categories = getAllCategories()
  
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif text-ink mb-8">Natural Remedies</h1>
        
        <div className="grid gap-8">
          {categories.map((category) => {
            const remedies = getRemediesByCategory(category)
            
            return (
              <div key={category} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-serif text-ink mb-4 capitalize">
                  {category} Remedies
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {remedies.map((remedy) => (
                    <div key={remedy.slug} className="border border-herbal rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-serif text-ink mb-2">
                        {remedy.title}
                      </h3>
                      <p className="text-sm text-herbal mb-3">
                        {remedy.description}
                      </p>
                      <div className="text-xs text-herbal">
                        <strong>Plants:</strong> {remedy.plants.join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
