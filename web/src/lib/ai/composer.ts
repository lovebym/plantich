import type { Plant, Remedy } from "../types";
import type { AIResponse, AISnippet, AIHit, AISource } from "./types";

function firstLines(text: string, nSent = 2) {
  const s = (text || "").split(/(?<=\.)\s+/).slice(0, nSent).join(" ");
  return s.length ? s : text;
}

function plantToHit(p: Plant, why: string[], score: number): AIHit {
  const sources: AISource[] = (p.sources || []).slice(0,4);
  return {
    type: "plant",
    slug: p.slug,
    title: p.name,
    deck: p.description,
    why,
    cautions: [], // Will be populated from comprehensive data
    howToUse: [p.preparation],
    sources,
    score,
    url: `/plants/${p.slug}`
  };
}

function remedyToHit(r: Remedy, why: string[], score: number): AIHit {
  const sources: AISource[] = []; // Will be populated from comprehensive data
  return {
    type: "remedy",
    slug: r.slug,
    title: r.condition,
    deck: r.description,
    why,
    cautions: [], // Will be populated from comprehensive data
    howToUse: [r.approach],
    sources,
    score,
    url: `/remedies/${r.slug}`
  };
}

export function composeResponse(opts: {
  q: string;
  tokens: string[];
  topRemedies: { remedy: Remedy; score: number; why: string[] }[];
  topPlants: { plant: Plant; score: number; why: string[] }[];
  maxItems?: number;
}): AIResponse {
  const { tokens, topRemedies, topPlants } = opts;
  const maxItems = opts.maxItems ?? 8;

  // TL;DR prioritera remedy + plant mix
  const leadRemedy = topRemedies[0]?.remedy;
  const leadPlant = topPlants[0]?.plant;

  const tldrText = leadRemedy
    ? `For ${leadRemedy.condition.toLowerCase()}, common options include ${leadRemedy.herbs.slice(0,2).join(" & ")}. Start low, track response for 1–2 weeks, and avoid stacking multiple sedatives. See cautions and sources below.`
    : leadPlant
      ? `${leadPlant.name} is often used for ${leadPlant.uses.slice(0,2).join(" & ")}. Typical preparation: ${leadPlant.preparation}. Review cautions and interactions before use.`
      : `Here are relevant Plantich resources based on your query. Review cautions and sources before use.`;

  const tldr: AISnippet = { title: "In brief", text: tldrText };

  // slå ihop toppar, med liten växling remedy/plant
  const hits: AIHit[] = [];
  let ri = 0, pi = 0;
  while (hits.length < maxItems && (ri < topRemedies.length || pi < topPlants.length)) {
    if (ri < topRemedies.length) {
      const r = topRemedies[ri++]; 
      hits.push(remedyToHit(r.remedy, r.why, r.score));
    }
    if (hits.length >= maxItems) break;
    if (pi < topPlants.length) {
      const p = topPlants[pi++]; 
      hits.push(plantToHit(p.plant, p.why, p.score));
    }
  }

  return {
    tldr,
    hits,
    safety: "Educational only. Consult a qualified clinician—especially with medications, pregnancy or ongoing conditions.",
    queryEcho: tokens.join(" ")
  };
}
