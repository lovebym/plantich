import { Plant } from '../types';

const rhodiola: Plant = {
  name: "Rhodiola",
  latin: "Rhodiola rosea",
  slug: "rhodiola",
  uses: ["Fatigue", "Stress", "Depression", "Low Energy", "Brain Fog"],
  description: "A powerful adaptogenic herb that grows in cold, high-altitude regions. Known as 'golden root' in traditional medicine, it enhances mental and physical performance while reducing stress and fatigue.",
  preparation: "Capsules, tincture, or tea. Best taken in the morning for energy support.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=rhodiola+rosea" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-883/rhodiola" }
  ],
  category: "Mind",
};

export default rhodiola;
