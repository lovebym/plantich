import { Plant } from '../types';

const elderberry: Plant = {
  name: "Elderberry",
  latin: "Sambucus nigra",
  slug: "elderberry",
  uses: ["Cold", "Flu", "Immune Support", "Antiviral", "Respiratory Support"],
  description: "A dark purple berry rich in antioxidants and immune-supporting compounds. Traditionally used to shorten the duration of colds and flu while supporting overall immune function.",
  preparation: "Syrup, capsules, or tea. Often taken at the first sign of illness.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=sambucus+nigra" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-434/elderberry" }
  ],
  category: "Body",
};

export default elderberry;
