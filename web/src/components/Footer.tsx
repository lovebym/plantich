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
              Plantich is a Nordic herbal apothecary rooted in timeless traditions. We offer a curated plant database where you can explore natural remedies, healing herbs, adaptogens, and medicinal mushrooms – matched to common health conditions. Our vision is to reconnect people with the sacred wisdom of plants and inspire a more holistic way of living.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-ink tracking-wider uppercase mb-6 font-sans">
              Discover
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
              Essentials
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-herbal hover:text-ink transition-colors text-sm font-sans">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-herbal hover:text-ink transition-colors text-sm font-sans">
                  Connect
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-herbal hover:text-ink transition-colors text-sm font-sans">
                  Terms & Policies
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-herbal hover:text-ink transition-colors text-sm font-sans">
                  Holistic Guidance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Botanical Note */}
        <div className="mt-8 pt-8 border-t border-shadow/30">
          <p className="text-xs leading-relaxed text-herbal font-sans max-w-4xl mx-auto">
            Plantich is a Nordic herbal apothecary dedicated to natural healing. Our library of plants, herbs,
            adaptogens, and medicinal mushrooms is designed to help you explore holistic remedies for body,
            mind, and spirit. From anxiety, stress, and sleep issues to digestion, immunity, skin health,
            hormones, and inflammation – Plantich connects you with trusted botanical wisdom and traditional
            plant medicine. Discover natural remedies for modern living through curated herbal knowledge and
            timeless plant alchemy.
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-shadow/30">
          <p className="text-center text-sm text-herbal font-sans">
            © 2025 Plantich. The Sacred Alchemy of Plants.
          </p>
        </div>
      </div>
    </footer>
  )
}
