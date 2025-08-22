export function faqJSONLD(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(it => ({
      "@type": "Question",
      "name": it.q,
      "acceptedAnswer": { "@type": "Answer", "text": it.a }
    }))
  };
}

export function medicalWebPageJSONLD(data: {
  title: string;
  description: string;
  url: string;
  lastModified?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": data.title,
    "description": data.description,
    "url": data.url,
    "lastModified": data.lastModified || new Date().toISOString(),
    "author": data.author || "Plantich",
    "publisher": {
      "@type": "Organization",
      "name": "Plantich",
      "url": "https://plantich.com"
    }
  };
}

export function drugJSONLD(data: {
  name: string;
  description: string;
  url: string;
  activeIngredient?: string;
  dosageForm?: string;
  manufacturer?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Drug",
    "name": data.name,
    "description": data.description,
    "url": data.url,
    "activeIngredient": data.activeIngredient,
    "dosageForm": data.dosageForm,
    "manufacturer": data.manufacturer || "Plantich",
    "drugClass": "Herbal Supplement"
  };
}

export function organizationJSONLD() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Plantich",
    "url": "https://plantich.com",
    "description": "Nordic herbal apothecary providing evidence-based information about plants, conditions, and natural remedies.",
    "logo": "https://plantich.com/logo.png",
    "sameAs": [
      "https://twitter.com/plantich",
      "https://instagram.com/plantich"
    ]
  };
}
