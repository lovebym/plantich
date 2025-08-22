export interface AIQuery {
  q: string;
  locale?: string;           // "en" (default)
  maxItems?: number;         // default 8
}

export interface AISnippet {
  title: string;
  text: string;              // 2–4 meningar – TL;DR/direktsvar
}

export interface AISource { 
  title: string; 
  url: string 
}

export interface AIHit {
  type: "plant" | "remedy";
  slug: string;
  title: string;             // commonName eller remedy.name
  deck?: string;
  why: string[];             // korta features: "matched 'sleep'", "outcome overlap"
  cautions?: string[];
  howToUse?: string[];       // destillat (om plant)
  sources: AISource[];
  score: number;
  url: string;
}

export interface AIResponse {
  tldr: AISnippet;
  hits: AIHit[];
  safety: string;
  queryEcho: string;         // normalized query
}
