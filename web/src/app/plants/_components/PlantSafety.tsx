export default function PlantSafety({ items }: { items?: string[] }) {
  if (!items?.length) return null;
  return (
    <section id="safety" className="mt-14">
      <h2 className="text-2xl font-semibold">Safety &amp; Contraindications</h2>
      <ul className="mt-4 list-disc pl-6 space-y-2">
        {items.map(i => <li key={i}>{i}</li>)}
      </ul>
      <p className="mt-3 text-sm text-[#6E6A66]">
        Information is educational and not a substitute for medical advice. Consult a professional if pregnant,
        breastfeeding, on medication, or managing a condition.
      </p>
    </section>
  );
}
