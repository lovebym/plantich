import { Plant } from '../types';

const greenTea: Plant = {
  name: "Green Tea",
  latin: "Camellia sinensis",
  slug: "green-tea",
  uses: ["Antioxidant", "Weight Loss Support", "Cognitive Enhancement", "Heart Health", "Energy"],
  description: "A minimally processed tea rich in catechins and L-theanine. Supports metabolism, cognitive function, and provides gentle energy without the jitters of coffee.",
  preparation: "Tea, capsules, or extract. Best consumed as loose-leaf tea for maximum benefits.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=camellia+sinensis" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-960/green-tea" }
  ],
  category: "Body",
};

export default greenTea;
