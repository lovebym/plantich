import { client } from '../../lib/sanity'

export default async function TestPage() {
  try {
    // Test Sanity connection
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4 text-green-600">Sanity Connection Test</h1>
        <p className="text-green-500">✅ Sanity connection successful!</p>
      </div>
    )
  } catch (error) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Sanity Error</h1>
        <p className="text-red-500">{error instanceof Error ? error.message : 'Unknown error'}</p>
      </div>
    )
  }
}
