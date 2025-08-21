import { Plant } from '../types';

const burdockRoot: Plant = {
  name: "Burdock Root",
  latin: "Arctium lappa",
  slug: "burdock-root",
  uses: ["Skin Health", "Acne", "Liver Detox", "Digestive Issues", "Inflammation"],
  description: "A deep-rooted plant used in traditional medicine for its blood-purifying and skin-supporting properties. Rich in antioxidants and supports liver and kidney function.",
  preparation: "Tea, tincture, or capsules. Can also be cooked as a vegetable.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=arctium+lappa" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-111/burdock" }
  ],
  category: "Body",
};

export default burdockRoot;
