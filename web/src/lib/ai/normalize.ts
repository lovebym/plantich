const STOP = new Set(["the","and","or","for","to","of","my","i","feel","have","with","a","am","is","are","was","were","be","been","being","do","does","did","will","would","could","should","may","might","can","must","shall"]);
export function normalizeQuery(q: string) {
  const lower = (q || "").toLowerCase().normalize("NFKD").replace(/\p{Diacritic}/gu, "");
  const tokens = lower.split(/[^a-z0-9]+/g).filter(Boolean).filter(t => !STOP.has(t));
  return { lower, tokens };
}
