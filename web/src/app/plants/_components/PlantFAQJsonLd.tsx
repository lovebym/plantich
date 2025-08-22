import { Plant } from '@/lib/sanity';

export default function PlantFAQJsonLd({ plant }: { plant: Plant }) {
  const faqs = [
    { q: `What is ${plant.commonName} used for?`, a: plant.essence || `Traditionally used for wellness support.` },
    { q: `How to prepare ${plant.commonName} tea?`, a: plant?.preparation?.tea ? 
        `Use ${plant.preparation.tea.grams} in ${plant.preparation.tea.waterMl} water, steep ${plant.preparation.tea.minutes} minutes. ${plant.preparation.tea.perDay} daily.` :
        `Steep in hot water and enjoy.` },
    { q: `Is ${plant.commonName} safe?`, a: plant.safety?.length ? plant.safety.join(' ') : `Generally considered gentle; consult a professional if pregnant, breastfeeding or on medication.`},
  ];

  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
