import { Plant } from '@/lib/sanity';

function Script({ json }: { json: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

export function TaxonJsonLd({ plant }: { plant: Plant }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "Taxon",
    "name": plant.commonName,
    "scientificName": plant.latinName,
    "alternateName": plant.commonName,
    "url": `https://www.plantich.com/plants/${plant.slug.current}`,
    "description": plant.essence
  };
  return <Script json={json} />;
}

export function SupplementJsonLd({ plant }: { plant: Plant }) {
  const p = plant.preparation || {};
  const dose = [
    p?.tea?.perDay && `Tea: ${p.tea.perDay}`,
    p?.tincture?.drops && p?.tincture?.timesPerDay && `Tincture: ${p.tincture.drops}, ${p.tincture.timesPerDay}`
  ].filter(Boolean).join('. ');
  const json = {
    "@context": "https://schema.org",
    "@type": "DietarySupplement",
    "name": `${plant.commonName} preparation`,
    "isBasedOn": plant.latinName,
    "dosageForm": ["Tea","Tincture","Capsule","Topical"].filter(f => !!p[f.toLowerCase() as keyof typeof p]) ,
    "recommendedIntake": dose || undefined,
    "safetyConsideration": plant.safety?.join(' ')
  };
  return <Script json={json} />;
}
