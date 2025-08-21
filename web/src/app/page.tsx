import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-[color:var(--pl-bone)] min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Subtle vintage botanical illustration background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 border border-[color:var(--pl-forest)]/20 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 border border-[color:var(--pl-gold)]/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[color:var(--pl-olive)]/10 rounded-full"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Elegant headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[color:var(--pl-charcoal)] leading-tight tracking-tight mb-8">
            The Sacred Alchemy
            <span className="block text-[color:var(--pl-forest)]">of Plants</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[color:var(--pl-olive)] max-w-2xl mx-auto mb-12 leading-relaxed">
            A Nordic luxury herbal apothecary platform. Curated knowledge of botanical wisdom, 
            presented with the purity and elegance of ancient traditions.
          </p>
          
          {/* Minimal button */}
          <Link 
            href="/conditions" 
            className="inline-block px-8 py-4 bg-[color:var(--pl-forest)] text-white hover:bg-[color:var(--pl-charcoal)] transition-colors duration-300 text-sm tracking-wider uppercase"
          >
            Explore Conditions
          </Link>
        </div>
      </section>

      {/* Subtle footer note */}
      <section className="py-16 border-t border-[color:var(--pl-stone)]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-[color:var(--pl-olive)] tracking-wider uppercase">
            Pure • Wise • Premium • Ancient
          </p>
        </div>
      </section>
    </div>
  )
}
