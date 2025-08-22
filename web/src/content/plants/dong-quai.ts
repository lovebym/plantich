import { Plant } from '../types';

const dongquai: Plant = {
  name: "Dong Quai",
  latin: "Angelica sinensis",
  slug: "dong-quai",
  uses: ["Immune Support","Energy Boost","Digestive Health"],
  description: "A powerful herbal remedy known for its physical health benefits. Dong Quai supports various bodily systems and promotes overall wellness.",
  preparation: "Available as capsules, tea, tincture, or powder. Take as directed for optimal results.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Dong%20Quai" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-dong-quai" }
  ],
  category: "Body",
};

export default dongquai;
