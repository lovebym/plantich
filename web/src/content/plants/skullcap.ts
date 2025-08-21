import { Plant } from '../types';

const skullcap: Plant = {
  name: "Skullcap",
  latin: "Scutellaria lateriflora",
  slug: "skullcap",
  uses: ["Anxiety", "Insomnia", "Stress", "Nerve Pain", "Muscle Tension"],
  description: "A gentle nervine herb that calms the nervous system and reduces anxiety without causing drowsiness. Traditionally used to support mental clarity and emotional balance.",
  preparation: "Tea, tincture, or capsules. Can be taken throughout the day for anxiety support.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=scutellaria+lateriflora" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-994/skullcap" }
  ],
  category: "Mind",
};

export default skullcap;
