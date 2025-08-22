# Cursor – Projektinstruktion för Plantich (CONTENT GEN)

## Syfte
Generera redaktionellt, evidensmedvetet innehåll för Plantich i form av TypeScript‑filer som kan läsas av Next.js + Sanity/MDX‑liknande pipelines. Allt innehåll är på engelska (UI‑röst: "Nordic apothecary, clean, warm, precise"). Ingen hype, inga medicinska löften. Educational only.

## Filstruktur
- **Växter**: `content/plants/<slug>.ts`
- **Åkommor/guider**: `content/remedies/<slug>.ts`
- **Namngivning**: kebab‑case för filnamn och slug (ex: `ashwagandha.ts`, `anxiety.ts`)
- **En (1) default‑export per fil. Inga imports.**

## Ton & stil (E‑E‑A‑T)
- Klar och varm röst ("apotek möter Byredo")
- Plain English, korta stycken, punktlistor för skannbarhet
- Evidence‑aware: hänvisa till källor i references (titel + url). Gör inga kliniska löften
- Lägg säkerhet/cautions synligt. Råd om att rådfråga vården vid graviditet, mediciner, sjukdom

## Datascheman (använd exakt nyckelnamn)

### Plants (`content/plants/*.ts`)
```typescript
export interface Plant {
  slug: string;                // "ashwagandha"
  commonName: string;          // "Ashwagandha"
  latinName: string;           // "Withania somnifera"
  deck: string;                // short subhead
  tags: string[];              // e.g. ["adaptogen","sleep","stress"]
  outcomes: string[];          // e.g. ["anxiety","sleep","stress"]
  partsUsed?: string[];        // ["root"]
  actions?: string[];          // ["adaptogenic","anxiolytic","sedative"]
  forms: string[];             // ["capsule","tincture","powder","tea"]
  howItMayWork: string;        // 2–3 sentences, plain-English
  howToUse: {
    typicalRanges: string[];   // ["120–600 mg extract daily", …]
    timing: string[];          // ["evening for sleep","AM for stress"]
    withFood?: string;         // "with food if sensitive"
    preparationTips?: string[];// ["stir powder into warm plant milk"]
  };
  combineThoughtfully?: string[]; // pairing suggestions (neutral)
  cautions: string[];          // pregnancy, interactions, thyroid, sedation
  interactions?: string[];     // e.g. ["sedatives","thyroid medication"]
  pregnancyLactation?: string; // conservative stance
  whenToAvoid?: string[];      // contraindications
  ritualIdea?: string;         // short, gentle ritual
  relatedPlants?: string[];    // slugs
  relatedRemedies?: string[];  // slugs (conditions)
  references: { title: string; url: string }[];
  seo: {
    title: string;             // <=60 chars
    description: string;       // 150–160 chars
  };
}
```

### Remedies (`content/remedies/*.ts`)
```typescript
export interface Remedy {
  slug: string;                // "anxiety"
  name: string;                // "Anxiety & Stress"
  deck: string;                // short subhead
  overview: string;            // 80–120 words intro (plain-English)
  quickPaths: {                // 2–4 user-scenarios -> simple stacks
    scenario: string;          // "Wired at night"
    suggestions: string[];     // ["ashwagandha","lemon-balm","magnesium"]
    timing?: string;           // "evening"
  }[];
  corePlants: {
    plant: string;             // plant slug, e.g. "ashwagandha"
    why: string;               // 1–2 sentences
    howToUse: string[];        // bullet tips: form + range + timing
    cautions: string[];        // key cautions
    bestFor?: string[];        // "daytime calm","sleep onset"
  }[];
  rituals: string[];           // breath, tea, walk, caffeine timing
  lifestyle: string[];         // sleep hygiene, light exposure, etc.
  safetyNotes: string[];       // interactions, pregnancy, "when to seek care"
  whenToSeekCare: string[];    // red flags
  faq: { q: string; a: string }[]; // 3–5 Q/A, concise
  relatedRemedies?: string[];  // slugs (e.g., "sleep","ibs")
  relatedPlants?: string[];    // slugs
  references: { title: string; url: string }[];
  seo: {
    title: string;
    description: string;
  };
}
```

## Skrivregler

### Längd
- **Plant**: ca 220–380 ord total, plus bullets
- **Remedy**: ca 350–600 ord total, plus bullets/FAQ

### Struktur
- Följ fältens ordning. Använd korta meningar och punktlistor
- Säkerhet alltid med (graviditet, läkemedel, kontraindikationer, "educational only")
- Internlänkar: fyll relatedPlants/relatedRemedies med 3–6 relevanta slugs
- SEO: fyll seo.title (≤60 tecken) och seo.description (150–160)

### Källor (godkända exempel att använda i references)
Examine, MSKCC About Herbs, Natural Medicines (öppna sammanfattningar), NIH/ODS, PubMed översikter, WHO monographs, Cochrane plain‑language summaries. Lägg 1–4 per fil.

## Exempel

### PLANT (Ashwagandha)
```typescript
const plant: Plant = {
  slug: "ashwagandha",
  commonName: "Ashwagandha",
  latinName: "Withania somnifera",
  deck: "Calming adaptogen for stress, sleep, and steady focus.",
  tags: ["adaptogen","sleep","stress"],
  outcomes: ["anxiety","sleep","stress","focus"],
  partsUsed: ["root"],
  actions: ["adaptogenic","anxiolytic","mild sedative"],
  forms: ["capsule","tincture","powder","tea"],
  howItMayWork:
    "Ashwagandha may modulate stress-response pathways (e.g., HPA axis) and support restorative sleep and calm focus. Evidence remains mixed across populations; use mindfully.",
  howToUse: {
    typicalRanges: ["120–600 mg standardized extract daily", "or as directed on label"],
    timing: ["evening for sleep quality", "AM/daytime for stress resilience"],
    withFood: "Take with food if you experience GI sensitivity.",
    preparationTips: ["Stir powder into warm plant milk for a wind‑down latte."]
  },
  combineThoughtfully: [
    "Lemon balm for sleep onset",
    "Tulsi (holy basil) for daytime calm",
    "Avoid stacking with strong sedatives"
  ],
  cautions: [
    "Not advised in pregnancy/lactation unless guided by a clinician",
    "Discuss with your clinician if you use thyroid medication or sedatives",
    "Stop before surgery; may increase drowsiness in some"
  ],
  interactions: ["sedatives","thyroid medication"],
  pregnancyLactation: "Consult a qualified practitioner before use.",
  whenToAvoid: ["Upcoming surgery","Severe GI upset after use"],
  ritualIdea: "Evening wind‑down: dim lights, slow breathing (4‑7‑8), warm ashwagandha latte.",
  relatedPlants: ["lemon-balm","tulsi","passionflower"],
  relatedRemedies: ["anxiety","sleep"],
  references: [
    { title: "Examine – Ashwagandha Overview", url: "https://examine.com/supplements/ashwagandha/" },
    { title: "MSKCC – About Herbs: Ashwagandha", url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/ashwagandha" }
  ],
  seo: {
    title: "Ashwagandha — Uses, Dose, Safety | Plantich",
    description: "Clear, evidence‑aware guidance on ashwagandha: uses, dose ranges, timing, cautions, and simple rituals."
  }
};
export default plant;
```

### REMEDY (Anxiety)
```typescript
const remedy: Remedy = {
  slug: "anxiety",
  name: "Anxiety & Stress",
  deck: "Ground the nervous system with gentle, practical supports.",
  overview:
    "This guide maps common anxiety patterns to simple herbal options and daily habits. It blends tradition with evidence summaries so you can choose mindfully. Content is educational, not medical advice. Always consult a qualified practitioner—especially if pregnant, nursing, on medication, or managing a condition.",
  quickPaths: [
    { scenario: "Wired at night", suggestions: ["ashwagandha","lemon-balm","magnesium"], timing: "evening" },
    { scenario: "Daytime calm without drowsiness", suggestions: ["tulsi","l-theanine","passionflower"], timing: "AM/PM" },
    { scenario: "Stress hits digestion", suggestions: ["chamomile","ginger"], timing: "with meals" }
  ],
  corePlants: [
    {
      plant: "ashwagandha",
      why: "May support stress resilience and sleep quality when anxiety is persistent.",
      howToUse: ["Capsule/extract: 120–600 mg/day", "Evening for sleep; AM for daytime stress"],
      cautions: ["Sedation in some; discuss thyroid/sedative meds with a clinician"],
      bestFor: ["sleep maintenance","ongoing stress"]
    },
    {
      plant: "lemon-balm",
      why: "Traditionally calming; may ease tension and support sleep onset.",
      howToUse: ["Tea: 1–2 tsp dried leaf, 5–10 min", "Tincture/capsule per label"],
      cautions: ["May increase drowsiness when combined with sedatives"]
    },
    {
      plant: "tulsi",
      why: "Gentle daytime calm and mental clarity in stressful periods.",
      howToUse: ["Tea 1–3×/day", "Capsule/tincture per label"],
      cautions: ["Stop before surgery; monitor if on anticoagulants"]
    }
  ],
  rituals: [
    "4‑7‑8 breathing for 3–5 minutes in the evening",
    "Light walk after dinner; dim screens 60 minutes before bed"
  ],
  lifestyle: [
    "Caffeine timing: before noon",
    "Regular meals with protein and fiber",
    "Morning light exposure for circadian stability"
  ],
  safetyNotes: [
    "Educational only; not a substitute for care",
    "Discuss herbs with your clinician if you use medications",
    "Avoid stacking multiple sedatives"
  ],
  whenToSeekCare: [
    "Panic symptoms with chest pain or fainting",
    "Anxiety causing functional impairment or suicidal thoughts"
  ],
  faq: [
    { q: "Will herbs work immediately?", a: "Some effects are felt the same day (e.g., lemon balm), while adaptation‑type benefits may take 1–4 weeks. Track responses and adjust responsibly." },
    { q: "Can I combine herbs?", a: "Keep combinations simple. Start with one, note effects for 1–2 weeks, then consider a second if needed. Avoid multiple sedatives together." },
    { q: "Are there interactions?", a: "Yes—especially with sedatives, thyroid and anticoagulant medications. Consult your clinician." }
  ],
  relatedRemedies: ["sleep","ibs"],
  relatedPlants: ["ashwagandha","lemon-balm","tulsi","passionflower","chamomile"],
  references: [
    { title: "Examine – Anxiety & Stress Related Overviews", url: "https://examine.com/goals/anxiety/" },
    { title: "MSKCC – About Herbs (lemon balm, ashwagandha)", url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs" }
  ],
  seo: {
    title: "Herbal Options for Anxiety — Clear & Safe Guidance",
    description: "Gentle, evidence‑aware herbs and rituals for anxiety and stress, with usage ranges, cautions, and when to seek care."
  }
};
export default remedy;
```

## Kvalitetscheck (gör alltid innan du genererar fler filer)
- [ ] Filnamn = slug. Kebab‑case
- [ ] seo.title ≤ 60 tecken, seo.description 150–160
- [ ] All text på engelska
- [ ] cautions och safetyNotes finns och är tydliga
- [ ] 1–4 references med riktiga, pålitliga länkar
- [ ] relatedPlants/relatedRemedies pekar på existerande eller planerade slugs
- [ ] Inga medicinska löften; "educational only"

## Batch‑generering (för Cursor‑kommandon)
1. Skapa först 5 plants: `ashwagandha`, `lemon-balm`, `rhodiola`, `chamomile`, `turmeric`
2. Skapa 5 remedies: `anxiety`, `sleep`, `digestion`, `energy`, `focus`
3. Fyll related* korsvis för internlänkning
4. Använd exemplen ovan som stilreferens och fyll dina egna faktarader

## Commit‑stil
- En fil per commit när du börjar, sedan batchvis 3–5 filer
- Meddelande: `content(plants): add ashwagandha` / `content(remedies): add anxiety`

## Viktigt (juridik/säkerhet)
- **Skriv aldrig** att Plantich behandlar, botar, diagnostiserar
- **Uppmana till** att konsultera vården vid graviditet, mediciner, sjukdom eller biverkningar
- **Alltid** "educational only" och "consult your clinician"
- **Inga medicinska löften** eller garanti av resultat

---

**Använd denna instruktion som workspace rules i Cursor för att generera konsekvent, säkert och evidensbaserat innehåll för Plantich.**
