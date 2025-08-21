import { Plant } from '../types';

const fenugreek: Plant = {
  name: "Fenugreek",
  latin: "Trigonella foenum-graecum",
  slug: "fenugreek",
  uses: ["Hormonal Balance", "Breastfeeding Support", "Diabetes", "Digestive Issues", "Low Libido"],
  description: "A seed herb used in traditional medicine to support hormonal balance, especially for women. Also helps regulate blood sugar and supports digestive health.",
  preparation: "Capsules, tea, or seeds. Can be used in cooking or as a supplement.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=trigonella+foenum-graecum" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-733/fenugreek" }
  ],
  category: "Body",
};

export default fenugreek;
