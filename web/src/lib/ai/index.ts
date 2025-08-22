import { normalizeQuery } from "./normalize";
import { CONDITION_ALIASES, PLANT_ALIASES } from "./synonyms";
import { rankPlants, rankRemedies } from "./ranker";
import { composeResponse } from "./composer";
import { allPlants, allRemedies } from "../../content";
import type { AIQuery, AIResponse } from "./types";

export async function aiSearch(input: AIQuery): Promise<AIResponse> {
  const q = (input.q || "").trim();
  const { tokens } = normalizeQuery(q);

  // Expandera alias (lägg in canonical tokens)
  const canonTokens = new Set(tokens);
  for (const t of tokens) {
    if (CONDITION_ALIASES[t]) canonTokens.add(CONDITION_ALIASES[t]);
    if (PLANT_ALIASES[t]) canonTokens.add(PLANT_ALIASES[t]);
  }
  const toks = Array.from(canonTokens);

  // Ladda content
  const plants = allPlants;
  const remedies = allRemedies;

  // Rank
  const remedyRank = rankRemedies(remedies, toks);
  const plantRank  = rankPlants(plants, toks);

  // Compose
  return composeResponse({
    q,
    tokens: toks,
    topRemedies: remedyRank.slice(0, 6),
    topPlants: plantRank.slice(0, 10),
    maxItems: input.maxItems ?? 8
  });
}
