import { Plant } from '../types';

const hops: Plant = {
  name: "Hops",
  latin: "Humulus lupulus",
  slug: "hops",
  uses: ["Mental Clarity","Stress Support","Focus & Concentration"],
  description: "A traditional herb used for mental wellness and cognitive support. Hops has been valued for its calming and focus-enhancing properties.",
  preparation: "Available as tea, tincture, capsules, or essential oil. Can be taken daily for consistent support.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Hops" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-hops" }
  ],
  category: "Mind",
};

export default hops;
