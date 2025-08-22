# 🧠 KOMPLETT CURSOR-INSTRUKTION – PLANTICH

## 💬 Instruktion till Cursor:

Du är en expert på att bygga exklusiva, moderna, AI-baserade webbplatser i Next.js + Tailwind + Sanity + OpenAI.
Jag vill att du bygger hela siten Plantich – The Sacred Alchemy of Plants utifrån dessa riktlinjer:

## 🔮 1. Sajtens syfte

Bygg en botanisk AI-hemsida där användaren skriver in sin känsla eller ett symptom, och får:

- Växtbaserade lösningar (örter, svampar, adaptogener)
- Förklaringar med forskning, folkmedicin och dosering
- Ritualförslag, ljud, bilder och personligt "heligt rum"

## 🧩 2. Komponenter att skapa

Skapa en komponentstruktur med följande:

```
/components/
  Hero.tsx
  CategoryGrid.tsx
  SymptomList.tsx
  PlantCard.tsx
  RemedyCard.tsx
  Footer.tsx
  WhyPlantich.tsx
  RitualMode.tsx
  AIEmotionPrompt.tsx
  PlantDNABrowser.tsx
  HerbalWorldMap.tsx
  WhispersOfPlant.tsx
  TouchReactiveUI.tsx
```

## 🌿 3. Innehållsstruktur i Sanity eller /content/

Skapa följande filstruktur:

```
/content/
  plants/
    ashwagandha.ts
    lemon-balm.ts
    lion-mane.ts
    holy-basil.ts
    reishi.ts
    valerian.ts
    chamomile.ts
    passionflower.ts
    rhodiola.ts
    turmeric.ts
    ...
  remedies/
    mind/
      anxiety.ts
      insomnia.ts
      depression.ts
      stress.ts
      focus.ts
    digestion/
      bloating.ts
      constipation.ts
      ibs.ts
    skin/
      acne.ts
      eczema.ts
    energy/
      fatigue.ts
      burnout.ts
    immunity/
      cold.ts
      flu.ts
    ...
```

Varje fil ska innehålla:

```typescript
interface Plant {
  slug: string
  title: string
  latinName: string
  description: string
  uses: string[]
  rituals: string[]
  research: { title: string; url: string }[]
  cautions: string[]
  image: string
  audio?: string
  recommendations: string[]
  dna: {
    activeCompounds: string[]
    effects: string[]
  }
  worldMap: {
    origin: string
    traditions: string[]
    coordinates: [number, number]
  }
  whispers: {
    quotes: string[]
    folklore: string[]
  }
}
```

## 🎨 4. Designriktlinjer (Tailwind)

### Färgpalett:
```css
/* Primära färger */
--background: #FDFBF7;        /* Bone */
--accent-terracotta: #C36B50; /* Deep Terracotta */
--accent-moss: #7C9070;       /* Moss Green */
--accent-lavender: #9F8FA4;   /* Dusky Lavender */
--text-soft-black: #1C1B1A;   /* Soft Black */

/* Sekundära färger */
--sand-light: #F5F2ED;
--clay-warm: #D4C4B7;
--herbal-muted: #8A9B7A;
--gold-accent: #B89B5E;
```

### Typsnitt:
```css
/* Rubriker */
font-family: 'Canela', 'Reckless Neue', 'Gambarino', serif;

/* Brödtext */
font-family: 'Söhne', 'General Sans', 'Maison Neue', sans-serif;
```

### Stil:
- Byredo meets Ancient Apothecary
- Minimal men varm, spirituell & exklusiv
- Handritade botaniska motiv
- Mikroanimerade växter (hovereffekt)
- Organiska former som UI-bas

## 🤖 5. AI-integrering

Använd OpenAI för att tolka symptom i Hero.tsx prompt

Matcha mot plantor i databasen

Ge förslag på: växt, ritual, dosering, forskning

Ge ljudguide (Spotify/embed eller mp3)

Visa symbolik, plats på karta och bild på växt

## 🧘 6. Unika funktioner

Implementera följande signaturfunktioner:

| Funktion | Effekt |
|----------|--------|
| 🌌 AI: "How do you feel?" prompt | Skapar AI-terapeutisk upplevelse |
| 🧬 Plant DNA Browser | Visualisera växtens verksamma ämnen |
| 🗺️ Herbal World Map | Visa växter efter plats & tradition |
| 📖 Whispers of the Plant | Visa citat & folkmedicinska visdomar |
| 📲 Ritual Mode | Ljud + rörelse + ört i guidat format |
| ✨ Touch-reactive UI | Mikroeffekter vid touch & scroll |

## ⚙️ 7. SEO + AI Search Optimering

Använd `<article>`, `<section>`, `<summary>`-taggar

Lägg till meta, og:image, og:description, schema.org

TL;DR längst upp på varje växt & symptom

Intentfokuserade keywords:

- "herb for [symptom]"
- "natural remedy for [symptom]"
- "best adaptogens for anxiety"

## 📐 8. Implementationsordning

### Steg 1: Design System
1. Uppdatera `tailwind.config.js` med nya färger
2. Lägg till typsnitt i `layout.tsx`
3. Skapa baskomponenter

### Steg 2: Innehållsstruktur
1. Skapa alla plant-filer i `/content/plants/`
2. Skapa alla remedy-filer i `/content/remedies/`
3. Implementera content loaders

### Steg 3: Komponenter
1. Hero med AI-prompt
2. CategoryGrid (Mind/Body/Spirit)
3. SymptomList med emotionell copy
4. PlantCard och RemedyCard
5. Footer och WhyPlantich

### Steg 4: AI-integration
1. OpenAI API för symptomtolkning
2. Matchning mot plant-databas
3. Ritual-generering

### Steg 5: Avancerade funktioner
1. Plant DNA Browser
2. Herbal World Map
3. Ritual Mode
4. Touch-reactive UI

## 🎯 9. Specifika kommandon för Cursor

### Skapa Tailwind config:
```bash
# Uppdatera tailwind.config.js med nya färger
```

### Skapa komponenter:
```bash
# Skapa alla komponenter i /components/
```

### Skapa innehåll:
```bash
# Skapa alla plant- och remedy-filer
```

### Implementera AI:
```bash
# Skapa API routes för OpenAI integration
```

## 🔧 10. Teknisk stack

- **Frontend**: Next.js 14 + TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity (eller file-based med /content/)
- **AI**: OpenAI API
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics
- **SEO**: Next.js built-in + custom meta

## 📋 11. Checklista för implementation

- [ ] Design system implementerat
- [ ] Alla komponenter skapade
- [ ] Innehållsstruktur klar
- [ ] AI-integration fungerar
- [ ] SEO optimerat
- [ ] Responsiv design
- [ ] Performance optimerat
- [ ] Accessibility (WCAG 2.1)
- [ ] Testing implementerat
- [ ] Deployment klar

## 🚀 12. Starta implementation

Kör följande kommando för att börja:

```bash
# Skapa alla nödvändiga filer och komponenter
npm run build:plantich
```

---

**Viktigt**: Följ designmanifestet strikt - detta ska vara den mest exklusiva och AI-optimerade botaniska sajten på internet. Varje detalj ska reflektera "Byredo meets Ancient Herbarium" estetiken.
