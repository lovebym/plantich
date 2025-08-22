import { Metadata } from 'next'
import SectionIntro from '@/components/SectionIntro'
import SectionCategories from '@/components/SectionCategories'
import SectionCTA from '@/components/SectionCTA'

export const metadata: Metadata = {
  title: 'Plantich - The Sacred Alchemy of Plants',
  description: 'A Nordic luxury herbal apothecary platform. Discover the sacred alchemy of plants through curated knowledge and premium botanical wisdom. Explore natural remedies, medicinal herbs, and holistic wellness.',
  keywords: [
    'herbal medicine',
    'natural remedies',
    'medicinal plants',
    'holistic wellness',
    'botanical wisdom',
    'herbal apothecary',
    'plant medicine',
    'natural healing',
    'herbal remedies',
    'wellness platform',
    'nordic luxury',
    'sacred plants'
  ],
  openGraph: {
    title: 'Plantich - The Sacred Alchemy of Plants',
    description: 'A Nordic luxury herbal apothecary platform. Discover the sacred alchemy of plants through curated knowledge and premium botanical wisdom.',
    type: 'website',
    images: [
      {
        url: '/api/og?title=Plantich&subtitle=The Sacred Alchemy of Plants',
        width: 1200,
        height: 630,
        alt: 'Plantich - The Sacred Alchemy of Plants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plantich - The Sacred Alchemy of Plants',
    description: 'A Nordic luxury herbal apothecary platform. Discover the sacred alchemy of plants through curated knowledge and premium botanical wisdom.',
    images: ['/api/og?title=Plantich&subtitle=The Sacred Alchemy of Plants'],
  },
}

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <SectionIntro />
      <SectionCategories />
      <SectionCTA />
    </div>
  )
}
