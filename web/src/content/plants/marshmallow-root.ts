import { Plant } from '../types';

const marshmallowRoot: Plant = {
  name: "Marshmallow Root",
  latin: "Althaea officinalis",
  slug: "marshmallow-root",
  uses: ["Sore Throat", "Acid Reflux", "Digestive Issues", "Cough", "Inflammation"],
  description: "A root with high mucilage content that soothes irritated tissues. Used to relieve throat irritation, digestive discomfort, and respiratory issues.",
  preparation: "Tea, powder, or capsules. Often used for throat and digestive support.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=althaea+officinalis" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-288/marshmallow" }
  ],
  category: "Body",
};

export default marshmallowRoot;
