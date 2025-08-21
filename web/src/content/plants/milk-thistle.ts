import { Plant } from '../types';

const milkThistle: Plant = {
  name: "Milk Thistle",
  latin: "Silybum marianum",
  slug: "milk-thistle",
  uses: ["Liver Detox", "Liver Health", "Digestive Issues", "Antioxidant", "Skin Health"],
  description: "A flowering herb containing silymarin, a powerful compound that supports liver health and function. Traditionally used to protect and regenerate liver cells.",
  preparation: "Capsules, tincture, or tea. Often taken daily for liver support.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=silybum+marianum" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-138/milk-thistle" }
  ],
  category: "Body",
};

export default milkThistle;
