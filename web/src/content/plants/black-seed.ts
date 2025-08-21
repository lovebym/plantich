import { Plant } from '../types';

const blackSeed: Plant = {
  name: "Black Seed",
  latin: "Nigella sativa",
  slug: "black-seed",
  uses: ["Allergies", "Asthma", "Immune Support", "Inflammation", "Antioxidant"],
  description: "Also known as black cumin or kalonji, this seed has been used for thousands of years in traditional medicine for its powerful anti-inflammatory and immune-supporting properties.",
  preparation: "Oil, powder, or capsules. Can be used in cooking or as a supplement.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=nigella+sativa" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-901/black-seed" }
  ],
  category: "Body",
};

export default blackSeed;
