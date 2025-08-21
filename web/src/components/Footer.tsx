import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-clay border-t border-shadow/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="font-serif text-2xl text-ink">Plantich</span>
            </div>
            <p className="text-herbal max-w-md leading-relaxed font-sans">
              A Nordic luxury herbal apothecary platform. Curated knowledge of botanical wisdom,
              presented with the purity and elegance of ancient traditions.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-ink tracking-wider uppercase mb-6 font-sans">
              Explore
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/plants" className="text-herbal hover:text-ink transition-colors text-sm font-sans">
                  Plants
                </Link>
              </li>
              <li>
                <Link href="/conditions" className="text-herbal hover:text-ink transition-colors text-sm font-sans">
                  Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-ink tracking-wider uppercase mb-6 font-sans">
              Resources
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-herbal hover:text-ink transition-colors text-sm font-sans">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-herbal hover:text-ink transition-colors text-sm font-sans">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-herbal hover:text-ink transition-colors text-sm font-sans">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-herbal hover:text-ink transition-colors text-sm font-sans">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-shadow/30">
          <p className="text-center text-sm text-herbal font-sans">
            © 2024 Plantich. The Sacred Alchemy of Plants.
          </p>
        </div>
      </div>
    </footer>
  )
}
