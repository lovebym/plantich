import Link from 'next/link'
import { Metadata } from 'next'
import { allRemedies, getRemediesByCategory } from '@/lib/content-loader'

export const metadata: Metadata = {
  title: 'Natural Pathways to Healing',
  description: 'Explore natural approaches to common health concerns, organized by their impact on mind, body, and spirit. Discover herbal remedies and plant-based solutions.',
  keywords: [
    'natural remedies',
    'herbal medicine',
    'holistic healing',
    'plant medicine',
    'natural health',
    'herbal remedies',
    'mind body spirit',
    'wellness solutions'
  ],
  openGraph: {
    title: 'Natural Pathways to Healing | Plantich',
    description: 'Explore natural approaches to common health concerns, organized by their impact on mind, body, and spirit.',
    type: 'website',
    images: [
      {
        url: '/api/og?title=Natural Pathways to Healing&subtitle=Herbal Remedies',
        width: 1200,
        height: 630,
        alt: 'Natural Pathways to Healing - Herbal Remedies',
      },
    ],
  },
}

export default function ConditionsPage() {
  const mindRemedies = getRemediesByCategory('Mind')
  const bodyRemedies = getRemediesByCategory('Body')
  const spiritRemedies = getRemediesByCategory('Spirit')

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-sand py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-ink mb-6">Natural Pathways to Healing</h1>
          <p className="text-xl text-herbal font-sans leading-relaxed max-w-3xl mx-auto mb-8">
            Explore natural approaches to common health concerns, organized by their impact on mind, body, and spirit.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-herbal/10 text-herbal rounded-full">
              {allRemedies.length} Conditions
            </span>
            <span className="px-4 py-2 bg-gold/10 text-gold rounded-full">
              Natural Solutions
            </span>
            <span className="px-4 py-2 bg-clay/20 text-ink rounded-full">
              Holistic Approach
            </span>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 px-6 bg-background border-b border-clay/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#mind" className="px-6 py-3 bg-herbal text-white rounded-lg hover:bg-ink transition-colors">
              Mind ({mindRemedies.length})
            </a>
            <a href="#body" className="px-6 py-3 bg-clay text-ink rounded-lg hover:bg-herbal hover:text-white transition-colors">
              Body ({bodyRemedies.length})
            </a>
            <a href="#spirit" className="px-6 py-3 bg-gold text-white rounded-lg hover:bg-ink transition-colors">
              Spirit ({spiritRemedies.length})
            </a>
          </div>
        </div>
      </section>

      {/* Mind Conditions */}
      {mindRemedies.length > 0 && (
        <section id="mind" className="py-20 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl text-ink mb-4">🧠 Mind</h2>
              <p className="text-lg text-herbal font-sans max-w-2xl mx-auto">
                Mental and emotional wellness supported by nature&apos;s wisdom.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {mindRemedies.map((remedy) => (
                <Link
                  key={remedy.slug}
                  href={`/condition/${remedy.slug}`}
                  className="apothecary-card p-6 hover:shadow-soft transition-all duration-300 group"
                >
                  <h3 className="font-serif text-xl text-ink mb-3 group-hover:text-herbal transition-colors">
                    {remedy.title}
                  </h3>
                  <p className="text-sm text-ink font-sans line-clamp-3 mb-4">
                    {remedy.description}
                  </p>
                  <div className="border-t border-shadow/30 pt-4">
                    <p className="text-xs text-herbal font-sans mb-2">Helpful plants:</p>
                    <div className="flex flex-wrap gap-1">
                      {remedy.plants.slice(0, 4).map((herb, index) => (
                        <span 
                          key={index} 
                          className="text-xs px-2 py-1 bg-sand text-ink rounded-full"
                        >
                          {herb}
                        </span>
                      ))}
                      {remedy.plants.length > 4 && (
                        <span className="text-xs text-herbal">+{remedy.plants.length - 4} more</span>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 text-herbal text-sm font-sans group-hover:text-ink transition-colors">
                    Learn more →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Body Conditions */}
      {bodyRemedies.length > 0 && (
        <section id="body" className="py-20 px-6 bg-clay">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl text-ink mb-4">💪 Body</h2>
              <p className="text-lg text-herbal font-sans max-w-2xl mx-auto">
                Physical wellness and vitality through plant medicine.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {bodyRemedies.map((remedy) => (
                <Link
                  key={remedy.slug}
                  href={`/condition/${remedy.slug}`}
                  className="apothecary-card p-6 hover:shadow-soft transition-all duration-300 group"
                >
                  <h3 className="font-serif text-xl text-ink mb-3 group-hover:text-herbal transition-colors">
                    {remedy.title}
                  </h3>
                  <p className="text-sm text-ink font-sans line-clamp-3 mb-4">
                    {remedy.description}
                  </p>
                  <div className="border-t border-shadow/30 pt-4">
                    <p className="text-xs text-herbal font-sans mb-2">Helpful plants:</p>
                    <div className="flex flex-wrap gap-1">
                      {remedy.plants.slice(0, 4).map((herb, index) => (
                        <span 
                          key={index} 
                          className="text-xs px-2 py-1 bg-sand text-ink rounded-full"
                        >
                          {herb}
                        </span>
                      ))}
                      {remedy.plants.length > 4 && (
                        <span className="text-xs text-herbal">+{remedy.plants.length - 4} more</span>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 text-herbal text-sm font-sans group-hover:text-ink transition-colors">
                    Learn more →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Spirit Conditions */}
      {spiritRemedies.length > 0 && (
        <section id="spirit" className="py-20 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl text-ink mb-4">✨ Spirit</h2>
              <p className="text-lg text-herbal font-sans max-w-2xl mx-auto">
                Soul nourishment and spiritual balance through sacred plants.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {spiritRemedies.map((remedy) => (
                <Link
                  key={remedy.slug}
                  href={`/condition/${remedy.slug}`}
                  className="apothecary-card p-6 hover:shadow-soft transition-all duration-300 group"
                >
                  <h3 className="font-serif text-xl text-ink mb-3 group-hover:text-herbal transition-colors">
                    {remedy.title}
                  </h3>
                  <p className="text-sm text-ink font-sans line-clamp-3 mb-4">
                    {remedy.description}
                  </p>
                  <div className="border-t border-shadow/30 pt-4">
                    <p className="text-xs text-herbal font-sans mb-2">Helpful plants:</p>
                    <div className="flex flex-wrap gap-1">
                      {remedy.plants.slice(0, 4).map((herb, index) => (
                        <span 
                          key={index} 
                          className="text-xs px-2 py-1 bg-sand text-ink rounded-full"
                        >
                          {herb}
                        </span>
                      ))}
                      {remedy.plants.length > 4 && (
                        <span className="text-xs text-herbal">+{remedy.plants.length - 4} more</span>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 text-herbal text-sm font-sans group-hover:text-ink transition-colors">
                    Learn more →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Conditions Section (if no categories) */}
      {mindRemedies.length === 0 && bodyRemedies.length === 0 && spiritRemedies.length === 0 && (
        <section className="py-20 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl text-ink mb-4">All Conditions</h2>
              <p className="text-lg text-herbal font-sans max-w-2xl mx-auto">
                Explore our complete collection of natural remedies and healing approaches.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {allRemedies.map((remedy) => (
                <Link
                  key={remedy.slug}
                  href={`/condition/${remedy.slug}`}
                  className="apothecary-card p-6 hover:shadow-soft transition-all duration-300 group"
                >
                  <h3 className="font-serif text-xl text-ink mb-3 group-hover:text-herbal transition-colors">
                    {remedy.title}
                  </h3>
                  <p className="text-sm text-ink font-sans line-clamp-3 mb-4">
                    {remedy.description}
                  </p>
                  <div className="border-t border-shadow/30 pt-4">
                    <p className="text-xs text-herbal font-sans mb-2">Helpful plants:</p>
                    <div className="flex flex-wrap gap-1">
                      {remedy.plants.slice(0, 4).map((herb, index) => (
                        <span 
                          key={index} 
                          className="text-xs px-2 py-1 bg-sand text-ink rounded-full"
                        >
                          {herb}
                        </span>
                      ))}
                      {remedy.plants.length > 4 && (
                        <span className="text-xs text-herbal">+{remedy.plants.length - 4} more</span>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 text-herbal text-sm font-sans group-hover:text-ink transition-colors">
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
          <h2 className="font-serif text-3xl text-white mb-6">Find Your Plant Allies</h2>
          <p className="text-lg text-white/90 font-sans mb-8 max-w-2xl mx-auto">
            Discover the specific plants that can support your wellness journey, or use our search to find exactly what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/plants"
              className="inline-block px-8 py-4 bg-gold text-white hover:bg-ink transition-colors duration-300 text-sm tracking-wider uppercase font-sans rounded-md shadow-soft"
            >
              Browse Plants
            </Link>
            <Link
              href="/search"
              className="inline-block px-8 py-4 border border-white text-white hover:bg-white hover:text-herbal transition-colors duration-300 text-sm tracking-wider uppercase font-sans rounded-md"
            >
              Search Remedies
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}