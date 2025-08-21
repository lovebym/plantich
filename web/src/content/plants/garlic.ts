import { Plant } from '../types';

const garlic: Plant = {
  name: "Garlic",
  latin: "Allium sativum",
  slug: "garlic",
  uses: ["Immune Support", "High Blood Pressure", "Antimicrobial", "Heart Health", "Cold"],
  description: "A powerful bulb with strong antimicrobial and cardiovascular-supporting properties. Used worldwide for its immune-boosting and heart-health benefits.",
  preparation: "Fresh cloves, powder, or capsules. Best consumed raw for maximum benefits.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=allium+sativum" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-300/garlic" }
  ],
  category: "Body",
};

export default garlic;
