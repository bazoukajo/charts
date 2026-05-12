# Data Strengthening Plan

## 1) Current Data Quality Snapshot

Based on the current dashboard code:

- Total chart surfaces: 79
- Charts with explicit external indicator keys (WDI-backed when available): 23
- Charts using population-only external merge mode: 3
- Remaining charts are modelled/illustrative unless explicitly replaced

Interpretation:

- Core macro/labour/health/environment/tech foundations are reasonably strong where WDI is available.
- A large share of social, migration flow, governance, media, and composite index charts are still synthetic.
- Migration and governance sections are the highest credibility gap versus user expectations.

## 2) What Is Already Strong

The app already merges World Bank indicators for:

- GDP, GDP per capita, GNI per capita
- Exports, imports
- Unemployment, employment-to-population
- Life expectancy, birth/death, fertility, infant mortality
- CO2 per capita, renewable share, forest area
- Literacy, internet users, mobile subscriptions, R&D share
- Health expenditure per capita
- Population (also used to recompute migration per-capita/ratio charts)

This is a solid baseline for long-run trends.

## 3) Best External Sources to Add Next

### Priority A (highest impact)

1. UN DESA International Migrant Stock + Origin-Destination matrices

- Why: directly addresses "where migrants come from" and destination/origin validation.
- Coverage: 233 countries/areas, 1990-2024 stock estimates with origin-destination detail.
- Use: replace or annotate migration stock and bilateral-origin narratives.

2. OECD International Migration Database (flows)

- Why: annual flow quality for OECD countries is usually higher than synthetic assumptions.
- Use: replace legal migration flow series for OECD members; keep synthetic fallback only where unavailable.

3. UNHCR refugee/asylum datasets

- Why: improves crisis-year migration signals and irregular-flow proxies.
- Use: blend with migration section context and uncertainty labels.

### Priority B (important)

4. World Happiness Report / Gallup (happiness)

- Why: your happiness chart currently mixes modelled assumptions; this can be anchored to published values.

5. UNDP HDI + World Bank poverty/inequality complements

- Why: HDI/Gini/corruption composites become more defendable.

6. V-Dem or Freedom House (political/civil indices)

- Why: strengthens governance/freedom charts with transparent methodology.

## 4) Validation Rules to Implement

For each indicator/country/year series:

1. Source metadata

- Store source name, dataset version, retrieval date, and license.

2. Freshness checks

- Warn if latest year in source is older than expected.

3. Plausibility bounds

- Reject impossible values (e.g., negative population, fertility < 0, percentage outside 0-100 where not allowed).

4. Change-point sanity

- Flag year-over-year spikes beyond threshold by indicator (e.g., z-score or % jump rules).

5. Cross-source reconciliation

- If two authoritative sources exist, compute delta and show a confidence badge:
  - High: close agreement
  - Medium: moderate gap
  - Low: large divergence or sparse coverage

6. Missingness score

- Report coverage by country and years per indicator.

## 5) Recommended Architecture Upgrade

Create a data pipeline step (offline prebuild or on-demand cache):

- Input: raw source files/APIs (WDI, UN DESA, OECD, UNHCR, etc.)
- Transform: harmonize country codes (ISO3), units, and yearly alignment
- Validate: apply the rules above
- Output: versioned JSON snapshots (e.g., data/validated/\*.json)

Then the dashboard should:

- load validated snapshots first,
- fall back to modelled only when missing,
- display confidence badges computed from validation output instead of static labels.

## 6) Quick Wins (can be done first)

1. Migration section

- Replace synthetic bilateral-origin claims with UN DESA destination-origin matrix where available.

2. Happiness/HDI

- Bind to official published series and show source-year in tooltip.

3. Confidence badge logic

- Compute from coverage + source class + validation failures, not hardcoded key presence only.

## 7) User-facing Transparency Improvements

Add a small "Data quality panel" per tab:

- Source(s) used
- Coverage years
- Last update date
- % modelled vs observed points
- Validation warnings count

This will substantially strengthen trust and reduce ambiguity for policy-style use.
