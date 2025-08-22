import { Plant } from '../types';

const shatavari: Plant = {
  name: "Shatavari",
  latin: "Asparagus racemosus",
  slug: "shatavari",
  uses: ["Immune Support","Energy Boost","Digestive Health"],
  description: "A powerful herbal remedy known for its physical health benefits. Shatavari supports various bodily systems and promotes overall wellness.",
  preparation: "Available as capsules, tea, tincture, or powder. Take as directed for optimal results.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Shatavari" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-shatavari" }
  ],
  category: "Body",
};

export default shatavari;
