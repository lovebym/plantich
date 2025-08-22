import { Plant } from '../types';

const rosehip: Plant = {
  name: "Rosehip",
  latin: "Rosa canina",
  slug: "rosehip",
  uses: ["Immune Support","Energy Boost","Digestive Health"],
  description: "A powerful herbal remedy known for its physical health benefits. Rosehip supports various bodily systems and promotes overall wellness.",
  preparation: "Available as capsules, tea, tincture, or powder. Take as directed for optimal results.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Rosehip" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-rosehip" }
  ],
  category: "Body",
};

export default rosehip;
