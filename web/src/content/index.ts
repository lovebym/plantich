// Central index for all content with utility functions
import { Plant, Remedy, PlantRemedyMap, RemedyPlantMap } from './types';

// Import all plants
import lemonBalm from './plants/lemon-balm';
import ashwagandha from './plants/ashwagandha';
import passionflower from './plants/passionflower';
import chamomile from './plants/chamomile';
import lavender from './plants/lavender';
import rhodiola from './plants/rhodiola';
import reishi from './plants/reishi';
import lionsMane from './plants/lions-mane';
import chaga from './plants/chaga';
import cordyceps from './plants/cordyceps';
import maca from './plants/maca';
import ginseng from './plants/ginseng';
import turmeric from './plants/turmeric';
import ginger from './plants/ginger';
import peppermint from './plants/peppermint';
import holyBasil from './plants/holy-basil';
import valerianRoot from './plants/valerian-root';
import skullcap from './plants/skullcap';
import stJohnsWort from './plants/st-johns-wort';
import gotuKola from './plants/gotu-kola';
import moringa from './plants/moringa';
import nettle from './plants/nettle';
import dandelionRoot from './plants/dandelion-root';
import milkThistle from './plants/milk-thistle';
import burdockRoot from './plants/burdock-root';
import schisandra from './plants/schisandra';
import astragalus from './plants/astragalus';
import elderberry from './plants/elderberry';
import echinacea from './plants/echinacea';
import licoriceRoot from './plants/licorice-root';
import fenugreek from './plants/fenugreek';
import fennel from './plants/fennel';
import cinnamon from './plants/cinnamon';
import clove from './plants/clove';
import cardamom from './plants/cardamom';
import sage from './plants/sage';
import rosemary from './plants/rosemary';
import thyme from './plants/thyme';
import oregano from './plants/oregano';
import garlic from './plants/garlic';
import onion from './plants/onion';
import blackSeed from './plants/black-seed';
import cacao from './plants/cacao';
import greenTea from './plants/green-tea';
import redClover from './plants/red-clover';
import alfalfa from './plants/alfalfa';
import seaMoss from './plants/sea-moss';
import slipperyElm from './plants/slippery-elm';
import marshmallowRoot from './plants/marshmallow-root';
import triphala from './plants/triphala';
import bacopa from './plants/bacopa';
import ginkgoBiloba from './plants/ginkgo-biloba';
import bilberry from './plants/bilberry';
import hawthorn from './plants/hawthorn';
import chasteberry from './plants/chasteberry';

// Import all remedies
import anxietyRemedy from './remedies/anxiety';
import insomniaRemedy from './remedies/insomnia';
import digestiveIssuesRemedy from './remedies/digestive-issues';
import stressRemedy from './remedies/stress';
import fatigueRemedy from './remedies/fatigue';
import headacheRemedy from './remedies/headache';
import depressionRemedy from './remedies/depression';
import migraineRemedy from './remedies/migraine';
import ibsRemedy from './remedies/ibs';
import constipationRemedy from './remedies/constipation';
import diarrheaRemedy from './remedies/diarrhea';
import acidRefluxRemedy from './remedies/acid-reflux';
import bloatingRemedy from './remedies/bloating';
import hairLossRemedy from './remedies/hair-loss';
import acneRemedy from './remedies/acne';
import eczemaRemedy from './remedies/eczema';
import psoriasisRemedy from './remedies/psoriasis';
import asthmaRemedy from './remedies/asthma';
import allergiesRemedy from './remedies/allergies';
import coldRemedy from './remedies/cold';
import fluRemedy from './remedies/flu';
import coughRemedy from './remedies/cough';
import soreThroatRemedy from './remedies/sore-throat';
import lowEnergyRemedy from './remedies/low-energy';
import pmsRemedy from './remedies/pms';
import menopauseSymptomsRemedy from './remedies/menopause-symptoms';
import fertilitySupportRemedy from './remedies/fertility-support';
import erectileDysfunctionRemedy from './remedies/erectile-dysfunction';
import lowLibidoRemedy from './remedies/low-libido';
import highBloodPressureRemedy from './remedies/high-blood-pressure';
import highCholesterolRemedy from './remedies/high-cholesterol';
import diabetesRemedy from './remedies/diabetes';
import obesityRemedy from './remedies/obesity';
import weightLossSupportRemedy from './remedies/weight-loss-support';
import jointPainRemedy from './remedies/joint-pain';
import arthritisRemedy from './remedies/arthritis';
import backPainRemedy from './remedies/back-pain';
import neckPainRemedy from './remedies/neck-pain';
import muscleCrampsRemedy from './remedies/muscle-cramps';
import inflammationRemedy from './remedies/inflammation';
import liverDetoxRemedy from './remedies/liver-detox';
import kidneyHealthRemedy from './remedies/kidney-health';
import immuneSupportRemedy from './remedies/immune-support';
import brainFogRemedy from './remedies/brain-fog';
import memoryIssuesRemedy from './remedies/memory-issues';
import eyeHealthRemedy from './remedies/eye-health';
import hearingLossRemedy from './remedies/hearing-loss';
import adhdRemedy from './remedies/adhd';
import skinAgingRemedy from './remedies/skin-aging';
import sleepApneaRemedy from './remedies/sleep-apnea';
import ptsdRemedy from './remedies/ptsd';
import heartHealthRemedy from './remedies/heart-health';
import immuneBoostRemedy from './remedies/immune-boost';
import detoxRemedy from './remedies/detox';
import energyBoostRemedy from './remedies/energy-boost';
import sleepSupportRemedy from './remedies/sleep-support';
import focusConcentrationRemedy from './remedies/focus-concentration';
import hormoneBalanceRemedy from './remedies/hormone-balance';
import antiAgingRemedy from './remedies/anti-aging';
import gutHealthRemedy from './remedies/gut-health';

// Exported collections
export const allPlants: Plant[] = [
  lemonBalm,
  ashwagandha,
  passionflower,
  chamomile,
  lavender,
  rhodiola,
  reishi,
  lionsMane,
  chaga,
  cordyceps,
  maca,
  ginseng,
  turmeric,
  ginger,
  peppermint,
  holyBasil,
  valerianRoot,
  skullcap,
  stJohnsWort,
  gotuKola,
  moringa,
  nettle,
  dandelionRoot,
  milkThistle,
  burdockRoot,
  schisandra,
  astragalus,
  elderberry,
  echinacea,
  licoriceRoot,
  fenugreek,
  fennel,
  cinnamon,
  clove,
  cardamom,
  sage,
  rosemary,
  thyme,
  oregano,
  garlic,
  onion,
  blackSeed,
  cacao,
  greenTea,
  redClover,
  alfalfa,
  seaMoss,
  slipperyElm,
  marshmallowRoot,
  triphala,
  bacopa,
  ginkgoBiloba,
  bilberry,
  hawthorn,
  chasteberry,
];

export const allRemedies: Remedy[] = [
  anxietyRemedy,
  insomniaRemedy,
  digestiveIssuesRemedy,
  stressRemedy,
  fatigueRemedy,
  headacheRemedy,
  depressionRemedy,
  migraineRemedy,
  ibsRemedy,
  constipationRemedy,
  diarrheaRemedy,
  acidRefluxRemedy,
  bloatingRemedy,
  hairLossRemedy,
  acneRemedy,
  eczemaRemedy,
  psoriasisRemedy,
  asthmaRemedy,
  allergiesRemedy,
  coldRemedy,
  fluRemedy,
  coughRemedy,
  soreThroatRemedy,
  lowEnergyRemedy,
  pmsRemedy,
  menopauseSymptomsRemedy,
  fertilitySupportRemedy,
  erectileDysfunctionRemedy,
  lowLibidoRemedy,
  highBloodPressureRemedy,
  highCholesterolRemedy,
  diabetesRemedy,
  obesityRemedy,
  weightLossSupportRemedy,
  jointPainRemedy,
  arthritisRemedy,
  backPainRemedy,
  neckPainRemedy,
  muscleCrampsRemedy,
  inflammationRemedy,
  liverDetoxRemedy,
  kidneyHealthRemedy,
  immuneSupportRemedy,
  brainFogRemedy,
  memoryIssuesRemedy,
  eyeHealthRemedy,
  hearingLossRemedy,
  adhdRemedy,
  skinAgingRemedy,
  sleepApneaRemedy,
  ptsdRemedy,
  heartHealthRemedy,
  immuneBoostRemedy,
  detoxRemedy,
  energyBoostRemedy,
  sleepSupportRemedy,
  focusConcentrationRemedy,
  hormoneBalanceRemedy,
  antiAgingRemedy,
  gutHealthRemedy,
];

// Utility functions
export function getPlantBySlug(slug: string): Plant | undefined {
  return allPlants.find(plant => plant.slug === slug);
}

export function getRemedyBySlug(slug: string): Remedy | undefined {
  return allRemedies.find(remedy => remedy.slug === slug);
}

export function getPlantsForRemedy(conditionName: string): Plant[] {
  const remedy = allRemedies.find(r => r.condition === conditionName);
  if (!remedy) return [];
  
  return allPlants.filter(plant => 
    remedy.herbs.includes(plant.name)
  );
}

export function getRemediesForPlant(plantName: string): Remedy[] {
  const plant = allPlants.find(p => p.name === plantName);
  if (!plant) return [];
  
  return allRemedies.filter(remedy => 
    plant.uses.some(use => remedy.condition === use)
  );
}

export function searchPlants(query: string): Plant[] {
  const lowercaseQuery = query.toLowerCase();
  return allPlants.filter(plant => 
    plant.name.toLowerCase().includes(lowercaseQuery) ||
    plant.latin.toLowerCase().includes(lowercaseQuery) ||
    plant.description.toLowerCase().includes(lowercaseQuery) ||
    plant.uses.some(use => use.toLowerCase().includes(lowercaseQuery))
  );
}

export function searchRemedies(query: string): Remedy[] {
  const lowercaseQuery = query.toLowerCase();
  return allRemedies.filter(remedy => 
    remedy.condition.toLowerCase().includes(lowercaseQuery) ||
    remedy.description.toLowerCase().includes(lowercaseQuery) ||
    remedy.herbs.some(herb => herb.toLowerCase().includes(lowercaseQuery))
  );
}

export function getPlantsByCategory(category: 'Mind' | 'Body' | 'Spirit'): Plant[] {
  return allPlants.filter(plant => plant.category === category);
}

export function getRemediesByCategory(category: 'Mind' | 'Body' | 'Spirit'): Remedy[] {
  return allRemedies.filter(remedy => remedy.category === category);
}

// Generate relationship maps
export function generatePlantRemedyMap(): PlantRemedyMap {
  const map: PlantRemedyMap = {};
  
  allPlants.forEach(plant => {
    map[plant.name] = plant.uses;
  });
  
  return map;
}

export function generateRemedyPlantMap(): RemedyPlantMap {
  const map: RemedyPlantMap = {};
  
  allRemedies.forEach(remedy => {
    map[remedy.condition] = remedy.herbs;
  });
  
  return map;
}
