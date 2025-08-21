export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-sand py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-serif text-ink mb-6">About Plantich</h1>
          <p className="text-xl text-herbal font-sans leading-relaxed">
            The sacred alchemy of plants – ancient wisdom, modern clarity
          </p>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-ink mb-8">Our Philosophy</h2>
          <p className="text-lg text-ink font-sans leading-relaxed mb-6">
            Plantich bridges the ancient wisdom of herbal medicine with modern understanding. 
            We believe in the profound intelligence of plants and their ability to support 
            our mind, body, and spirit in gentle, natural ways.
          </p>
          <p className="text-lg text-ink font-sans leading-relaxed">
            Our platform curates knowledge from traditional practices, scientific research, 
            and botanical wisdom to help you discover the healing power of plants with 
            clarity and confidence.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-6 bg-clay">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-ink mb-12 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-serif text-ink mb-4">Traditional Wisdom</h3>
              <p className="text-ink font-sans">
                Honoring centuries of plant knowledge from cultures around the world.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-serif text-ink mb-4">Scientific Understanding</h3>
              <p className="text-ink font-sans">
                Integrating modern research to validate and understand plant properties.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-serif text-ink mb-4">Holistic Wellness</h3>
              <p className="text-ink font-sans">
                Supporting complete well-being through mind, body, and spirit connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-ink mb-8">Transparency & Trust</h2>
          <p className="text-lg text-ink font-sans leading-relaxed mb-6">
            We believe in complete transparency about our sources, research, and recommendations. 
            All information is carefully curated and backed by credible sources.
          </p>
          <p className="text-lg text-ink font-sans leading-relaxed">
            This platform may include affiliate links to trusted suppliers. Any commissions 
            help support our mission to make plant wisdom more accessible to everyone.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-20 px-6 bg-herbal">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-white mb-8">Important Note</h2>
          <p className="text-white/90 font-sans leading-relaxed">
            The information provided on Plantich is for educational purposes only and 
            should not replace professional medical advice. Always consult with a 
            healthcare provider before starting any herbal regimen, especially if you 
            have existing health conditions or are taking medications.
          </p>
        </div>
      </section>
    </div>
  )
}
