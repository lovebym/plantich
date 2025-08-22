export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-sand py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-ink mb-6">
            About Plantich
          </h1>
          <p className="text-xl text-herbal font-sans max-w-2xl mx-auto leading-relaxed">
            A sacred bridge between ancient herbal wisdom and modern understanding, 
            where every plant tells a story of healing and connection.
          </p>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl text-ink mb-6">Our Concept</h2>
              <p className="text-lg text-ink font-sans mb-6 leading-relaxed">
                Plantich emerged from a deep reverence for the natural world and a recognition 
                that plants have been our allies in healing for millennia. We believe in the 
                sacred alchemy that occurs when human intention meets botanical wisdom.
              </p>
              <p className="text-lg text-ink font-sans leading-relaxed">
                Our platform serves as a modern apothecary—a curated space where ancient 
                knowledge meets contemporary understanding, where every remedy tells a story 
                of tradition, science, and the profound connection between humans and the 
                natural world.
              </p>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">🌿</div>
              <div className="w-32 h-32 border-2 border-herbal/20 rounded-full mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-clay py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-ink mb-12 text-center">Our Philosophy</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="font-serif text-xl text-ink mb-4">Mind</h3>
              <p className="text-herbal font-sans leading-relaxed">
                We honor the cognitive and emotional aspects of healing, recognizing that 
                mental clarity and emotional balance are fundamental to overall wellness.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="font-serif text-xl text-ink mb-4">Body</h3>
              <p className="text-herbal font-sans leading-relaxed">
                We respect the body&apos;s innate wisdom and its ability to heal, supporting 
                physical vitality through gentle, time-tested botanical allies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-serif text-xl text-ink mb-4">Spirit</h3>
              <p className="text-herbal font-sans leading-relaxed">
                We acknowledge the sacred dimension of healing—the connection to something 
                greater that plants can help us remember and embody.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-ink mb-12 text-center">Transparency & Ethics</h2>
          
          <div className="space-y-8">
            <div className="apothecary-card p-8">
              <h3 className="font-serif text-xl text-ink mb-4">Our Commitment</h3>
              <p className="text-ink font-sans leading-relaxed mb-4">
                We believe in complete transparency about our approach to herbal medicine. 
                Every plant profile, remedy suggestion, and piece of information is carefully 
                researched and presented with honesty about both benefits and limitations.
              </p>
              <p className="text-ink font-sans leading-relaxed">
                We acknowledge that herbal medicine is complementary to, not a replacement for, 
                professional medical care. We encourage users to consult healthcare providers 
                for serious health concerns.
              </p>
            </div>

            <div className="apothecary-card p-8">
              <h3 className="font-serif text-xl text-ink mb-4">Research & Sources</h3>
              <p className="text-ink font-sans leading-relaxed mb-4">
                Our content draws from traditional herbal knowledge, modern scientific research, 
                and clinical studies. We cite sources and acknowledge the limitations of current 
                research while honoring centuries of empirical wisdom.
              </p>
              <p className="text-ink font-sans leading-relaxed">
                We continuously update our knowledge base as new research emerges, always 
                prioritizing safety and evidence-based information.
              </p>
            </div>

            <div className="apothecary-card p-8">
              <h3 className="font-serif text-xl text-ink mb-4">Cultural Respect</h3>
              <p className="text-ink font-sans leading-relaxed mb-4">
                We honor the diverse cultural traditions that have preserved and developed 
                herbal knowledge throughout human history. We acknowledge the indigenous 
                wisdom that forms the foundation of much of our botanical understanding.
              </p>
              <p className="text-ink font-sans leading-relaxed">
                Our platform seeks to celebrate and preserve these traditions while making 
                this wisdom accessible to modern seekers in a respectful, ethical manner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-herbal text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-6">Begin Your Journey</h2>
          <p className="text-lg font-sans mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore our collection of plants and remedies, discover the wisdom of the natural world, 
            and find your own path to wellness through the sacred alchemy of plants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/search"
              className="inline-block px-8 py-4 bg-gold text-white hover:bg-ink transition-colors duration-300 text-sm tracking-wider uppercase font-sans rounded-md shadow-soft"
            >
              Explore Remedies
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-4 border border-white text-white hover:bg-white hover:text-herbal transition-colors duration-300 text-sm tracking-wider uppercase font-sans rounded-md"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
