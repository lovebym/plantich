import { Plant } from '../types';

const schisandra: Plant = {
  name: "Schisandra",
  latin: "Schisandra chinensis",
  slug: "schisandra",
  uses: ["Stress", "Liver Health", "Cognitive Enhancement", "Fatigue", "Immune Support"],
  description: "A beautiful climbing vine with red berries, known as 'five-flavor fruit' in Chinese medicine. An adaptogenic herb that supports liver function, mental clarity, and stress resilience.",
  preparation: "Capsules, tincture, or tea. Often taken daily for adaptogenic support.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=schisandra+chinensis" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-376/schisandra" }
  ],
  category: "Mind",
};

export default schisandra;
