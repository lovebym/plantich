import { Plant } from '../types';

const astragalus: Plant = {
  name: "Astragalus",
  latin: "Astragalus membranaceus",
  slug: "astragalus",
  uses: ["Immune Support", "Fatigue", "Respiratory Support", "Heart Health", "Stress"],
  description: "A root herb used in traditional Chinese medicine to strengthen the immune system and support overall vitality. Known for its ability to enhance energy and resilience.",
  preparation: "Capsules, tea, or tincture. Often taken daily for immune support.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=astragalus+membranaceus" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-963/astragalus" }
  ],
  category: "Body",
};

export default astragalus;
