#!/usr/bin/env node

/**
 * PLANTICH COMPLETE BUILD SCRIPT
 * Automatisk implementation av hela Plantich-plattformen
 */

const fs = require('fs');
const path = require('path');

// Konfiguration
const CONFIG = {
  sourceDir: 'src',
  componentsDir: 'src/components',
  contentDir: 'src/content',
  pagesDir: 'src/app',
  publicDir: 'public',
  colors: {
    background: '#FDFBF7',
    terracotta: '#C36B50',
    moss: '#7C9070',
    lavender: '#9F8FA4',
    textBlack: '#1C1B1A',
    sandLight: '#F5F2ED',
    clayWarm: '#D4C4B7',
    herbalMuted: '#8A9B7A',
    goldAccent: '#B89B5E'
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

// 1. Uppdatera Tailwind config
function updateTailwindConfig() {
  const tailwindConfig = `
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FDFBF7',
        terracotta: '#C36B50',
        moss: '#7C9070',
        lavender: '#9F8FA4',
        'text-black': '#1C1B1A',
        'sand-light': '#F5F2ED',
        'clay-warm': '#D4C4B7',
        'herbal-muted': '#8A9B7A',
        'gold-accent': '#B89B5E',
        // Legacy colors for compatibility
        ink: '#1C1B1A',
        sand: '#F5F2ED',
        clay: '#D4C4B7',
        herbal: '#7C9070',
        gold: '#B89B5E'
      },
      fontFamily: {
        serif: ['Canela', 'Reckless Neue', 'Gambarino', 'serif'],
        sans: ['Söhne', 'General Sans', 'Maison Neue', 'sans-serif'],
      },
      animation: {
        'plant-grow': 'plantGrow 2s ease-in-out infinite',
        'gentle-float': 'gentleFloat 3s ease-in-out infinite',
        'moss-glow': 'mossGlow 4s ease-in-out infinite',
      },
      keyframes: {
        plantGrow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        gentleFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        mossGlow: {
          '0%, 100%': { opacity: 0.7 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
`;

  writeFile('tailwind.config.js', tailwindConfig);
}

// 2. Skapa AI Emotion Prompt komponent
function createAIEmotionPrompt() {
  const aiPromptContent = `
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function AIEmotionPrompt() {
  const [emotion, setEmotion] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!emotion.trim()) return

    setIsProcessing(true)
    // TODO: Implement OpenAI API call
    setTimeout(() => setIsProcessing(false), 2000)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto text-center"
    >
      <h2 className="text-3xl md:text-4xl font-serif text-text-black mb-6">
        How do you feel?
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <textarea
          value={emotion}
          onChange={(e) => setEmotion(e.target.value)}
          placeholder="Describe your emotions, symptoms, or what you're seeking..."
          className="w-full p-4 border border-clay-warm rounded-lg bg-background text-text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-moss focus:border-transparent resize-none"
          rows={4}
          disabled={isProcessing}
        />
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isProcessing}
          className="bg-terracotta text-white px-8 py-4 rounded-lg font-medium hover:bg-terracotta/90 transition-colors disabled:opacity-50"
        >
          {isProcessing ? 'Finding your plants...' : 'Discover your herbal allies'}
        </motion.button>
      </form>
    </motion.div>
  )
}
`;

  writeFile(path.join(CONFIG.componentsDir, 'AIEmotionPrompt.tsx'), aiPromptContent);
}

// 3. Skapa Plant DNA Browser komponent
function createPlantDNABrowser() {
  const dnaBrowserContent = `
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface PlantDNA {
  activeCompounds: string[]
  effects: string[]
  molecularStructure: string
}

interface PlantDNABrowserProps {
  plantDNA: PlantDNA
  plantName: string
}

export default function PlantDNABrowser({ plantDNA, plantName }: PlantDNABrowserProps) {
  const [activeTab, setActiveTab] = useState<'compounds' | 'effects' | 'structure'>('compounds')

  return (
    <div className="bg-sand-light rounded-xl p-6 border border-clay-warm">
      <h3 className="text-2xl font-serif text-text-black mb-4">
        🧬 {plantName} DNA Browser
      </h3>
      
      <div className="flex space-x-2 mb-6">
        {[
          { id: 'compounds', label: 'Active Compounds' },
          { id: 'effects', label: 'Effects' },
          { id: 'structure', label: 'Molecular Structure' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={\`px-4 py-2 rounded-lg text-sm font-medium transition-colors \${
              activeTab === tab.id 
                ? 'bg-moss text-white' 
                : 'bg-background text-text-black hover:bg-clay-warm'
            }\`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-4"
      >
        {activeTab === 'compounds' && (
          <div>
            <h4 className="font-medium text-text-black mb-3">Active Compounds</h4>
            <div className="grid gap-2">
              {plantDNA.activeCompounds.map((compound, index) => (
                <motion.div
                  key={compound}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background p-3 rounded-lg border border-clay-warm"
                >
                  <span className="text-moss font-medium">{compound}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'effects' && (
          <div>
            <h4 className="font-medium text-text-black mb-3">Biological Effects</h4>
            <div className="grid gap-2">
              {plantDNA.effects.map((effect, index) => (
                <motion.div
                  key={effect}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background p-3 rounded-lg border border-clay-warm"
                >
                  <span className="text-lavender">{effect}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'structure' && (
          <div>
            <h4 className="font-medium text-text-black mb-3">Molecular Structure</h4>
            <div className="bg-background p-4 rounded-lg border border-clay-warm">
              <p className="text-sm text-gray-600">
                {plantDNA.molecularStructure}
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}
`;

  writeFile(path.join(CONFIG.componentsDir, 'PlantDNABrowser.tsx'), dnaBrowserContent);
}

// 4. Skapa Herbal World Map komponent
function createHerbalWorldMap() {
  const worldMapContent = `
'use client'

import { motion } from 'framer-motion'

interface PlantLocation {
  name: string
  origin: string
  coordinates: [number, number]
  traditions: string[]
}

interface HerbalWorldMapProps {
  plants: PlantLocation[]
}

export default function HerbalWorldMap({ plants }: HerbalWorldMapProps) {
  return (
    <div className="bg-sand-light rounded-xl p-6 border border-clay-warm">
      <h3 className="text-2xl font-serif text-text-black mb-6">
        🗺️ Herbal World Map
      </h3>
      
      <div className="relative bg-background rounded-lg p-4 border border-clay-warm">
        {/* Simplified world map visualization */}
        <div className="grid grid-cols-3 gap-4">
          {plants.map((plant, index) => (
            <motion.div
              key={plant.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-3 bg-sand-light rounded-lg border border-clay-warm hover:border-moss transition-colors cursor-pointer"
            >
              <div className="text-2xl mb-2">🌿</div>
              <h4 className="font-medium text-text-black text-sm">{plant.name}</h4>
              <p className="text-xs text-gray-600">{plant.origin}</p>
              <div className="mt-2">
                {plant.traditions.slice(0, 2).map((tradition, i) => (
                  <span key={i} className="inline-block bg-moss/20 text-moss text-xs px-2 py-1 rounded mr-1 mb-1">
                    {tradition}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
`;

  writeFile(path.join(CONFIG.componentsDir, 'HerbalWorldMap.tsx'), worldMapContent);
}

// 5. Skapa Whispers of Plant komponent
function createWhispersOfPlant() {
  const whispersContent = `
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface PlantWhispers {
  quotes: string[]
  folklore: string[]
  wisdom: string[]
}

interface WhispersOfPlantProps {
  whispers: PlantWhispers
  plantName: string
}

export default function WhispersOfPlant({ whispers, plantName }: WhispersOfPlantProps) {
  const [activeCategory, setActiveCategory] = useState<'quotes' | 'folklore' | 'wisdom'>('quotes')

  return (
    <div className="bg-lavender/10 rounded-xl p-6 border border-lavender/20">
      <h3 className="text-2xl font-serif text-text-black mb-6">
        📖 Whispers of {plantName}
      </h3>
      
      <div className="flex space-x-2 mb-6">
        {[
          { id: 'quotes', label: 'Ancient Quotes', icon: '💭' },
          { id: 'folklore', label: 'Folklore', icon: '🌙' },
          { id: 'wisdom', label: 'Wisdom', icon: '✨' }
        ].map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id as any)}
            className={\`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors \${
              activeCategory === category.id 
                ? 'bg-lavender text-white' 
                : 'bg-background text-text-black hover:bg-lavender/20'
            }\`}
          >
            <span>{category.icon}</span>
            <span>{category.label}</span>
          </button>
        ))}
      </div>

      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        {activeCategory === 'quotes' && (
          <div className="space-y-4">
            {whispers.quotes.map((quote, index) => (
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-background p-4 rounded-lg border-l-4 border-lavender italic text-gray-700"
              >
                "{quote}"
              </motion.blockquote>
            ))}
          </div>
        )}

        {activeCategory === 'folklore' && (
          <div className="space-y-4">
            {whispers.folklore.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-background p-4 rounded-lg border border-clay-warm"
              >
                <p className="text-gray-700">{story}</p>
              </motion.div>
            ))}
          </div>
        )}

        {activeCategory === 'wisdom' && (
          <div className="space-y-4">
            {whispers.wisdom.map((wisdom, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-background p-4 rounded-lg border border-gold-accent/30"
              >
                <p className="text-gray-700 font-medium">{wisdom}</p>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}
`;

  writeFile(path.join(CONFIG.componentsDir, 'WhispersOfPlant.tsx'), whispersContent);
}

// 6. Skapa Ritual Mode komponent
function createRitualMode() {
  const ritualModeContent = `
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Ritual {
  name: string
  description: string
  steps: string[]
  duration: string
  audioUrl?: string
  mood: string
}

interface RitualModeProps {
  ritual: Ritual
}

export default function RitualMode({ ritual }: RitualModeProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const startRitual = () => {
    setIsPlaying(true)
    // TODO: Start audio and timer
  }

  const nextStep = () => {
    if (currentStep < ritual.steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <div className="bg-background rounded-xl p-6 border border-clay-warm">
      <h3 className="text-2xl font-serif text-text-black mb-6">
        📲 Ritual Mode: {ritual.name}
      </h3>
      
      <div className="text-center mb-6">
        <p className="text-gray-600 mb-4">{ritual.description}</p>
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
          <span>⏱️ {ritual.duration}</span>
          <span>🌙 {ritual.mood}</span>
        </div>
      </div>

      {!isPlaying ? (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={startRitual}
          className="w-full bg-terracotta text-white py-4 rounded-lg font-medium hover:bg-terracotta/90 transition-colors"
        >
          Begin Ritual
        </motion.button>
      ) : (
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-4xl mb-4">🌿</div>
            <h4 className="text-lg font-medium text-text-black mb-2">
              Step {currentStep + 1} of {ritual.steps.length}
            </h4>
            <p className="text-gray-700">{ritual.steps[currentStep]}</p>
          </div>

          <div className="flex justify-center space-x-4">
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="px-4 py-2 bg-clay-warm text-text-black rounded-lg hover:bg-clay-warm/80 transition-colors"
              >
                Previous
              </button>
            )}
            
            {currentStep < ritual.steps.length - 1 ? (
              <button
                onClick={nextStep}
                className="px-4 py-2 bg-moss text-white rounded-lg hover:bg-moss/90 transition-colors"
              >
                Next Step
              </button>
            ) : (
              <button
                onClick={() => setIsPlaying(false)}
                className="px-4 py-2 bg-gold-accent text-white rounded-lg hover:bg-gold-accent/90 transition-colors"
              >
                Complete Ritual
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
`;

  writeFile(path.join(CONFIG.componentsDir, 'RitualMode.tsx'), ritualModeContent);
}

// 7. Skapa Touch Reactive UI komponent
function createTouchReactiveUI() {
  const touchReactiveContent = `
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TouchReactiveUIProps {
  children: React.ReactNode
}

export default function TouchReactiveUI({ children }: TouchReactiveUIProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      animate={{
        scale: isHovering ? 1.02 : 1,
        rotateY: isHovering ? 2 : 0,
      }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden"
    >
      {/* Floating particles effect */}
      {isHovering && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-moss/30 rounded-full"
              initial={{
                x: mousePosition.x,
                y: mousePosition.y,
                scale: 0,
              }}
              animate={{
                x: mousePosition.x + (Math.random() - 0.5) * 100,
                y: mousePosition.y + (Math.random() - 0.5) * 100,
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      )}

      {children}
    </motion.div>
  )
}
`;

  writeFile(path.join(CONFIG.componentsDir, 'TouchReactiveUI.tsx'), touchReactiveContent);
}

// Huvudfunktion
function main() {
  console.log('🌿 Starting Plantich complete platform build...\n');
  
  try {
    // Skapa nödvändiga kataloger
    createDirectoryIfNotExists(CONFIG.componentsDir);
    createDirectoryIfNotExists(CONFIG.contentDir);
    createDirectoryIfNotExists(path.join(CONFIG.contentDir, 'plants'));
    createDirectoryIfNotExists(path.join(CONFIG.contentDir, 'remedies'));
    createDirectoryIfNotExists(path.join(CONFIG.contentDir, 'remedies', 'mind'));
    createDirectoryIfNotExists(path.join(CONFIG.contentDir, 'remedies', 'digestion'));
    createDirectoryIfNotExists(path.join(CONFIG.contentDir, 'remedies', 'skin'));
    createDirectoryIfNotExists(path.join(CONFIG.contentDir, 'remedies', 'energy'));
    createDirectoryIfNotExists(path.join(CONFIG.contentDir, 'remedies', 'immunity'));
    
    // Kör alla byggsteg
    updateTailwindConfig();
    createAIEmotionPrompt();
    createPlantDNABrowser();
    createHerbalWorldMap();
    createWhispersOfPlant();
    createRitualMode();
    createTouchReactiveUI();
    
    console.log('\n✅ Plantich platform build complete!');
    console.log('\n📋 Next steps:');
    console.log('1. Add framer-motion: npm install framer-motion');
    console.log('2. Create plant and remedy content files');
    console.log('3. Implement OpenAI API integration');
    console.log('4. Add audio files for rituals');
    console.log('5. Deploy and test all features');
    
  } catch (error) {
    console.error('❌ Error during build:', error);
    process.exit(1);
  }
}

// Kör skriptet
if (require.main === module) {
  main();
}

module.exports = { main };
