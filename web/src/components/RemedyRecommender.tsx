'use client'

import { useState } from 'react'
import { allRemedies, allPlants } from '@/content'

interface Symptom {
  id: string
  name: string
  category: 'Mind' | 'Body' | 'Spirit'
}

interface Recommendation {
  plant: {
    name: string
    slug: string
    description: string
    preparation: string
  }
  dosage: string
  frequency: string
  duration: string
  notes: string
  priority: 'primary' | 'secondary' | 'supportive'
}

const commonSymptoms: Symptom[] = [
  // Mind symptoms
  { id: 'anxiety', name: 'Anxiety & Stress', category: 'Mind' },
  { id: 'insomnia', name: 'Sleep Issues', category: 'Mind' },
  { id: 'depression', name: 'Low Mood', category: 'Mind' },
  { id: 'focus', name: 'Focus & Concentration', category: 'Mind' },
  { id: 'memory', name: 'Memory Issues', category: 'Mind' },
  
  // Body symptoms
  { id: 'fatigue', name: 'Fatigue & Low Energy', category: 'Body' },
  { id: 'digestion', name: 'Digestive Issues', category: 'Body' },
  { id: 'inflammation', name: 'Inflammation & Pain', category: 'Body' },
  { id: 'immune', name: 'Immune Support', category: 'Body' },
  { id: 'heart', name: 'Heart Health', category: 'Body' },
  { id: 'blood-sugar', name: 'Blood Sugar Balance', category: 'Body' },
  { id: 'detox', name: 'Detox Support', category: 'Body' },
  
  // Hormonal symptoms
  { id: 'hormones', name: 'Hormone Balance', category: 'Body' },
  { id: 'pms', name: 'PMS Symptoms', category: 'Body' },
  { id: 'menopause', name: 'Menopause Support', category: 'Body' },
]

const dosageGuide = {
  'ashwagandha': {
    dosage: '300-600mg',
    frequency: '1-2 times daily',
    duration: '6-8 weeks',
    notes: 'Take with meals. Best in the morning or early afternoon.',
    priority: 'primary' as const
  },
  'valerian-root': {
    dosage: '300-600mg',
    frequency: '30-60 minutes before bed',
    duration: '2-4 weeks',
    notes: 'May cause drowsiness. Do not combine with alcohol.',
    priority: 'primary' as const
  },
  'passionflower': {
    dosage: '250-500mg',
    frequency: '2-3 times daily',
    duration: '4-6 weeks',
    notes: 'Can be taken as tea or tincture. Gentle and non-habit forming.',
    priority: 'secondary' as const
  },
  'lemon-balm': {
    dosage: '300-600mg',
    frequency: '2-3 times daily',
    duration: '4-8 weeks',
    notes: 'Safe for long-term use. Can be taken as tea.',
    priority: 'secondary' as const
  },
  'ginseng': {
    dosage: '200-400mg',
    frequency: '1 time daily in morning',
    duration: '4-6 weeks',
    notes: 'Take on empty stomach. Avoid in evening.',
    priority: 'primary' as const
  },
  'rhodiola': {
    dosage: '200-400mg',
    frequency: '1-2 times daily',
    duration: '6-8 weeks',
    notes: 'Take in morning. May need cycling (3 weeks on, 1 week off).',
    priority: 'primary' as const
  },
  'turmeric': {
    dosage: '500-1000mg',
    frequency: '1-2 times daily',
    duration: '8-12 weeks',
    notes: 'Take with black pepper for better absorption.',
    priority: 'primary' as const
  },
  'ginger': {
    dosage: '250-500mg',
    frequency: '2-3 times daily',
    duration: 'As needed',
    notes: 'Can be taken as tea or capsules. Safe for daily use.',
    priority: 'secondary' as const
  },
  'milk-thistle': {
    dosage: '250-500mg',
    frequency: '1-2 times daily',
    duration: '8-12 weeks',
    notes: 'Take with meals. Best for liver support.',
    priority: 'primary' as const
  },
  'echinacea': {
    dosage: '300-500mg',
    frequency: '3 times daily',
    duration: '7-10 days',
    notes: 'Take at first sign of illness. Do not use continuously.',
    priority: 'primary' as const
  },
  'elderberry': {
    dosage: '500-1000mg',
    frequency: '2-3 times daily',
    duration: '5-7 days',
    notes: 'Take at first sign of illness. Available as syrup or capsules.',
    priority: 'primary' as const
  },
  'garlic': {
    dosage: '600-1200mg',
    frequency: '1-2 times daily',
    duration: '8-12 weeks',
    notes: 'Take with meals. May cause garlic breath.',
    priority: 'secondary' as const
  },
  'cinnamon': {
    dosage: '500-1000mg',
    frequency: '1-2 times daily',
    duration: '8-12 weeks',
    notes: 'Take with meals. Monitor blood sugar levels.',
    priority: 'secondary' as const
  },
  'fenugreek': {
    dosage: '500-1000mg',
    frequency: '1-2 times daily',
    duration: '8-12 weeks',
    notes: 'Take with meals. May affect blood sugar.',
    priority: 'secondary' as const
  },
  'maca': {
    dosage: '1000-3000mg',
    frequency: '1 time daily',
    duration: '8-12 weeks',
    notes: 'Take in morning. May need cycling.',
    priority: 'primary' as const
  },
  'reishi': {
    dosage: '500-1000mg',
    frequency: '1-2 times daily',
    duration: '8-12 weeks',
    notes: 'Take with meals. Best for immune and stress support.',
    priority: 'primary' as const
  },
  'cordyceps': {
    dosage: '500-1000mg',
    frequency: '1 time daily in morning',
    duration: '6-8 weeks',
    notes: 'Take on empty stomach. Avoid in evening.',
    priority: 'primary' as const
  },
  'bacopa': {
    dosage: '300-600mg',
    frequency: '1-2 times daily',
    duration: '8-12 weeks',
    notes: 'Take with meals. Best for cognitive support.',
    priority: 'primary' as const
  },
  'ginkgo-biloba': {
    dosage: '120-240mg',
    frequency: '1-2 times daily',
    duration: '8-12 weeks',
    notes: 'Take with meals. May take 4-6 weeks to see effects.',
    priority: 'primary' as const
  },
  'lions-mane': {
    dosage: '500-1000mg',
    frequency: '1-2 times daily',
    duration: '8-12 weeks',
    notes: 'Take with meals. Best for cognitive and nerve support.',
    priority: 'primary' as const
  },
  'chamomile': {
    dosage: '400-800mg',
    frequency: '2-3 times daily',
    duration: 'As needed',
    notes: 'Can be taken as tea. Safe for daily use.',
    priority: 'secondary' as const
  },
  'lavender': {
    dosage: '80-160mg',
    frequency: '1-2 times daily',
    duration: '4-6 weeks',
    notes: 'Available as capsules or essential oil. Gentle and safe.',
    priority: 'secondary' as const
  }
}

export default function RemedyRecommender() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSymptomToggle = (symptomId: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptomId) 
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    )
  }

  const generateRecommendations = () => {
    setIsLoading(true)
    
    // Simulate processing time
    setTimeout(() => {
      const newRecommendations: Recommendation[] = []
      const usedPlants = new Set<string>()

      selectedSymptoms.forEach(symptomId => {
        // Find remedies for this symptom
        const relevantRemedies = allRemedies.filter(remedy => 
          remedy.title.toLowerCase().includes(symptomId) ||
          remedy.herbs.some(herb => herb.toLowerCase().includes(symptomId))
        )

        relevantRemedies.forEach(remedy => {
          remedy.herbs.forEach(herbName => {
            const plantSlug = herbName.toLowerCase().replace(/\s+/g, '-')
            
            // Skip if we already have this plant
            if (usedPlants.has(plantSlug)) return
            
            const plant = allPlants.find(p => p.slug === plantSlug)
            if (!plant) return

            const dosageInfo = dosageGuide[plantSlug as keyof typeof dosageGuide]
            if (!dosageInfo) return

            newRecommendations.push({
              plant: {
                name: plant.title,
                slug: plant.slug,
                description: plant.description,
                preparation: plant.dosage
              },
              dosage: dosageInfo.dosage,
              frequency: dosageInfo.frequency,
              duration: dosageInfo.duration,
              notes: dosageInfo.notes,
              priority: dosageInfo.priority
            })

            usedPlants.add(plantSlug)
          })
        })
      })

      // Sort by priority and limit to top recommendations
      const sortedRecommendations = newRecommendations
        .sort((a, b) => {
          const priorityOrder = { primary: 1, secondary: 2, supportive: 3 }
          return priorityOrder[a.priority] - priorityOrder[b.priority]
        })
        .slice(0, 8)

      setRecommendations(sortedRecommendations)
      setIsLoading(false)
    }, 1500)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'primary': return 'bg-herbal/10 text-herbal border-herbal/20'
      case 'secondary': return 'bg-gold/10 text-gold border-gold/20'
      case 'supportive': return 'bg-clay/10 text-ink border-clay/20'
      default: return 'bg-clay/10 text-ink border-clay/20'
    }
  }

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'primary': return 'Primary'
      case 'secondary': return 'Secondary'
      case 'supportive': return 'Supportive'
      default: return 'Supportive'
    }
  }

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-ink mb-4">Personalized Remedy Recommendations</h2>
          <p className="text-lg text-herbal font-sans max-w-2xl mx-auto">
            Select your symptoms to receive personalized herbal recommendations with specific dosages and usage guidelines.
          </p>
        </div>

        {/* Symptom Selection */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl text-ink mb-6 text-center">Select Your Symptoms</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {commonSymptoms.map((symptom) => (
              <button
                key={symptom.id}
                onClick={() => handleSymptomToggle(symptom.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                  selectedSymptoms.includes(symptom.id)
                    ? 'border-herbal bg-herbal/5 text-herbal'
                    : 'border-clay/30 bg-white hover:border-herbal/50 hover:bg-herbal/5'
                }`}
              >
                <div className="font-sans font-medium">{symptom.name}</div>
                <div className="text-sm text-herbal/70 mt-1">{symptom.category}</div>
              </button>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={generateRecommendations}
              disabled={selectedSymptoms.length === 0 || isLoading}
              className={`px-8 py-4 rounded-lg font-sans font-medium transition-all duration-200 ${
                selectedSymptoms.length === 0 || isLoading
                  ? 'bg-clay/30 text-ink/50 cursor-not-allowed'
                  : 'bg-herbal text-white hover:bg-ink'
              }`}
            >
              {isLoading ? 'Generating Recommendations...' : 'Get Recommendations'}
            </button>
          </div>
        </div>

        {/* Recommendations */}
        {recommendations.length > 0 && (
          <div className="space-y-8">
            <h3 className="font-serif text-2xl text-ink text-center">Your Personalized Recommendations</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {recommendations.map((rec, index) => (
                <div key={index} className="apothecary-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="font-serif text-xl text-ink">{rec.plant.title}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full border ${getPriorityColor(rec.priority)}`}>
                      {getPriorityLabel(rec.priority)}
                    </span>
                  </div>
                  
                  <p className="text-sm text-herbal mb-4 line-clamp-2">{rec.plant.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-ink">Dosage:</span>
                      <span className="text-sm text-herbal">{rec.dosage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-ink">Frequency:</span>
                      <span className="text-sm text-herbal">{rec.frequency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-ink">Duration:</span>
                      <span className="text-sm text-herbal">{rec.duration}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-sand/50 rounded-lg">
                    <p className="text-xs text-ink font-medium mb-1">Notes:</p>
                    <p className="text-xs text-herbal">{rec.notes}</p>
                  </div>
                  
                  <div className="mt-4 p-3 bg-clay/20 rounded-lg">
                    <p className="text-xs text-ink font-medium mb-1">Preparation:</p>
                    <p className="text-xs text-herbal">{rec.plant.dosage}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Safety Notice */}
            <div className="mt-8 p-6 bg-herbal/10 border border-herbal/20 rounded-lg">
              <h4 className="font-serif text-lg text-herbal mb-2">Important Safety Notice</h4>
              <p className="text-sm text-ink font-sans">
                These recommendations are for educational purposes only. Always consult with a qualified healthcare provider before starting any herbal regimen, especially if you are pregnant, nursing, taking medications, or have underlying health conditions. Start with lower dosages and monitor your response.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
