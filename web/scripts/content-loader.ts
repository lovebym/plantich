// scripts/content-loader.ts
// Run: npx tsx scripts/content-loader.ts
import fs from "fs-extra";
import path from "path";
import { kebabCase } from "change-case";

const ROOT = process.cwd();
const OUT_PLANTS = path.join(ROOT, "content", "plants");
const OUT_REMEDIES = path.join(ROOT, "content", "remedies");

const conditionNames = [
  "Anxiety","Depression","Stress","Insomnia","ADHD","Autism support","PTSD","OCD","Panic attacks",
  "Social anxiety","Seasonal affective disorder","Burnout","Brain fog","Headache","Migraine",
  "Tension headache","Dizziness","Motion sickness","Nausea","Acid reflux (GERD)","Gastritis","IBS",
  "Bloating","Constipation","Diarrhea","SIBO","Peptic ulcer (support)","Liver support","Gallbladder support",
  "Fatty liver (support)","UTI","Kidney stones (support)","Fluid retention","Seasonal allergies","Hay fever",
  "Sinusitis","Sore throat","Cough","Cold & flu","Bronchitis (support)","Asthma (support)","Joint pain",
  "Osteoarthritis","Rheumatoid arthritis (support)","Back pain","Neck pain","Muscle soreness","Leg cramps",
  "Menstrual cramps","PMS","PMDD","Menopause hot flashes","Low libido","Erectile dysfunction (support)",
  "BPH (prostate enlargement)","Prostatitis (support)","PCOS","Endometriosis (support)",
  "Female fertility support","Male fertility support","Hypothyroidism (support)","Hyperthyroidism (support)",
  "Type 2 diabetes (support)","Prediabetes (support)","High blood pressure","High cholesterol",
  "Heart palpitations (support)","Poor circulation","Varicose veins (support)","Acne","Eczema","Psoriasis",
  "Rosacea","Dry skin","Oily skin","Dandruff","Hair loss","Brittle nails",
  "Wound healing (topical support)","Immune support (general)","Sore muscles after workout",
  "Energy & fatigue","Chronic fatigue syndrome (support)","Adrenal support","Anemia (support)",
  "Low blood sugar","Sugar cravings","Weight management","Appetite control","Metabolic syndrome (support)",
  "Eye strain","Dry eyes (support)","Tinnitus (support)","Oral health – gum support",
  "Toothache (topical support)","Cold sores (HSV-1) support","UTI prevention","Yeast infections (Candida) support",
  "Gas (flatulence)"
] as const;

const plantNames = [
  "Ashwagandha (Withania somnifera)","Rhodiola (Rhodiola rosea)","Panax ginseng (Panax ginseng)",
  "Eleuthero (Eleutherococcus senticosus)","Holy basil / Tulsi (Ocimum tenuiflorum)","Lemon balm (Melissa officinalis)",
  "Chamomile (Matricaria chamomilla)","Passionflower (Passiflora incarnata)","Valerian (Valeriana officinalis)",
  "Hops (Humulus lupulus)","Lavender (Lavandula angustifolia)","Skullcap (Scutellaria lateriflora)",
  "Kava (Piper methysticum)","Magnolia bark (Magnolia officinalis)","Reishi (Ganoderma lucidum)",
  "Lion's mane (Hericium erinaceus)","Cordyceps (Cordyceps militaris/sinensis)","Chaga (Inonotus obliquus)",
  "Turkey tail (Trametes versicolor)","Maitake (Grifola frondosa)","Shiitake (Lentinula edodes)","Schisandra (Schisandra chinensis)",
  "Astragalus (Astragalus membranaceus)","Elderberry (Sambucus nigra)","Echinacea (Echinacea purpurea/angustifolia)",
  "Andrographis (Andrographis paniculata)","Barberry (Berberis vulgaris)",
  "Milk thistle (Silybum marianum)","Dandelion root (Taraxacum officinale)","Artichoke leaf (Cynara scolymus)",
  "Peppermint (Mentha × piperita)","Spearmint (Mentha spicata)","Fennel (Foeniculum vulgare)","Ginger (Zingiber officinale)",
  "Turmeric (Curcuma longa)","Boswellia / Frankincense (Boswellia serrata)","Devil's claw (Harpagophytum procumbens)",
  "White willow (Salix alba)","Meadowsweet (Filipendula ulmaria)","Nettle leaf (Urtica dioica)","Red clover (Trifolium pratense)",
  "Sage (Salvia officinalis)","Rosemary (Rosmarinus officinalis)","Thyme (Thymus vulgaris)","Oregano (Origanum vulgare)",
  "Garlic (Allium sativum)","Ceylon cinnamon (Cinnamomum verum)","Clove (Syzygium aromaticum)","Cardamom (Elettaria cardamomum)",
  "Saffron (Crocus sativus)","Cacao (Theobroma cacao)","Green tea (Camellia sinensis)","Matcha (Camellia sinensis)",
  "Moringa (Moringa oleifera)","Nigella/Black cumin (Nigella sativa)","Psyllium husk (Plantago ovata)",
  "Slippery elm (Ulmus rubra)","Marshmallow root (Althaea officinalis)","Aloe vera (Aloe barbadensis)","Licorice root (Glycyrrhiza glabra)",
  "Plantain leaf (Plantago major)","Burdock root (Arctium lappa)","Yellow dock (Rumex crispus)","Red raspberry leaf (Rubus idaeus)",
  "Hibiscus (Hibiscus sabdariffa)","Hawthorn (Crataegus monogyna/laevigata)","Motherwort (Leonurus cardiaca)",
  "Linden / Tilia (Tilia cordata/platyphyllos)","California poppy (Eschscholzia californica)","Blue vervain (Verbena hastata)",
  "Yarrow (Achillea millefolium)","Calendula (Calendula officinalis)","Gotu kola (Centella asiatica)","Bacopa (Bacopa monnieri)",
  "Ginkgo (Ginkgo biloba)","Griffonia (5‑HTP source) (Griffonia simplicifolia)","Maca (Lepidium meyenii)",
  "Tribulus (Tribulus terrestris)","Fenugreek (Trigonella foenum-graecum)","Shatavari (Asparagus racemosus)",
  "Dong quai (Angelica sinensis)","Black cohosh (Actaea racemosa)","Vitex/Chaste tree (Vitex agnus-castus)",
  "Saw palmetto (Serenoa repens)","Pygeum (Prunus africana)","Pumpkin seed (Cucurbita pepo)","Cranberry (Vaccinium macrocarpon)",
  "Uva ursi/Bearberry (Arctostaphylos uva-ursi)","Cornsilk (Zea mays, stigma)","Horsetail (Equisetum arvense)",
  "Kudzu (Pueraria lobata)","Beetroot (Beta vulgaris)","Gymnema sylvestre","Amla/Indian gooseberry (Phyllanthus emblica)",
  "Neem (Azadirachta indica)","Coriander seed (Coriandrum sativum)","Anise (Pimpinella anisum)","Caraway (Carum carvi)",
  "Sea buckthorn (Hippophae rhamnoides)","Nopal/Prickly pear (Opuntia ficus-indica)","Elder flower (Sambucus nigra, flower)",
  "Rose hips (Rosa canina)","Grape seed (Vitis vinifera)","Olive leaf (Olea europaea)",
  "Pepper – black (Piper nigrum)","Holy thistle / Blessed thistle (Cnicus benedictus)",
  "Lemongrass (Cymbopogon citratus)","Ashitaba (Angelica keiskei)"
] as const;

type Ref = { label: string; url: string };

export interface PlantDoc {
  slug: string;
  commonName: string;
  latinName?: string;
  aliases?: string[];
  summary: string;
  body: string; // markdown
  safety: string;
  references: Ref[];
  lastmod: string; // YYYY-MM-DD
}

export interface RemedyDoc {
  slug: string;
  name: string;
  category?: string;
  summary: string;
  symptoms?: string[];
  recommendedPlants?: string[]; // slugs
  body: string; // markdown
  lastmod: string;
}

function today() {
  return "2025-08-22";
}

function parsePlant(line: string) {
  const m = line.match(/^(.*?)\s*\(([^()]+)\)\s*$/);
  if (m && m[1] && m[2]) return { commonName: m[1].trim(), latinName: m[2].trim() };
  return { commonName: line.trim(), latinName: undefined };
}

async function ensureDirs() {
  await fs.ensureDir(OUT_PLANTS);
  await fs.ensureDir(OUT_REMEDIES);
}

async function writePlantFile(name: string) {
  const { commonName, latinName } = parsePlant(name);
  const slug = kebabCase(commonName);
  const file = path.join(OUT_PLANTS, `${slug}.ts`);

  const body = [
    `# ${commonName}`,
    latinName ? `**Latin:** ${latinName}` : "",
    "",
    "> Educational use only. Not medical advice.",
    "",
    "## What it is",
    "",
    "## Potential benefits (evidence‑informed)",
    "",
    "## How to use",
    "",
    "## Safety & interactions",
    "",
    "## References",
    "",
  ].join("\n");

  const content =
    `import type { PlantDoc } from "../content-types"\n\n` +
    `const doc: PlantDoc = {\n` +
    `  slug: "${slug}",\n` +
    `  commonName: "${commonName.replace(/"/g, '\\"')}",\n` +
    `  latinName: ${latinName ? `"${latinName.replace(/"/g, '\\"')}"` : "undefined"},\n` +
    `  aliases: [],\n` +
    `  summary: "",\n` +
    "  body: " + "`" + body.replace(/`/g, "\\`") + "`" + ",\n" +
    `  safety: "Check contraindications and drug interactions before use.",\n` +
    `  references: [],\n` +
    `  lastmod: "${today()}"\n` +
    `}\n\nexport default doc\n`;

  await fs.writeFile(file, content, "utf8");
}

async function writeConditionFile(name: string) {
  const slug = kebabCase(name);
  const file = path.join(OUT_REMEDIES, `${slug}.ts`);

  const body = [
    `# ${name}`,
    "",
    "## Overview",
    "",
    "## Common symptoms",
    "",
    "## Lifestyle & nutrition basics",
    "",
    "## Herbs & fungi often discussed",
    "",
    "## Safety notes",
    "",
    "## References",
    "",
  ].join("\n");

  const content =
    `import type { RemedyDoc } from "../content-types"\n\n` +
    `const doc: RemedyDoc = {\n` +
    `  slug: "${slug}",\n` +
    `  name: "${name.replace(/"/g, '\\"')}",\n` +
    `  category: undefined,\n` +
    `  summary: "",\n` +
    `  symptoms: [],\n` +
    `  recommendedPlants: [],\n` +
    "  body: " + "`" + body.replace(/`/g, "\\`") + "`" + ",\n" +
    `  lastmod: "${today()}"\n` +
    `}\n\nexport default doc\n`;

  await fs.writeFile(file, content, "utf8");
}

async function main() {
  await ensureDirs();

  for (const p of plantNames) await writePlantFile(p);
  for (const c of conditionNames) await writeConditionFile(c);

  console.log(`✔ Generated ${plantNames.length} plants → ${OUT_PLANTS}`);
  console.log(`✔ Generated ${conditionNames.length} conditions → ${OUT_REMEDIES}`);
  console.log("Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
