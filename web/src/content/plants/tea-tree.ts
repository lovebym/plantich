import { Plant } from '../types';

const teatree: Plant = {
  name: "Tea Tree",
  latin: "Melaleuca alternifolia",
  slug: "tea-tree",
  uses: ["Immune Support","Energy Boost","Digestive Health"],
  description: "A powerful herbal remedy known for its physical health benefits. Tea Tree supports various bodily systems and promotes overall wellness.",
  preparation: "Available as capsules, tea, tincture, or powder. Take as directed for optimal results.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Tea%20Tree" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-tea-tree" }
  ],
  category: "Body",
};

export default teatree;
