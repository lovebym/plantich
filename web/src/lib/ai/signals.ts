import type { Plant, Remedy } from "../types";

export function plantSignals(plant: Plant, tokens: string[]) {
  const hits: string[] = [];
  let score = 0;

  // outcomes overlap
  const oOverlap = plant.uses.filter(o => tokens.includes(o.toLowerCase()));
  if (oOverlap.length) { 
    score += 3 * oOverlap.length; 
    hits.push(`outcome overlap: ${oOverlap.join(", ")}`); 
  }

  // name hits
  if (tokens.includes(plant.slug)) { 
    score += 4; 
    hits.push("matched plant slug"); 
  }
  if (tokens.some(t => plant.name.toLowerCase().includes(t))) { 
    score += 2; 
    hits.push("matched common name"); 
  }
  if (tokens.some(t => plant.latin?.toLowerCase().includes(t))) { 
    score += 1; 
    hits.push("matched latin name"); 
  }

  // description hits
  const descWords = plant.description.toLowerCase().split(/\W+/);
  const descOverlap = descWords.filter(w => tokens.includes(w));
  if (descOverlap.length > 0) {
    score += Math.min(2, descOverlap.length);
    hits.push("matched description");
  }

  // preparation hits
  const prepWords = plant.preparation.toLowerCase().split(/\W+/);
  const prepOverlap = prepWords.filter(w => tokens.includes(w));
  if (prepOverlap.length > 0) {
    score += Math.min(1, prepOverlap.length);
    hits.push("matched preparation");
  }

  return { score, hits };
}

export function remedySignals(remedy: Remedy, tokens: string[]) {
  const hits: string[] = [];
  let score = 0;

  // slug/name match
  if (tokens.includes(remedy.slug)) { 
    score += 5; 
    hits.push("matched condition slug"); 
  }
  if (tokens.some(t => remedy.condition.toLowerCase().includes(t))) { 
    score += 3; 
    hits.push("matched condition name"); 
  }

  // description hits
  const descWords = remedy.description.toLowerCase().split(/\W+/);
  const descOverlap = descWords.filter(w => tokens.includes(w));
  if (descOverlap.length > 0) {
    score += Math.min(2, descOverlap.length);
    hits.push("matched description");
  }

  // herbs overlap
  const herbOverlap = remedy.herbs.filter(herb => 
    tokens.some(t => herb.toLowerCase().includes(t))
  );
  if (herbOverlap.length > 0) {
    score += herbOverlap.length;
    hits.push(`matched herbs: ${herbOverlap.join(", ")}`);
  }

  // approach hits
  const approachWords = remedy.approach.toLowerCase().split(/\W+/);
  const approachOverlap = approachWords.filter(w => tokens.includes(w));
  if (approachOverlap.length > 0) {
    score += Math.min(1, approachOverlap.length);
    hits.push("matched approach");
  }

  return { score, hits };
}
