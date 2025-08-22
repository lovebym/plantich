import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import { getRemedyBySlug, getPlantsForRemedy } from '@/content'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const remedy = getRemedyBySlug(slug)

  if (!remedy) {
    return {
      title: 'Condition Not Found',
    }
  }

  return {
    title: `Natural Remedies for ${remedy.condition}`,
    description: remedy.description,
    keywords: [
      remedy.condition,
      'natural remedies',
      'herbal treatment',
      'holistic healing',
      'plant medicine',
      ...remedy.herbs
    ],
    openGraph: {
      title: `Natural Remedies for ${remedy.condition}`,
      description: remedy.description,
      type: 'article',
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(`Natural Remedies for ${remedy.condition}`)}&subtitle=${encodeURIComponent('Herbal Solutions')}`,
          width: 1200,
          height: 630,
          alt: `Natural Remedies for ${remedy.condition}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Natural Remedies for ${remedy.condition}`,
      description: remedy.description,
      images: [`/api/og?title=${encodeURIComponent(`Natural Remedies for ${remedy.condition}`)}&subtitle=${encodeURIComponent('Herbal Solutions')}`],
    },
  }
}

export default async function ConditionPage({ params }: Props) {
  const { slug } = await params
  const remedy = getRemedyBySlug(slug)

  if (!remedy) {
    notFound()
  }

  const relatedPlants = getPlantsForRemedy(remedy.condition)

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: `Natural Remedies for ${remedy.condition}`,
    description: remedy.description,
    category: remedy.category,
    url: `https://plantich.com/condition/${remedy.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://plantich.com/condition/${remedy.slug}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Plantich',
      url: 'https://plantich.com',
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    about: {
      '@type': 'MedicalCondition',
      name: remedy.condition,
    },
    treatment: {
      '@type': 'MedicalTherapy',
      name: 'Herbal Remedy',
      description: remedy.approach,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="bg-sand py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl text-ink mb-4">{remedy.condition}</h1>
            {remedy.category && (
              <span className="inline-block px-3 py-1 text-sm bg-herbal/10 text-herbal rounded-full mb-6">
                {remedy.category}
              </span>
            )}
            <p className="text-lg text-ink font-sans leading-relaxed max-w-2xl mx-auto">
              {remedy.description}
            </p>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-ink mb-8 text-center">Herbal Approach</h2>
            <div className="apothecary-card p-8 text-center">
              <p className="text-ink font-sans leading-relaxed text-lg">
                {remedy.approach}
              </p>
            </div>
          </div>
        </section>

        {/* Related Plants */}
        {relatedPlants.length > 0 && (
          <section className="py-16 px-6 bg-clay">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl text-ink mb-8 text-center">Helpful Plants</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPlants.map((plant) => (
                  <Link
                    key={plant.slug}
                    href={`/plant/${plant.slug}`}
                    className="apothecary-card p-6 hover:shadow-soft transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-serif text-xl text-ink">{plant.name}</h3>
                      {plant.category && (
                        <span className="text-xs px-2 py-1 bg-herbal/10 text-herbal rounded-full">
                          {plant.category}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-herbal italic mb-3">{plant.latin}</p>
                    <p className="text-sm text-ink font-sans line-clamp-3 mb-4">
                      {plant.description}
                    </p>
                    
                    {/* Show what this plant helps with */}
                    {plant.uses.length > 0 && (
                      <div className="border-t border-shadow/30 pt-3">
                        <p className="text-xs text-herbal font-sans mb-2">Also helps with:</p>
                        <div className="flex flex-wrap gap-1">
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
                      </div>
                    )}
                    
                    <div className="mt-4 text-herbal text-sm font-sans">
                      Learn more →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* No Plants Fallback */}
        {relatedPlants.length === 0 && (
          <section className="py-16 px-6 bg-clay">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl text-ink mb-8">Plant Recommendations</h2>
              <div className="apothecary-card p-8">
                <p className="text-ink font-sans">
                  We&apos;re still building our plant database for this condition. 
                  Check back soon for specific herbal recommendations.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Important Disclaimer */}
        <section className="py-16 px-6 bg-herbal">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-white mb-4">Important Notice</h2>
            <p className="text-white/90 font-sans mb-6 leading-relaxed">
              This information is for educational purposes only and is not intended to diagnose, 
              treat, cure, or prevent any disease. Always consult with a qualified healthcare 
              provider before using herbal remedies, especially if you have underlying health 
              conditions or are taking medications.
            </p>
            <Link
              href="/disclaimer"
              className="inline-block bg-gold text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition"
            >
              Read Full Disclaimer
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}