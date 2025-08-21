import { Plant } from '../types';

const cardamom: Plant = {
  name: "Cardamom",
  latin: "Elettaria cardamomum",
  slug: "cardamom",
  uses: ["Digestive Issues", "Bad Breath", "Respiratory Support", "Antioxidant", "Inflammation"],
  description: "A fragrant spice with excellent digestive properties. Used in traditional medicine to support digestion, freshen breath, and reduce inflammation.",
  preparation: "Seeds, powder, or tea. Can be used in cooking or as a supplement.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=elettaria+cardamomum" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-1054/cardamom" }
  ],
  category: "Body",
};

export default cardamom;
