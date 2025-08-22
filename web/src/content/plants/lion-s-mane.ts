import { Plant } from '../types';

const lionsmane: Plant = {
  name: "Lion's Mane",
  latin: "Hericium erinaceus",
  slug: "lion-s-mane",
  uses: ["Mental Clarity","Stress Support","Focus & Concentration"],
  description: "A traditional herb used for mental wellness and cognitive support. Lion's Mane has been valued for its calming and focus-enhancing properties.",
  preparation: "Available as tea, tincture, capsules, or essential oil. Can be taken daily for consistent support.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Lion's%20Mane" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-lion-s-mane" }
  ],
  category: "Mind",
};

export default lionsmane;
