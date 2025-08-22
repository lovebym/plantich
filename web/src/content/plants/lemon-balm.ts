import type { Plant } from "../../lib/content-loader";

const plant: Plant = {
  slug: "lemon-balm",
  commonName: "Lemon Balm",
  latinName: "Melissa officinalis",
  deck: "Gentle nervine for tension, mood, and sleep onset.",
  tags: ["calming","sleep","digestion"],
  outcomes: ["anxiety","sleep","digestion"],
  partsUsed: ["leaf"],
  actions: ["nervine","mild sedative","carminative"],
  forms: ["tea","tincture","capsule"],
  howItMayWork: "Traditionally used to relax the nervous system and ease digestive tension. Modern summaries suggest mild anxiolytic and sleep‑supportive effects.",
  howToUse: {
    typicalRanges: ["Tea: 1–2 tsp dried leaf steeped 5–10 min, 1–3×/day", "Tincture/capsule: per product label"],
    timing: ["evening for sleep onset","between meals for tension"],
    withFood: "With or without food."
  },
  cautions: ["May increase drowsiness with sedatives","Stop before surgery"],
  interactions: ["sedatives"],
  pregnancyLactation: "Generally used in teas; consult a clinician for concentrated extracts.",
  ritualIdea: "Evening tea with slow breathing (4‑7‑8) and dimmed lights.",
  relatedPlants: ["chamomile","passionflower","tulsi"],
  relatedRemedies: ["sleep","anxiety","digestion"],
  references: [
    { title: "MSKCC – About Herbs: Lemon Balm", url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/lemon-balm" },
    { title: "NIH ODS – Herbal Fact Sheets (general)", url: "https://ods.od.nih.gov/" }
  ],
  seo: {
    title: "Lemon Balm — Uses, Tea, Safety | Plantich",
    description: "What lemon balm is used for, tea preparation, timing, and cautions—evidence‑aware and easy to follow."
  },
  lastUpdated: "2025-01-22"
};

export default plant;
