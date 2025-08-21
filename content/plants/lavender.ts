import { Plant } from '../types';

const lavender: Plant = {
  name: "Lavender",
  latin: "Lavandula angustifolia",
  slug: "lavender",
  uses: [
    "Anxiety",
    "Insomnia",
    "Restlessness",
    "Skin Irritation",
    "Headaches",
  ],
  description:
    "Lavender is perhaps the most recognized herb for relaxation and sleep. Its beautiful purple flowers and distinctive scent have been cherished for centuries to calm the mind, soothe the skin, and promote restful sleep.",
  preparation:
    "Essential oil for aromatherapy, dried buds for tea, tincture, or topical preparations. Use sparingly as the flavor can be strong.",
  sources: [
    { name: "Healthline", url: "https://www.healthline.com/health/lavender-tea" },
    { name: "Evidence-Based Complementary Medicine", url: "https://pubmed.ncbi.nlm.nih.gov/22612017/" },
  ],
  category: "Spirit",
};

export default lavender;
