export default function PlantRelated({ items }: { items: { commonName: string; slug: { current: string } }[] }) {
  if (!items?.length) return null;
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold">Explore More Herbs</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map(p => (
          <a key={p.slug.current} href={`/plants/${p.slug.current}`}
             className="rounded-full bg-[#EDE6DE] px-3 py-1">{p.commonName}</a>
        ))}
      </div>
    </section>
  );
}
