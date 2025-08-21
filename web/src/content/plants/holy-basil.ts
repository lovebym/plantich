import { Plant } from '../types';

const holyBasil: Plant = {
  name: "Holy Basil",
  latin: "Ocimum sanctum",
  slug: "holy-basil",
  uses: ["Stress", "Anxiety", "Immune Support", "Respiratory Support", "Inflammation"],
  description: "Known as 'Tulsi' in Ayurvedic medicine, this sacred herb is revered for its adaptogenic properties. It helps the body adapt to stress while supporting immune function and respiratory health.",
  preparation: "Tea, capsules, or tincture. Often consumed daily as a stress-supporting tonic.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=ocimum+sanctum" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-1101/holy-basil" }
  ],
  category: "Mind",
};

export default holyBasil;
