import { Plant } from '../types';

const thyme: Plant = {
  name: "Thyme",
  latin: "Thymus vulgaris",
  slug: "thyme",
  uses: ["Respiratory Support", "Cough", "Sore Throat", "Antimicrobial", "Digestive Issues"],
  description: "A potent herb with strong antimicrobial and respiratory-supporting properties. Used to support respiratory health and fight infections.",
  preparation: "Tea, essential oil, or capsules. Often used for respiratory support.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=thymus+vulgaris" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-823/thyme" }
  ],
  category: "Body",
};

export default thyme;
