import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
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
            A Nordic luxury herbal apothecary platform. Curated knowledge of botanical wisdom,
            presented with the purity and elegance of ancient traditions.
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

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-ink mb-4">Botanical Wisdom</h2>
            <p className="text-xl text-herbal max-w-3xl mx-auto font-sans">
              Discover the healing properties of plants and natural remedies for your wellness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="apothecary-card p-8 text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="font-serif text-2xl text-ink mb-4">Healing Plants</h3>
              <p className="text-herbal font-sans">
                Explore our curated collection of medicinal plants and their therapeutic properties.
              </p>
            </div>

            <div className="apothecary-card p-8 text-center">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="font-serif text-2xl text-ink mb-4">Health Conditions</h3>
              <p className="text-herbal font-sans">
                Find natural solutions for various health conditions and wellness concerns.
              </p>
            </div>

            <div className="apothecary-card p-8 text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-serif text-2xl text-ink mb-4">Ancient Wisdom</h3>
              <p className="text-herbal font-sans">
                Traditional knowledge meets modern understanding in our comprehensive guides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-16 bg-clay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gold tracking-wider uppercase font-sans">
            Pure • Wise • Premium • Ancient
          </p>
        </div>
      </section>
    </div>
  )
}
