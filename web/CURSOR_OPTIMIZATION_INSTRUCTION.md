# 🧠 CURSOR INSTRUKTION: OPTIMERA PLANTICH STARTSIDA

## Syfte
Gör Plantich till den mest AI- och SEO-optimerade botaniska hälsosajten i världen.
Sidan ska kännas exklusiv, nordisk, spirituell och vetenskaplig – inspirerad av Byredo x Gotain x växtapotek.
Målet är att skapa texter och struktur som direkt rankar högt i AI-sök (Perplexity, ChatGPT, Google SGE).

## Uppdrag
Skapa om startsidan ("/") med följande delar:

### 1. <head> metadata:
```typescript
// I layout.tsx eller page.tsx
export const metadata: Metadata = {
  title: "Plantich – Find the Right Plant for Your Mind, Body & Spirit",
  description: "Feeling stressed, tired or unwell? Discover the best medicinal herbs and adaptogens matched to your needs. Backed by research, designed with care.",
  keywords: "herbal remedies, medicinal plants, adaptogens, anxiety, sleep, energy, digestion, natural medicine",
  openGraph: {
    title: "Plantich – Your Botanical Ally for Mind, Body & Spirit",
    description: "Personalized plant-based support—scientifically informed, spiritually attuned.",
    type: "website",
    images: ["/og-image.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Plantich – Find the Right Plant for Your Mind, Body & Spirit",
    description: "Personalized plant-based support—scientifically informed, spiritually attuned."
  }
}
```

### 2. Hero section (Hero.tsx):
```typescript
// Komponentstruktur
<section className="hero-section">
  <h1 className="text-5xl md:text-6xl font-serif text-ink mb-6">
    Plantich: The Sacred Alchemy of Plants
  </h1>
  
  <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl">
    Feeling stressed, sleepless, or out of balance? Plantich gives you personalized plant-based support—scientifically informed, spiritually attuned.
  </p>
  
  <button className="bg-herbal text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-herbal/90 transition-colors">
    Start your herbal journey
  </button>
</section>
```

### 3. Value badges (ValueBadges.tsx):
```typescript
// Visa 3 badges under hero
<div className="flex flex-wrap gap-4 justify-center mb-12">
  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-800 border border-blue-200">
    Evidence-Aware (Examine, MSKCC)
  </span>
  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-50 text-green-800 border border-green-200">
    Nordic Design
  </span>
  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-50 text-purple-800 border border-purple-200">
    No Ads, Just Plants
  </span>
</div>
```

### 4. Categories grid (CategoryGrid.tsx):
```typescript
// Tre huvudkategorier
const categories = [
  {
    icon: "🧠",
    title: "Mind",
    subtitle: "Calm, Focus, Mood",
    description: "Support for anxiety, stress, depression, and cognitive function",
    href: "/remedies/mind"
  },
  {
    icon: "💪",
    title: "Body", 
    subtitle: "Digestion, Immunity, Energy",
    description: "Natural support for physical wellness and vitality",
    href: "/remedies/body"
  },
  {
    icon: "✨",
    title: "Spirit",
    subtitle: "Sleep, Hormonal Flow, Presence", 
    description: "Deep restoration and spiritual wellness",
    href: "/remedies/spirit"
  }
]
```

### 5. Featured Symptoms (SymptomList.tsx):
```typescript
// Med microcopy som AI älskar
const symptoms = [
  {
    name: "Anxiety & Stress",
    microcopy: "Calm your nervous system",
    href: "/remedies/mind/anxiety"
  },
  {
    name: "Fatigue", 
    microcopy: "Gently energize your body",
    href: "/remedies/energy"
  },
  {
    name: "Digestive issues",
    microcopy: "Soothe your gut, ease bloating", 
    href: "/remedies/digestion"
  },
  {
    name: "Sleep problems",
    microcopy: "Restore your natural rhythm",
    href: "/remedies/mind/sleep"
  }
]
```

### 6. "Why Plantich?"-sektion (WhyPlantich.tsx):
```typescript
// Kort text och 3 kolumner
<section className="why-plantich">
  <h2 className="text-3xl font-serif text-ink mb-6 text-center">
    Why Plantich?
  </h2>
  
  <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
    Most herb sites are either clinical or chaotic. We created Plantich to be beautiful, evidence-based, and made for real emotional states.
  </p>
  
  <div className="grid md:grid-cols-3 gap-8">
    <div className="text-center">
      <h3 className="text-xl font-serif text-ink mb-3">Traditional Wisdom</h3>
      <p className="text-gray-600">Rooted in centuries of plant-based healing traditions</p>
    </div>
    <div className="text-center">
      <h3 className="text-xl font-serif text-ink mb-3">Scientific Awareness</h3>
      <p className="text-gray-600">Backed by research from Examine, MSKCC, and trusted sources</p>
    </div>
    <div className="text-center">
      <h3 className="text-xl font-serif text-ink mb-3">Designed for Calm</h3>
      <p className="text-gray-600">Inspired by Scandinavian aesthetics and mindful design</p>
    </div>
  </div>
</section>
```

### 7. Footer (Footer.tsx):
```typescript
// Med alla nödvändiga länkar
<footer className="bg-sand/30 py-12">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid md:grid-cols-4 gap-8">
      <div>
        <h3 className="font-serif text-lg text-ink mb-4">Plantich</h3>
        <p className="text-gray-600 text-sm">
          Your botanical ally for mind, body & spirit
        </p>
      </div>
      <div>
        <h4 className="font-medium text-ink mb-3">Explore</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="/remedies" className="text-gray-600 hover:text-herbal">All Remedies</a></li>
          <li><a href="/plants" className="text-gray-600 hover:text-herbal">Plant Library</a></li>
          <li><a href="/ai-search" className="text-gray-600 hover:text-herbal">AI Search</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-medium text-ink mb-3">About</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="/about" className="text-gray-600 hover:text-herbal">Our Story</a></li>
          <li><a href="/privacy" className="text-gray-600 hover:text-herbal">Privacy</a></li>
          <li><a href="/contact" className="text-gray-600 hover:text-herbal">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-medium text-ink mb-3">Stay Connected</h4>
        <p className="text-gray-600 text-sm mb-3">
          Get herbal wisdom to your inbox — gently.
        </p>
        <button className="bg-herbal text-white px-4 py-2 rounded text-sm hover:bg-herbal/90">
          Subscribe
        </button>
      </div>
    </div>
  </div>
</footer>
```

## Teknisk stil
- Använd Tailwind CSS
- Typografi: Byredo-liknande serif för rubriker, sans för brödtext
- Färgskala: krämig bakgrund (#fefcf9), terracotta-knappar (#B89B5E), botaniska illustrationer som accenter
- All kod skalbar för internationell expansion
- Automatisk komponentindelning: Hero.tsx, CategoryGrid.tsx, SymptomList.tsx, WhyPlantich.tsx, Footer.tsx

## AI/SEO-anpassning
- Alla rubriker optimeras för featured snippets
- TL;DR-texter högst upp
- Semantiska <section> och <article> används
- Länkar till minst 3 vetenskapliga källor i WhyPlantich-komponenten
- Allt innehåll fokuserar på search intent: "best herb for [symptom]", "plant for stress", "natural remedies for anxiety" etc.

## Fyll ut med placeholders
- Där bilder, länkar eller API-data saknas, använd placeholder-text
- Skapa en /public/images/ mapp för framtida bilder
- Använd dummy-data för API-anrop tills backend är klar

## Nästa steg
Efter att startsidan är optimerad:
1. Skapa individuella sida-templates för remedies och plants
2. Implementera AI-sökfunktionen
3. Lägg till JSON-LD structured data
4. Skapa sitemap.xml
5. Optimera för Core Web Vitals
