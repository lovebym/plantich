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

const categoryInfo = {
  mind: {
    icon: '🧠',
    title: 'Mind & Mental Health',
    description: 'Support for anxiety, stress, depression, sleep, focus, and cognitive function',
    color: 'bg-blue-50 border-blue-200 text-blue-800'
  },
  body: {
    icon: '💪',
    title: 'Body & Physical Health',
    description: 'General wellness, strength, and physical vitality support',
    color: 'bg-green-50 border-green-200 text-green-800'
  },
  immunity: {
    icon: '🛡️',
    title: 'Immunity & Defense',
    description: 'Immune system support, cold and flu prevention, infection resistance',
    color: 'bg-purple-50 border-purple-200 text-purple-800'
  },
  skin: {
    icon: '✨',
    title: 'Skin & Beauty',
    description: 'Natural solutions for acne, eczema, skin aging, and overall skin health',
    color: 'bg-pink-50 border-pink-200 text-pink-800'
  },
  digestion: {
    icon: '🌿',
    title: 'Digestion & Gut Health',
    description: 'Support for bloating, IBS, stomach issues, and digestive wellness',
    color: 'bg-yellow-50 border-yellow-200 text-yellow-800'
  },
  energy: {
    icon: '⚡',
    title: 'Energy & Vitality',
    description: 'Natural energy boosters, fatigue relief, and vitality support',
    color: 'bg-orange-50 border-orange-200 text-orange-800'
  },
  hormones: {
    icon: '⚖️',
    title: 'Hormones & Balance',
    description: 'Hormonal balance, PMS, menopause, thyroid, and endocrine support',
    color: 'bg-red-50 border-red-200 text-red-800'
  },
  pain: {
    icon: '🔥',
    title: 'Pain & Inflammation',
    description: 'Natural pain relief, anti-inflammatory support, and joint health',
    color: 'bg-gray-50 border-gray-200 text-gray-800'
  },
  detox: {
    icon: '🌱',
    title: 'Detox & Cleansing',
    description: 'Liver support, toxin removal, and natural cleansing protocols',
    color: 'bg-emerald-50 border-emerald-200 text-emerald-800'
  }
}

export default function RemediesPage() {
  const categories = getAllCategories()

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif text-ink mb-6">
            Herbal Remedies by Category
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive collection of natural remedies, organized by health categories to help you find the perfect herbal solutions for your specific needs.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const info = categoryInfo[category as keyof typeof categoryInfo]
              const remedies = getRemediesByCategory(category)
              
              return (
                <a
                  key={category}
                  href={`/remedies/${category}`}
                  className="group block bg-background border border-clay rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-herbal"
                >
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <h2 className="text-2xl font-serif text-ink mb-2">
                      {info.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {info.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-ink">
                        Remedies Available
                      </span>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${info.color}`}>
                        {remedies.length} remedies
                      </span>
                    </div>
                    
                    {/* Show top 3 remedies */}
                    <div className="space-y-2">
                      {remedies.slice(0, 3).map((remedy) => (
                        <div key={remedy.slug} className="flex items-center justify-between text-sm">
                          <span className="text-ink group-hover:text-herbal transition-colors">
                            {remedy.name}
                          </span>
                          <span className="text-gray-400">→</span>
                        </div>
                      ))}
                      {remedies.length > 3 && (
                        <div className="text-xs text-gray-500 text-center pt-2">
                          +{remedies.length - 3} more remedies
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-clay/30">
                    <span className="text-herbal text-sm font-medium group-hover:underline">
                      Explore {info.title} →
                    </span>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-sand/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-ink mb-4">
            Need Personalized Recommendations?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our AI herbal guide can help you find the perfect remedies based on your specific symptoms and health goals.
          </p>
          <a
            href="/ai-search"
            className="inline-flex items-center bg-herbal text-white px-8 py-4 rounded-lg font-medium hover:bg-herbal/90 transition-colors"
          >
            Get AI Recommendations →
          </a>
        </div>
      </section>
    </div>
  )
}
