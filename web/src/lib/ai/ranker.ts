import type { Plant, Remedy } from "../types";
import { plantSignals, remedySignals } from "./signals";

export function rankPlants(plants: Plant[], tokens: string[]) {
  return plants.map(p => {
    const r = plantSignals(p, tokens);
    return { plant: p, score: r.score, why: r.hits };
  }).filter(x => x.score > 0).sort((a,b) => b.score - a.score);
}

export function rankRemedies(remedies: Remedy[], tokens: string[]) {
  return remedies.map(r => {
    const s = remedySignals(r, tokens);
    return { remedy: r, score: s.score, why: s.hits };
  }).filter(x => x.score > 0).sort((a,b) => b.score - a.score);
}
