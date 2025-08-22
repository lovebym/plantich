import { Plant } from '../types';

const coffee: Plant = {
  name: "Coffee",
  latin: "Coffea arabica",
  slug: "coffee",
  uses: ["Immune Support","Energy Boost","Digestive Health"],
  description: "A powerful herbal remedy known for its physical health benefits. Coffee supports various bodily systems and promotes overall wellness.",
  preparation: "Available as capsules, tea, tincture, or powder. Take as directed for optimal results.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Coffee" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-coffee" }
  ],
  category: "Body",
};

export default coffee;
