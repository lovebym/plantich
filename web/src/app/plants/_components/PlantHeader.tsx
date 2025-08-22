import { Plant } from '@/lib/sanity';

export default function PlantHeader({ plant }: { plant: Plant }) {
  return (
    <header className="text-center mb-10">
      <h1 className="text-3xl md:text-4xl font-semibold">{plant.commonName}</h1>
      <p className="mt-1 italic text-[#7C8F75]">{plant.latinName}</p>
      {plant.tags?.length ? (
        <div className="mt-3 flex items-center justify-center gap-2 flex-wrap">
          {plant.tags.map((t: string) => (
            <span key={t} className="rounded-full bg-[#EDE6DE] px-3 py-1 text-sm">{t}</span>
          ))}
        </div>
      ) : null}
      {plant.essence && <p className="mt-6 max-w-2xl mx-auto">{plant.essence}</p>}
    </header>
  );
}
