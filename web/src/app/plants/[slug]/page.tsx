import { getPlantBySlug, getRelatedPlants } from '@/lib/content-loader';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);
  const title = `${plant?.commonName} (${plant?.latinName}) – Natural Uses & Preparation | Plantich`;
  const description = plant?.summary || '';
  return { 
    title, 
    description, 
    alternates: { canonical: `https://www.plantich.com/plants/${slug}` } 
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);
  
  if (!plant) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Plant not found</h1>
          <p className="text-gray-600">This plant will be added soon.</p>
        </div>
      </main>
    );
  }

  const related = getRelatedPlants(slug);

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="prose prose-lg max-w-none">
        <h1>{plant.commonName}</h1>
        {plant.latinName && <p className="text-gray-600 italic">{plant.latinName}</p>}
        
        <div className="mt-8">
          <h2>About {plant.commonName}</h2>
          <div dangerouslySetInnerHTML={{ __html: plant.body }} />
        </div>

        {plant.safety && (
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3>Safety Information</h3>
            <p>{plant.safety}</p>
          </div>
        )}

        {plant.references && plant.references.length > 0 && (
          <div className="mt-8">
            <h3>References</h3>
            <ul>
              {plant.references.map((ref: { label: string; url?: string }, index: number) => (
                <li key={index}>
                  {ref.url ? (
                    <a href={ref.url} target="_blank" rel="noopener noreferrer">
                      {ref.label}
                    </a>
                  ) : (
                    ref.label
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {related.length > 0 && (
          <div className="mt-8">
            <h3>Related Plants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((relatedPlant) => (
                <a
                  key={relatedPlant.slug}
                  href={`/plants/${relatedPlant.slug}`}
                  className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <h4 className="font-medium">{relatedPlant.commonName}</h4>
                  {relatedPlant.latinName && (
                    <p className="text-sm text-gray-600 italic">{relatedPlant.latinName}</p>
                  )}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
