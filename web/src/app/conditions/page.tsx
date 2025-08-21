import Link from 'next/link'

export default async function ConditionsPage() {
  return (
    <div className="bg-[color:var(--pl-bone)] min-h-screen">
      <div className="bg-gradient-to-r from-[color:var(--pl-cream)] to-[color:var(--pl-bone)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl text-[color:var(--pl-charcoal)] mb-4">Health Conditions</h1>
          <p className="text-xl text-[color:var(--pl-olive)] max-w-3xl">
            Explore various health conditions and discover how plants can support your wellness journey.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🌿</div>
          <h2 className="text-2xl font-semibold text-[color:var(--pl-charcoal)] mb-2">No conditions found</h2>
          <p className="text-[color:var(--pl-olive)]">
            Conditions will appear here once they&apos;re added to your Sanity CMS.
          </p>
          <div className="mt-4">
            <Link 
              href="/"
              className="text-[color:var(--pl-forest)] hover:text-[color:var(--pl-charcoal)] font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
