import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[color:var(--pl-cream)] border-t border-[color:var(--pl-stone)]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="font-display text-2xl text-[color:var(--pl-charcoal)]">Plantich</span>
            </div>
            <p className="text-[color:var(--pl-olive)] max-w-md leading-relaxed">
              A Nordic luxury herbal apothecary platform. Curated knowledge of botanical wisdom, 
              presented with the purity and elegance of ancient traditions.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-[color:var(--pl-charcoal)] tracking-wider uppercase mb-6">
              Explore
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/plants" className="text-[color:var(--pl-olive)] hover:text-[color:var(--pl-forest)] transition-colors text-sm">
                  Plants
                </Link>
              </li>
              <li>
                <Link href="/conditions" className="text-[color:var(--pl-olive)] hover:text-[color:var(--pl-forest)] transition-colors text-sm">
                  Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-[color:var(--pl-charcoal)] tracking-wider uppercase mb-6">
              Resources
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-[color:var(--pl-olive)] hover:text-[color:var(--pl-forest)] transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[color:var(--pl-olive)] hover:text-[color:var(--pl-forest)] transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[color:var(--pl-olive)] hover:text-[color:var(--pl-forest)] transition-colors text-sm">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[color:var(--pl-stone)]/30">
          <p className="text-center text-sm text-[color:var(--pl-olive)]">
            © 2024 Plantich. The Sacred Alchemy of Plants.
          </p>
        </div>
      </div>
    </footer>
  )
}
