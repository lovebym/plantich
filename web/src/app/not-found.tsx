import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        {/* Decorative elements */}
        <div className="relative mb-8">
          <div className="text-8xl mb-4">🌿</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 border-2 border-herbal/20 rounded-full"></div>
          </div>
        </div>

        {/* Main content */}
        <h1 className="font-serif text-4xl md:text-6xl text-ink mb-6">
          This Remedy Doesn&apos;t
          <span className="block text-herbal">Grow Here Yet</span>
        </h1>

        <p className="text-lg text-herbal font-sans mb-8 leading-relaxed">
          The plant you&apos;re looking for hasn&apos;t been discovered in our apothecary yet. 
          Perhaps it&apos;s still growing in the wild, waiting to be found.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/search"
            className="inline-block px-8 py-4 bg-herbal text-white hover:bg-ink transition-colors duration-300 text-sm tracking-wider uppercase font-sans rounded-md shadow-soft"
          >
            Search Our Collection
          </Link>
          
          <Link
            href="/"
            className="inline-block px-8 py-4 border border-herbal text-herbal hover:bg-herbal hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase font-sans rounded-md"
          >
            Return Home
          </Link>
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Link
            href="/plants"
            className="apothecary-card p-6 text-center hover:shadow-soft transition-shadow group"
          >
            <div className="text-2xl mb-2">🌱</div>
            <h3 className="font-serif text-lg text-ink mb-2 group-hover:text-herbal transition-colors">Browse Plants</h3>
            <p className="text-sm text-herbal font-sans">Explore our medicinal plant collection</p>
          </Link>

          <Link
            href="/conditions"
            className="apothecary-card p-6 text-center hover:shadow-soft transition-shadow group"
          >
            <div className="text-2xl mb-2">💚</div>
            <h3 className="font-serif text-lg text-ink mb-2 group-hover:text-herbal transition-colors">View Conditions</h3>
            <p className="text-sm text-herbal font-sans">Find remedies for specific ailments</p>
          </Link>

          <Link
            href="/about"
            className="apothecary-card p-6 text-center hover:shadow-soft transition-shadow group"
          >
            <div className="text-2xl mb-2">📖</div>
            <h3 className="font-serif text-lg text-ink mb-2 group-hover:text-herbal transition-colors">About Plantich</h3>
            <p className="text-sm text-herbal font-sans">Learn about our herbal wisdom</p>
          </Link>
        </div>

        {/* Footer note */}
        <div className="mt-12 pt-8 border-t border-clay/30">
          <p className="text-sm text-herbal font-sans">
            Error 404 • The Sacred Alchemy of Plants
          </p>
        </div>
      </div>
    </div>
  )
}
