import { Plant } from '../types';

const sheabutter: Plant = {
  name: "Shea Butter",
  latin: "Vitellaria paradoxa",
  slug: "shea-butter",
  uses: ["Immune Support","Energy Boost","Digestive Health"],
  description: "A powerful herbal remedy known for its physical health benefits. Shea Butter supports various bodily systems and promotes overall wellness.",
  preparation: "Available as capsules, tea, tincture, or powder. Take as directed for optimal results.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Shea%20Butter" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-shea-butter" }
  ],
  category: "Body",
};

export default sheabutter;
