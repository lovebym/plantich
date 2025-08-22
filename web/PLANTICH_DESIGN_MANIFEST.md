# 🌿 PLANTICH DESIGNMANIFEST
## 🎨 VISUELL IDENTITET

### Designprincip: Byredo meets Ancient Herbarium

#### Färgpalett
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

#### Typsnitt
```css
/* Rubriker */
font-family: 'Canela', 'Reckless Neue', 'Gambarino', serif;

/* Brödtext */
font-family: 'Söhne', 'General Sans', 'Maison Neue', sans-serif;
```

#### Illustration & ikoner
- Handritade botaniska motiv
- Mikroanimerade växter (hovereffekt)
- Organiska former som UI-bas

## 🧘 UX/UI DESIGN

### Apoteket möter AI

#### Startsidan: Prompt: "How do you feel?"
- Emotionell AI-prompt som första interaktion
- Känslobaserad navigation istället för klinisk

#### Sökresultat: AI-tolkade symtom → växtkort + ljud + ritual
- Varje resultat inkluderar:
  - Visuellt växtkort
  - Ambient ljud (valfritt)
  - Personlig ritual

#### Dynamiskt UI
- Parallax scroll
- Växtanimationer
- Astrologiska färgskiftningar

#### Personliga ritualer
- Varje växtsida = unik aura med färg, ljud, textur

#### Navigering
- Sakral men tydlig struktur
- Minimalism med hög värme
- Interaktiva flöden och slow transitions

## ⚙️ TEKNIK & OPTIMERING

### Tech Stack
- Next.js + Tailwind CSS
- Sanity CMS
- OpenAI API (symptomtolkning, AI-kort)
- DALL·E/Midjourney (bilder)
- WebAudio + Spotify-embeds (ljud)

### SEO & AI Search
- Semantic tagging: `<article>`, `<section>`, `<aside>`
- Featured snippets-struktur i alla rubriker
- TL;DR-summary i toppen av varje sida
- Intentbaserade keywords: "plant for [symptom]", "natural remedy for..."

## ✨ SIGNATURFUNKTIONER

| Funktion | Effekt |
|----------|--------|
| 🌌 "Enter your emotion" prompt | Skapar AI-terapeutisk upplevelse |
| 🧬 Plant DNA Browser | Visualiserar växtens verksamma ämnen |
| 🗺️ Herbal World Map | Växter efter geografisk plats & tradition |
| 📖 Whispers of the Plant | Citat & folkmedicinska visdomskort |
| 📲 Ritual Mode | Ljudguide + rörelse + dryck för varje symptom |
| ✨ Touch-reactive UI | Vindliknande mikroeffekter vid scroll/touch |

## 📐 KOMPONENTSTRUKTUR FÖR CURSOR

### Hero.tsx – AI-prompt + introtext
### CategoryGrid.tsx – Mind / Body / Spirit
### SymptomList.tsx – Top symptoms with intent-based copy
### WhyPlantich.tsx – Mission, science, calm design
### Footer.tsx – Sacred links + newsletter CTA

## 🎯 IMPLEMENTATIONSPLAN

### Fas 1: Grundläggande Design System
1. Uppdatera Tailwind config med nya färger
2. Implementera typsnitt (Google Fonts + custom)
3. Skapa baskomponenter med nya färger

### Fas 2: Interaktiva Element
1. Mikroanimationer för växter
2. Touch-reactive UI
3. Parallax scroll-effekter

### Fas 3: AI-Integration
1. Emotionell prompt på startsidan
2. AI-tolkade sökresultat
3. Personliga ritualer

### Fas 4: Avancerade Funktioner
1. Plant DNA Browser
2. Herbal World Map
3. Ritual Mode med ljud
