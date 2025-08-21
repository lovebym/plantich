import { Plant } from '../types';

const ashwagandha: Plant = {
  name: "Ashwagandha",
  latin: "Withania somnifera",
  slug: "ashwagandha",
  uses: [
    "Anxiety",
    "Stress",
    "Insomnia",
    "Fatigue",
    "Low Energy",
  ],
  description:
    "Ashwagandha is an adaptogenic herb from Ayurvedic tradition, known for its ability to help the body manage stress. It supports healthy cortisol levels, improves energy, and promotes restful sleep.",
  preparation:
    "Standardized extract in capsules, powder mixed in warm milk, or tincture. Best taken with food.",
  sources: [
    { name: "Mount Sinai", url: "https://www.mountsinai.org/health-library/herb/ashwagandha" },
    { name: "PubMed Research", url: "https://pubmed.ncbi.nlm.nih.gov/?term=ashwagandha" },
  ],
  category: "Body",
};

export default ashwagandha;
