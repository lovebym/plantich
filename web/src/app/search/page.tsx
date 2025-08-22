'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { allPlants, allRemedies, getPlantsByCategory, getRemediesByCategory, Plant, Remedy } from '@/lib/content-loader'

function SearchContent() {
  const [searchTerm, setSearchTerm] = useState('')
  const [plants, setPlants] = useState<Plant[]>([])
  const [remedies, setRemedies] = useState<Remedy[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all')
  const searchParams = useSearchParams()
  const router = useRouter()

  // Get initial search term from URL
  useEffect(() => {
    const initialSearch = searchParams.get('q') || ''
    const category = searchParams.get('category') || 'all'
    const type = searchParams.get('type') || 'all'
    
    setSearchTerm(initialSearch)
    setSelectedCategory(category)
    setSelectedType(type)
    
    if (initialSearch || category !== 'all' || type !== 'all') {
      performSearch(initialSearch, category, type)
    }
  }, [searchParams])

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(searchTerm, selectedCategory, selectedType)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchTerm, selectedCategory, selectedType])

  const performSearch = (term: string, category: string, type: string) => {
    setIsLoading(true)
    
    try {
      let filteredPlants = allPlants
      let filteredRemedies = allRemedies

      // Filter by category
      if (category !== 'all') {
        filteredPlants = getPlantsByCategory(category as 'Mind' | 'Body' | 'Spirit')
        filteredRemedies = getRemediesByCategory(category as 'Mind' | 'Body' | 'Spirit')
      }

      // Filter by search term
      if (term.trim()) {
        const lowercaseTerm = term.toLowerCase()
        filteredPlants = filteredPlants.filter(plant => 
          plant.title.toLowerCase().includes(lowercaseTerm) ||
          plant.latinName.toLowerCase().includes(lowercaseTerm) ||
          plant.description.toLowerCase().includes(lowercaseTerm) ||
          plant.uses.some(use => use.toLowerCase().includes(lowercaseTerm))
        )
        
        filteredRemedies = filteredRemedies.filter(remedy => 
          remedy.title.toLowerCase().includes(lowercaseTerm) ||
          remedy.description.toLowerCase().includes(lowercaseTerm) ||
          remedy.plants.some(herb => herb.toLowerCase().includes(lowercaseTerm))
        )
      }

      // Filter by type
      if (type === 'plants') {
        filteredRemedies = []
      } else if (type === 'remedies') {
        filteredPlants = []
      }

      setPlants(filteredPlants)
      setRemedies(filteredRemedies)
    } catch (error) {
      console.error('Search error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    updateURL(value, selectedCategory, selectedType)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    updateURL(searchTerm, category, selectedType)
  }

  const handleTypeChange = (type: string) => {
    setSelectedType(type)
    updateURL(searchTerm, selectedCategory, type)
  }

  const updateURL = (term: string, category: string, type: string) => {
    const params = new URLSearchParams()
    if (term.trim()) params.set('q', term)
    if (category !== 'all') params.set('category', category)
    if (type !== 'all') params.set('type', type)
    
    const url = params.toString() ? `/search?${params.toString()}` : '/search'
    router.push(url)
  }

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Mind', label: 'Mind' },
    { value: 'Body', label: 'Body' },
    { value: 'Spirit', label: 'Spirit' }
  ]

  const types = [
    { value: 'all', label: 'All' },
    { value: 'plants', label: 'Plants' },
    { value: 'remedies', label: 'Conditions' }
  ]

  return (
    <div className="bg-background min-h-screen">
      {/* Search Header */}
      <section className="bg-sand py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl text-ink mb-8 text-center">Search the Apothecary</h1>
          
          {/* Search Input */}
          <div className="relative max-w-2xl mx-auto mb-8">
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

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Category Filter */}
            <div className="flex flex-col">
              <label className="text-sm font-sans text-ink mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="px-4 py-2 border border-clay rounded-lg bg-white text-ink font-sans focus:outline-none focus:ring-2 focus:ring-herbal"
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="flex flex-col">
              <label className="text-sm font-sans text-ink mb-2">Type</label>
              <select
                value={selectedType}
                onChange={(e) => handleTypeChange(e.target.value)}
                className="px-4 py-2 border border-clay rounded-lg bg-white text-ink font-sans focus:outline-none focus:ring-2 focus:ring-herbal"
              >
                {types.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {(searchTerm || selectedCategory !== 'all' || selectedType !== 'all') && !isLoading && (
            <>
              {/* Plants Results */}
              {plants.length > 0 && (
                <div className="mb-12">
                  <h2 className="font-serif text-2xl text-ink mb-6">Plants ({plants.length})</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plants.map((plant) => (
                      <Link
                        key={plant.slug}
                        href={`/plant/${plant.slug}`}
                        className="apothecary-card p-6 hover:shadow-soft transition-shadow group"
                      >
                        <h3 className="font-serif text-xl text-ink mb-2 group-hover:text-herbal transition-colors">
                          {plant.title}
                        </h3>
                        <p className="text-sm text-herbal italic mb-3">{plant.latinName}</p>
                        <p className="text-sm text-ink font-sans line-clamp-3 mb-4">
                          {plant.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {plant.category && (
                            <span className="inline-block px-2 py-1 text-xs bg-herbal/10 text-herbal rounded">
                              {plant.category}
                            </span>
                          )}
                          {plant.uses.slice(0, 2).map((use, index) => (
                            <span key={index} className="inline-block px-2 py-1 text-xs bg-clay/20 text-ink rounded">
                              {use}
                            </span>
                          ))}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Remedies Results */}
              {remedies.length > 0 && (
                <div className="mb-12">
                  <h2 className="font-serif text-2xl text-ink mb-6">Conditions ({remedies.length})</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {remedies.map((remedy) => (
                      <Link
                        key={remedy.slug}
                        href={`/condition/${remedy.slug}`}
                        className="apothecary-card p-6 hover:shadow-soft transition-shadow group"
                      >
                        <h3 className="font-serif text-xl text-ink mb-3 group-hover:text-herbal transition-colors">
                          {remedy.title}
                        </h3>
                        <p className="text-sm text-ink font-sans line-clamp-3 mb-4">
                          {remedy.description}
                        </p>
                        <div className="flex justify-between items-center">
                          {remedy.category && (
                            <span className="inline-block px-2 py-1 text-xs bg-herbal/10 text-herbal rounded">
                              {remedy.category}
                            </span>
                          )}
                          <span className="text-xs text-herbal">
                            {remedy.plants.length} related plants
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* No Results */}
              {plants.length === 0 && remedies.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🌿</div>
                  <h3 className="font-serif text-2xl text-ink mb-2">No results found</h3>
                  <p className="text-herbal font-sans">
                    Try adjusting your search terms or filters to discover more remedies.
                  </p>
                </div>
              )}
            </>
          )}

          {/* Initial State */}
          {!searchTerm && selectedCategory === 'all' && selectedType === 'all' && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-serif text-2xl text-ink mb-2">Start your search</h3>
              <p className="text-herbal font-sans max-w-md mx-auto mb-8">
                Search for plants by name or condition, or explore our categories to discover natural remedies.
              </p>
              
              {/* Quick Categories */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Link
                  href="/search?category=Mind"
                  className="apothecary-card p-6 text-center hover:shadow-soft transition-shadow group"
                >
                  <div className="text-3xl mb-3">🧠</div>
                  <h4 className="font-serif text-lg text-ink mb-2 group-hover:text-herbal transition-colors">Mind</h4>
                  <p className="text-sm text-herbal font-sans">Mental clarity, focus, and emotional balance</p>
                </Link>
                
                <Link
                  href="/search?category=Body"
                  className="apothecary-card p-6 text-center hover:shadow-soft transition-shadow group"
                >
                  <div className="text-3xl mb-3">💪</div>
                  <h4 className="font-serif text-lg text-ink mb-2 group-hover:text-herbal transition-colors">Body</h4>
                  <p className="text-sm text-herbal font-sans">Physical health, digestion, and vitality</p>
                </Link>
                
                <Link
                  href="/search?category=Spirit"
                  className="apothecary-card p-6 text-center hover:shadow-soft transition-shadow group"
                >
                  <div className="text-3xl mb-3">✨</div>
                  <h4 className="font-serif text-lg text-ink mb-2 group-hover:text-herbal transition-colors">Spirit</h4>
                  <p className="text-sm text-herbal font-sans">Sleep, intuition, and spiritual wellness</p>
                </Link>
              </div>
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
