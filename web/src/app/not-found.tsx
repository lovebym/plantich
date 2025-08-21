import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="text-6xl mb-6">🌱</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
        </p>
        <div className="space-y-4">
          <Link 
            href="/" 
            className="block w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Go Home
          </Link>
          <Link 
            href="/plants" 
            className="block w-full border border-green-600 text-green-600 py-3 px-6 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            Browse Plants
          </Link>
        </div>
      </div>
    </div>
  )
}
