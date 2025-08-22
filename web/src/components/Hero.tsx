'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { allPlants, allRemedies } from '@/lib/content-loader'

interface SearchResult {
  type: 'plant' | 'remedy'
  title: string
  slug: string
  description: string
  category?: string
}

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [showResults, setShowResults] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Close results when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm.trim().length >= 2) {
        performSearch(searchTerm)
      } else {
        setResults([])
        setShowResults(false)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [searchTerm])

  const performSearch = (term: string) => {
    setIsLoading(true)
    const lowercaseTerm = term.toLowerCase()
    const searchResults: SearchResult[] = []

    // Search plants
    allPlants.forEach(plant => {
      if (
        plant.title.toLowerCase().includes(lowercaseTerm) ||
        plant.latinName.toLowerCase().includes(lowercaseTerm) ||
        plant.description.toLowerCase().includes(lowercaseTerm) ||
        plant.uses.some(use => use.toLowerCase().includes(lowercaseTerm))
      ) {
        searchResults.push({
          type: 'plant',
          title: plant.title,
          slug: plant.slug,
          description: plant.description,
          category: plant.category
        })
      }
    })

    // Search remedies
    allRemedies.forEach(remedy => {
      if (
        remedy.title.toLowerCase().includes(lowercaseTerm) ||
        remedy.description.toLowerCase().includes(lowercaseTerm) ||
        remedy.plants.some(herb => herb.toLowerCase().includes(lowercaseTerm))
      ) {
        searchResults.push({
          type: 'remedy',
          title: remedy.title,
          slug: remedy.slug,
          description: remedy.description,
          category: remedy.category
        })
      }
    })

    // Sort by relevance and limit results
    const sortedResults = searchResults
      .sort((a, b) => {
        // Prioritize exact matches
        const aExact = a.title.toLowerCase() === lowercaseTerm
        const bExact = b.title.toLowerCase() === lowercaseTerm
        if (aExact && !bExact) return -1
        if (!aExact && bExact) return 1
        return 0
      })
      .slice(0, 6)

    setResults(sortedResults)
    setShowResults(sortedResults.length > 0)
    setIsLoading(false)
  }

  const handleResultClick = (result: SearchResult) => {
    const path = result.type === 'plant' ? `/plant/${result.slug}` : `/condition/${result.slug}`
    router.push(path)
    setShowResults(false)
    setSearchTerm('')
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-sand">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 border border-herbal/20 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 border border-gold/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-herbal/10 rounded-full"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Elegant headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ink leading-tight tracking-tight mb-8">
          Discover the Sacred
          <span className="block text-herbal">Alchemy of Plants</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-herbal max-w-3xl mx-auto mb-12 leading-relaxed font-sans">
          Explore herbal remedies, medicinal mushrooms, and adaptogenic plants for holistic health. 
          Plantich guides you with curated wisdom and natural solutions for body, mind, and spirit.
        </p>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12" ref={searchRef}>
          <form onSubmit={handleSearchSubmit} className="relative">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for plants or conditions... (e.g., anxiety, ashwagandha)"
                className="w-full px-6 py-4 text-lg font-sans text-ink bg-white border border-clay rounded-lg focus:outline-none focus:ring-2 focus:ring-herbal focus:border-transparent shadow-soft pr-12"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-herbal hover:text-ink transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              {isLoading && (
                <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-herbal"></div>
                </div>
              )}
            </div>

            {/* Search Results Dropdown */}
            {showResults && results.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-clay rounded-lg shadow-soft z-50 max-h-96 overflow-y-auto">
                {results.map((result, index) => (
                  <button
                    key={`${result.type}-${result.slug}`}
                    onClick={() => handleResultClick(result)}
                    className="w-full text-left p-4 hover:bg-sand transition-colors border-b border-clay/30 last:border-b-0"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-serif text-lg text-ink">{result.title}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            result.type === 'plant' 
                              ? 'bg-herbal/10 text-herbal' 
                              : 'bg-gold/10 text-gold'
                          }`}>
                            {result.type === 'plant' ? 'Plant' : 'Condition'}
                          </span>
                          {result.category && (
                            <span className="text-xs px-2 py-1 bg-clay/20 text-ink rounded-full">
                              {result.category}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-herbal font-sans line-clamp-2">
                          {result.description}
                        </p>
                      </div>
                      <div className="text-herbal ml-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                ))}
                <div className="p-4 text-center border-t border-clay/30">
                  <button
                    type="submit"
                    className="text-sm text-herbal hover:text-ink transition-colors font-sans"
                  >
                    View all results →
                  </button>
                </div>
              </div>
            )}
          </form>

          {/* Quick Search Suggestions */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="text-sm text-herbal font-sans">Popular:</span>
            {['anxiety', 'ashwagandha', 'sleep', 'energy', 'digestion'].map((term) => (
              <button
                key={term}
                onClick={() => setSearchTerm(term)}
                className="text-sm px-3 py-1 bg-white/50 hover:bg-white border border-clay/30 rounded-full text-ink hover:text-herbal transition-colors font-sans"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="/conditions"
          className="inline-block px-8 py-4 bg-herbal text-white hover:bg-ink transition-colors duration-300 text-sm tracking-wider uppercase font-sans rounded-md shadow-soft"
        >
          Explore the Apothecary
        </Link>
      </div>
    </section>
  )
}
