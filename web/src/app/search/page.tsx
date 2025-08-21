'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

interface Plant {
  _id: string
  name: string
  latinName?: string
  slug: { current: string }
  description: string
  imageUrl?: string
  category?: string
  uses?: string[]
}

interface Condition {
  _id: string
  name: string
  slug: { current: string }
  description: string
  category?: string
  plantCount?: number
}

function SearchContent() {
  const [searchTerm, setSearchTerm] = useState('')
  const [plants, setPlants] = useState<Plant[]>([])
  const [conditions, setConditions] = useState<Condition[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  // Get initial search term from URL
  useEffect(() => {
    const initialSearch = searchParams.get('q') || ''
    setSearchTerm(initialSearch)
    if (initialSearch) {
      performSearch(initialSearch)
    }
  }, [searchParams])

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm.trim()) {
        performSearch(searchTerm)
      } else {
        setPlants([])
        setConditions([])
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [searchTerm])

  const performSearch = async (term: string) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(term)}`)
      const data = await response.json()
      setPlants(data.plants || [])
      setConditions(data.conditions || [])
    } catch (error) {
      console.error('Search error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    
    // Update URL
    if (value.trim()) {
      router.push(`/search?q=${encodeURIComponent(value)}`)
    } else {
      router.push('/search')
    }
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Search Header */}
      <section className="bg-sand py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl text-ink mb-8 text-center">Search the Apothecary</h1>
          
          {/* Search Input */}
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search for plants or conditions... (e.g., anxiety, ashwagandha)"
              className="w-full px-6 py-4 text-lg font-sans text-ink bg-white border border-clay rounded-lg focus:outline-none focus:ring-2 focus:ring-herbal focus:border-transparent shadow-soft"
            />
            {isLoading && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-herbal"></div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {searchTerm && !isLoading && (
            <>
              {/* Plants Results */}
              {plants.length > 0 && (
                <div className="mb-12">
                  <h2 className="font-serif text-2xl text-ink mb-6">Plants ({plants.length})</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plants.map((plant) => (
                      <Link
                        key={plant._id}
                        href={`/plant/${plant.slug.current}`}
                        className="apothecary-card p-6 hover:shadow-soft transition-shadow"
                      >
                        {plant.imageUrl && (
                          <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-clay/20">
                            <Image
                              src={plant.imageUrl}
                              alt={plant.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <h3 className="font-serif text-xl text-ink mb-2">{plant.name}</h3>
                        {plant.latinName && (
                          <p className="text-sm text-herbal italic mb-3">{plant.latinName}</p>
                        )}
                        <p className="text-sm text-ink font-sans line-clamp-3">
                          {plant.description}
                        </p>
                        {plant.category && (
                          <span className="inline-block mt-3 px-2 py-1 text-xs bg-herbal/10 text-herbal rounded">
                            {plant.category}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Conditions Results */}
              {conditions.length > 0 && (
                <div className="mb-12">
                  <h2 className="font-serif text-2xl text-ink mb-6">Conditions ({conditions.length})</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {conditions.map((condition) => (
                      <Link
                        key={condition._id}
                        href={`/condition/${condition.slug.current}`}
                        className="apothecary-card p-6 hover:shadow-soft transition-shadow"
                      >
                        <h3 className="font-serif text-xl text-ink mb-3">{condition.name}</h3>
                        <p className="text-sm text-ink font-sans line-clamp-3 mb-3">
                          {condition.description}
                        </p>
                        <div className="flex justify-between items-center">
                          {condition.category && (
                            <span className="inline-block px-2 py-1 text-xs bg-herbal/10 text-herbal rounded">
                              {condition.category}
                            </span>
                          )}
                          {condition.plantCount && (
                            <span className="text-xs text-herbal">
                              {condition.plantCount} related plants
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* No Results */}
              {plants.length === 0 && conditions.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🌿</div>
                  <h3 className="font-serif text-2xl text-ink mb-2">No results found</h3>
                  <p className="text-herbal font-sans">
                    Try searching for a different term or browse our categories.
                  </p>
                </div>
              )}
            </>
          )}

          {/* Initial State */}
          {!searchTerm && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-serif text-2xl text-ink mb-2">Start your search</h3>
              <p className="text-herbal font-sans max-w-md mx-auto">
                Search for plants by name or condition, or explore our categories to discover natural remedies.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="bg-background min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-herbal"></div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  )
}
