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
            return {
              title: p.title,
              text: `${p.deck || 'Plant information'}. ${p.howToUse?.join(', ') || 'Use as directed'}.`
            };
          });

          // Remedy snippets  
          const remedySnippets: AISnippet[] = topRemedies.slice(0, 4).map(r => {
            return {
              title: r.title,
              text: `${r.deck || 'Remedy information'}. ${r.howToUse?.join(', ') || 'Traditional herbal approach'}.`
            };
          });

  // Combine snippets
  const allSnippets = [...plantSnippets, ...remedySnippets]
    .slice(0, maxItems);

  // Generate summary
  const leadRemedy = topRemedies[0];
  const leadPlant = topPlants[0];
  
  const summary = leadRemedy && leadPlant
    ? `For ${leadRemedy.title.toLowerCase()}, consider herbal options. Start low, track response for 1–2 weeks, and avoid stacking multiple sedatives. See cautions and sources below.`
    : leadPlant
      ? `${leadPlant.title} is often used for various conditions. Review cautions and interactions before use.`
      : "No specific recommendations found. Please consult with a healthcare provider.";

  return {
    tldr: allSnippets[0] || { title: 'No results', text: 'No specific recommendations found.' },
    hits: [...topPlants, ...topRemedies].slice(0, maxItems),
    safety: 'Always consult with a healthcare provider before starting any herbal regimen.',
    queryEcho: q
  };
}
