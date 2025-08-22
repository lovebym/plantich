import Link from 'next/link'
import { Metadata } from 'next'
import { allPlants, getPlantsByCategory } from '@/content'

export const metadata: Metadata = {
  title: 'Sacred Plant Allies',
  description: 'Discover the healing wisdom of plants, organized by their primary energetic support for mind, body, and spirit. Explore our curated collection of medicinal herbs and their traditional uses.',
  keywords: [
    'medicinal plants',
    'herbal medicine',
    'healing herbs',
    'plant allies',
    'botanical wisdom',
    'natural remedies',
    'mind body spirit',
    'holistic healing'
  ],
  openGraph: {
    title: 'Sacred Plant Allies | Plantich',
    description: 'Discover the healing wisdom of plants, organized by their primary energetic support for mind, body, and spirit.',
    type: 'website',
    images: [
      {
        url: '/api/og?title=Sacred Plant Allies&subtitle=Healing Wisdom of Plants',
        width: 1200,
        height: 630,
        alt: 'Sacred Plant Allies - Healing Wisdom of Plants',
      },
    ],
  },
}

export default function PlantsPage() {
  const mindPlants = getPlantsByCategory('Mind')
  const bodyPlants = getPlantsByCategory('Body')
  const spiritPlants = getPlantsByCategory('Spirit')

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-sand py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-ink mb-6">Sacred Plant Allies</h1>
          <p className="text-xl text-herbal font-sans leading-relaxed max-w-3xl mx-auto mb-8">
            Discover the healing wisdom of plants, organized by their primary energetic support for mind, body, and spirit.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-herbal/10 text-herbal rounded-full">
              {allPlants.length} Plants
            </span>
            <span className="px-4 py-2 bg-gold/10 text-gold rounded-full">
              Traditional Wisdom
            </span>
            <span className="px-4 py-2 bg-clay/20 text-ink rounded-full">
              Modern Research
            </span>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 px-6 bg-background border-b border-clay/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#mind" className="px-6 py-3 bg-herbal text-white rounded-lg hover:bg-ink transition-colors">
              Mind ({mindPlants.length})
            </a>
            <a href="#body" className="px-6 py-3 bg-clay text-ink rounded-lg hover:bg-herbal hover:text-white transition-colors">
              Body ({bodyPlants.length})
            </a>
            <a href="#spirit" className="px-6 py-3 bg-gold text-white rounded-lg hover:bg-ink transition-colors">
              Spirit ({spiritPlants.length})
            </a>
          </div>
        </div>
      </section>

      {/* Mind Plants */}
      {mindPlants.length > 0 && (
        <section id="mind" className="py-20 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl text-ink mb-4">🧠 Mind</h2>
              <p className="text-lg text-herbal font-sans max-w-2xl mx-auto">
                Plants that support mental clarity, emotional balance, and cognitive function.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mindPlants.map((plant) => (
                <Link
                  key={plant.slug}
                  href={`/plant/${plant.slug}`}
                  className="apothecary-card p-6 hover:shadow-soft transition-all duration-300 group"
                >
                  <h3 className="font-serif text-xl text-ink mb-2 group-hover:text-herbal transition-colors">
                    {plant.name}
                  </h3>
                  <p className="text-sm text-herbal italic mb-3">{plant.latin}</p>
                  <p className="text-sm text-ink font-sans line-clamp-3 mb-4">
                    {plant.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {plant.uses.slice(0, 3).map((use, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 bg-sand text-ink rounded-full"
                      >
                        {use}
                      </span>
                    ))}
                    {plant.uses.length > 3 && (
                      <span className="text-xs text-herbal">+{plant.uses.length - 3} more</span>
                    )}
                  </div>
                  <div className="text-herbal text-sm font-sans group-hover:text-ink transition-colors">
                    Learn more →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Body Plants */}
      {bodyPlants.length > 0 && (
        <section id="body" className="py-20 px-6 bg-clay">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl text-ink mb-4">💪 Body</h2>
              <p className="text-lg text-herbal font-sans max-w-2xl mx-auto">
                Plants that strengthen physical resilience, support vital systems, and restore energy.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bodyPlants.map((plant) => (
                <Link
                  key={plant.slug}
                  href={`/plant/${plant.slug}`}
                  className="apothecary-card p-6 hover:shadow-soft transition-all duration-300 group"
                >
                  <h3 className="font-serif text-xl text-ink mb-2 group-hover:text-herbal transition-colors">
                    {plant.name}
                  </h3>
                  <p className="text-sm text-herbal italic mb-3">{plant.latin}</p>
                  <p className="text-sm text-ink font-sans line-clamp-3 mb-4">
                    {plant.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {plant.uses.slice(0, 3).map((use, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 bg-sand text-ink rounded-full"
                      >
                        {use}
                      </span>
                    ))}
                    {plant.uses.length > 3 && (
                      <span className="text-xs text-herbal">+{plant.uses.length - 3} more</span>
                    )}
                  </div>
                  <div className="text-herbal text-sm font-sans group-hover:text-ink transition-colors">
                    Learn more →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Spirit Plants */}
      {spiritPlants.length > 0 && (
        <section id="spirit" className="py-20 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl text-ink mb-4">✨ Spirit</h2>
              <p className="text-lg text-herbal font-sans max-w-2xl mx-auto">
                Plants that nurture inner peace, deepen intuition, and support spiritual well-being.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {spiritPlants.map((plant) => (
                <Link
                  key={plant.slug}
                  href={`/plant/${plant.slug}`}
                  className="apothecary-card p-6 hover:shadow-soft transition-all duration-300 group"
                >
                  <h3 className="font-serif text-xl text-ink mb-2 group-hover:text-herbal transition-colors">
                    {plant.name}
                  </h3>
                  <p className="text-sm text-herbal italic mb-3">{plant.latin}</p>
                  <p className="text-sm text-ink font-sans line-clamp-3 mb-4">
                    {plant.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {plant.uses.slice(0, 3).map((use, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 bg-sand text-ink rounded-full"
                      >
                        {use}
                      </span>
                    ))}
                    {plant.uses.length > 3 && (
                      <span className="text-xs text-herbal">+{plant.uses.length - 3} more</span>
                    )}
                  </div>
                  <div className="text-herbal text-sm font-sans group-hover:text-ink transition-colors">
                    Learn more →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Plants Section (if no categories) */}
      {mindPlants.length === 0 && bodyPlants.length === 0 && spiritPlants.length === 0 && (
        <section className="py-20 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl text-ink mb-4">All Plants</h2>
              <p className="text-lg text-herbal font-sans max-w-2xl mx-auto">
                Explore our complete collection of medicinal plants and their healing properties.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPlants.map((plant) => (
                <Link
                  key={plant.slug}
                  href={`/plant/${plant.slug}`}
                  className="apothecary-card p-6 hover:shadow-soft transition-all duration-300 group"
                >
                  <h3 className="font-serif text-xl text-ink mb-2 group-hover:text-herbal transition-colors">
                    {plant.name}
                  </h3>
                  <p className="text-sm text-herbal italic mb-3">{plant.latin}</p>
                  <p className="text-sm text-ink font-sans line-clamp-3 mb-4">
                    {plant.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {plant.uses.slice(0, 3).map((use, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 bg-sand text-ink rounded-full"
                      >
                        {use}
                      </span>
                    ))}
                    {plant.uses.length > 3 && (
                      <span className="text-xs text-herbal">+{plant.uses.length - 3} more</span>
                    )}
                  </div>
                  <div className="text-herbal text-sm font-sans group-hover:text-ink transition-colors">
                    Learn more →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 px-6 bg-herbal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-white mb-6">Continue Your Journey</h2>
          <p className="text-lg text-white/90 font-sans mb-8 max-w-2xl mx-auto">
            Explore our conditions page to find specific remedies, or use our search to discover plants that match your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/conditions"
              className="inline-block px-8 py-4 bg-gold text-white hover:bg-ink transition-colors duration-300 text-sm tracking-wider uppercase font-sans rounded-md shadow-soft"
            >
              Browse Conditions
            </Link>
            <Link
              href="/search"
              className="inline-block px-8 py-4 border border-white text-white hover:bg-white hover:text-herbal transition-colors duration-300 text-sm tracking-wider uppercase font-sans rounded-md"
            >
              Search Plants
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}