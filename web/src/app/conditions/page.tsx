import Link from 'next/link'
import { allRemedies, getRemediesByCategory } from '@/content'

export default function ConditionsPage() {
  const mindRemedies = getRemediesByCategory('Mind')
  const bodyRemedies = getRemediesByCategory('Body')
  const spiritRemedies = getRemediesByCategory('Spirit')

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-sand py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl text-ink mb-4">Natural Pathways to Healing</h1>
          <p className="text-lg text-herbal font-sans leading-relaxed max-w-2xl mx-auto">
            Explore natural approaches to common health concerns, organized by their impact on mind, body, and spirit.
          </p>
        </div>
      </section>

      {/* Mind Conditions */}
      {mindRemedies.length > 0 && (
        <section className="py-16 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl text-ink mb-8 text-center">Mind</h2>
            <p className="text-center text-herbal font-sans mb-12 max-w-2xl mx-auto">
              Mental and emotional wellness supported by nature&apos;s wisdom.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {mindRemedies.map((remedy) => (
                <Link
                  key={remedy.slug}
                  href={`/condition/${remedy.slug}`}
                  className="apothecary-card p-6 hover:shadow-soft transition-shadow"
                >
                  <h3 className="font-serif text-xl text-ink mb-3">{remedy.condition}</h3>
                  <p className="text-sm text-ink font-sans line-clamp-3 mb-4">
                    {remedy.description}
                  </p>
                  <div className="border-t border-shadow/30 pt-4">
                    <p className="text-xs text-herbal font-sans mb-2">Helpful plants:</p>
                    <div className="flex flex-wrap gap-1">
                      {remedy.herbs.slice(0, 4).map((herb, index) => (
                        <span 
                          key={index} 
                          className="text-xs px-2 py-1 bg-sand text-ink rounded-full"
                        >
                          {herb}
                        </span>
                      ))}
                      {remedy.herbs.length > 4 && (
                        <span className="text-xs text-herbal">+{remedy.herbs.length - 4} more</span>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 text-herbal text-sm font-sans">
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
        <section className="py-16 px-6 bg-clay">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl text-ink mb-8 text-center">Body</h2>
            <p className="text-center text-herbal font-sans mb-12 max-w-2xl mx-auto">
              Physical wellness and vitality through plant medicine.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {bodyRemedies.map((remedy) => (
                <Link
                  key={remedy.slug}
                  href={`/condition/${remedy.slug}`}
                  className="apothecary-card p-6 hover:shadow-soft transition-shadow"
                >
                  <h3 className="font-serif text-xl text-ink mb-3">{remedy.condition}</h3>
                  <p className="text-sm text-ink font-sans line-clamp-3 mb-4">
                    {remedy.description}
                  </p>
                  <div className="border-t border-shadow/30 pt-4">
                    <p className="text-xs text-herbal font-sans mb-2">Helpful plants:</p>
                    <div className="flex flex-wrap gap-1">
                      {remedy.herbs.slice(0, 4).map((herb, index) => (
                        <span 
                          key={index} 
                          className="text-xs px-2 py-1 bg-sand text-ink rounded-full"
                        >
                          {herb}
                        </span>
                      ))}
                      {remedy.herbs.length > 4 && (
                        <span className="text-xs text-herbal">+{remedy.herbs.length - 4} more</span>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 text-herbal text-sm font-sans">
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
        <section className="py-16 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl text-ink mb-8 text-center">Spirit</h2>
            <p className="text-center text-herbal font-sans mb-12 max-w-2xl mx-auto">
              Soul nourishment and spiritual balance through sacred plants.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {spiritRemedies.map((remedy) => (
                <Link
                  key={remedy.slug}
                  href={`/condition/${remedy.slug}`}
                  className="apothecary-card p-6 hover:shadow-soft transition-shadow"
                >
                  <h3 className="font-serif text-xl text-ink mb-3">{remedy.condition}</h3>
                  <p className="text-sm text-ink font-sans line-clamp-3 mb-4">
                    {remedy.description}
                  </p>
                  <div className="border-t border-shadow/30 pt-4">
                    <p className="text-xs text-herbal font-sans mb-2">Helpful plants:</p>
                    <div className="flex flex-wrap gap-1">
                      {remedy.herbs.slice(0, 4).map((herb, index) => (
                        <span 
                          key={index} 
                          className="text-xs px-2 py-1 bg-sand text-ink rounded-full"
                        >
                          {herb}
                        </span>
                      ))}
                      {remedy.herbs.length > 4 && (
                        <span className="text-xs text-herbal">+{remedy.herbs.length - 4} more</span>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 text-herbal text-sm font-sans">
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
        <section className="py-16 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl text-ink mb-8 text-center">All Conditions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {allRemedies.map((remedy) => (
                <Link
                  key={remedy.slug}
                  href={`/condition/${remedy.slug}`}
                  className="apothecary-card p-6 hover:shadow-soft transition-shadow"
                >
                  <h3 className="font-serif text-xl text-ink mb-3">{remedy.condition}</h3>
                  <p className="text-sm text-ink font-sans line-clamp-3 mb-4">
                    {remedy.description}
                  </p>
                  <div className="border-t border-shadow/30 pt-4">
                    <p className="text-xs text-herbal font-sans mb-2">Helpful plants:</p>
                    <div className="flex flex-wrap gap-1">
                      {remedy.herbs.slice(0, 4).map((herb, index) => (
                        <span 
                          key={index} 
                          className="text-xs px-2 py-1 bg-sand text-ink rounded-full"
                        >
                          {herb}
                        </span>
                      ))}
                      {remedy.herbs.length > 4 && (
                        <span className="text-xs text-herbal">+{remedy.herbs.length - 4} more</span>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 text-herbal text-sm font-sans">
                    Learn more →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}