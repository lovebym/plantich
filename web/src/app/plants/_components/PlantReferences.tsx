export default function PlantReferences({ items }: { items?: { title?: string; url?: string; note?: string }[] }) {
  if (!items?.length) return null;
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold">Research &amp; Sources</h2>
      <ol className="mt-4 space-y-2 list-decimal pl-6">
        {items.map((r, i) => (
          <li key={i}>
            {r.title || r.url}
            {r.url && <> — <a className="underline" href={r.url} rel="nofollow noopener" target="_blank">link</a></>}
            {r.note && <span className="text-sm"> — {r.note}</span>}
          </li>
        ))}
      </ol>
    </section>
  );
}
