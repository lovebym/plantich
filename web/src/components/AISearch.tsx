'use client'

import React, { useState } from "react"

type Hit = {
  type: "plant" | "remedy"
  title: string
  deck?: string
  why: string[]
  cautions?: string[]
  howToUse?: string[]
  sources: { title: string; url: string }[]
  url: string
  score: number
}

export default function AISearch() {
  const [q, setQ] = useState("")
  const [loading, setLoading] = useState(false)
  const [resp, setResp] = useState<null | {
    tldr: { title: string; text: string }
    hits: Hit[]
    safety: string
  }>(null)

  async function onSearch(e: React.FormEvent) {
    e.preventDefault()
    if (!q.trim()) return
    
    setLoading(true)
    setResp(null)
    
    try {
      const r = await fetch("/api/ai/search", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({ q }) 
      })
      const j = await r.json()
      
      if (j?.ok) {
        setResp(j.data)
      } else {
        console.error('Search failed:', j)
      }
    } catch (error) {
      console.error('Search error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onSearch} className="flex gap-3">
        <input 
          className="flex-1 border border-clay/30 rounded-lg px-4 py-3 bg-background text-ink placeholder:text-ink/50 focus:outline-none focus:ring-2 focus:ring-herbal/20 focus:border-herbal" 
          placeholder="Ask about plants or conditions…" 
          value={q} 
          onChange={e => setQ(e.target.value)}
          disabled={loading}
        />
        <button 
          className="rounded-lg px-6 py-3 bg-herbal text-background font-medium hover:bg-herbal/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors" 
          disabled={loading || !q.trim()}
        >
          {loading ? "Searching…" : "Search"}
        </button>
      </form>

      {resp && (
        <div className="space-y-6">
          {/* TL;DR Section */}
          <aside className="rounded-xl border border-clay/20 p-6 bg-sand/30">
            <div className="text-sm font-medium text-herbal mb-2">{resp.tldr.title}</div>
            <p className="text-ink leading-relaxed">{resp.tldr.text}</p>
          </aside>

          {/* Results Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {resp.hits.map((h, i) => (
              <div key={i} className="border border-clay/20 rounded-xl p-6 bg-background hover:shadow-sm transition-shadow">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-xs font-medium text-herbal uppercase tracking-wide mb-1">
                      {h.type}
                    </div>
                    <a 
                      className="text-lg font-serif text-ink hover:text-herbal transition-colors" 
                      href={h.url}
                    >
                      {h.title}
                    </a>
                  </div>
                  <div className="text-xs text-ink/50 bg-sand/50 px-2 py-1 rounded">
                    {h.score.toFixed(1)}
                  </div>
                </div>

                {/* Description */}
                {h.deck && (
                  <p className="text-ink/70 text-sm mb-4 line-clamp-2">{h.deck}</p>
                )}

                {/* Why this match */}
                <div className="mb-4">
                  <div className="text-sm font-medium text-ink mb-2">Why this match</div>
                  <ul className="text-sm text-ink/70 space-y-1">
                    {h.why.slice(0, 3).map((w, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-herbal mt-1">•</span>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How to use */}
                {h.howToUse && h.howToUse.length > 0 && (
                  <div className="mb-4">
                    <div className="text-sm font-medium text-ink mb-2">How to use</div>
                    <ul className="text-sm text-ink/70 space-y-1">
                      {h.howToUse.slice(0, 2).map((u, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-herbal mt-1">•</span>
                          <span>{u}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Cautions */}
                {h.cautions && h.cautions.length > 0 && (
                  <div className="mb-4">
                    <div className="text-sm font-medium text-red-600 mb-2">Cautions</div>
                    <ul className="text-sm text-red-600/80 space-y-1">
                      {h.cautions.slice(0, 2).map((c, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">⚠</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Sources */}
                {h.sources && h.sources.length > 0 && (
                  <div>
                    <div className="text-sm font-medium text-ink mb-2">Sources</div>
                    <ul className="text-sm text-ink/70 space-y-1">
                      {h.sources.slice(0, 3).map((s, idx) => (
                        <li key={idx}>
                          <a 
                            className="text-herbal hover:underline" 
                            href={s.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            {s.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Safety Notice */}
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-700">{resp.safety}</p>
          </div>
        </div>
      )}

      {/* No results state */}
      {resp && resp.hits.length === 0 && (
        <div className="text-center py-12">
          <div className="text-ink/50 mb-2">No specific matches found</div>
          <p className="text-sm text-ink/70">
            Try searching for specific conditions like &ldquo;anxiety&rdquo; or &ldquo;sleep&rdquo; 
            or plant names like &ldquo;ashwagandha&rdquo; or &ldquo;chamomile&rdquo;
          </p>
        </div>
      )}
    </div>
  )
}
