import type { Plant } from "../../lib/content-loader";

const plant: Plant = {
  slug: "turmeric",
  commonName: "Turmeric",
  latinName: "Curcuma longa",
  deck: "Spice‑based support for inflammatory balance and joint comfort.",
  tags: ["anti-inflammatory","antioxidant"],
  outcomes: ["inflammation","digestion","joint"],
  partsUsed: ["rhizome"],
  actions: ["anti-inflammatory","antioxidant","hepatoprotective"],
  forms: ["capsule","powder","tincture"],
  howItMayWork: "Curcuminoids may influence inflammatory signaling and oxidative balance. Absorption depends on formulation (e.g., with piperine or specialized extracts).",
  howToUse: {
    typicalRanges: ["Curcumin extracts often 500–1000 mg/day in divided doses", "Food‑spice use as tolerated"],
    timing: ["with meals"],
    withFood: "Usually with food to reduce GI upset."
  },
  cautions: ["May affect bleeding risk at high doses","GI upset in some","Caution with gallbladder disease"],
  interactions: ["anticoagulants/antiplatelets: consult clinician"],
  pregnancyLactation: "Culinary amounts commonly used; avoid high‑dose extracts unless advised.",
  ritualIdea: "Golden milk in the evening; note any GI response.",
  relatedPlants: ["ginger","ashwagandha","rhodiola"],
  relatedRemedies: ["digestion","energy"],
  references: [
    { title: "Examine – Curcumin/Turmeric Overview", url: "https://examine.com/supplements/curcumin/" },
    { title: "NIH ODS – Turmeric/Curcumin", url: "https://ods.od.nih.gov/factsheets/Curcumin-Consumer/" }
  ],
  seo: {
    title: "Turmeric — Uses, Dose, Safety | Plantich",
    description: "Turmeric/curcumin guidance: uses, typical ranges, timing with meals, and cautions."
  },
  lastUpdated: "2025-01-22"
};

export default plant;
