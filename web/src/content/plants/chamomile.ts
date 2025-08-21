import { Plant } from '../types';

const chamomile: Plant = {
  name: "Chamomile",
  latin: "Matricaria chamomilla",
  slug: "chamomile",
  uses: [
    "Anxiety",
    "Insomnia",
    "Digestive Issues",
    "Inflammation",
    "Skin Irritation",
  ],
  description:
    "Chamomile is one of the most beloved and gentle healing herbs. Known for its apple-like scent and calming properties, it soothes both the nervous system and digestive tract while supporting healthy skin.",
  preparation:
    "Hot tea from dried flowers, tincture, or topical preparations. Safe for children and sensitive individuals.",
  sources: [
    { name: "National Institutes of Health", url: "https://www.nccih.nih.gov/health/chamomile" },
    { name: "Memorial Sloan Kettering", url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/chamomile" },
  ],
  category: "Spirit",
};

export default chamomile;
