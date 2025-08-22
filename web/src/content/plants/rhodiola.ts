import type { Plant } from "../../lib/content-loader";

const plant: Plant = {
  slug: "rhodiola",
  commonName: "Rhodiola",
  latinName: "Rhodiola rosea",
  deck: "Stimulating adaptogen for stress, energy, and focus.",
  tags: ["adaptogen","energy","focus"],
  outcomes: ["energy","focus","stress"],
  partsUsed: ["root"],
  actions: ["adaptogenic","stimulating","nootropic"],
  forms: ["capsule","tincture"],
  howItMayWork: "May influence cellular energy and stress‑response pathways, supporting mental performance under strain. Often more energizing than calming adaptogens.",
  howToUse: {
    typicalRanges: ["200–400 mg standardized extract/day", "Morning or early afternoon"],
    timing: ["AM for energy/focus"],
    withFood: "With food if sensitive."
  },
  cautions: ["May feel overstimulating in some","Avoid near bedtime","Caution with bipolar spectrum"],
  whenToAvoid: ["Late evening dosing"],
  interactions: ["stimulants","antidepressants: consult clinician"],
  pregnancyLactation: "Insufficient data—avoid unless advised.",
  ritualIdea: "Morning dose + walk in daylight; avoid late caffeine stacking.",
  relatedPlants: ["ashwagandha","tulsi","turmeric"],
  relatedRemedies: ["energy","focus","anxiety"],
  references: [
    { title: "Examine – Rhodiola Overview", url: "https://examine.com/supplements/rhodiola-rosea/" },
    { title: "MSKCC – About Herbs: Rhodiola", url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/rhodiola" }
  ],
  seo: {
    title: "Rhodiola — Energy, Focus, Safety | Plantich",
    description: "How rhodiola may support energy and focus, with typical ranges, timing, and cautions."
  },
  lastUpdated: "2025-01-22"
};

export default plant;
