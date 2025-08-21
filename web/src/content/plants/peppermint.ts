import { Plant } from '../types';

const peppermint: Plant = {
  name: "Peppermint",
  latin: "Mentha piperita",
  slug: "peppermint",
  uses: ["Digestive Issues", "IBS", "Bloating", "Headache", "Nausea"],
  description: "A refreshing herb with cooling menthol compounds that soothe the digestive system and provide relief from various gastrointestinal discomforts.",
  preparation: "Tea, essential oil, or capsules. Tea is most common for digestive support.",
  sources: [
    { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=mentha+piperita" },
    { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-705/peppermint" }
  ],
  category: "Body",
};

export default peppermint;
