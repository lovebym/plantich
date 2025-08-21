import { Plant } from '../types';

const turmeric: Plant = {
  name: "Turmeric",
  latin: "Curcuma longa",
  slug: "turmeric",
  uses: ["Inflammation", "Joint Pain", "Digestive Issues", "Immune Support", "Antioxidant"],
  description: "A bright orange root spice containing curcumin, a powerful anti-inflammatory compound. Used for centuries in Ayurvedic medicine to reduce inflammation, support digestion, and promote overall wellness.",
  preparation: "Powder, capsules, or fresh root. Best absorbed with black pepper and fat.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=curcumin" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-662/turmeric" }
  ],
  category: "Body",
};

export default turmeric;
