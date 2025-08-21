import { Plant } from '../types';

const alfalfa: Plant = {
  name: "Alfalfa",
  latin: "Medicago sativa",
  slug: "alfalfa",
  uses: ["Nutritional Support", "Detoxification", "Hormonal Balance", "Digestive Issues", "Cholesterol"],
  description: "A nutrient-dense legume rich in vitamins, minerals, and chlorophyll. Used to support overall nutrition, detoxification, and hormonal balance.",
  preparation: "Sprouts, powder, or capsules. Can be consumed as sprouts or as a supplement.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=medicago+sativa" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-19/alfalfa" }
  ],
  category: "Body",
};

export default alfalfa;
