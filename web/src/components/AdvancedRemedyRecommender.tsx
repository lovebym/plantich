'use client'

import { useState } from 'react'
import { allRemedies, allPlants, Plant } from '@/lib/content-loader'

interface Symptom {
  id: string
  name: string
  category: 'Mind' | 'Body' | 'Spirit'
  severity: 'mild' | 'moderate' | 'severe'
  frequency: 'occasional' | 'frequent' | 'constant'
  duration: 'acute' | 'chronic'
}

interface AdvancedRecommendation {
  plant: {
    name: string
    slug: string
    description: string
    preparation: string
    category: string
  }
  dosage: {
    amount: string
    frequency: string
    duration: string
    timing: string
    form: string
  }
  priority: 'primary' | 'secondary' | 'supportive' | 'emergency'
  effectiveness: number // 1-10
  safety: 'safe' | 'caution' | 'consult'
  interactions: string[]
  contraindications: string[]
  notes: string
  scientificEvidence: 'strong' | 'moderate' | 'limited'
  userRating: number // 1-5
}

interface UserProfile {
  age: number
  weight: number
  gender: 'male' | 'female' | 'other'
  healthConditions: string[]
  medications: string[]
  allergies: string[]
  pregnancy: boolean
  breastfeeding: boolean
  lifestyle: 'sedentary' | 'moderate' | 'active'
  diet: 'standard' | 'vegetarian' | 'vegan' | 'keto' | 'paleo'
  sleepQuality: 'poor' | 'fair' | 'good' | 'excellent'
  stressLevel: 'low' | 'moderate' | 'high'
  goals: string[]
}

const advancedSymptoms: Symptom[] = [
  // Mental Health (Mind)
  { id: 'anxiety', name: 'Anxiety & Nervousness', category: 'Mind', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'depression', name: 'Depression & Low Mood', category: 'Mind', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'stress', name: 'Chronic Stress', category: 'Mind', severity: 'moderate', frequency: 'constant', duration: 'chronic' },
  { id: 'insomnia', name: 'Sleep Problems', category: 'Mind', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'focus', name: 'Poor Focus & Concentration', category: 'Mind', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'memory', name: 'Memory Issues', category: 'Mind', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'brain-fog', name: 'Brain Fog', category: 'Mind', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'mood-swings', name: 'Mood Swings', category: 'Mind', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'panic', name: 'Panic Attacks', category: 'Mind', severity: 'severe', frequency: 'occasional', duration: 'acute' },
  { id: 'ptsd', name: 'PTSD Symptoms', category: 'Mind', severity: 'severe', frequency: 'frequent', duration: 'chronic' },

  // Energy & Vitality (Body)
  { id: 'fatigue', name: 'Chronic Fatigue', category: 'Body', severity: 'moderate', frequency: 'constant', duration: 'chronic' },
  { id: 'low-energy', name: 'Low Energy', category: 'Body', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'burnout', name: 'Burnout', category: 'Body', severity: 'severe', frequency: 'constant', duration: 'chronic' },
  { id: 'weakness', name: 'Physical Weakness', category: 'Body', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'recovery', name: 'Slow Recovery', category: 'Body', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },

  // Digestive Health (Body)
  { id: 'digestive-issues', name: 'Digestive Problems', category: 'Body', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'bloating', name: 'Bloating & Gas', category: 'Body', severity: 'mild', frequency: 'frequent', duration: 'chronic' },
  { id: 'constipation', name: 'Constipation', category: 'Body', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'diarrhea', name: 'Diarrhea', category: 'Body', severity: 'moderate', frequency: 'occasional', duration: 'acute' },
  { id: 'acid-reflux', name: 'Acid Reflux', category: 'Body', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'nausea', name: 'Nausea', category: 'Body', severity: 'moderate', frequency: 'occasional', duration: 'acute' },

  // Immune System (Body)
  { id: 'immune-support', name: 'Weak Immune System', category: 'Body', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'frequent-colds', name: 'Frequent Colds', category: 'Body', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'slow-healing', name: 'Slow Wound Healing', category: 'Body', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },

  // Pain & Inflammation (Body)
  { id: 'joint-pain', name: 'Joint Pain', category: 'Body', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'back-pain', name: 'Back Pain', category: 'Body', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'headache', name: 'Headaches', category: 'Body', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'muscle-pain', name: 'Muscle Pain', category: 'Body', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'inflammation', name: 'Chronic Inflammation', category: 'Body', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },

  // Hormonal Health (Body)
  { id: 'hormone-balance', name: 'Hormone Imbalance', category: 'Body', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'pms', name: 'PMS Symptoms', category: 'Body', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'menopause', name: 'Menopause Symptoms', category: 'Body', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'thyroid', name: 'Thyroid Issues', category: 'Body', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'adrenal-fatigue', name: 'Adrenal Fatigue', category: 'Body', severity: 'severe', frequency: 'constant', duration: 'chronic' },

  // Cardiovascular (Body)
  { id: 'heart-health', name: 'Heart Health Concerns', category: 'Body', severity: 'severe', frequency: 'frequent', duration: 'chronic' },
  { id: 'blood-pressure', name: 'Blood Pressure Issues', category: 'Body', severity: 'severe', frequency: 'frequent', duration: 'chronic' },
  { id: 'circulation', name: 'Poor Circulation', category: 'Body', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },

  // Skin Health (Body)
  { id: 'acne', name: 'Acne', category: 'Body', severity: 'mild', frequency: 'frequent', duration: 'chronic' },
  { id: 'eczema', name: 'Eczema', category: 'Body', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'psoriasis', name: 'Psoriasis', category: 'Body', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'skin-aging', name: 'Skin Aging', category: 'Body', severity: 'mild', frequency: 'constant', duration: 'chronic' },

  // Respiratory (Body)
  { id: 'asthma', name: 'Asthma', category: 'Body', severity: 'severe', frequency: 'frequent', duration: 'chronic' },
  { id: 'allergies', name: 'Allergies', category: 'Body', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'sinus-issues', name: 'Sinus Problems', category: 'Body', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },

  // Detox & Cleansing (Body)
  { id: 'detox', name: 'Need for Detox', category: 'Body', severity: 'moderate', frequency: 'occasional', duration: 'acute' },
  { id: 'liver-support', name: 'Liver Support', category: 'Body', severity: 'moderate', frequency: 'frequent', duration: 'chronic' },
  { id: 'kidney-health', name: 'Kidney Health', category: 'Body', severity: 'severe', frequency: 'frequent', duration: 'chronic' }
]

const comprehensiveDosageGuide = {
  'ashwagandha': {
    dosage: { amount: '300-600mg', frequency: '1-2x daily', duration: '8-12 weeks', timing: 'with meals', form: 'capsules' },
    effectiveness: 9,
    safety: 'safe',
    interactions: ['sedatives', 'thyroid medications'],
    contraindications: ['pregnancy', 'autoimmune conditions'],
    scientificEvidence: 'strong',
    userRating: 4.5
  },
  'rhodiola': {
    dosage: { amount: '200-400mg', frequency: '1-2x daily', duration: '6-8 weeks', timing: 'morning', form: 'capsules' },
    effectiveness: 8,
    safety: 'safe',
    interactions: ['antidepressants', 'blood thinners'],
    contraindications: ['bipolar disorder'],
    scientificEvidence: 'strong',
    userRating: 4.3
  },
  'ginseng': {
    dosage: { amount: '200-400mg', frequency: '1x daily', duration: '4-8 weeks', timing: 'morning', form: 'capsules' },
    effectiveness: 8,
    safety: 'caution',
    interactions: ['blood thinners', 'diabetes medications'],
    contraindications: ['high blood pressure', 'pregnancy'],
    scientificEvidence: 'strong',
    userRating: 4.2
  },
  'valerian-root': {
    dosage: { amount: '300-600mg', frequency: '1x daily', duration: '4-6 weeks', timing: 'evening', form: 'capsules' },
    effectiveness: 7,
    safety: 'safe',
    interactions: ['sedatives', 'alcohol'],
    contraindications: ['pregnancy', 'liver disease'],
    scientificEvidence: 'moderate',
    userRating: 4.0
  },
  'passionflower': {
    dosage: { amount: '250-500mg', frequency: '1-2x daily', duration: '4-8 weeks', timing: 'evening', form: 'capsules' },
    effectiveness: 7,
    safety: 'safe',
    interactions: ['sedatives', 'blood pressure medications'],
    contraindications: ['pregnancy'],
    scientificEvidence: 'moderate',
    userRating: 4.1
  },
  'turmeric': {
    dosage: { amount: '500-1000mg', frequency: '1-2x daily', duration: 'ongoing', timing: 'with meals', form: 'capsules' },
    effectiveness: 8,
    safety: 'safe',
    interactions: ['blood thinners', 'diabetes medications'],
    contraindications: ['gallbladder issues'],
    scientificEvidence: 'strong',
    userRating: 4.4
  },
  'ginger': {
    dosage: { amount: '250-500mg', frequency: '2-3x daily', duration: 'as needed', timing: 'with meals', form: 'capsules' },
    effectiveness: 8,
    safety: 'safe',
    interactions: ['blood thinners', 'diabetes medications'],
    contraindications: ['gallbladder issues'],
    scientificEvidence: 'strong',
    userRating: 4.3
  },
  'echinacea': {
    dosage: { amount: '300-500mg', frequency: '3x daily', duration: '7-10 days', timing: 'with meals', form: 'capsules' },
    effectiveness: 7,
    safety: 'safe',
    interactions: ['immunosuppressants'],
    contraindications: ['autoimmune conditions'],
    scientificEvidence: 'moderate',
    userRating: 4.0
  },
  'elderberry': {
    dosage: { amount: '300-600mg', frequency: '2-3x daily', duration: '5-7 days', timing: 'with meals', form: 'capsules' },
    effectiveness: 8,
    safety: 'safe',
    interactions: ['diabetes medications'],
    contraindications: ['autoimmune conditions'],
    scientificEvidence: 'strong',
    userRating: 4.2
  },
  'milk-thistle': {
    dosage: { amount: '250-500mg', frequency: '1-2x daily', duration: 'ongoing', timing: 'with meals', form: 'capsules' },
    effectiveness: 7,
    safety: 'safe',
    interactions: ['diabetes medications', 'estrogen'],
    contraindications: ['pregnancy'],
    scientificEvidence: 'moderate',
    userRating: 4.1
  },
  'reishi': {
    dosage: { amount: '500-1000mg', frequency: '1-2x daily', duration: 'ongoing', timing: 'with meals', form: 'capsules' },
    effectiveness: 8,
    safety: 'safe',
    interactions: ['blood thinners', 'immunosuppressants'],
    contraindications: ['autoimmune conditions'],
    scientificEvidence: 'moderate',
    userRating: 4.3
  },
  'cordyceps': {
    dosage: { amount: '500-1000mg', frequency: '1-2x daily', duration: '8-12 weeks', timing: 'morning', form: 'capsules' },
    effectiveness: 8,
    safety: 'safe',
    interactions: ['blood thinners', 'diabetes medications'],
    contraindications: ['autoimmune conditions'],
    scientificEvidence: 'moderate',
    userRating: 4.2
  },
  'lions-mane': {
    dosage: { amount: '500-1000mg', frequency: '1-2x daily', duration: 'ongoing', timing: 'with meals', form: 'capsules' },
    effectiveness: 8,
    safety: 'safe',
    interactions: ['blood thinners'],
    contraindications: ['none known'],
    scientificEvidence: 'moderate',
    userRating: 4.4
  },
  'bacopa': {
    dosage: { amount: '300-600mg', frequency: '1-2x daily', duration: '12 weeks', timing: 'with meals', form: 'capsules' },
    effectiveness: 8,
    safety: 'safe',
    interactions: ['thyroid medications'],
    contraindications: ['pregnancy'],
    scientificEvidence: 'strong',
    userRating: 4.1
  },
  'ginkgo-biloba': {
    dosage: { amount: '120-240mg', frequency: '1-2x daily', duration: 'ongoing', timing: 'with meals', form: 'capsules' },
    effectiveness: 7,
    safety: 'caution',
    interactions: ['blood thinners', 'antidepressants'],
    contraindications: ['seizure disorders'],
    scientificEvidence: 'strong',
    userRating: 4.0
  },
  'maca': {
    dosage: { amount: '1000-3000mg', frequency: '1x daily', duration: 'ongoing', timing: 'morning', form: 'powder' },
    effectiveness: 7,
    safety: 'safe',
    interactions: ['thyroid medications'],
    contraindications: ['pregnancy'],
    scientificEvidence: 'moderate',
    userRating: 4.2
  },
  'chasteberry': {
    dosage: { amount: '400-800mg', frequency: '1x daily', duration: '3-6 months', timing: 'morning', form: 'capsules' },
    effectiveness: 8,
    safety: 'safe',
    interactions: ['birth control', 'hormone therapy'],
    contraindications: ['pregnancy'],
    scientificEvidence: 'strong',
    userRating: 4.3
  },
  'hawthorn': {
    dosage: { amount: '300-600mg', frequency: '2-3x daily', duration: 'ongoing', timing: 'with meals', form: 'capsules' },
    effectiveness: 8,
    safety: 'caution',
    interactions: ['heart medications', 'blood pressure medications'],
    contraindications: ['heart conditions'],
    scientificEvidence: 'strong',
    userRating: 4.1
  },
  'garlic': {
    dosage: { amount: '600-1200mg', frequency: '1x daily', duration: 'ongoing', timing: 'with meals', form: 'capsules' },
    effectiveness: 8,
    safety: 'safe',
    interactions: ['blood thinners', 'HIV medications'],
    contraindications: ['surgery'],
    scientificEvidence: 'strong',
    userRating: 4.2
  },
  'cinnamon': {
    dosage: { amount: '500-1000mg', frequency: '1-2x daily', duration: 'ongoing', timing: 'with meals', form: 'capsules' },
    effectiveness: 7,
    safety: 'safe',
    interactions: ['diabetes medications'],
    contraindications: ['liver disease'],
    scientificEvidence: 'moderate',
    userRating: 4.0
  }
}

export default function AdvancedRemedyRecommender() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [userProfile, setUserProfile] = useState<UserProfile>({
    age: 30,
    weight: 70,
    gender: 'other',
    healthConditions: [],
    medications: [],
    allergies: [],
    pregnancy: false,
    breastfeeding: false,
    lifestyle: 'moderate',
    diet: 'standard',
    sleepQuality: 'fair',
    stressLevel: 'moderate',
    goals: []
  })
  const [recommendations, setRecommendations] = useState<AdvancedRecommendation[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const handleSymptomToggle = (symptomId: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptomId) 
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    )
  }

  const generateAdvancedRecommendations = () => {
    setIsLoading(true)
    
    // Advanced algorithm for personalized recommendations
    const plantScores = new Map<string, number>()
    
    selectedSymptoms.forEach(symptomId => {
      const symptom = advancedSymptoms.find(s => s.id === symptomId)
      if (!symptom) return
      
      // Find remedies for this symptom
      const relevantRemedies = allRemedies.filter(remedy => 
        remedy.title.toLowerCase().includes(symptom.name.toLowerCase()) ||
        remedy.plants.some(herb => herb.toLowerCase().includes(symptom.name.toLowerCase()))
      )
      
      relevantRemedies.forEach(remedy => {
        remedy.plants.forEach(herb => {
          const plantSlug = herb.toLowerCase().replace(/\s+/g, '-')
          const currentScore = plantScores.get(plantSlug) || 0
          
          // Calculate score based on multiple factors
          let score = currentScore + 1
          
          // Severity multiplier
          if (symptom.severity === 'severe') score += 2
          else if (symptom.severity === 'moderate') score += 1
          
          // Frequency multiplier
          if (symptom.frequency === 'constant') score += 2
          else if (symptom.frequency === 'frequent') score += 1
          
          // Duration multiplier
          if (symptom.duration === 'chronic') score += 1
          
          plantScores.set(plantSlug, score)
        })
      })
    })
    
    // Convert to recommendations
    const recommendations: AdvancedRecommendation[] = []
    
    // Sort plants by score
    const sortedPlants = Array.from(plantScores.entries())
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10) // Top 10 recommendations
    
    sortedPlants.forEach(([plantSlug], index) => {
      const plant = allPlants.find(p => p.slug === plantSlug)
      if (!plant) return
      
      const dosageInfo = comprehensiveDosageGuide[plantSlug as keyof typeof comprehensiveDosageGuide]
      if (!dosageInfo) return
      
      // Adjust dosage based on user profile
      const adjustedDosage = { ...dosageInfo.dosage }
      
      if (userProfile.age > 65) {
        adjustedDosage.amount = adjustDosageForAge(adjustedDosage.amount, 0.8)
      }
      
      if (userProfile.weight < 60) {
        adjustedDosage.amount = adjustDosageForWeight(adjustedDosage.amount, 0.9)
      } else if (userProfile.weight > 90) {
        adjustedDosage.amount = adjustDosageForWeight(adjustedDosage.amount, 1.1)
      }
      
      // Check for contraindications
                        let safety: 'safe' | 'caution' | 'consult' = dosageInfo.safety as 'safe' | 'caution' | 'consult'
      const contraindications = [...dosageInfo.contraindications]
      
      if (userProfile.pregnancy && dosageInfo.contraindications.includes('pregnancy')) {
        safety = 'consult'
        contraindications.push('Pregnancy - consult doctor')
      }
      
      if (userProfile.medications.some(med => dosageInfo.interactions.includes(med.toLowerCase()))) {
        safety = 'consult'
        contraindications.push('Medication interaction - consult doctor')
      }
      
      recommendations.push({
        plant: {
          name: plant.title,
          slug: plant.slug,
          description: plant.description,
          preparation: plant.dosage || 'Not specified',
          category: plant.category || 'Body'
        },
        dosage: adjustedDosage,
        priority: index < 3 ? 'primary' : index < 6 ? 'secondary' : 'supportive',
        effectiveness: dosageInfo.effectiveness,
        safety,
        interactions: dosageInfo.interactions,
        contraindications,
        notes: generatePersonalizedNotes(plant, userProfile, selectedSymptoms),
        scientificEvidence: dosageInfo.scientificEvidence as 'strong' | 'moderate' | 'limited',
        userRating: dosageInfo.userRating
      })
    })
    
    setRecommendations(recommendations)
    setIsLoading(false)
  }

  const adjustDosageForAge = (dosage: string, factor: number): string => {
    const match = dosage.match(/(\d+)-?(\d+)?/)
    if (!match) return dosage
    
    const min = Math.round(parseInt(match[1] || '0') * factor)
    const max = match[2] ? Math.round(parseInt(match[2]) * factor) : min
    
    return `${min}-${max}mg`
  }

  const adjustDosageForWeight = (dosage: string, factor: number): string => {
    return adjustDosageForAge(dosage, factor)
  }

  const generatePersonalizedNotes = (plant: Plant, profile: UserProfile, symptoms: string[]): string => {
    const notes: string[] = []
    
    if (profile.stressLevel === 'high') {
      notes.push('Take with stress management techniques')
    }
    
    if (profile.sleepQuality === 'poor') {
      notes.push('May improve sleep quality over time')
    }
    
    if (profile.lifestyle === 'sedentary') {
      notes.push('Combine with gentle exercise for best results')
    }
    
    if (profile.diet === 'vegetarian' || profile.diet === 'vegan') {
      notes.push('Suitable for plant-based diets')
    }
    
    if (symptoms.length > 3) {
      notes.push('Consider cycling herbs to avoid tolerance')
    }
    
    return notes.join('. ') + '.'
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'primary': return 'bg-red-50 border-red-200 text-red-800'
      case 'secondary': return 'bg-yellow-50 border-yellow-200 text-yellow-800'
      case 'supportive': return 'bg-green-50 border-green-200 text-green-800'
      default: return 'bg-gray-50 border-gray-200 text-gray-800'
    }
  }

  const getSafetyColor = (safety: string) => {
    switch (safety) {
      case 'safe': return 'text-green-600'
      case 'caution': return 'text-yellow-600'
      case 'consult': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const getEvidenceColor = (evidence: string) => {
    switch (evidence) {
      case 'strong': return 'text-green-600'
      case 'moderate': return 'text-yellow-600'
      case 'limited': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-ink mb-4">
            Advanced Herbal Recommendations
          </h2>
          <p className="text-lg text-ink/70 max-w-2xl mx-auto">
            Get personalized herbal recommendations based on your symptoms, health profile, and scientific evidence. 
            Our advanced algorithm considers your age, weight, medications, and lifestyle for optimal results.
          </p>
        </div>

        {/* User Profile Section */}
        <div className="mb-8">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2 text-herbal hover:text-ink transition-colors"
          >
            <span className="text-lg font-medium">
              {showProfile ? 'Hide' : 'Show'} Health Profile
            </span>
            <svg className={`w-5 h-5 transition-transform ${showProfile ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {showProfile && (
            <div className="mt-4 p-6 bg-sand/50 rounded-lg border border-clay/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">Age</label>
                  <input
                    type="number"
                    value={userProfile.age}
                    onChange={(e) => setUserProfile(prev => ({ ...prev, age: parseInt(e.target.value) || 30 }))}
                    className="w-full px-3 py-2 border border-clay/30 rounded-md bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">Weight (kg)</label>
                  <input
                    type="number"
                    value={userProfile.weight}
                    onChange={(e) => setUserProfile(prev => ({ ...prev, weight: parseInt(e.target.value) || 70 }))}
                    className="w-full px-3 py-2 border border-clay/30 rounded-md bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">Gender</label>
                  <select
                    value={userProfile.gender}
                    onChange={(e) => setUserProfile(prev => ({ ...prev, gender: e.target.value as 'male' | 'female' | 'other' }))}
                    className="w-full px-3 py-2 border border-clay/30 rounded-md bg-background"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">Lifestyle</label>
                  <select
                    value={userProfile.lifestyle}
                    onChange={(e) => setUserProfile(prev => ({ ...prev, lifestyle: e.target.value as 'sedentary' | 'moderate' | 'active' }))}
                    className="w-full px-3 py-2 border border-clay/30 rounded-md bg-background"
                  >
                    <option value="sedentary">Sedentary</option>
                    <option value="moderate">Moderate</option>
                    <option value="active">Active</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">Stress Level</label>
                  <select
                    value={userProfile.stressLevel}
                    onChange={(e) => setUserProfile(prev => ({ ...prev, stressLevel: e.target.value as 'low' | 'moderate' | 'high' }))}
                    className="w-full px-3 py-2 border border-clay/30 rounded-md bg-background"
                  >
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">Sleep Quality</label>
                  <select
                    value={userProfile.sleepQuality}
                    onChange={(e) => setUserProfile(prev => ({ ...prev, sleepQuality: e.target.value as 'poor' | 'fair' | 'good' | 'excellent' }))}
                    className="w-full px-3 py-2 border border-clay/30 rounded-md bg-background"
                  >
                    <option value="poor">Poor</option>
                    <option value="fair">Fair</option>
                    <option value="good">Good</option>
                    <option value="excellent">Excellent</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-ink mb-2">Current Medications</label>
                <input
                  type="text"
                  placeholder="e.g., blood pressure medication, antidepressants"
                  value={userProfile.medications.join(', ')}
                  onChange={(e) => setUserProfile(prev => ({ ...prev, medications: e.target.value.split(',').map(s => s.trim()).filter(Boolean) }))}
                  className="w-full px-3 py-2 border border-clay/30 rounded-md bg-background"
                />
              </div>
              
              <div className="mt-4 flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={userProfile.pregnancy}
                    onChange={(e) => setUserProfile(prev => ({ ...prev, pregnancy: e.target.checked }))}
                    className="rounded border-clay/30"
                  />
                  <span className="text-sm text-ink">Pregnant</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={userProfile.breastfeeding}
                    onChange={(e) => setUserProfile(prev => ({ ...prev, breastfeeding: e.target.checked }))}
                    className="rounded border-clay/30"
                  />
                  <span className="text-sm text-ink">Breastfeeding</span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Symptom Selection */}
        <div className="mb-8">
          <h3 className="text-2xl font-serif text-ink mb-6">Select Your Symptoms</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {advancedSymptoms.map((symptom) => (
              <button
                key={symptom.id}
                onClick={() => handleSymptomToggle(symptom.id)}
                className={`p-3 text-left rounded-lg border transition-all ${
                  selectedSymptoms.includes(symptom.id)
                    ? 'bg-herbal/10 border-herbal text-herbal'
                    : 'bg-sand/30 border-clay/20 text-ink hover:bg-sand/50'
                }`}
              >
                <div className="font-medium">{symptom.name}</div>
                <div className="text-sm opacity-70 capitalize">
                  {symptom.severity} • {symptom.frequency} • {symptom.duration}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <div className="text-center mb-8">
          <button
            onClick={generateAdvancedRecommendations}
            disabled={selectedSymptoms.length === 0 || isLoading}
            className="px-8 py-3 bg-herbal text-background font-medium rounded-lg hover:bg-herbal/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Generating Recommendations...' : 'Get Personalized Recommendations'}
          </button>
        </div>

        {/* Recommendations */}
        {recommendations.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-ink mb-6">Your Personalized Recommendations</h3>
            
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-sand/30 rounded-lg border border-clay/20 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-serif text-ink mb-2">{rec.plant.name}</h4>
                    <p className="text-ink/70 mb-3">{rec.plant.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getPriorityColor(rec.priority)}`}>
                      {rec.priority.charAt(0).toUpperCase() + rec.priority.slice(1)}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSafetyColor(rec.safety)} bg-white`}>
                      {rec.safety.charAt(0).toUpperCase() + rec.safety.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div>
                    <h5 className="font-medium text-ink mb-1">Dosage</h5>
                    <p className="text-sm text-ink/70">{rec.dosage.amount}</p>
                    <p className="text-sm text-ink/70">{rec.dosage.frequency}</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-ink mb-1">Duration</h5>
                    <p className="text-sm text-ink/70">{rec.dosage.duration}</p>
                    <p className="text-sm text-ink/70">Take {rec.dosage.timing}</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-ink mb-1">Effectiveness</h5>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[...Array(10)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < rec.effectiveness ? 'bg-herbal' : 'bg-clay/30'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-ink/70">{rec.effectiveness}/10</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-ink mb-1">Evidence</h5>
                    <span className={`text-sm font-medium ${getEvidenceColor(rec.scientificEvidence)}`}>
                      {rec.scientificEvidence.charAt(0).toUpperCase() + rec.scientificEvidence.slice(1)}
                    </span>
                  </div>
                </div>

                {rec.contraindications.length > 0 && (
                  <div className="mb-4">
                    <h5 className="font-medium text-red-600 mb-2">⚠️ Warnings</h5>
                    <ul className="text-sm text-red-600/80 space-y-1">
                      {rec.contraindications.map((contra, i) => (
                        <li key={i}>• {contra}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {rec.interactions.length > 0 && (
                  <div className="mb-4">
                    <h5 className="font-medium text-yellow-600 mb-2">💊 Interactions</h5>
                    <p className="text-sm text-yellow-600/80">
                      May interact with: {rec.interactions.join(', ')}
                    </p>
                  </div>
                )}

                <div>
                  <h5 className="font-medium text-ink mb-2">Personalized Notes</h5>
                  <p className="text-sm text-ink/70">{rec.notes}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Safety Disclaimer */}
        <div className="mt-12 p-6 bg-red-50 border border-red-200 rounded-lg">
          <h4 className="text-lg font-medium text-red-800 mb-2">Important Safety Information</h4>
          <ul className="text-sm text-red-700 space-y-1">
            <li>• These recommendations are for educational purposes only</li>
            <li>• Always consult with a healthcare provider before starting any herbal supplements</li>
            <li>• Stop taking any herb if you experience adverse reactions</li>
            <li>• Herbs can interact with medications - discuss with your doctor</li>
            <li>• Pregnant and breastfeeding women should consult healthcare providers</li>
            <li>• Start with lower doses and gradually increase as tolerated</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
