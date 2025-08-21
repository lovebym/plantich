import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ConditionPage({ params }: Props) {
  const { slug } = await params

  return (
    <div className="bg-[color:var(--pl-bone)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="text-6xl mb-4">🌿</div>
          <h2 className="text-2xl font-semibold text-[color:var(--pl-charcoal)] mb-2">Condition not found</h2>
          <p className="text-[color:var(--pl-olive)]">
            This condition will appear here once it&apos;s added to your Sanity CMS.
          </p>
        </div>
      </div>
    </div>
  )
}
