import { Plant } from '../types';

const oregano: Plant = {
  name: "Oregano",
  latin: "Origanum vulgare",
  slug: "oregano",
  uses: ["Antimicrobial", "Immune Support", "Respiratory Support", "Digestive Issues", "Antioxidant"],
  description: "A powerful herb with strong antimicrobial and immune-supporting properties. Used to fight infections and support overall immune function.",
  preparation: "Essential oil, tea, or capsules. Often used for immune support.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=origanum+vulgare" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-644/oregano" }
  ],
  category: "Body",
};

export default oregano;
