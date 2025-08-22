import { Plant } from '../types';

const willowbark: Plant = {
  name: "Willow Bark",
  latin: "Salix alba",
  slug: "willow-bark",
  uses: ["Immune Support","Energy Boost","Digestive Health"],
  description: "A powerful herbal remedy known for its physical health benefits. Willow Bark supports various bodily systems and promotes overall wellness.",
  preparation: "Available as capsules, tea, tincture, or powder. Take as directed for optimal results.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Willow%20Bark" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-willow-bark" }
  ],
  category: "Body",
};

export default willowbark;
