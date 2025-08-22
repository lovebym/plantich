import type { Metadata } from 'next'
import type { Plant, Remedy, Category } from './content-loader'

export function buildPlantMetadata(plant: Plant): Metadata {
  const description = `${plant.title} (${plant.latinName}) - Discover how this powerful herb can help with ${plant.uses.slice(0, 3).join(', ')}. Evidence-based guidance on dosage, safety, and traditional uses.`

  const keywords = [
    plant.title.toLowerCase(),
    plant.latinName.toLowerCase(),
    'medicinal plant',
    'herbal remedy',
    'natural medicine',
    ...plant.uses.map((use: string) => use.toLowerCase()),
    ...(plant.tags || [])
  ]

  return {
    title: `${plant.title} (${plant.latinName}) - Medicinal Plant Guide`,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title: `${plant.title} - Medicinal Plant Guide`,
      description,
      type: 'article',
      images: [
        {
          url: plant.image || '/og-plant-default.jpg',
          width: 1200,
          height: 630,
          alt: `${plant.title} medicinal plant`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${plant.title} - Medicinal Plant Guide`,
      description,
      images: [plant.image || '/og-plant-default.jpg']
    },
  }
}

export function buildRemedyMetadata(remedy: Remedy): Metadata {
  const description = `Discover natural remedies for ${remedy.title.toLowerCase()}. Learn about effective herbs like ${remedy.plants.slice(0, 3).join(', ')} and evidence-based approaches to wellness.`

  const keywords = [
    remedy.title.toLowerCase(),
    'natural remedies',
    'herbal medicine',
    'holistic healing',
    ...remedy.plants.map((plant: string) => plant.toLowerCase()),
    ...(remedy.symptoms || [])
  ]

  return {
    title: `Natural Remedies for ${remedy.title} - Plantich`,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title: `Natural Remedies for ${remedy.title}`,
      description,
      type: 'article',
      images: [
        {
          url: remedy.image || '/og-remedy-default.jpg',
          width: 1200,
          height: 630,
          alt: `Natural remedies for ${remedy.title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Natural Remedies for ${remedy.title}`,
      description,
      images: [remedy.image || '/og-remedy-default.jpg']
    },
  }
}

export function buildCategoryMetadata(category: Category): Metadata {
  const description = `Explore natural remedies for ${category.title.toLowerCase()}. Discover effective herbs, traditional wisdom, and evidence-based approaches to ${category.description.toLowerCase()}.`

  const keywords = [
    category.title.toLowerCase(),
    'natural remedies',
    'herbal medicine',
    'holistic wellness',
    ...(category.keywords || [])
  ]

  return {
    title: `${category.title} Remedies - Plantich`,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title: `${category.title} Natural Remedies`,
      description,
      type: 'website',
      images: [
        {
          url: category.image || '/og-category-default.jpg',
          width: 1200,
          height: 630,
          alt: `${category.title} natural remedies`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.title} Natural Remedies`,
      description,
      images: [category.image || '/og-category-default.jpg']
    },
  }
}

export function buildJsonLd(plant: Plant) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Drug',
    name: plant.title,
    alternateName: plant.latinName,
    description: plant.description,
    category: plant.category,
    url: `https://plantich.com/plants/${plant.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://plantich.com/plants/${plant.slug}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Plantich',
      url: 'https://plantich.com',
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    about: plant.uses.map((use: string) => ({
      '@type': 'MedicalCondition',
      name: use,
    })),
  }
}

export function buildRemedyJsonLd(remedy: Remedy) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: `Natural Remedies for ${remedy.title}`,
    description: remedy.description,
    category: remedy.category,
    url: `https://plantich.com/remedies/${remedy.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://plantich.com/remedies/${remedy.slug}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Plantich',
      url: 'https://plantich.com',
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    about: remedy.plants.map((plant: string) => ({
      '@type': 'MedicalCondition',
      name: plant,
    })),
    treatment: {
      '@type': 'MedicalTherapy',
      name: 'Herbal Remedy',
      description: remedy.approach,
    },
  }
}
