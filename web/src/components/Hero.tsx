import Link from 'next/link'

export default function Hero() {
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
          The Sacred Alchemy
          <span className="block text-herbal">of Plants</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-herbal max-w-2xl mx-auto mb-12 leading-relaxed font-sans">
          Ancient wisdom, modern clarity
        </p>

        {/* CTA Button */}
        <Link
          href="/conditions"
          className="inline-block px-8 py-4 bg-herbal text-white hover:bg-ink transition-colors duration-300 text-sm tracking-wider uppercase font-sans rounded-md shadow-soft"
        >
          Explore Conditions
        </Link>
      </div>
    </section>
  )
}
