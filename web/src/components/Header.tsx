import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-[color:var(--pl-bone)]/80 backdrop-blur-sm border-b border-[color:var(--pl-stone)]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="font-display text-2xl text-[color:var(--pl-charcoal)]">Plantich</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-12">
            <Link 
              href="/" 
              className="text-[color:var(--pl-charcoal)] hover:text-[color:var(--pl-forest)] px-3 py-2 text-sm tracking-wider uppercase transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/plants" 
              className="text-[color:var(--pl-charcoal)] hover:text-[color:var(--pl-forest)] px-3 py-2 text-sm tracking-wider uppercase transition-colors"
            >
              Plants
            </Link>
            <Link 
              href="/conditions" 
              className="text-[color:var(--pl-charcoal)] hover:text-[color:var(--pl-forest)] px-3 py-2 text-sm tracking-wider uppercase transition-colors"
            >
              Conditions
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-[color:var(--pl-charcoal)] hover:text-[color:var(--pl-forest)] p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
