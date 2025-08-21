import { Plant } from '../types';

const valerianRoot: Plant = {
  name: "Valerian Root",
  latin: "Valeriana officinalis",
  slug: "valerian-root",
  uses: ["Insomnia", "Anxiety", "Sleep", "Stress", "Muscle Cramps"],
  description: "A powerful sedative herb that has been used for centuries to promote restful sleep and reduce anxiety. Its compounds work with the nervous system to induce calm and improve sleep quality.",
  preparation: "Capsules, tea, or tincture. Best taken 30-60 minutes before bedtime.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=valeriana+officinalis" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-870/valerian" }
  ],
  category: "Spirit",
};

export default valerianRoot;
