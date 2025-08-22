import type { Plant, Remedy } from "../content-loader";

export function plantSignals(plant: Plant, tokens: string[]): number {
  // Uses overlap
  const oOverlap = plant.uses.filter((o: string) => tokens.includes(o.toLowerCase()));
  
  // Description overlap
  const descWords = plant.description.toLowerCase().split(/\s+/);
  const descOverlap = descWords.filter((w: string) => tokens.includes(w));
  
  // Preparation overlap
  const prepWords = (plant.dosage || '').toLowerCase().split(/\s+/);
  const prepOverlap = prepWords.filter((w: string) => tokens.includes(w));
  
  // Category overlap
  const catOverlap = plant.category && tokens.includes(plant.category.toLowerCase()) ? 1 : 0;
  
  // Tags overlap
  const tagOverlap = (plant.tags || []).filter((tag: string) => tokens.includes(tag.toLowerCase())).length;
  
  return oOverlap.length * 3 + descOverlap.length * 2 + prepOverlap.length + catOverlap * 2 + tagOverlap * 2;
}

export function remedySignals(remedy: Remedy, tokens: string[]): number {
  // Description overlap
  const descWords = remedy.description.toLowerCase().split(/\s+/);
  const descOverlap = descWords.filter((w: string) => tokens.includes(w));
  
  // Plants overlap
  const herbOverlap = remedy.plants.filter((herb: string) =>
    tokens.includes(herb.toLowerCase())
  );
  
  // Approach overlap
  const approachWords = (remedy.approach || '').toLowerCase().split(/\s+/);
  const approachOverlap = approachWords.filter((w: string) => tokens.includes(w));
  
  // Category overlap
  const catOverlap = tokens.includes(remedy.category.toLowerCase()) ? 1 : 0;
  
  // Symptoms overlap
  const symptomOverlap = (remedy.symptoms || []).filter((symptom: string) => 
    tokens.includes(symptom.toLowerCase())
  ).length;
  
  return descOverlap.length * 2 + herbOverlap.length * 3 + approachOverlap.length + catOverlap * 2 + symptomOverlap * 2;
}
