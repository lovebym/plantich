import { getPlantBySlug, getRelatedPlants } from '@/lib/sanity';
import PlantHeader from '../_components/PlantHeader';
import PlantBenefits from '../_components/PlantBenefits';
import PlantPreparation from '../_components/PlantPreparation';
import PlantSafety from '../_components/PlantSafety';
import PlantPairs from '../_components/PlantPairs';
import PlantReferences from '../_components/PlantReferences';
import PlantRelated from '../_components/PlantRelated';
import PlantFAQJsonLd from '../_components/PlantFAQJsonLd';
import { TaxonJsonLd, SupplementJsonLd } from '../_components/PlantJsonLd';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const plant = await getPlantBySlug(slug);
  const title = plant?.seoTitle || `${plant?.commonName} (${plant?.latinName}) – Natural Uses & Preparation | Plantich`;
  const description = plant?.seoDescription || plant?.essence || '';
  return { 
    title, 
    description, 
    alternates: { canonical: `https://www.plantich.com/plants/${slug}` } 
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const plant = await getPlantBySlug(slug);
  if (!plant) return null;

  const related = await getRelatedPlants(slug);

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      {/* JSON-LD */}
      <TaxonJsonLd plant={plant} />
      <SupplementJsonLd plant={plant} />
      <PlantFAQJsonLd plant={plant} />

      <PlantHeader plant={plant} />
      <PlantBenefits plant={plant} />

      <section id="preparation" className="mt-10">
        <h2 className="text-2xl font-semibold">Preparation &amp; Use</h2>
        <PlantPreparation preparation={plant.preparation} />
      </section>

      {!!plant.traditionalUses?.length && (
        <section id="traditional" className="mt-14">
          <h2 className="text-2xl font-semibold">Traditional Uses</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {plant.traditionalUses.map(c => (
              <li key={c._id}>
                <a className="block rounded-xl bg-[#ECE5DC] p-4 hover:opacity-90"
                   href={`/conditions/${c.slug.current}`}>
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <PlantSafety items={plant.safety} />

      <PlantPairs pairs={plant.pairs} />

      <PlantReferences items={plant.research} />

      <PlantRelated items={related} />
    </main>
  );
}
