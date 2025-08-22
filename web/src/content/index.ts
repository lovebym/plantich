// Central index for all content with utility functions
import { Plant, Remedy, PlantRemedyMap, RemedyPlantMap } from './types';

// Import all plants
import alfalfa from './plants/alfalfa';
import aloeVera from './plants/aloe-vera';
import arnica from './plants/arnica';
import ashwagandha from './plants/ashwagandha';
import astragalus from './plants/astragalus';
import bacopa from './plants/bacopa';
import bilberry from './plants/bilberry';
import blackCohosh from './plants/black-cohosh';
import blackSeed from './plants/black-seed';
import blueVervain from './plants/blue-vervain';
import boswellia from './plants/boswellia';
import burdockRoot from './plants/burdock-root';
import cacao from './plants/cacao';
import calendula from './plants/calendula';
import californiaPoppy from './plants/california-poppy';
import capsaicin from './plants/capsaicin';
import cardamom from './plants/cardamom';
import cayenne from './plants/cayenne';
import chaga from './plants/chaga';
import chamomile from './plants/chamomile';
import chasteberry from './plants/chasteberry';
import chlorella from './plants/chlorella';
import cilantro from './plants/cilantro';
import cinnamon from './plants/cinnamon';
import clove from './plants/clove';
import coffee from './plants/coffee';
import cordyceps from './plants/cordyceps';
import dandelionRoot from './plants/dandelion-root';
import devilSClaw from './plants/devil-s-claw';
import dongQuai from './plants/dong-quai';
import echinacea from './plants/echinacea';
import elderberry from './plants/elderberry';
import eleuthero from './plants/eleuthero';
import fennel from './plants/fennel';
import fenugreek from './plants/fenugreek';
import garlic from './plants/garlic';
import ginger from './plants/ginger';
import ginkgoBiloba from './plants/ginkgo-biloba';
import ginseng from './plants/ginseng';
import gotuKola from './plants/gotu-kola';
import greenTea from './plants/green-tea';
import guarana from './plants/guarana';
import hawthorn from './plants/hawthorn';
import holyBasil from './plants/holy-basil';
import hops from './plants/hops';
import jojoba from './plants/jojoba';
import kavaKava from './plants/kava-kava';
import lavender from './plants/lavender';
import lemonBalm from './plants/lemon-balm';
import licoriceRoot from './plants/licorice-root';
import lionSMane from './plants/lion-s-mane';
import lionsMane from './plants/lions-mane';
import maca from './plants/maca';
import marshmallowRoot from './plants/marshmallow-root';
import milkThistle from './plants/milk-thistle';
import moringa from './plants/moringa';
import motherwort from './plants/motherwort';
import nettle from './plants/nettle';
import onion from './plants/onion';
import oregano from './plants/oregano';
import passionflower from './plants/passionflower';
import peppermint from './plants/peppermint';
import redClover from './plants/red-clover';
import reishi from './plants/reishi';
import rhodiola from './plants/rhodiola';
import rosehip from './plants/rosehip';
import rosemary from './plants/rosemary';
import sage from './plants/sage';
import sawPalmetto from './plants/saw-palmetto';
import schisandra from './plants/schisandra';
import seaMoss from './plants/sea-moss';
import shatavari from './plants/shatavari';
import sheaButter from './plants/shea-butter';
import skullcap from './plants/skullcap';
import slipperyElm from './plants/slippery-elm';
import spirulina from './plants/spirulina';
import stJohnSWort from './plants/st-john-s-wort';
import stJohnsWort from './plants/st-johns-wort';
import teaTree from './plants/tea-tree';
import thyme from './plants/thyme';
import tribulus from './plants/tribulus';
import triphala from './plants/triphala';
import turmeric from './plants/turmeric';
import valerianRoot from './plants/valerian-root';
import whiteWillow from './plants/white-willow';
import wildYam from './plants/wild-yam';
import willowBark from './plants/willow-bark';
import yellowDock from './plants/yellow-dock';
import yerbaMate from './plants/yerba-mate';

// Import all remedies
import acidRefluxRemedy from './remedies/acid-reflux';
import acneRemedy from './remedies/acne';
import adhdRemedy from './remedies/adhd';
import adrenalFatigueRemedy from './remedies/adrenal-fatigue';
import adrenalSupportRemedy from './remedies/adrenal-support';
import afternoonSlumpRemedy from './remedies/afternoon-slump';
import allergiesRemedy from './remedies/allergies';
import antiAgingRemedy from './remedies/anti-aging';
import anxietyRemedy from './remedies/mind/anxiety';
import arthritisRemedy from './remedies/arthritis';
import asthmaRemedy from './remedies/asthma';
import autoimmuneSupportRemedy from './remedies/autoimmune-support';
import backPainRemedy from './remedies/back-pain';
import bacterialInfectionsRemedy from './remedies/bacterial-infections';
import bipolarDisorderRemedy from './remedies/bipolar-disorder';
import bloatingRemedy from './remedies/bloating';
import bloodSugarBalanceRemedy from './remedies/blood-sugar-balance';
import brainFogRemedy from './remedies/brain-fog';
import burnoutRemedy from './remedies/burnout';
import cardiovascularSupportRemedy from './remedies/cardiovascular-support';
import chronicFatigueRemedy from './remedies/chronic-fatigue';
import chronicPainRemedy from './remedies/chronic-pain';
import circulationRemedy from './remedies/circulation';
import cleansingSupportRemedy from './remedies/cleansing-support';
import cognitiveDeclineRemedy from './remedies/cognitive-decline';
import coldPreventionRemedy from './remedies/cold-prevention';
import coldRemedy from './remedies/cold';
import constipationRemedy from './remedies/constipation';
import coughRemedy from './remedies/cough';
import depressionRemedy from './remedies/depression';
import detoxRemedy from './remedies/detox';
import diabetesSupportRemedy from './remedies/diabetes-support';
import diabetesRemedy from './remedies/diabetes';
import diarrheaRemedy from './remedies/diarrhea';
import digestiveEnzymesRemedy from './remedies/digestive-enzymes';
import digestiveIssuesRemedy from './remedies/digestive-issues';
import eczemaRemedy from './remedies/eczema';
import emotionalBalanceRemedy from './remedies/emotional-balance';
import endocrineHealthRemedy from './remedies/endocrine-health';
import energyBoostRemedy from './remedies/energy-boost';
import erectileDysfunctionRemedy from './remedies/erectile-dysfunction';
import estrogenBalanceRemedy from './remedies/estrogen-balance';
import eyeHealthRemedy from './remedies/eye-health';
import fatigueRemedy from './remedies/fatigue';
import fertilitySupportRemedy from './remedies/fertility-support';
import fibromyalgiaRemedy from './remedies/fibromyalgia';
import fluPreventionRemedy from './remedies/flu-prevention';
import fluRemedy from './remedies/flu';
import focusConcentrationRemedy from './remedies/focus-concentration';
import foodIntoleranceRemedy from './remedies/food-intolerance';
import gastritisRemedy from './remedies/gastritis';
import gutHealthRemedy from './remedies/gut-health';
import hairLossRemedy from './remedies/hair-loss';
import headacheRemedy from './remedies/headache';
import hearingLossRemedy from './remedies/hearing-loss';
import heartHealthRemedy from './remedies/heart-health';
import highBloodPressureRemedy from './remedies/high-blood-pressure';
import highCholesterolRemedy from './remedies/high-cholesterol';
import hormoneBalanceRemedy from './remedies/hormone-balance';
import ibsRemedy from './remedies/ibs';
import immuneBoostRemedy from './remedies/immune-boost';
import immuneSupportRemedy from './remedies/immune-support';
import inflammationRemedy from './remedies/inflammation';
import inflammatoryConditionsRemedy from './remedies/inflammatory-conditions';
import insomniaRemedy from './remedies/insomnia';
import jointPainRemedy from './remedies/joint-pain';
import kidneyHealthRemedy from './remedies/kidney-health';
import leakyGutRemedy from './remedies/leaky-gut';
import lethargyRemedy from './remedies/lethargy';
import liverDetoxRemedy from './remedies/liver-detox';
import lowEnergyRemedy from './remedies/low-energy';
import lowLibidoRemedy from './remedies/low-libido';
import lowStaminaRemedy from './remedies/low-stamina';
import memoryIssuesRemedy from './remedies/memory-issues';
import menopauseSymptomsRemedy from './remedies/menopause-symptoms';
import mentalClarityRemedy from './remedies/mental-clarity';
import mentalFatigueRemedy from './remedies/mental-fatigue';
import metabolicHealthRemedy from './remedies/metabolic-health';
import microbiomeSupportRemedy from './remedies/microbiome-support';
import migraineRemedy from './remedies/migraine';
import moodSwingsRemedy from './remedies/mood-swings';
import morningFatigueRemedy from './remedies/morning-fatigue';
import muscleCrampsRemedy from './remedies/muscle-cramps';
import musclePainRemedy from './remedies/muscle-pain';
import nauseaRemedy from './remedies/nausea';
import neckPainRemedy from './remedies/neck-pain';
import nervousnessRemedy from './remedies/nervousness';
import obesityRemedy from './remedies/obesity';
import ocdRemedy from './remedies/ocd';
import panicAttacksRemedy from './remedies/panic-attacks';
import pcosRemedy from './remedies/pcos';
import physicalExhaustionRemedy from './remedies/physical-exhaustion';
import pmsRemedy from './remedies/pms';
import postExerciseFatigueRemedy from './remedies/post-exercise-fatigue';
import psoriasisRemedy from './remedies/psoriasis';
import ptsdRemedy from './remedies/ptsd';
import recoveryFromIllnessRemedy from './remedies/recovery-from-illness';
import recoverySleepRemedy from './remedies/recovery-sleep';
import recoverySupportRemedy from './remedies/recovery-support';
import respiratorySupportRemedy from './remedies/respiratory-support';
import restlessSleepRemedy from './remedies/restless-sleep';
import seasonalDepressionRemedy from './remedies/seasonal-depression';
import seasonalImmunityRemedy from './remedies/seasonal-immunity';
import sinusIssuesRemedy from './remedies/sinus-issues';
import skinAgingRemedy from './remedies/skin-aging';
import skinHealthRemedy from './remedies/skin-health';
import skinInflammationRemedy from './remedies/skin-inflammation';
import sleepApneaRemedy from './remedies/sleep-apnea';
import sleepQualityRemedy from './remedies/sleep-quality';
import sleepSupportRemedy from './remedies/sleep-support';
import socialAnxietyRemedy from './remedies/social-anxiety';
import soreThroatRemedy from './remedies/sore-throat';
import stomachPainRemedy from './remedies/stomach-pain';
import stressRemedy from './remedies/stress';
import testosteroneSupportRemedy from './remedies/testosterone-support';
import thyroidSupportRemedy from './remedies/thyroid-support';
import toxinRemovalRemedy from './remedies/toxin-removal';
import ulcerSupportRemedy from './remedies/ulcer-support';
import viralInfectionsRemedy from './remedies/viral-infections';
import vitalitySupportRemedy from './remedies/vitality-support';
import weaknessRemedy from './remedies/weakness';
import weightLossSupportRemedy from './remedies/weight-loss-support';

// Exported collections
export const allPlants: Plant[] = [
  alfalfa,
  aloeVera,
  arnica,
  ashwagandha,
  astragalus,
  bacopa,
  bilberry,
  blackCohosh,
  blackSeed,
  blueVervain,
  boswellia,
  burdockRoot,
  cacao,
  calendula,
  californiaPoppy,
  capsaicin,
  cardamom,
  cayenne,
  chaga,
  chamomile,
  chasteberry,
  chlorella,
  cilantro,
  cinnamon,
  clove,
  coffee,
  cordyceps,
  dandelionRoot,
  devilSClaw,
  dongQuai,
  echinacea,
  elderberry,
  eleuthero,
  fennel,
  fenugreek,
  garlic,
  ginger,
  ginkgoBiloba,
  ginseng,
  gotuKola,
  greenTea,
  guarana,
  hawthorn,
  holyBasil,
  hops,
  jojoba,
  kavaKava,
  lavender,
  lemonBalm,
  licoriceRoot,
  lionSMane,
  lionsMane,
  maca,
  marshmallowRoot,
  milkThistle,
  moringa,
  motherwort,
  nettle,
  onion,
  oregano,
  passionflower,
  peppermint,
  redClover,
  reishi,
  rhodiola,
  rosehip,
  rosemary,
  sage,
  sawPalmetto,
  schisandra,
  seaMoss,
  shatavari,
  sheaButter,
  skullcap,
  slipperyElm,
  spirulina,
  stJohnSWort,
  stJohnsWort,
  teaTree,
  thyme,
  tribulus,
  triphala,
  turmeric,
  valerianRoot,
  whiteWillow,
  wildYam,
  willowBark,
  yellowDock,
  yerbaMate,
];

export const allRemedies: Remedy[] = [
  acidRefluxRemedy,
  acneRemedy,
  adhdRemedy,
  adrenalFatigueRemedy,
  adrenalSupportRemedy,
  afternoonSlumpRemedy,
  allergiesRemedy,
  antiAgingRemedy,
  anxietyRemedy,
  arthritisRemedy,
  asthmaRemedy,
  autoimmuneSupportRemedy,
  backPainRemedy,
  bacterialInfectionsRemedy,
  bipolarDisorderRemedy,
  bloatingRemedy,
  bloodSugarBalanceRemedy,
  brainFogRemedy,
  burnoutRemedy,
  cardiovascularSupportRemedy,
  chronicFatigueRemedy,
  chronicPainRemedy,
  circulationRemedy,
  cleansingSupportRemedy,
  cognitiveDeclineRemedy,
  coldPreventionRemedy,
  coldRemedy,
  constipationRemedy,
  coughRemedy,
  depressionRemedy,
  detoxRemedy,
  diabetesSupportRemedy,
  diabetesRemedy,
  diarrheaRemedy,
  digestiveEnzymesRemedy,
  digestiveIssuesRemedy,
  eczemaRemedy,
  emotionalBalanceRemedy,
  endocrineHealthRemedy,
  energyBoostRemedy,
  erectileDysfunctionRemedy,
  estrogenBalanceRemedy,
  eyeHealthRemedy,
  fatigueRemedy,
  fertilitySupportRemedy,
  fibromyalgiaRemedy,
  fluPreventionRemedy,
  fluRemedy,
  focusConcentrationRemedy,
  foodIntoleranceRemedy,
  gastritisRemedy,
  gutHealthRemedy,
  hairLossRemedy,
  headacheRemedy,
  hearingLossRemedy,
  heartHealthRemedy,
  highBloodPressureRemedy,
  highCholesterolRemedy,
  hormoneBalanceRemedy,
  ibsRemedy,
  immuneBoostRemedy,
  immuneSupportRemedy,
  inflammationRemedy,
  inflammatoryConditionsRemedy,
  insomniaRemedy,
  jointPainRemedy,
  kidneyHealthRemedy,
  leakyGutRemedy,
  lethargyRemedy,
  liverDetoxRemedy,
  lowEnergyRemedy,
  lowLibidoRemedy,
  lowStaminaRemedy,
  memoryIssuesRemedy,
  menopauseSymptomsRemedy,
  mentalClarityRemedy,
  mentalFatigueRemedy,
  metabolicHealthRemedy,
  microbiomeSupportRemedy,
  migraineRemedy,
  moodSwingsRemedy,
  morningFatigueRemedy,
  muscleCrampsRemedy,
  musclePainRemedy,
  nauseaRemedy,
  neckPainRemedy,
  nervousnessRemedy,
  obesityRemedy,
  ocdRemedy,
  panicAttacksRemedy,
  pcosRemedy,
  physicalExhaustionRemedy,
  pmsRemedy,
  postExerciseFatigueRemedy,
  psoriasisRemedy,
  ptsdRemedy,
  recoveryFromIllnessRemedy,
  recoverySleepRemedy,
  recoverySupportRemedy,
  respiratorySupportRemedy,
  restlessSleepRemedy,
  seasonalDepressionRemedy,
  seasonalImmunityRemedy,
  sinusIssuesRemedy,
  skinAgingRemedy,
  skinHealthRemedy,
  skinInflammationRemedy,
  sleepApneaRemedy,
  sleepQualityRemedy,
  sleepSupportRemedy,
  socialAnxietyRemedy,
  soreThroatRemedy,
  stomachPainRemedy,
  stressRemedy,
  testosteroneSupportRemedy,
  thyroidSupportRemedy,
  toxinRemovalRemedy,
  ulcerSupportRemedy,
  viralInfectionsRemedy,
  vitalitySupportRemedy,
  weaknessRemedy,
  weightLossSupportRemedy,
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
