import { Plant } from '../types';

const lemonBalm: Plant = {
  name: "Lemon Balm",
  latin: "Melissa officinalis",
  slug: "lemon-balm",
  uses: [
    "Anxiety",
    "Insomnia", 
    "Digestive Issues",
    "Cold Sores",
  ],
  description:
    "Lemon balm is a calming herb from the mint family, used for centuries to ease anxiety, improve sleep and support digestion. Modern studies suggest antiviral effects, especially for cold sores.",
  preparation:
    "Infusion (tea), tincture, capsule, or fresh leaves.",
  sources: [
    { name: "Healthline", url: "https://www.healthline.com/nutrition/lemon-balm" },
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=lemon+balm" },
  ],
  category: "Mind",
};

export default lemonBalm;
