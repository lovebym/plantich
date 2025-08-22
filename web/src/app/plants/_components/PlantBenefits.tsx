import { Plant } from '@/lib/sanity';

export default function PlantBenefits({ plant }: { plant: Plant }) {
  if (!plant.benefits?.length) return null;
  return (
    <section>
      <h2 className="text-2xl font-semibold">Key Benefits</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {plant.benefits.map((b: string) => (
          <li key={b} className="rounded-xl bg-[#F3EEE7] p-4">{b}</li>
        ))}
      </ul>
    </section>
  );
}
