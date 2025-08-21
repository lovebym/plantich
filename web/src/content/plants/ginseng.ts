import { Plant } from '../types';

const ginseng: Plant = {
  name: "Ginseng",
  latin: "Panax ginseng",
  slug: "ginseng",
  uses: ["Low Energy", "Stress", "Cognitive Enhancement", "Immune Support", "Fatigue"],
  description: "A revered root in traditional Chinese medicine, known as the 'king of herbs.' Supports energy, mental clarity, and stress resilience while enhancing overall vitality and immune function.",
  preparation: "Capsules, tea, or tincture. Best taken in the morning for energy support.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=panax+ginseng" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-1000/ginseng" }
  ],
  category: "Body",
};

export default ginseng;
