import { Plant } from '../types';

const yellowdock: Plant = {
  name: "Yellow Dock",
  latin: "Rumex crispus",
  slug: "yellow-dock",
  uses: ["Immune Support","Energy Boost","Digestive Health"],
  description: "A powerful herbal remedy known for its physical health benefits. Yellow Dock supports various bodily systems and promotes overall wellness.",
  preparation: "Available as capsules, tea, tincture, or powder. Take as directed for optimal results.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Yellow%20Dock" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-yellow-dock" }
  ],
  category: "Body",
};

export default yellowdock;
