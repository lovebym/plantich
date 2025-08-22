import { Plant } from '@/lib/sanity';

interface PlantPair {
  plant: { 
    _id: string; 
    commonName: string; 
    slug: { current: string } 
  };
  why?: string;
}

export default function PlantPairs({ pairs }: { pairs?: PlantPair[] }) {
  if (!pairs?.length) return null;
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold">Pairs Well With</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {pairs.map(p => (
          <li key={p.plant.slug.current} className="rounded-xl bg-[#ECE5DC] p-4">
            <a href={`/plants/${p.plant.slug.current}`} className="font-medium underline">
              {p.plant.commonName}
            </a>
            {p.why && <p className="mt-1 text-sm">{p.why}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
