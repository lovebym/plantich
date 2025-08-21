import Link from 'next/link'
import { allPlants, getPlantsByCategory } from '@/content'

export default function PlantsPage() {
  const mindPlants = getPlantsByCategory('Mind')
  const bodyPlants = getPlantsByCategory('Body')
  const spiritPlants = getPlantsByCategory('Spirit')

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-sand py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl text-ink mb-4">Sacred Plant Allies</h1>
          <p className="text-lg text-herbal font-sans leading-relaxed max-w-2xl mx-auto">
            Discover the healing wisdom of plants, organized by their primary energetic support for mind, body, and spirit.
          </p>
        </div>
      </section>

      {/* Mind Plants */}
      {mindPlants.length > 0 && (
        <section className="py-16 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl text-ink mb-8 text-center">Mind</h2>
            <p className="text-center text-herbal font-sans mb-12 max-w-2xl mx-auto">
              Plants that support mental clarity, emotional balance, and cognitive function.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mindPlants.map((plant) => (
                <Link
                  key={plant.slug}
                  href={`/plant/${plant.slug}`}
                  className="apothecary-card p-6 hover:shadow-soft transition-shadow"
                >
                  <h3 className="font-serif text-xl text-ink mb-2">{plant.name}</h3>
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
                  </div>
                  <div className="text-herbal text-sm font-sans">
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
        <section className="py-16 px-6 bg-clay">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl text-ink mb-8 text-center">Body</h2>
            <p className="text-center text-herbal font-sans mb-12 max-w-2xl mx-auto">
              Plants that strengthen physical resilience, support vital systems, and restore energy.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bodyPlants.map((plant) => (
                <Link
                  key={plant.slug}
                  href={`/plant/${plant.slug}`}
                  className="apothecary-card p-6 hover:shadow-soft transition-shadow"
                >
                  <h3 className="font-serif text-xl text-ink mb-2">{plant.name}</h3>
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
                  </div>
                  <div className="text-herbal text-sm font-sans">
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
        <section className="py-16 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl text-ink mb-8 text-center">Spirit</h2>
            <p className="text-center text-herbal font-sans mb-12 max-w-2xl mx-auto">
              Plants that nurture inner peace, deepen intuition, and support spiritual well-being.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {spiritPlants.map((plant) => (
                <Link
                  key={plant.slug}
                  href={`/plant/${plant.slug}`}
                  className="apothecary-card p-6 hover:shadow-soft transition-shadow"
                >
                  <h3 className="font-serif text-xl text-ink mb-2">{plant.name}</h3>
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
                  </div>
                  <div className="text-herbal text-sm font-sans">
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
        <section className="py-16 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl text-ink mb-8 text-center">All Plants</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allPlants.map((plant) => (
                <Link
                  key={plant.slug}
                  href={`/plant/${plant.slug}`}
                  className="apothecary-card p-6 hover:shadow-soft transition-shadow"
                >
                  <h3 className="font-serif text-xl text-ink mb-2">{plant.name}</h3>
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
                  </div>
                  <div className="text-herbal text-sm font-sans">
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