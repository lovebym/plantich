export default function StyleGuide() {
  const swatches = [
    { name: 'Bone', var: '--pl-bone', desc: 'Off-white background' },
    { name: 'Charcoal', var: '--pl-charcoal', desc: 'Deep black text' },
    { name: 'Forest', var: '--pl-forest', desc: 'Deep forest green' },
    { name: 'Olive', var: '--pl-olive', desc: 'Olive green' },
    { name: 'Rosemary', var: '--pl-rosemary', desc: 'Rosemary green' },
    { name: 'Bark', var: '--pl-bark', desc: 'Bark brown' },
    { name: 'Gold', var: '--pl-gold', desc: 'Antique gold' },
    { name: 'Cream', var: '--pl-cream', desc: 'Warm cream' },
    { name: 'Stone', var: '--pl-stone', desc: 'Stone gray' },
  ]

  return (
    <div className="bg-[color:var(--pl-bone)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-display text-4xl text-[color:var(--pl-charcoal)] mb-6">Style Guide</h1>
        <p className="text-[color:var(--pl-olive)] mb-12">Nordic luxury herbal apothecary design tokens.</p>

        {/* Colors */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-[color:var(--pl-charcoal)] mb-6">Color Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {swatches.map((s) => (
              <div key={s.name} className="apothecary-card p-6">
                <div className="h-20 rounded mb-4" style={{ backgroundColor: `var(${s.var})` }} />
                <div className="text-[color:var(--pl-charcoal)] font-medium mb-1">{s.name}</div>
                <div className="text-[color:var(--pl-olive)] text-sm mb-2">{s.desc}</div>
                <div className="text-[color:var(--pl-stone)] font-mono text-xs">{s.var}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-[color:var(--pl-charcoal)] mb-6">Typography</h2>
          <div className="grid gap-8">
            <div>
              <h1 className="font-display text-6xl text-[color:var(--pl-charcoal)] mb-2">Display Heading</h1>
              <p className="text-[color:var(--pl-olive)]">Playfair Display - 64px</p>
            </div>
            <div>
              <h2 className="font-display text-3xl text-[color:var(--pl-charcoal)] mb-2">Section Title</h2>
              <p className="text-[color:var(--pl-olive)]">Playfair Display - 30px</p>
            </div>
            <div>
              <p className="text-[color:var(--pl-charcoal)] text-lg leading-relaxed max-w-2xl">
                Body text in a calm, readable tone. Designed for focus and serenity. 
                The typography reflects the purity and wisdom of ancient herbal traditions.
              </p>
              <p className="text-[color:var(--pl-olive)] mt-2">Geist Sans - 18px</p>
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-[color:var(--pl-charcoal)] mb-6">Components</h2>
          <div className="flex flex-wrap gap-6 items-center">
            <button className="px-8 py-4 bg-[color:var(--pl-forest)] text-white hover:bg-[color:var(--pl-charcoal)] transition-colors duration-300 text-sm tracking-wider uppercase">
              Primary Button
            </button>
            <button className="px-8 py-4 border border-[color:var(--pl-stone)] text-[color:var(--pl-charcoal)] hover:bg-[color:var(--pl-cream)] transition-colors duration-300 text-sm tracking-wider uppercase">
              Secondary Button
            </button>
            <div className="apothecary-card p-8 w-80">
              <div className="text-[color:var(--pl-charcoal)] font-display text-xl mb-2">Card Title</div>
              <div className="text-[color:var(--pl-olive)] text-sm leading-relaxed">
                A subtle glassy card with the elegance of Nordic design principles.
              </div>
            </div>
          </div>
        </section>

        {/* Brand Values */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-[color:var(--pl-charcoal)] mb-6">Brand Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Pure', 'Wise', 'Premium', 'Ancient'].map((value) => (
              <div key={value} className="text-center">
                <div className="text-2xl text-[color:var(--pl-forest)] mb-2">•</div>
                <div className="text-[color:var(--pl-charcoal)] font-medium tracking-wider uppercase">{value}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
