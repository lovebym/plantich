import Link from 'next/link'

export default function StyleGuide() {
  const swatches = [
    { name: 'Background', var: 'bg-background', desc: 'Main background color' },
    { name: 'Ink', var: 'bg-ink', desc: 'Primary text color' },
    { name: 'Sand', var: 'bg-sand', desc: 'Section backgrounds' },
    { name: 'Clay', var: 'bg-clay', desc: 'Alternative background' },
    { name: 'Herbal', var: 'bg-herbal', desc: 'Plant green accents' },
    { name: 'Shadow', var: 'bg-shadow', desc: 'Borders and shadows' },
    { name: 'Gold', var: 'bg-gold', desc: 'Links and highlights' },
  ]

  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-serif text-4xl text-ink mb-6">Plantich Design System</h1>
        <p className="text-herbal mb-12 font-sans">Nordic luxury herbal apothecary design tokens.</p>

        {/* Colors */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl text-ink mb-6">Color Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {swatches.map((s) => (
              <div key={s.name} className="apothecary-card p-6">
                <div className={`h-20 rounded mb-4 ${s.var}`} />
                <div className="text-ink font-medium mb-1 font-sans">{s.name}</div>
                <div className="text-herbal text-sm mb-2 font-sans">{s.desc}</div>
                <div className="text-shadow font-mono text-xs">{s.var}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl text-ink mb-6">Typography</h2>
          <div className="grid gap-8">
            <div>
              <h1 className="font-serif text-6xl text-ink mb-2">Display Heading</h1>
              <p className="text-herbal font-sans">Cormorant Garamond - 64px</p>
            </div>
            <div>
              <h2 className="font-serif text-3xl text-ink mb-2">Section Title</h2>
              <p className="text-herbal font-sans">Cormorant Garamond - 30px</p>
            </div>
            <div>
              <p className="text-ink text-lg leading-relaxed max-w-2xl font-sans">
                Body text in a calm, readable tone. Designed for focus and serenity.
                The typography reflects the purity and wisdom of ancient herbal traditions.
              </p>
              <p className="text-herbal mt-2 font-sans">Inter - 18px</p>
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl text-ink mb-6">Components</h2>
          <div className="flex flex-wrap gap-6 items-center">
            <button className="px-8 py-4 bg-herbal text-white hover:bg-ink transition-colors duration-300 text-sm tracking-wider uppercase font-sans rounded-md shadow-soft">
              Primary Button
            </button>
            <button className="px-8 py-4 border border-shadow text-ink hover:bg-sand transition-colors duration-300 text-sm tracking-wider uppercase font-sans rounded-md">
              Secondary Button
            </button>
            <div className="apothecary-card p-8 w-80">
              <div className="text-ink font-serif text-xl mb-2">Card Title</div>
              <div className="text-herbal text-sm leading-relaxed font-sans">
                A subtle glassy card with the elegance of Nordic design principles.
              </div>
            </div>
          </div>
        </section>

        {/* Brand Values */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl text-ink mb-6">Brand Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Pure', 'Wise', 'Premium', 'Ancient'].map((value) => (
              <div key={value} className="text-center">
                <div className="text-2xl text-herbal mb-2">•</div>
                <div className="text-ink font-medium tracking-wider uppercase font-sans">{value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl text-ink mb-6">Navigation</h2>
          <div className="flex gap-4">
            <Link href="/" className="text-ink hover:text-herbal px-3 py-2 text-sm tracking-wider uppercase transition-colors font-sans">
              Home
            </Link>
            <Link href="/plants" className="text-ink hover:text-herbal px-3 py-2 text-sm tracking-wider uppercase transition-colors font-sans">
              Plants
            </Link>
            <Link href="/conditions" className="text-ink hover:text-herbal px-3 py-2 text-sm tracking-wider uppercase transition-colors font-sans">
              Conditions
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
