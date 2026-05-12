/**
 * English / French UI strings for the dashboard. Large HTML blobs (historical panels,
 * speculation lists) live in dashboard-i18n-fr.js as window.I18N_HIST_FR and window.I18N_SPEC_LISTS_FR.
 */
(function (global) {
  "use strict";

  var MSGS = {
    en: {},
    fr: {},
  };

  function add(key, en, fr) {
    MSGS.en[key] = en;
    MSGS.fr[key] = fr;
  }

  add(
    "meta.title",
    "Global Economic & Social Indicators (1970–2026)",
    "Indicateurs économiques et sociaux mondiaux (1970–2026)",
  );
  add("lang.toggleTitle", "Switch language", "Changer de langue");
  add("lang.labelEn", "EN", "EN");
  add("lang.labelFr", "FR", "FR");
  add(
    "theme.toggleTitle",
    "Toggle light/dark theme",
    "Basculer thème clair/sombre",
  );
  add("theme.toggleAria", "Toggle theme", "Basculer le thème");

  add(
    "country.selectTitle",
    "Select Countries to Compare",
    "Sélectionner les pays à comparer",
  );
  add(
    "country.europeAggregateNote",
    "Europe is a derived aggregate of the European countries included in this dashboard, not a sovereign-country series.",
    "L'Europe est un agrégat dérivé des pays européens inclus dans ce tableau de bord, et non une série d'État souverain.",
  );
  add("country.europeAggregateLabel", "Europe (Aggregate)", "Europe (Agrégat)");

  add("tab.economic", "Economic", "Économie");
  add("tab.employment", "Jobs", "Emploi");
  add("tab.costs", "Costs", "Coûts");
  add("tab.social", "Social", "Social");
  add("tab.demographics", "Population", "Population");
  add("tab.health", "Health", "Santé");
  add("tab.environment", "Environment", "Environnement");
  add("tab.technology", "Tech", "Technologie");
  add("tab.trade", "Trade", "Commerce");
  add("tab.immigration", "Migration", "Migration");
  add("tab.wellbeing", "Quality of Life", "Qualité de vie");

  add(
    "sec.statsSummary",
    "Key Statistics Summary (Latest Year 2026)",
    "Indicateurs clés (dernière année 2026)",
  );
  add(
    "sec.yoy",
    "Year-over-Year Changes (2025 → 2026)",
    "Variations d’une année sur l’autre (2025 → 2026)",
  );
  add(
    "sec.comparison",
    "Detailed Country Comparison (2026)",
    "Comparaison détaillée des pays (2026)",
  );
  add(
    "sec.trends",
    "Long-term Trends (1970 → 2026)",
    "Tendances de long terme (1970 → 2026)",
  );
  add("sec.economic", "Economic Indicators", "Indicateurs économiques");
  add("sec.military", "Military Spending", "Dépenses militaires");
  add("sec.employment", "Employment & Salary", "Emploi et revenus");
  add("sec.costs", "Cost of Living", "Coût de la vie");
  add(
    "sec.telecom",
    "Telecom & Connectivity Costs",
    "Télécoms et connectivité",
  );
  add("sec.social", "Social Indicators", "Indicateurs sociaux");
  add(
    "sec.demographics",
    "Demographic Indicators",
    "Indicateurs démographiques",
  );
  add("sec.health", "Health Indicators", "Indicateurs de santé");
  add(
    "sec.environment",
    "Environmental Indicators",
    "Indicateurs environnementaux",
  );
  add("sec.technology", "Technology Adoption", "Adoption des technologies");
  add("sec.trade", "International Trade", "Commerce international");
  add("sec.immigration", "Immigration", "Immigration");
  add(
    "sec.wellbeing",
    "Quality of Life & Social Progress",
    "Qualité de vie et progrès social",
  );
  add("sec.media", "Speech & Media", "Expression et médias");
  add("sec.religion", "Religious Composition", "Composition religieuse");
  add(
    "spec.chartHidden",
    "Chart hidden due to insufficient data",
    "Graphique masqué en raison de données insuffisantes",
  );

  add("dq.title", "Data Quality Snapshot", "Instantané de qualité des données");
  add(
    "dq.summary",
    "Quick audit of source coverage and model reliance for the currently rendered dashboard.",
    "Audit rapide de la couverture des sources et de la part modélisée pour le tableau de bord affiché.",
  );
  add("dq.wdiLoaded", "WDI indicators loaded:", "Indicateurs WDI chargés :");
  add(
    "dq.totalCharts",
    "Total chart surfaces:",
    "Nombre total de graphiques :",
  );
  add(
    "dq.externalCharts",
    "Charts externally anchored:",
    "Graphiques ancrés sur des sources externes :",
  );
  add(
    "dq.modelledCharts",
    "Charts still model-first:",
    "Graphiques encore principalement modélisés :",
  );
  add("dq.horizon", "Time horizon:", "Horizon temporel :");
  add(
    "dq.freshness",
    "Last live data refresh:",
    "Dernière actualisation des données live :",
  );
  add("dq.warning", "Quality warning:", "Alerte qualité :");
  add(
    "dq.warningLowCoverage",
    "Low live-source coverage; several charts remain model-first.",
    "Couverture des sources live faible ; plusieurs graphiques restent principalement modélisés.",
  );
  add(
    "dq.warningOk",
    "Coverage acceptable for baseline dashboard use.",
    "Couverture acceptable pour un usage de base du tableau de bord.",
  );
  add(
    "dq.tabBreakdown",
    "Per-tab external coverage:",
    "Couverture externe par onglet :",
  );
  add(
    "dq.countryCoverage",
    "Selected-country WDI point coverage:",
    "Couverture des points WDI pour les pays sélectionnés :",
  );
  add("dq.notAvailable", "n/a", "n/d");

  add("table.country", "Country", "Pays");
  add("table.gdp", "GDP (T$)", "PIB (T$)");
  add("table.gdppc", "GDP/Capita ($)", "PIB/hab. ($)");
  add("table.empl", "Empl. 15+ (%)", "Empl. 15+ (%)");
  add("table.gni", "GNI/cap ($)", "RNB/hab. ($)");
  add("table.life", "Life Exp. (yrs)", "Esp. vie (ans)");
  add("table.rent", "Rent ($/mo)", "Loyer ($/mois)");
  add("table.co2", "CO2 (tons/cap)", "CO₂ (t/hab.)");
  add("table.internet", "Internet (%)", "Internet (%)");

  add("stats.range", "Range:", "Plage :");
  add(
    "stats.avgGdp",
    "Average GDP (Trillion USD)",
    "PIB moyen (milliards USD)",
  );
  add(
    "stats.avgGdppc",
    "Average GDP Per Capita (USD)",
    "PIB par habitant moyen (USD)",
  );
  add(
    "stats.empl",
    "Employment to population 15+ (%)",
    "Taux d’emploi 15+ (%)",
  );
  add(
    "stats.gni",
    "Average GNI per capita (USD, WDI)",
    "RNB par habitant moyen (USD, BM)",
  );
  add(
    "stats.life",
    "Average Life Expectancy (years)",
    "Espérance de vie moyenne (ans)",
  );
  add(
    "stats.birth",
    "Average Birth Rate (per 1000)",
    "Taux de natalité moyen (pour 1 000)",
  );
  add("stats.rent", "Average Monthly Rent (USD)", "Loyer mensuel moyen (USD)");
  add(
    "stats.gas",
    "Average Gas Price (USD/L)",
    "Prix moyen du carburant (USD/L)",
  );
  add(
    "stats.co2",
    "Average CO2 Emissions (tons/capita)",
    "Émissions de CO₂ moyennes (t/hab.)",
  );
  add(
    "stats.edu",
    "Average Education Level (%)",
    "Niveau d’éducation moyen (%)",
  );
  add(
    "stats.trade",
    "Average Trade Balance (Billion USD)",
    "Balance commerciale moyenne (milliards USD)",
  );
  add(
    "stats.tradeB",
    "Average Trade Balance (B USD)",
    "Balance commerciale moyenne (milliards USD)",
  );
  add(
    "stats.internet",
    "Average Internet Penetration (%)",
    "Pénétration Internet moyenne (%)",
  );
  add("stats.cardGdpGrowth", "GDP Growth", "Croissance du PIB");
  add(
    "stats.cardEmpChange",
    "Employment Rate Change",
    "Variation du taux d’emploi",
  );
  add(
    "stats.cardGniGrowth",
    "GNI per capita growth",
    "Croissance du RNB par habitant",
  );
  add(
    "stats.cardCo2Change",
    "CO2 Emissions Change",
    "Variation des émissions de CO₂",
  );
  add(
    "stats.cardAvgAcross",
    "Average across selected countries",
    "Moyenne des pays sélectionnés",
  );
  add(
    "stats.trendGdp",
    "Total GDP Growth Since 1970",
    "Croissance totale du PIB depuis 1970",
  );
  add(
    "stats.trendLife",
    "Life Expectancy Gain Since 1970",
    "Gain d’espérance de vie depuis 1970",
  );
  add(
    "stats.trendLifeIncrease",
    "Life Expectancy Increase",
    "Augmentation de l’espérance de vie",
  );
  add(
    "stats.trendCo2",
    "CO2 Change Since 1970",
    "Variation du CO₂ depuis 1970",
  );
  add("stats.trendAvg", "Average:", "Moyenne :");
  add("stats.trendUnitYears", "years", "ans");
  add("stats.trendUnitTons", "tons", "tonnes");

  add(
    "toast.minCountry",
    "At least one country must be selected",
    "Au moins un pays doit être sélectionné",
  );

  add(
    "wdi.ok",
    "World Bank WDI merged successfully.",
    "Données WDI de la Banque mondiale fusionnées avec succès.",
  );
  add(
    "wdi.fail",
    "World Bank data could not be loaded; charts use deterministic modelled series.",
    "Les données de la Banque mondiale n’ont pas pu être chargées ; les graphiques utilisent des séries modélisées.",
  );

  add("badge.highAccuracy", "High Accuracy", "Haute précision");
  add("badge.estimated", "Estimated", "Estimé");
  add("badge.lowAccuracy", "Low Accuracy", "Faible précision");
  add("badge.modelled", "Modelled", "Modélisé");
  add("badge.highWdi", "High (WDI)", "Élevé (WDI)");
  add("badge.partialWdi", "Partial WDI", "WDI partiel");
  add("badge.mixedWdiPop", "Mixed (WDI pop)", "Mixte (pop. WDI)");

  add("chart.axis.year", "Year", "Année");

  add("spec.tag.logic", "Logic", "Logique");
  add("spec.tag.better", "If true, better", "Si vrai, plutôt bon");
  add("spec.tag.worse", "If true, worse", "Si vrai, plutôt mauvais");
  add("spec.head", "Reading the trend (logic)", "Lire la tendance (logique)");
  add(
    "spec.note",
    "Treat these as interpretation aids, not conclusions. They are most useful for understanding what a pattern would usually mean and what counter-pattern should make you hesitate.",
    "Traitez ces éléments comme des aides à l’interprétation, pas comme des conclusions. Ils servent surtout à comprendre ce qu’un schéma signifie d’ordinaire et quel contre-schéma devrait vous inciter à la prudence.",
  );
  add(
    "spec.fallbackCharts",
    "the chart(s) above",
    "le ou les graphiques ci-dessus",
  );
  add(
    "spec.guideNoChartTitles",
    "Use this panel with the indicators in this section: start with the long-run direction, then whether series move together in time, and only then infer a story.",
    "Utilisez ce cadre avec les indicateurs de cette section : commencez par la tendance de long terme, puis si les séries évoluent en phase dans le temps, et seulement ensuite dégagez une lecture.",
  );
  add(
    "spec.accuracyPrefix",
    "Accuracy labels here:",
    "Niveaux de précision affichés :",
  );
  add(
    "spec.accuracyHint",
    "Use direction, timing, and gaps more confidently than exact point values.",
    "Accordez plus de confiance à la direction, au calendrier et aux écarts qu’aux valeurs ponctuelles exactes.",
  );
  add(
    "spec.readShape",
    "Read the shape first: trend, turning points, and whether the lines confirm or contradict each other.",
    "Lisez d’abord la forme : tendance, points de retournement, et si les courbes se confirment ou se contredisent.",
  );
  add("spec.panel.look", "Look For", "À observer");
  add("spec.panel.read", "Read It As", "Interprétation");
  add("spec.panel.caution", "Do Not Overread", "Ne pas sur-interpréter");
  add(
    "spec.panel.lookText",
    "Shared breaks, widening gaps, or a line that changes direction while the other stays flat. Those patterns usually matter more than minor year-to-year wiggles.",
    "Ruptures communes, écarts qui se creusent, ou une courbe qui change de direction pendant que l’autre reste plate. Ces motifs comptent souvent plus que de petites oscillations d’une année sur l’autre.",
  );
  add(
    "spec.panel.readText",
    "When multiple series move together, a common driver is plausible. When they diverge, the useful question is what changed in productivity, policy, prices, demographics, or measurement.",
    "Quand plusieurs séries bougent ensemble, un facteur commun est plausible. Quand elles divergent, la question utile est ce qui a changé côté productivité, politique, prix, démographie ou mesure.",
  );
  add(
    "spec.guideIntro",
    "Use this box to interpret",
    "Utilisez ce cadre pour interpréter",
  );
  add(
    "spec.guideMid",
    ". Start with the long-run direction, then check whether the lines turn at the same time, and only then infer a story.",
    ". Commencez par la tendance de long terme, vérifiez si les courbes tournent en même temps, puis seulement dégagez une lecture.",
  );

  add(
    "provenance.html",
    '<strong>Data sources:</strong> On load, the page requests <a href="https://data.worldbank.org/" target="_blank" rel="noopener">World Bank World Development Indicators</a> (WDI) and merges: GDP (current US$), GDP per capita, GNI per capita (Atlas), current health expenditure per capita, secondary school enrollment (gross), goods &amp; services exports/imports, unemployment, employment-to-population (15+, ILO modelled), life expectancy, crude birth/death rates, fertility, infant mortality, CO₂ per capita, renewable share, forest area, adult literacy, internet users, mobile subscriptions per 100 people, R&amp;D % of GDP, and population (for immigration-per-capita denominators). Trade balance is computed as exports minus imports from those series. Remaining charts use deterministic modelled series. WDI gaps are forward/backward-filled within each series. Chart pills update after merge: <strong>High (WDI)</strong> when the live indicator loaded; <strong>Partial WDI</strong> if the request failed for that series. <strong>If you open this file as <code>file://</code>, the browser may block the API</strong>, but the dashboard still works using built-in deterministic data (no backend required). Illegal migration and composite “indices” here are not official cross-country statistics.',
    '<strong>Sources des données :</strong> au chargement, la page interroge les <a href="https://data.worldbank.org/" target="_blank" rel="noopener">Indicateurs du développement dans le monde</a> (WDI) de la Banque mondiale et fusionne notamment : PIB (US$ courants), PIB par habitant, RNB par habitant (méthode Atlas), dépenses de santé par habitant, scolarisation secondaire (brute), exportations/importations de biens et services, chômage, taux d’emploi (15+, modélisé OIT), espérance de vie, taux bruts de natalité/mortalité, fécondité, mortalité infantile, CO₂ par habitant, part des énergies renouvelables, surface forestière, alphabétisation des adultes, utilisateurs d’Internet, abonnements mobiles pour 100 habitants, R-D en % du PIB, et population (dénominateurs d’immigration par habitant). La balance commerciale est exportations moins importations. Les autres graphiques utilisent des séries modélisées déterministes. Les lacunes WDI sont comblées dans chaque série. Les pastilles se mettent à jour : <strong>Élevé (WDI)</strong> si l’indicateur a bien été chargé ; <strong>WDI partiel</strong> si la requête a échoué pour cette série. <strong>Si vous ouvrez ce fichier en <code>file://</code>, le navigateur peut bloquer l’API</strong>, mais le tableau de bord fonctionne quand même avec les données déterministes intégrées (aucun backend requis). Les migrations « illégales » et certains indices composites ne sont pas des statistiques officielles comparatives.',
  );

  var chartIds = [
    "gdpChart",
    "gdpPerCapitaChart",
    "capitalGainsChart",
    "valuationChart",
    "militaryBudgetChart",
    "militaryShareChart",
    "militaryPerCapitaChart",
    "productivityChart",
    "employmentChart",
    "unemploymentChart",
    "salaryChart",
    "foodCostChart",
    "rentChart",
    "housingChart",
    "electricityChart",
    "gasChart",
    "carChart",
    "phoneContractChart",
    "internetContractChart",
    "tvContractChart",
    "telecomBundleChart",
    "healthcareChart",
    "foodbankChart",
    "homeownershipChart",
    "ageChart",
    "educationChart",
    "literacyChart",
    "deiChart",
    "genderEqualityChart",
    "happinessChart",
    "politicalFreedomChart",
    "violenceChart",
    "birthRateChart",
    "deathRateChart",
    "lifeExpectancyChart",
    "fertilityRateChart",
    "abortionRateChart",
    "infantMortalityChart",
    "obesityChart",
    "smokingChart",
    "diabetesChart",
    "mentalHealthChart",
    "co2EmissionsChart",
    "renewableEnergyChart",
    "forestCoverageChart",
    "waterQualityChart",
    "internetUsersChart",
    "mobilePhonesChart",
    "broadbandSpeedChart",
    "rndInvestmentChart",
    "exportsChart",
    "importsChart",
    "tradeBalanceChart",
    "legalImmigrationChart",
    "illegalImmigrationChart",
    "legalImmigrationPerCapitaChart",
    "illegalImmigrationPerCapitaChart",
    "immigrationNativeRatioChart",
    "expatArrivalsChart",
    "expatDeparturesChart",
    "qolIndexChart",
    "qolHappinessChart",
    "hdiChart",
    "giniChart",
    "corruptionChart",
    "qolPoliticalChart",
    "freeSpeechChart",
    "legacyMediaRatingChart",
    "newMediaRatingChart",
    "legacyMediaShareChart",
    "newMediaShareChart",
    "surgeryWaitChart",
    "physiciansChart",
    "hospitalBedsChart",
    "qolHealthcareChart",
    "christianChart",
    "muslimChart",
    "secularChart",
    "hinduBuddhistChart",
  ];

  var TITLES_EN = {
    gdpChart: "GDP (Trillion USD)",
    gdpPerCapitaChart: "GDP Per Capita (USD)",
    capitalGainsChart: "Average Capital Gains (USD)",
    valuationChart: "Company Valuation Index",
    militaryBudgetChart: "Military Expenditure (USD bn)",
    militaryShareChart: "Military Expenditure (% of GDP)",
    militaryPerCapitaChart: "Military Expenditure Per Capita (USD)",
    productivityChart: "Labour Productivity Index (1990 = 100)",
    employmentChart: "Employment to population (15+, %)",
    unemploymentChart: "Unemployment Rate (%)",
    salaryChart: "GNI per capita, Atlas (USD, WDI)",
    foodCostChart: "Food Costs (USD/month)",
    rentChart: "Rent (USD/month)",
    housingChart: "Housing Costs (USD)",
    electricityChart: "Electricity Costs (USD/month)",
    gasChart: "Gas Price (USD/litre)",
    carChart: "Car Costs (USD)",
    phoneContractChart: "Monthly Phone Contract (USD/month)",
    internetContractChart: "Monthly Broadband / Internet Contract (USD/month)",
    tvContractChart: "Monthly TV / Streaming Subscription (USD/month)",
    telecomBundleChart:
      "Total Telecom Bundle (Phone + Internet + TV) (USD/month)",
    healthcareChart: "Health expenditure per capita (WDI) (USD/year)",
    foodbankChart: "Food Bank Costs (Million USD)",
    homeownershipChart: "Homeownership Rate (%)",
    ageChart: "Average Age (Years)",
    educationChart: "Secondary school enrollment, gross (WDI) (%)",
    literacyChart: "Literacy Rate (%)",
    deiChart: "DEI Index (Score 0-100)",
    genderEqualityChart: "Gender Equality Index (Index 0-1)",
    happinessChart: "Happiness Index (Index 0-10)",
    politicalFreedomChart: "Political Freedom Index (Index 0-10)",
    violenceChart: "Violence Index (Index)",
    birthRateChart: "Birth Rate (Per 1000 people)",
    deathRateChart: "Death Rate (Per 1000 people)",
    lifeExpectancyChart: "Life Expectancy (Years)",
    fertilityRateChart: "Fertility Rate (Children per woman)",
    abortionRateChart: "Abortion Rate (Per 1,000 women ages 15-44)",
    infantMortalityChart: "Infant Mortality Rate (Per 1000 live births)",
    obesityChart: "Obesity Rate (%)",
    smokingChart: "Smoking Prevalence (%)",
    diabetesChart: "Diabetes Rate (%)",
    mentalHealthChart: "Mental Health Index (Index)",
    co2EmissionsChart: "CO2 Emissions (metric tons per capita)",
    renewableEnergyChart: "Renewable Energy (% of total energy)",
    forestCoverageChart: "Forest Coverage (% of land area)",
    waterQualityChart: "Water Quality Index (Index)",
    internetUsersChart: "Internet Users (% of population)",
    mobilePhonesChart: "Mobile cellular subscriptions (per 100 people)",
    broadbandSpeedChart: "Broadband Speed (Mbps)",
    rndInvestmentChart: "R&D Investment (% of GDP)",
    exportsChart: "Exports (Billion USD)",
    importsChart: "Imports (Billion USD)",
    tradeBalanceChart: "Trade Balance (Billion USD)",
    legalImmigrationChart: "Legal Immigration (People)",
    illegalImmigrationChart: "Illegal Immigration (People)",
    legalImmigrationPerCapitaChart:
      "Legal Immigration Per Capita (Per 100k people)",
    illegalImmigrationPerCapitaChart:
      "Illegal Immigration Per Capita (Per 100k people)",
    immigrationNativeRatioChart:
      "Immigration Inflow Ratio (% of resident population)",
    expatArrivalsChart: "Expat Arrivals (People)",
    expatDeparturesChart: "Expat Departures (People)",
    qolIndexChart: "Quality of Life Index (Score 0–100)",
    qolHappinessChart:
      "Happiness Index (World Happiness Report basis) (Score 0–10)",
    hdiChart: "Human Development Index (HDI 0–1)",
    giniChart:
      "Gini Coefficient – Income Inequality (Gini 0 = equal, 100 = unequal)",
    corruptionChart:
      "Corruption Perception Index (Score 0–100, higher = cleaner)",
    qolPoliticalChart: "Political Freedom Index (Score 0–10)",
    freeSpeechChart: "Free Speech Rating (Score 0–10)",
    legacyMediaRatingChart: "Legacy Media Trust Rating (Score 0–10)",
    newMediaRatingChart: "New Media Trust Rating (Score 0–10)",
    legacyMediaShareChart: "Legacy Media Market Share (Share %)",
    newMediaShareChart: "New Media Market Share (Share %)",
    surgeryWaitChart: "Median Elective Surgery Wait Time (Weeks)",
    physiciansChart: "Physicians per 1,000 People (Physicians / 1k)",
    hospitalBedsChart: "Hospital Beds per 1,000 People (Beds / 1k)",
    qolHealthcareChart: "Healthcare Expenditure per Capita (USD / year)",
    christianChart: "Christian Population Share (%)",
    muslimChart: "Muslim Population Share (%)",
    secularChart: "Secular / Unaffiliated Population Share (%)",
    hinduBuddhistChart: "Hindu & Buddhist Population Share (%)",
  };

  var TITLES_FR = {
    gdpChart: "PIB (milliards USD)",
    gdpPerCapitaChart: "PIB par habitant (USD)",
    capitalGainsChart: "Plus-values moyennes (USD)",
    valuationChart: "Indice de valorisation des entreprises",
    militaryBudgetChart: "Dépenses militaires (milliards USD)",
    militaryShareChart: "Dépenses militaires (% du PIB)",
    militaryPerCapitaChart: "Dépenses militaires par habitant (USD)",
    productivityChart: "Indice de productivité du travail (1990 = 100)",
    employmentChart: "Taux d’emploi (15+, %)",
    unemploymentChart: "Taux de chômage (%)",
    salaryChart: "RNB par habitant, Atlas (USD, BM)",
    foodCostChart: "Alimentation (USD/mois)",
    rentChart: "Loyer (USD/mois)",
    housingChart: "Logement (USD)",
    electricityChart: "Électricité (USD/mois)",
    gasChart: "Prix du carburant (USD/litre)",
    carChart: "Coût automobile (USD)",
    phoneContractChart: "Forfait téléphonique mensuel (USD/mois)",
    internetContractChart: "Internet / haut débit mensuel (USD/mois)",
    tvContractChart: "TV / streaming mensuel (USD/mois)",
    telecomBundleChart:
      "Forfait télécom total (tél. + Internet + TV) (USD/mois)",
    healthcareChart: "Dépenses de santé par habitant (BM) (USD/an)",
    foodbankChart: "Coûts banques alimentaires (millions USD)",
    homeownershipChart: "Taux d’accession à la propriété (%)",
    ageChart: "Âge moyen (ans)",
    educationChart: "Scolarisation secondaire brute (BM) (%)",
    literacyChart: "Taux d’alphabétisation (%)",
    deiChart: "Indice EDI (score 0-100)",
    genderEqualityChart: "Indice d’égalité femmes-hommes (0-1)",
    happinessChart: "Indice de bonheur (0-10)",
    politicalFreedomChart: "Indice de liberté politique (0-10)",
    violenceChart: "Indice de violence",
    birthRateChart: "Taux de natalité (pour 1 000 hab.)",
    deathRateChart: "Taux de mortalité (pour 1 000 hab.)",
    lifeExpectancyChart: "Espérance de vie (ans)",
    fertilityRateChart: "Indice de fécondité (enfants/femme)",
    abortionRateChart: "Taux d’IVG (pour 1 000 femmes 15-44 ans)",
    infantMortalityChart: "Mortalité infantile (pour 1 000 naissances)",
    obesityChart: "Taux d’obésité (%)",
    smokingChart: "Prévalence du tabagisme (%)",
    diabetesChart: "Taux de diabète (%)",
    mentalHealthChart: "Indice de santé mentale",
    co2EmissionsChart: "Émissions de CO₂ (tonnes métriques/hab.)",
    renewableEnergyChart: "Énergies renouvelables (% de l’énergie)",
    forestCoverageChart: "Surface forestière (% du territoire)",
    waterQualityChart: "Indice de qualité de l’eau",
    internetUsersChart: "Utilisateurs d’Internet (% de la population)",
    mobilePhonesChart: "Abonnements mobiles (pour 100 hab.)",
    broadbandSpeedChart: "Débit haut débit (Mbit/s)",
    rndInvestmentChart: "R-D (% du PIB)",
    exportsChart: "Exportations (milliards USD)",
    importsChart: "Importations (milliards USD)",
    tradeBalanceChart: "Balance commerciale (milliards USD)",
    legalImmigrationChart: "Immigration légale (personnes)",
    illegalImmigrationChart: "Immigration irrégulière (personnes)",
    legalImmigrationPerCapitaChart: "pour 100k hab.",
    illegalImmigrationPerCapitaChart: "pour 100k hab.",
    immigrationNativeRatioChart:
      "Ratio des flux migratoires (% population résidente)",
    expatArrivalsChart: "Personnes",
    expatDeparturesChart: "Personnes",
    qolIndexChart: "Score (0–100)",
    qolHappinessChart: "Score (0–10)",
    hdiChart: "IDH (0–1)",
    giniChart: "Gini (0 = égal, 100 = inégal)",
    corruptionChart: "Score (0–100, plus haut = plus propre)",
    qolPoliticalChart: "Score (0–10)",
    freeSpeechChart: "Score (0–10)",
    legacyMediaRatingChart: "Score (0–10)",
    newMediaRatingChart: "Score (0–10)",
    legacyMediaShareChart: "Part (%)",
    newMediaShareChart: "Part (%)",
    surgeryWaitChart: "Semaines",
    physiciansChart: "Médecins / 1k",
    hospitalBedsChart: "Lits / 1k",
    qolHealthcareChart: "USD / an",
    christianChart: "% de la population",
    muslimChart: "% de la population",
    secularChart: "% de la population",
    hinduBuddhistChart: "% de la population",
  };

  var Y_EN = {
    gdpChart: "Trillion USD",
    gdpPerCapitaChart: "USD",
    capitalGainsChart: "USD",
    valuationChart: "Index",
    militaryBudgetChart: "USD bn",
    militaryShareChart: "% of GDP",
    militaryPerCapitaChart: "USD/person",
    productivityChart: "Index (1990 = 100)",
    employmentChart: "%",
    unemploymentChart: "%",
    salaryChart: "USD",
    foodCostChart: "USD/month",
    rentChart: "USD/month",
    housingChart: "USD",
    electricityChart: "USD/month",
    gasChart: "USD/litre",
    carChart: "USD",
    phoneContractChart: "USD/month",
    internetContractChart: "USD/month",
    tvContractChart: "USD/month",
    telecomBundleChart: "USD/month",
    healthcareChart: "USD/year",
    foodbankChart: "Million USD",
    homeownershipChart: "%",
    ageChart: "Years",
    educationChart: "%",
    literacyChart: "%",
    deiChart: "Score (0-100)",
    genderEqualityChart: "Index (0-1)",
    happinessChart: "Index (0-10)",
    politicalFreedomChart: "Index (0-10)",
    violenceChart: "Index",
    birthRateChart: "Per 1000 people",
    deathRateChart: "Per 1000 people",
    lifeExpectancyChart: "Years",
    fertilityRateChart: "Children per woman",
    abortionRateChart: "Per 1,000 women ages 15-44",
    infantMortalityChart: "Per 1000 live births",
    obesityChart: "%",
    smokingChart: "%",
    diabetesChart: "%",
    mentalHealthChart: "Index",
    co2EmissionsChart: "metric tons per capita",
    renewableEnergyChart: "% of total energy",
    forestCoverageChart: "% of land area",
    waterQualityChart: "Index",
    internetUsersChart: "% of population",
    mobilePhonesChart: "per 100 people",
    broadbandSpeedChart: "Mbps",
    rndInvestmentChart: "% of GDP",
    exportsChart: "Billion USD",
    importsChart: "Billion USD",
    tradeBalanceChart: "Billion USD",
    legalImmigrationChart: "People",
    illegalImmigrationChart: "People",
    legalImmigrationPerCapitaChart: "Per 100k people",
    illegalImmigrationPerCapitaChart: "Per 100k people",
    immigrationNativeRatioChart: "% of resident population",
    expatArrivalsChart: "People",
    expatDeparturesChart: "People",
    qolIndexChart: "Score (0–100)",
    qolHappinessChart: "Score (0–10)",
    hdiChart: "HDI (0–1)",
    giniChart: "Gini (0 = equal, 100 = unequal)",
    corruptionChart: "Score (0–100, higher = cleaner)",
    qolPoliticalChart: "Score (0–10)",
    freeSpeechChart: "Score (0–10)",
    legacyMediaRatingChart: "Score (0–10)",
    newMediaRatingChart: "Score (0–10)",
    legacyMediaShareChart: "Share (%)",
    newMediaShareChart: "Share (%)",
    surgeryWaitChart: "Weeks",
    physiciansChart: "Physicians / 1k",
    hospitalBedsChart: "Beds / 1k",
    qolHealthcareChart: "USD / an",
    christianChart: "% of population",
    muslimChart: "% of population",
    secularChart: "% of population",
    hinduBuddhistChart: "% of population",
  };

  var Y_FR = {
    gdpChart: "Milliards USD",
    gdpPerCapitaChart: "USD",
    capitalGainsChart: "USD",
    valuationChart: "Indice",
    militaryBudgetChart: "milliards USD",
    militaryShareChart: "% du PIB",
    militaryPerCapitaChart: "USD/hab.",
    productivityChart: "Indice (1990 = 100)",
    employmentChart: "%",
    unemploymentChart: "%",
    salaryChart: "USD",
    foodCostChart: "USD/mois",
    rentChart: "USD/mois",
    housingChart: "USD",
    electricityChart: "USD/mois",
    gasChart: "USD/litre",
    carChart: "USD",
    phoneContractChart: "USD/mois",
    internetContractChart: "USD/mois",
    tvContractChart: "USD/mois",
    telecomBundleChart: "USD/mois",
    healthcareChart: "USD/an",
    foodbankChart: "millions USD",
    homeownershipChart: "%",
    ageChart: "Ans",
    educationChart: "%",
    literacyChart: "%",
    deiChart: "Score (0-100)",
    genderEqualityChart: "Indice (0-1)",
    happinessChart: "Indice (0-10)",
    politicalFreedomChart: "Indice (0-10)",
    violenceChart: "Indice",
    birthRateChart: "Pour 1 000 hab.",
    deathRateChart: "Pour 1 000 hab.",
    lifeExpectancyChart: "Ans",
    fertilityRateChart: "Enfants/femme",
    abortionRateChart: "Pour 1 000 femmes 15-44 ans",
    infantMortalityChart: "Pour 1 000 naissances",
    obesityChart: "%",
    smokingChart: "%",
    diabetesChart: "%",
    mentalHealthChart: "Indice",
    co2EmissionsChart: "tonnes métriques/hab.",
    renewableEnergyChart: "% de l’énergie",
    forestCoverageChart: "% du territoire",
    waterQualityChart: "Indice",
    internetUsersChart: "% de la population",
    mobilePhonesChart: "pour 100 hab.",
    broadbandSpeedChart: "Mbit/s",
    rndInvestmentChart: "% du PIB",
    exportsChart: "milliards USD",
    importsChart: "milliards USD",
    tradeBalanceChart: "milliards USD",
    legalImmigrationChart: "Personnes",
    illegalImmigrationChart: "Personnes",
    legalImmigrationPerCapitaChart: "pour 100k hab.",
    illegalImmigrationPerCapitaChart: "pour 100k hab.",
    immigrationNativeRatioChart: "% de la population résidente",
    expatArrivalsChart: "Personnes",
    expatDeparturesChart: "Personnes",
    qolIndexChart: "Score (0–100)",
    qolHappinessChart: "Score (0–10)",
    hdiChart: "IDH (0–1)",
    giniChart: "Gini (0 = égal, 100 = inégal)",
    corruptionChart: "Score (0–100, plus haut = plus propre)",
    qolPoliticalChart: "Score (0–10)",
    freeSpeechChart: "Score (0–10)",
    legacyMediaRatingChart: "Score (0–10)",
    newMediaRatingChart: "Score (0–10)",
    legacyMediaShareChart: "Part (%)",
    newMediaShareChart: "Part (%)",
    surgeryWaitChart: "Semaines",
    physiciansChart: "Médecins / 1k",
    hospitalBedsChart: "Lits / 1k",
    qolHealthcareChart: "USD / an",
    christianChart: "% de la population",
    muslimChart: "% de la population",
    secularChart: "% de la population",
    hinduBuddhistChart: "% de la population",
  };

  chartIds.forEach(function (id) {
    add("ct." + id, TITLES_EN[id], TITLES_FR[id]);
    add("cy." + id, Y_EN[id], Y_FR[id]);
  });

  function getLocale() {
    return localStorage.getItem("locale") || "en";
  }

  function setLocale(lang) {
    if (lang !== "en" && lang !== "fr") lang = "en";
    localStorage.setItem("locale", lang);
    document.documentElement.lang = lang === "fr" ? "fr" : "en";
    if (typeof window.applyDashboardLocale === "function") {
      window.applyDashboardLocale();
    }
    updateLangToggleUi();
  }

  function toggleLocale() {
    setLocale(getLocale() === "fr" ? "en" : "fr");
  }

  function t(key) {
    var loc = getLocale();
    if (loc === "fr" && MSGS.fr[key]) return MSGS.fr[key];
    return MSGS.en[key] || key;
  }

  function updateLangToggleUi() {
    var el = document.getElementById("lang-toggle-label");
    if (!el) return;
    el.textContent =
      getLocale() === "fr" ? t("lang.labelFr") : t("lang.labelEn");
    var btn = document.getElementById("lang-toggle");
    if (btn) btn.setAttribute("title", t("lang.toggleTitle"));
  }

  function applyDataI18nAttributes() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key) return;
      var val = t(key);
      if (el.getAttribute("data-i18n-html") === "true") {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });
  }

  function applyChartTitlesFromLocale() {
    chartIds.forEach(function (id) {
      var canvas = document.getElementById(id);
      if (!canvas) return;
      var container = canvas.closest(".chart-container");
      if (!container) return;
      var titleRow = container.querySelector(".chart-title");
      if (!titleRow) return;
      var spans = titleRow.querySelectorAll("span");
      if (!spans.length) return;
      var first = spans[0];
      if (first.classList.contains("accuracy-badge") && spans[1])
        first = spans[1];
      if (!first.classList.contains("accuracy-badge")) {
        first.textContent = t("ct." + id);
      }
    });
  }

  function translateStaticAccuracyBadge(el) {
    var map = {
      "High Accuracy": "badge.highAccuracy",
      Estimated: "badge.estimated",
      "Low Accuracy": "badge.lowAccuracy",
      Modelled: "badge.modelled",
      "High (WDI)": "badge.highWdi",
      "Partial WDI": "badge.partialWdi",
      "Mixed (WDI pop)": "badge.mixedWdiPop",
    };
    var txt = (el.textContent || "").trim();
    if (!el.dataset.i18nBadgeEn) el.dataset.i18nBadgeEn = txt;
    if (getLocale() === "en") {
      el.textContent = el.dataset.i18nBadgeEn;
      return;
    }
    var key = map[el.dataset.i18nBadgeEn];
    if (key) el.textContent = t(key);
  }

  function applyStaticBadges() {
    document
      .querySelectorAll(".accuracy-badge")
      .forEach(translateStaticAccuracyBadge);
  }

  function refreshWdiStatusMessage() {
    var el = document.getElementById("wbLiveStatus");
    if (!el) return;
    var ok =
      typeof window.__wdiMergeOk === "boolean"
        ? window.__wdiMergeOk
        : el.style.color && el.style.color.indexOf("2e7d32") !== -1;
    el.textContent = ok ? t("wdi.ok") : t("wdi.fail");
  }

  global.DashboardI18n = {
    getLocale: getLocale,
    setLocale: setLocale,
    toggleLocale: toggleLocale,
    t: t,
    applyDataI18nAttributes: applyDataI18nAttributes,
    applyChartTitlesFromLocale: applyChartTitlesFromLocale,
    applyStaticBadges: applyStaticBadges,
    refreshWdiStatusMessage: refreshWdiStatusMessage,
    updateLangToggleUi: updateLangToggleUi,
    chartIds: chartIds,
    MSGS: MSGS,
  };

  global.t = t;
  global.getLocale = getLocale;
})(typeof window !== "undefined" ? window : this);
