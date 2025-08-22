import { Metadata } from 'next'

export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
}

export function generatePlantSEO(plant: any): Metadata {
  const title = `${plant.title} - Uses, Benefits & Safety | Plantich`
  const description = `${plant.title} (${plant.latinName}) - Discover how this powerful herb can help with ${plant.uses.slice(0, 3).join(', ')}. Evidence-based guidance on dosage, safety, and traditional uses.`
  
  return {
    title,
    description,
    keywords: [
      plant.title.toLowerCase(),
      plant.latinName.toLowerCase(),
      'herbal medicine',
      'natural remedies',
      'medicinal plants',
      ...plant.uses.map((use: string) => use.toLowerCase()),
      ...plant.tags || []
    ],
    openGraph: {
      title,
      description,
      type: 'article',
      images: [
        {
          url: plant.image || '/og-plant-default.jpg',
          width: 1200,
          height: 630,
          alt: `${plant.title} - Medicinal plant`
        }
      ],
      publishedTime: plant.lastUpdated,
      modifiedTime: plant.lastUpdated,
      authors: ['Plantich Team']
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [plant.image || '/og-plant-default.jpg']
    },
    alternates: {
      canonical: `https://plantich.com/plants/${plant.slug}`
    }
  }
}

export function generateRemedySEO(remedy: any): Metadata {
  const title = `${remedy.title} - Natural Remedies & Herbal Solutions | Plantich`
  const description = `Discover natural remedies for ${remedy.title.toLowerCase()}. Learn about effective herbs like ${remedy.plants.slice(0, 3).join(', ')} and evidence-based approaches to wellness.`
  
  return {
    title,
    description,
    keywords: [
      remedy.title.toLowerCase(),
      'natural remedies',
      'herbal medicine',
      'alternative medicine',
      ...remedy.plants.map((plant: string) => plant.toLowerCase()),
      ...remedy.symptoms || []
    ],
    openGraph: {
      title,
      description,
      type: 'article',
      images: [
        {
          url: remedy.image || '/og-remedy-default.jpg',
          width: 1200,
          height: 630,
          alt: `${remedy.title} - Natural remedies`
        }
      ],
      publishedTime: remedy.lastUpdated,
      modifiedTime: remedy.lastUpdated,
      authors: ['Plantich Team']
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [remedy.image || '/og-remedy-default.jpg']
    },
    alternates: {
      canonical: `https://plantich.com/remedies/${remedy.slug}`
    }
  }
}

export function generateCategorySEO(category: any): Metadata {
  const title = `${category.title} - Herbal Remedies & Natural Solutions | Plantich`
  const description = `Explore natural remedies for ${category.title.toLowerCase()}. Discover effective herbs, traditional wisdom, and evidence-based approaches to ${category.description.toLowerCase()}.`
  
  return {
    title,
    description,
    keywords: [
      category.title.toLowerCase(),
      'herbal remedies',
      'natural medicine',
      'alternative health',
      ...category.keywords || []
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      images: [
        {
          url: category.image || '/og-category-default.jpg',
          width: 1200,
          height: 630,
          alt: `${category.title} - Herbal remedies`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [category.image || '/og-category-default.jpg']
    },
    alternates: {
      canonical: `https://plantich.com/category/${category.slug}`
    }
  }
}

export function generateStructuredData(plant: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Drug',
    name: plant.title,
    alternateName: plant.latinName,
    description: plant.description,
    image: plant.image,
    category: 'Herbal Medicine',
    activeIngredient: plant.activeCompounds || [],
    dosageForm: plant.forms || [],
    manufacturer: {
      '@type': 'Organization',
      name: 'Plantich'
    },
    datePublished: plant.lastUpdated,
    dateModified: plant.lastUpdated
  }
}

export function generateRemedyStructuredData(remedy: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: remedy.title,
    description: remedy.description,
    mainEntity: {
      '@type': 'MedicalCondition',
      name: remedy.title,
      description: remedy.description
    },
    about: remedy.plants.map((plant: string) => ({
      '@type': 'Drug',
      name: plant
    })),
    datePublished: remedy.lastUpdated,
    dateModified: remedy.lastUpdated
  }
}
