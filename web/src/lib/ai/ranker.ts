import type { Plant, Remedy } from "../content-loader";
import { plantSignals, remedySignals } from "./signals";

export function rankPlants(plants: Plant[], tokens: string[]) {
  return plants
    .map(p => ({ plant: p, score: plantSignals(p, tokens), why: [] as string[] }))
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score);
}

export function rankRemedies(remedies: Remedy[], tokens: string[]) {
  return remedies
    .map(r => ({ remedy: r, score: remedySignals(r, tokens), why: [] as string[] }))
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score);
}
