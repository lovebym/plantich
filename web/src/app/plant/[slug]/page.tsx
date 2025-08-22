import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import { getPlantBySlug, getRemediesForPlant } from '@/content'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const plant = getPlantBySlug(slug)

  if (!plant) {
    return {
      title: 'Plant Not Found',
    }
  }

  return {
    title: `${plant.name} (${plant.latin})`,
    description: plant.description,
    keywords: [
      plant.name,
      plant.latin,
      'medicinal plant',
      'herbal remedy',
      'natural medicine',
      ...plant.uses
    ],
    openGraph: {
      title: `${plant.name} (${plant.latin})`,
      description: plant.description,
      type: 'article',
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(plant.name)}&subtitle=${encodeURIComponent(plant.latin)}`,
          width: 1200,
          height: 630,
          alt: `${plant.name} - ${plant.latin}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${plant.name} (${plant.latin})`,
      description: plant.description,
      images: [`/api/og?title=${encodeURIComponent(plant.name)}&subtitle=${encodeURIComponent(plant.latin)}`],
    },
  }
}

export default async function PlantPage({ params }: Props) {
  const { slug } = await params
  const plant = getPlantBySlug(slug)

  if (!plant) {
    notFound()
  }

  const relatedRemedies = getRemediesForPlant(plant.name)

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Drug',
    name: plant.name,
    alternateName: plant.latin,
    description: plant.description,
    category: plant.category,
    preparation: plant.preparation,
    indication: plant.uses,
    url: `https://plantich.com/plant/${plant.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://plantich.com/plant/${plant.slug}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Plantich',
      url: 'https://plantich.com',
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
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
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-1 gap-12 items-center text-center">
              {/* Plant Info */}
              <div>
                <h1 className="font-serif text-4xl text-ink mb-2">{plant.name}</h1>
                <p className="text-xl text-herbal italic mb-4">{plant.latin}</p>
                {plant.category && (
                  <span className="inline-block px-3 py-1 text-sm bg-herbal/10 text-herbal rounded-full mb-6">
                    {plant.category}
                  </span>
                )}
                <p className="text-lg text-ink font-sans leading-relaxed max-w-2xl mx-auto">
                  {plant.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Preparation Section */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-ink mb-8 text-center">Preparation & Use</h2>
            <div className="apothecary-card p-8 text-center">
              <p className="text-ink font-sans leading-relaxed text-lg">
                {plant.preparation}
              </p>
            </div>
          </div>
        </section>

        {/* Uses Section */}
        {plant.uses && plant.uses.length > 0 && (
          <section className="py-16 px-6 bg-clay">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl text-ink mb-8 text-center">Traditional Uses</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {plant.uses.map((use, index) => (
                  <div key={index} className="apothecary-card p-6 text-center">
                    <p className="text-ink font-sans text-lg">{use}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Conditions */}
        {relatedRemedies.length > 0 && (
          <section className="py-16 px-6 bg-background">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl text-ink mb-8 text-center">Supports These Conditions</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedRemedies.map((remedy) => (
                  <Link
                    key={remedy.slug}
                    href={`/condition/${remedy.slug}`}
                    className="apothecary-card p-6 hover:shadow-soft transition-shadow"
                  >
                    <h3 className="font-serif text-xl text-ink mb-3">{remedy.condition}</h3>
                    <p className="text-sm text-ink font-sans line-clamp-3">
                      {remedy.description}
                    </p>
                    <div className="mt-4 text-herbal text-sm font-sans">
                      Learn more →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Research Links */}
        {plant.sources && plant.sources.length > 0 && (
          <section className="py-16 px-6 bg-sand">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl text-ink mb-8 text-center">Research & Sources</h2>
              <div className="space-y-4">
                {plant.sources.map((source, index) => (
                  <a
                    key={index}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block apothecary-card p-6 hover:shadow-soft transition-shadow"
                  >
                    <h3 className="font-serif text-lg text-ink mb-2">{source.name}</h3>
                    <p className="text-sm text-herbal font-sans">External research link →</p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Important Disclaimer */}
        <section className="py-16 px-6 bg-herbal">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-white mb-4">Important Notice</h2>
            <p className="text-white/90 font-sans mb-6 leading-relaxed">
              This information is for educational purposes only and is not intended as medical advice. 
              Always consult with a qualified healthcare provider before using herbal remedies, 
              especially if you are pregnant, nursing, or taking medications.
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