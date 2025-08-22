import type { Plant, Remedy } from "../content-loader";
import type { AIResponse, AISnippet, AIHit, AISource } from "./types";

export function composeResponse(data: {
  q: string;
  tokens: string[];
  topRemedies: AIHit[];
  topPlants: AIHit[];
  maxItems?: number;
}): AIResponse {
  const { q, tokens, topRemedies, topPlants, maxItems = 8 } = data;

  // Plant snippets
  const plantSnippets: AISnippet[] = topPlants.slice(0, 4).map(p => {
    const sources: AISource[] = (p.plant.references || []).slice(0,4);
    
    return {
      type: "plant" as const,
      title: p.plant.title,
      description: p.plant.description,
      howToUse: [p.plant.dosage || 'Not specified'],
      sources,
      score: p.score,
      why: p.why
    };
  });

  // Remedy snippets  
  const remedySnippets: AISnippet[] = topRemedies.slice(0, 4).map(r => {
    return {
      type: "remedy" as const,
      title: r.remedy.title,
      description: r.remedy.description,
      howToUse: [r.remedy.approach || 'Not specified'],
      sources: [],
      score: r.score,
      why: r.why
    };
  });

  // Combine and sort by score
  const allSnippets = [...plantSnippets, ...remedySnippets]
    .sort((a, b) => b.score - a.score)
    .slice(0, maxItems);

  // Generate summary
  const leadRemedy = topRemedies[0];
  const leadPlant = topPlants[0];
  
  const summary = leadRemedy && leadPlant
    ? `For ${leadRemedy.remedy.title.toLowerCase()}, common options include ${leadRemedy.remedy.plants.slice(0,2).join(" & ")}. Start low, track response for 1–2 weeks, and avoid stacking multiple sedatives. See cautions and sources below.`
    : leadPlant
      ? `${leadPlant.plant.title} is often used for ${leadPlant.plant.uses.slice(0,2).join(" & ")}. Typical preparation: ${leadPlant.plant.dosage || 'Not specified'}. Review cautions and interactions before use.`
      : "No specific recommendations found. Please consult with a healthcare provider.";

  return {
    query: q,
    summary,
    snippets: allSnippets,
    totalResults: allSnippets.length,
    searchTerms: tokens
  };
}
