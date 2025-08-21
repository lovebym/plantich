import { Plant } from '../types';

const licoriceRoot: Plant = {
  name: "Licorice Root",
  latin: "Glycyrrhiza glabra",
  slug: "licorice-root",
  uses: ["Sore Throat", "Acid Reflux", "Respiratory Support", "Adrenal Support", "Digestive Issues"],
  description: "A sweet-tasting root with powerful soothing properties. Used to support respiratory health, soothe digestive issues, and support adrenal function.",
  preparation: "Tea, tincture, or capsules. Avoid if you have high blood pressure.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=glycyrrhiza+glabra" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-881/licorice" }
  ],
  category: "Body",
};

export default licoriceRoot;
