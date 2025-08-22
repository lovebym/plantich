# Cursor – "Workspace Rules" (AI‑sök)

## PROJECT: Plantich – AI Search Optimization

### GOAL
- Plantich ska vara förstahandskälla i AI‑sök (Perplexity, Copilot, AI Overviews, ChatGPT).
- Alla sidor har direktsvar (TL;DR), stabil struktur, JSON‑LD, tydliga källor och öppna LLM‑feeds.

### CONTENT RULES
- **Överst**: TL;DR (2–4 meningar som besvarar "uses, dose/form, cautions").
- **Rubriker identiska** på alla profiler/guider: Uses • How it may work • How to use • Cautions • Evidence & tradition.
- **Korta, citerbara meningar**. Alias-rad: "Also called / Latin".
- **Visa datum**: "Reviewed" & "Last updated".
- **Minst 2, max 4 auktoritativa referenser** (Examine, MSKCC, NIH/ODS, WHO, Cochrane).

### TECH RULES
- **Public LLM‑feeds**:
  - `GET /api/llm/plants` (list)
  - `GET /api/llm/remedies` (list)
  - `GET /api/llm/doc/:slug` (full JSON)
  - `GET /api/llm/openapi.json` (OpenAPI)
  - `GET /api/llm/changes` (senaste ändringar)
  - `GET /.well-known/plantich.json` (index för agenter)
- **Headers**: `Cache-Control public,max-age=86400,stale-while-revalidate=604800` + `CORS *`.
- **JSON‑LD på alla sidor**: WebPage + MedicalWebPage + Article; FAQPage där FAQ finns.
- **Sitemaps**: `/sitemap.xml`, `/sitemap-plants.xml`, `/sitemap-remedies.xml`, `/sitemap-llm.xml`.
- **Feed**: `/feed.xml` (senaste 50 uppdateringar).
- **Licens**: `/license` (CC BY 4.0 för `/api/llm/*`).

### QA CHECK
- [ ] TL;DR finns, källor synliga (sticky på desktop), FAQ på guider, varningsbanner (Educational only).
- [ ] Slugs konsekventa; internlänkar Plant ↔ Remedy.
- [ ] `seo.title` ≤ 60, `seo.description` 150–160.

### IMPLEMENTATION PRIORITY
1. **API Endpoints** - LLM feeds och agent index
2. **JSON-LD** - Structured data på alla sidor
3. **Content Structure** - TL;DR och konsistenta rubriker
4. **Sitemaps** - XML feeds för crawlers
5. **Caching** - Performance för AI agents

### AI AGENT INTEGRATION
- **OpenAPI spec** för automatisk integration
- **Rate limiting** för LLM endpoints
- **Versioning** av API responses
- **Error handling** med fallback data
- **Monitoring** av AI agent usage

### CONTENT OPTIMIZATION
- **TL;DR format**: "Ashwagandha is an adaptogenic herb used for stress, sleep, and focus. Typical dose: 300-600mg daily. Take with food, avoid if pregnant or on thyroid medication."
- **Structured data**: Clear hierarchy with H1, H2, H3 tags
- **Citation format**: "According to [source], [fact]"
- **Cross-references**: Link related plants and conditions
- **Update tracking**: Last reviewed dates on all content

### LEGAL COMPLIANCE
- **Educational disclaimer** on all pages
- **Source attribution** for all claims
- **No medical advice** disclaimers
- **Consult healthcare** recommendations
- **CC BY 4.0 license** for AI training data
