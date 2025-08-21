import Hero from '@/components/Hero'
import SectionIntro from '@/components/SectionIntro'
import SectionCategories from '@/components/SectionCategories'
import SectionCTA from '@/components/SectionCTA'

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Hero />
      <SectionIntro />
      <SectionCategories />
      <SectionCTA />
    </div>
  )
}
