import { Plant } from '../types';

const passionflower: Plant = {
  name: "Passionflower",
  latin: "Passiflora incarnata",
  slug: "passionflower",
  uses: [
    "Anxiety",
    "Insomnia",
    "Restlessness",
    "Nervous Tension",
  ],
  description:
    "Passionflower is a gentle nervine herb traditionally used to calm anxiety and promote peaceful sleep. Unlike some sedatives, it doesn't cause drowsiness during the day when used appropriately.",
  preparation:
    "Tea from dried aerial parts, liquid extract, or standardized capsules. Often combined with other calming herbs.",
  sources: [
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-871/passionflower" },
    { name: "National Center for Complementary Health", url: "https://www.nccih.nih.gov/health/passionflower" },
  ],
  category: "Mind",
};

export default passionflower;
