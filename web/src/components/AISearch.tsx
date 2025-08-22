'use client'

import { useState } from 'react'
import { plants, categorizedPlants } from '@/lib/plants'
import { remedies, categorizedRemedies } from '@/lib/remedies'

interface SearchResult {
  type: 'plant' | 'remedy'
  slug: string
  name: string
  category: string
  description: string
  why: string
  url: string
}

export default function AISearch() {
  const [input, setInput] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim()) return

    setIsLoading(true)
    setError('')

    try {
      const res = await fetch('/api/ai/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          query: input,
          plants: Object.values(plants),
          remedies: Object.values(remedies),
          categorizedPlants,
          categorizedRemedies
        }),
      })

      if (!res.ok) {
        throw new Error('Search failed')
      }

      const data = await res.json()
      setResults(data.results || [])
    } catch (err) {
      setError('Search failed. Please try again.')
      console.error('Search error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      mind: '🧠',
      body: '💪',
      immunity: '🛡️',
      skin: '✨',
      digestion: '🌿',
      energy: '⚡',
      hormones: '⚖️',
      pain: '🔥',
      detox: '🌱'
    }
    return icons[category.toLowerCase()] || '🌿'
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      mind: 'bg-blue-50 border-blue-200 text-blue-800',
      body: 'bg-green-50 border-green-200 text-green-800',
      immunity: 'bg-purple-50 border-purple-200 text-purple-800',
      skin: 'bg-pink-50 border-pink-200 text-pink-800',
      digestion: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      energy: 'bg-orange-50 border-orange-200 text-orange-800',
      hormones: 'bg-red-50 border-red-200 text-red-800',
      pain: 'bg-gray-50 border-gray-200 text-gray-800',
      detox: 'bg-emerald-50 border-emerald-200 text-emerald-800'
    }
    return colors[category.toLowerCase()] || 'bg-gray-50 border-gray-200 text-gray-800'
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif text-ink mb-4">
          AI Herbal Guide
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Describe your symptoms or health goals, and I&apos;ll recommend personalized herbal solutions from our comprehensive database.
        </p>
      </div>

      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-4 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="e.g., 'I feel tired and anxious, what herbs can help?'"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border border-clay rounded-lg px-4 py-3 text-ink placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-herbal focus:border-transparent"
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className="bg-herbal text-white px-6 py-3 rounded-lg font-medium hover:bg-herbal/90 transition-colors disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {error && (
        <div className="max-w-2xl mx-auto mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          {error}
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-xl font-serif text-ink text-center mb-6">
            Personalized Recommendations
          </h3>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {results.map((result, index) => (
              <div 
                key={`${result.type}-${result.slug}-${index}`}
                className="bg-background border border-clay rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">
                      {result.type === 'plant' ? '🌿' : '💊'}
                    </span>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(result.category)}`}>
                      {getCategoryIcon(result.category)} {result.category}
                    </span>
                  </div>
                </div>
                
                <h4 className="font-serif text-lg text-ink mb-2">
                  {result.name}
                </h4>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  {result.description}
                </p>
                
                {result.why && (
                  <p className="text-sm text-herbal mb-4">
                    <strong>Why this helps:</strong> {result.why}
                  </p>
                )}
                
                <a
                  href={result.url}
                  className="inline-flex items-center text-herbal hover:text-herbal/80 text-sm font-medium transition-colors"
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {!isLoading && !error && results.length === 0 && input && (
        <div className="text-center text-gray-500">
          No specific recommendations found. Try describing your symptoms in more detail.
        </div>
      )}

      <div className="mt-12 max-w-4xl mx-auto">
        <h3 className="text-xl font-serif text-ink text-center mb-6">
          Browse by Category
        </h3>
        
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {Object.entries(categorizedRemedies).map(([category, categoryRemedies]) => (
            <a
              key={category}
              href={`/remedies/${category}`}
              className="group p-4 border border-clay rounded-lg hover:bg-sand transition-colors text-center"
            >
              <div className="text-3xl mb-2">
                {getCategoryIcon(category)}
              </div>
              <h4 className="font-medium text-ink capitalize mb-1">
                {category}
              </h4>
              <p className="text-xs text-gray-500">
                {categoryRemedies.length} remedies
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
