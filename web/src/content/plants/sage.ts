import { Plant } from '../types';

const sage: Plant = {
  name: "Sage",
  latin: "Salvia officinalis",
  slug: "sage",
  uses: ["Memory Issues", "Sore Throat", "Menopause Symptoms", "Digestive Issues", "Antioxidant"],
  description: "A revered herb in traditional medicine, known for its cognitive-enhancing properties and ability to support memory and mental clarity.",
  preparation: "Tea, essential oil, or capsules. Often used for cognitive support and throat health.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=salvia+officinalis" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-504/sage" }
  ],
  category: "Mind",
};

export default sage;
