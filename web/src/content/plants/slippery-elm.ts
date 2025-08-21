import { Plant } from '../types';

const slipperyElm: Plant = {
  name: "Slippery Elm",
  latin: "Ulmus rubra",
  slug: "slippery-elm",
  uses: ["Acid Reflux", "Sore Throat", "Digestive Issues", "Diarrhea", "Inflammation"],
  description: "A tree bark with mucilaginous properties that coats and soothes the digestive tract. Used to relieve irritation in the throat, stomach, and intestines.",
  preparation: "Powder, capsules, or tea. Often mixed with water to form a soothing gel.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=ulmus+rubra" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-978/slippery-elm" }
  ],
  category: "Body",
};

export default slipperyElm;
