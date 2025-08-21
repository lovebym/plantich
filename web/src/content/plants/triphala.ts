import { Plant } from '../types';

const triphala: Plant = {
  name: "Triphala",
  latin: "Emblica officinalis, Terminalia bellirica, Terminalia chebula",
  slug: "triphala",
  uses: ["Digestive Issues", "Constipation", "Detoxification", "Antioxidant", "Immune Support"],
  description: "A traditional Ayurvedic blend of three fruits: amla, bibhitaki, and haritaki. Used to support digestion, detoxification, and overall wellness.",
  preparation: "Powder, capsules, or tea. Often taken before bed for digestive support.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=triphala" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-1056/triphala" }
  ],
  category: "Body",
};

export default triphala;
