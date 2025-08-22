#!/usr/bin/env node

/**
 * CURSOR AUTOMATION SCRIPT: OPTIMIZE PLANTICH HOMEPAGE
 * 
 * Detta skript automatiskt implementerar alla optimeringar för Plantich-startsidan
 * baserat på AI/SEO-best practices och nordisk design.
 */

const fs = require('fs');
const path = require('path');

// Konfiguration
const CONFIG = {
  sourceDir: 'src',
  componentsDir: 'src/components',
  pagesDir: 'src/app',
  publicDir: 'public',
  colors: {
    background: '#fefcf9',
    ink: '#1A1A1A', 
    sand: '#EDE8E1',
    clay: '#D7C6B3',
    herbal: '#839378',
    gold: '#B89B5E'
  }
};

// Utility functions
function createDirectoryIfNotExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✅ Created directory: ${dirPath}`);
  }
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Created file: ${filePath}`);
}

// 1. Uppdatera metadata i layout.tsx
function updateLayoutMetadata() {
  const layoutPath = path.join(CONFIG.pagesDir, 'layout.tsx');
  const metadataContent = `
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Plantich – Find the Right Plant for Your Mind, Body & Spirit",
  description: "Feeling stressed, tired or unwell? Discover the best medicinal herbs and adaptogens matched to your needs. Backed by research, designed with care.",
  keywords: "herbal remedies, medicinal plants, adaptogens, anxiety, sleep, energy, digestion, natural medicine",
  authors: [{ name: "Plantich Team" }],
  creator: "Plantich",
  publisher: "Plantich",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://plantich.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Plantich – Your Botanical Ally for Mind, Body & Spirit",
    description: "Personalized plant-based support—scientifically informed, spiritually attuned.",
    url: 'https://plantich.com',
    siteName: 'Plantich',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Plantich - Botanical healing platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plantich – Find the Right Plant for Your Mind, Body & Spirit',
    description: 'Personalized plant-based support—scientifically informed, spiritually attuned.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}
`;

  // Läs befintlig layout och uppdatera metadata
  let layoutContent = fs.readFileSync(layoutPath, 'utf8');
  
  // Ersätt befintlig metadata eller lägg till ny
  if (layoutContent.includes('export const metadata')) {
    layoutContent = layoutContent.replace(
      /export const metadata: Metadata = \{[\s\S]*?\};/,
      metadataContent.trim()
    );
  } else {
    // Lägg till metadata efter imports
    const importIndex = layoutContent.lastIndexOf('import');
    const insertIndex = layoutContent.indexOf('\n', importIndex) + 1;
    layoutContent = layoutContent.slice(0, insertIndex) + '\n' + metadataContent + layoutContent.slice(insertIndex);
  }
  
  writeFile(layoutPath, layoutContent);
}

// 2. Skapa optimerad Hero-komponent
function createOptimizedHero() {
  const heroContent = `
'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative py-20 px-6 bg-background overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-herbal rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-gold rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-clay rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-ink mb-6 leading-tight">
          Plantich: The Sacred{' '}
          <span className="text-herbal">Alchemy</span>{' '}
          of Plants
        </h1>
        
        {/* TL;DR subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Feeling stressed, sleepless, or out of balance? Plantich gives you personalized plant-based support—scientifically informed, spiritually attuned.
        </p>
        
        {/* CTA Button */}
        <div className="mb-12">
          <Link 
            href="/ai-search"
            className="inline-flex items-center bg-herbal text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-herbal/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Start your herbal journey
            <svg 
              className={\`ml-2 w-5 h-5 transition-transform duration-300 \${isHovered ? 'translate-x-1' : ''}\`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Value badges */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-800 border border-blue-200">
            Evidence-Aware (Examine, MSKCC)
          </span>
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-50 text-green-800 border border-green-200">
            Nordic Design
          </span>
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-50 text-purple-800 border border-purple-200">
            No Ads, Just Plants
          </span>
        </div>

        {/* Trust indicators */}
        <div className="text-sm text-gray-500">
          Trusted by herbalists and researchers worldwide
        </div>
      </div>
    </section>
  )
}
`;

  writeFile(path.join(CONFIG.componentsDir, 'OptimizedHero.tsx'), heroContent);
}

// 3. Skapa CategoryGrid-komponent
function createCategoryGrid() {
  const categoryGridContent = `
import Link from 'next/link'

const categories = [
  {
    icon: "🧠",
    title: "Mind",
    subtitle: "Calm, Focus, Mood",
    description: "Support for anxiety, stress, depression, and cognitive function",
    href: "/remedies/mind",
    color: "bg-blue-50 border-blue-200 text-blue-800"
  },
  {
    icon: "💪", 
    title: "Body",
    subtitle: "Digestion, Immunity, Energy", 
    description: "Natural support for physical wellness and vitality",
    href: "/remedies/body",
    color: "bg-green-50 border-green-200 text-green-800"
  },
  {
    icon: "✨",
    title: "Spirit", 
    subtitle: "Sleep, Hormonal Flow, Presence",
    description: "Deep restoration and spiritual wellness", 
    href: "/remedies/spirit",
    color: "bg-purple-50 border-purple-200 text-purple-800"
  }
]

export default function CategoryGrid() {
  return (
    <section className="py-16 px-6 bg-sand/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-ink mb-4">
            Explore by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover herbal remedies organized by your needs—mind, body, and spirit
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group block bg-background border border-clay rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-herbal"
            >
              <div className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-serif text-ink mb-2">
                  {category.title}
                </h3>
                <p className="text-herbal font-medium mb-3">
                  {category.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
`;

  writeFile(path.join(CONFIG.componentsDir, 'CategoryGrid.tsx'), categoryGridContent);
}

// 4. Skapa SymptomList-komponent
function createSymptomList() {
  const symptomListContent = `
import Link from 'next/link'

const symptoms = [
  {
    name: "Anxiety & Stress",
    microcopy: "Calm your nervous system",
    href: "/remedies/mind/anxiety",
    icon: "😰"
  },
  {
    name: "Fatigue",
    microcopy: "Gently energize your body", 
    href: "/remedies/energy",
    icon: "😴"
  },
  {
    name: "Digestive issues",
    microcopy: "Soothe your gut, ease bloating",
    href: "/remedies/digestion", 
    icon: "🤢"
  },
  {
    name: "Sleep problems",
    microcopy: "Restore your natural rhythm",
    href: "/remedies/mind/sleep",
    icon: "😴"
  },
  {
    name: "Low mood",
    microcopy: "Lift your spirits naturally",
    href: "/remedies/mind/depression",
    icon: "😔"
  },
  {
    name: "Focus issues", 
    microcopy: "Sharpen your mind",
    href: "/remedies/mind/focus",
    icon: "🤔"
  }
]

export default function SymptomList() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-ink mb-4">
            What are you experiencing?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select your symptoms and get personalized herbal recommendations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {symptoms.map((symptom) => (
            <Link
              key={symptom.name}
              href={symptom.href}
              className="group block bg-background border border-clay rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:border-herbal"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {symptom.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-ink mb-1 group-hover:text-herbal transition-colors">
                    {symptom.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {symptom.microcopy}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/ai-search"
            className="inline-flex items-center text-herbal hover:text-herbal/80 font-medium transition-colors"
          >
            Get personalized recommendations →
          </Link>
        </div>
      </div>
    </section>
  )
}
`;

  writeFile(path.join(CONFIG.componentsDir, 'SymptomList.tsx'), symptomListContent);
}

// 5. Skapa WhyPlantich-komponent
function createWhyPlantich() {
  const whyPlantichContent = `
export default function WhyPlantich() {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">
            Why Plantich?
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Most herb sites are either clinical or chaotic. We created Plantich to be beautiful, evidence-based, and made for real emotional states.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-herbal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="text-xl font-serif text-ink mb-3">Traditional Wisdom</h3>
            <p className="text-gray-600 leading-relaxed">
              Rooted in centuries of plant-based healing traditions from around the world
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔬</span>
            </div>
            <h3 className="text-xl font-serif text-ink mb-3">Scientific Awareness</h3>
            <p className="text-gray-600 leading-relaxed">
              Backed by research from Examine, MSKCC, and other trusted scientific sources
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-serif text-ink mb-3">Designed for Calm</h3>
            <p className="text-gray-600 leading-relaxed">
              Inspired by Scandinavian aesthetics and mindful design principles
            </p>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 pt-8 border-t border-clay/30">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">
              Trusted sources we reference:
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="https://examine.com" className="text-herbal hover:underline">Examine.com</a>
              <a href="https://www.mskcc.org/cancer-care/integrative-medicine/herbs" className="text-herbal hover:underline">MSKCC About Herbs</a>
              <a href="https://ods.od.nih.gov" className="text-herbal hover:underline">NIH Office of Dietary Supplements</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
`;

  writeFile(path.join(CONFIG.componentsDir, 'WhyPlantich.tsx'), whyPlantichContent);
}

// 6. Skapa optimerad Footer
function createOptimizedFooter() {
  const footerContent = `
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-sand/30 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-lg text-ink mb-4">Plantich</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your botanical ally for mind, body & spirit. Evidence-based herbal wisdom, beautifully presented.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-ink mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/remedies" className="text-gray-600 hover:text-herbal transition-colors">All Remedies</Link></li>
              <li><Link href="/plants" className="text-gray-600 hover:text-herbal transition-colors">Plant Library</Link></li>
              <li><Link href="/ai-search" className="text-gray-600 hover:text-herbal transition-colors">AI Search</Link></li>
              <li><Link href="/recommendations" className="text-gray-600 hover:text-herbal transition-colors">Personalized Recommendations</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-ink mb-3">About</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-600 hover:text-herbal transition-colors">Our Story</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-herbal transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-herbal transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-herbal transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-ink mb-3">Stay Connected</h4>
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">
              Get herbal wisdom to your inbox — gently.
            </p>
            <button className="bg-herbal text-white px-4 py-2 rounded text-sm hover:bg-herbal/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-clay/30 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Plantich. Made with care for your wellness journey.
          </p>
        </div>
      </div>
    </footer>
  )
}
`;

  writeFile(path.join(CONFIG.componentsDir, 'OptimizedFooter.tsx'), footerContent);
}

// 7. Uppdatera huvudsidan
function updateMainPage() {
  const mainPageContent = `
import { Metadata } from 'next'
import OptimizedHero from '@/components/OptimizedHero'
import CategoryGrid from '@/components/CategoryGrid'
import SymptomList from '@/components/SymptomList'
import WhyPlantich from '@/components/WhyPlantich'
import OptimizedFooter from '@/components/OptimizedFooter'

export const metadata: Metadata = {
  title: "Plantich – Find the Right Plant for Your Mind, Body & Spirit",
  description: "Feeling stressed, tired or unwell? Discover the best medicinal herbs and adaptogens matched to your needs. Backed by research, designed with care.",
  keywords: "herbal remedies, medicinal plants, adaptogens, anxiety, sleep, energy, digestion, natural medicine",
  openGraph: {
    title: "Plantich – Your Botanical Ally for Mind, Body & Spirit",
    description: "Personalized plant-based support—scientifically informed, spiritually attuned.",
    type: "website",
  },
}

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <OptimizedHero />
      <CategoryGrid />
      <SymptomList />
      <WhyPlantich />
      <OptimizedFooter />
    </div>
  )
}
`;

  writeFile(path.join(CONFIG.pagesDir, 'page.tsx'), mainPageContent);
}

// 8. Skapa placeholder-bilder
function createImagePlaceholders() {
  createDirectoryIfNotExists(path.join(CONFIG.publicDir, 'images'));
  
  // Skapa en enkel placeholder för OG-bild
  const ogImagePlaceholder = `
<!-- Placeholder för OG-bild -->
<!-- Skapa en 1200x630 bild med Plantich-branding -->
<!-- Spara som /public/og-image.jpg -->
`;
  
  writeFile(path.join(CONFIG.publicDir, 'images', 'README.md'), ogImagePlaceholder);
}

// Huvudfunktion
function main() {
  console.log('🚀 Starting Plantich homepage optimization...\n');
  
  try {
    // Skapa nödvändiga kataloger
    createDirectoryIfNotExists(CONFIG.componentsDir);
    createDirectoryIfNotExists(CONFIG.pagesDir);
    createDirectoryIfNotExists(CONFIG.publicDir);
    
    // Kör alla optimeringar
    updateLayoutMetadata();
    createOptimizedHero();
    createCategoryGrid();
    createSymptomList();
    createWhyPlantich();
    createOptimizedFooter();
    updateMainPage();
    createImagePlaceholders();
    
    console.log('\n✅ Plantich homepage optimization complete!');
    console.log('\n📋 Next steps:');
    console.log('1. Test the homepage locally');
    console.log('2. Add real images to /public/images/');
    console.log('3. Update Google verification code in layout.tsx');
    console.log('4. Deploy and test SEO performance');
    console.log('5. Monitor Core Web Vitals');
    
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

// Kör skriptet
if (require.main === module) {
  main();
}

module.exports = { main };
