import { Plant } from '../types';

const seaMoss: Plant = {
  name: "Sea Moss",
  latin: "Chondrus crispus",
  slug: "sea-moss",
  uses: ["Nutritional Support", "Thyroid Health", "Skin Health", "Digestive Issues", "Immune Support"],
  description: "A red seaweed rich in minerals, particularly iodine, which supports thyroid function. Also contains carrageenan that supports digestive health.",
  preparation: "Gel, powder, or capsules. Often made into a gel for consumption.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=chondrus+crispus" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-1055/irish-moss" }
  ],
  category: "Body",
};

export default seaMoss;
