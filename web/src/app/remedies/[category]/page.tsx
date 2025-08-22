import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getRemediesByCategory, getAllCategories } from '@/lib/remedies'

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params
  const remedies = getRemediesByCategory(category)
  
  if (remedies.length === 0) {
    return {
      title: 'Category Not Found - Plantich'
    }
  }

  const categoryTitles = {
    mind: 'Mind & Mental Health Remedies',
    body: 'Body & Physical Health Remedies', 
    immunity: 'Immunity & Defense Remedies',
    skin: 'Skin & Beauty Remedies',
    digestion: 'Digestion & Gut Health Remedies',
    energy: 'Energy & Vitality Remedies',
    hormones: 'Hormones & Balance Remedies',
    pain: 'Pain & Inflammation Remedies',
    detox: 'Detox & Cleansing Remedies'
  }

  const categoryDescriptions = {
    mind: 'Natural remedies for anxiety, stress, depression, sleep, focus, and cognitive function. Evidence-based herbal solutions for mental wellness.',
    body: 'Herbal remedies for general wellness, strength, and physical vitality. Support your body\'s natural healing processes.',
    immunity: 'Boost your immune system naturally with herbs for cold and flu prevention, infection resistance, and overall immune health.',
    skin: 'Natural solutions for acne, eczema, skin aging, and overall skin health. Herbal remedies for beautiful, healthy skin.',
    digestion: 'Support digestive wellness with herbs for bloating, IBS, stomach issues, and gut health. Natural digestive aids.',
    energy: 'Natural energy boosters and fatigue relief. Herbal remedies for vitality, stamina, and sustainable energy.',
    hormones: 'Balance hormones naturally with herbs for PMS, menopause, thyroid health, and endocrine support.',
    pain: 'Natural pain relief and anti-inflammatory support. Herbal remedies for joint health and pain management.',
    detox: 'Liver support and natural cleansing protocols. Herbal detox remedies for toxin removal and organ health.'
  }

  return {
    title: `${categoryTitles[category as keyof typeof categoryTitles] || 'Herbal Remedies'} - Plantich`,
    description: categoryDescriptions[category as keyof typeof categoryDescriptions] || `Browse our collection of ${category} herbal remedies.`,
    keywords: `${category}, herbal remedies, natural medicine, health, wellness`,
    openGraph: {
      title: `${categoryTitles[category as keyof typeof categoryTitles] || 'Herbal Remedies'} - Plantich`,
      description: categoryDescriptions[category as keyof typeof categoryDescriptions] || `Browse our collection of ${category} herbal remedies.`,
      type: 'website',
    },
  }
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((category) => ({
    category: category,
  }))
}

const categoryInfo = {
  mind: {
    icon: '🧠',
    title: 'Mind & Mental Health',
    description: 'Support for anxiety, stress, depression, sleep, focus, and cognitive function'
  },
  body: {
    icon: '💪',
    title: 'Body & Physical Health',
    description: 'General wellness, strength, and physical vitality support'
  },
  immunity: {
    icon: '🛡️',
    title: 'Immunity & Defense',
    description: 'Immune system support, cold and flu prevention, infection resistance'
  },
  skin: {
    icon: '✨',
    title: 'Skin & Beauty',
    description: 'Natural solutions for acne, eczema, skin aging, and overall skin health'
  },
  digestion: {
    icon: '🌿',
    title: 'Digestion & Gut Health',
    description: 'Support for bloating, IBS, stomach issues, and digestive wellness'
  },
  energy: {
    icon: '⚡',
    title: 'Energy & Vitality',
    description: 'Natural energy boosters, fatigue relief, and vitality support'
  },
  hormones: {
    icon: '⚖️',
    title: 'Hormones & Balance',
    description: 'Hormonal balance, PMS, menopause, thyroid, and endocrine support'
  },
  pain: {
    icon: '🔥',
    title: 'Pain & Inflammation',
    description: 'Natural pain relief, anti-inflammatory support, and joint health'
  },
  detox: {
    icon: '🌱',
    title: 'Detox & Cleansing',
    description: 'Liver support, toxin removal, and natural cleansing protocols'
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params
  const remedies = getRemediesByCategory(category)
  const info = categoryInfo[category as keyof typeof categoryInfo]

  if (remedies.length === 0) {
    notFound()
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-6xl mb-6">
            {info.icon}
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-ink mb-6">
            {info.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {info.description}
          </p>
          <div className="mt-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-herbal/10 text-herbal border border-herbal/20">
              {remedies.length} remedies available
            </span>
          </div>
        </div>
      </section>

      {/* Remedies Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {remedies.map((remedy) => (
              <div
                key={remedy.slug}
                className="bg-background border border-clay rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-serif text-ink mb-2">
                    {remedy.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {remedy.description}
                  </p>
                </div>

                {remedy.herbs && remedy.herbs.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-ink mb-2">
                      Key Herbs
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {remedy.herbs.slice(0, 3).map((herb) => (
                        <a
                          key={herb}
                          href={`/plants/${herb}`}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-sand text-ink hover:bg-herbal hover:text-white transition-colors"
                        >
                          {herb}
                        </a>
                      ))}
                      {remedy.herbs.length > 3 && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-sand text-gray-500">
                          +{remedy.herbs.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-clay/30">
                  <a
                    href={`/remedies/${remedy.slug}`}
                    className="inline-flex items-center text-herbal hover:text-herbal/80 text-sm font-medium transition-colors"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-16 px-6 bg-sand/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-ink mb-8">
            Explore Other Categories
          </h2>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {getAllCategories()
              .filter(cat => cat !== category)
              .slice(0, 5)
              .map((cat) => {
                const catInfo = categoryInfo[cat as keyof typeof categoryInfo]
                return (
                  <a
                    key={cat}
                    href={`/remedies/${cat}`}
                    className="group p-4 border border-clay rounded-lg hover:bg-background transition-colors text-center"
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                      {catInfo.icon}
                    </div>
                    <h4 className="font-medium text-ink capitalize text-sm">
                      {catInfo.title}
                    </h4>
                  </a>
                )
              })}
          </div>
        </div>
      </section>
    </div>
  )
}
