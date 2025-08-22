import { Plant } from '../types';

const yerbamate: Plant = {
  name: "Yerba Mate",
  latin: "Ilex paraguariensis",
  slug: "yerba-mate",
  uses: ["Immune Support","Energy Boost","Digestive Health"],
  description: "A powerful herbal remedy known for its physical health benefits. Yerba Mate supports various bodily systems and promotes overall wellness.",
  preparation: "Available as capsules, tea, tincture, or powder. Take as directed for optimal results.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Yerba%20Mate" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-yerba-mate" }
  ],
  category: "Body",
};

export default yerbamate;
