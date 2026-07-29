export const REPORT_CONFIG = {
  reportDate: "May 8 , 2026",
  reportTitle: "Backlink Performance Summary Report",
  reportSubtitle: "Country: US | Source: Ahrefs, GSC",
  dataSource: "Ahrefs, GSC",
  country: "US",
};

// ============================================================================
// MONTH CONFIGURATION - CENTRALIZED
// ============================================================================
// ⭐ UPDATE ALL MONTH-RELATED DATA HERE ⭐
//
// This is the single source of truth for all month-related data.
// Update these arrays when you need to change the time period.

// Main months array (used for performanceData monthlyData arrays)
// Array indices: 0=Dec'24, 1=Jan'25, 2=Feb'25, ..., 10=Oct'25
export const months: string[] = [
  "Dec'25",
  "Feb'26",
];

// Extended months array (used for trend charts with more historical data)
// Contains 16 months from Jul'24 to Oct'25
export const extendedMonths = [
  "Jul'24",
  "Aug'24",
  "Sep'24",
  "Oct'24",
  "Nov'24",
  "Dec'24",
  "Jan'25",
  "Feb'25",
  "Mar'25",
  "Apr'25",
  "May'25",
  "Jun'25",
  "Jul'25",
  "Aug'25",
  "Sep'25",
  "Oct'25",
  "Nov'25",
  "Dec'25",
  "Feb'26",
  "Mar'26",
  "Apr'26",

 
];

// Month indices for baseline and current comparison
// These reference the 'months' array above
// baseline: index 1 = "Jan'25"
// current: index 11 = "Nov'25"
export const MONTH_INDICES = {
  baseline: 1, // Index in 'months' array for baseline period
  current: 11, // Index in 'months' array for current period
};

// Month labels for display (used in charts and UI)
// These should match the months at MONTH_INDICES.baseline and MONTH_INDICES.current
export const MONTH_LABELS = {
  baseline: "Dec 2025 (Baseline)", // Display label for baseline month
  current: "April 2026", // Display label for current month
};

export const DASHBOARD_STATS = {
  urlsTracked: 15,
  totalBacklinks: 123,
  keywordsTracked: 35,
  PlanTotalBacklinks : "175",
};

export const KEY_FINDINGS = [
  {
    title: "High-Authority Backlink Acquisition",
    description:
      "The link acquisition strategy continues to be quality-focused. Of the 123 referring domains, 109 (89%) have a Domain Authority (DA) of 41+, including 15 high-authority domains (DA 71–100). This reflects a consistent focus on securing placements from authoritative and credible sources.",
    icon: "fas fa-shield-alt",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Shift Toward High-Intent Keyword Performance",
    description:
      "Commercial keywords are now leading performance, with “remote access software” and “remote support software” reaching #1, and “remote access” improving to #5, showing stronger alignment with conversion-driven searches.",
    icon: "fas fa-trophy",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Growth in First-Page Keyword Visibility",
    description:
      "The number of keywords ranking on page 1 increased from 4 in Dec’25 to 7 in Apr’26, indicating a steady expansion in first-page visibility across priority terms and improved overall keyword positioning in high-visibility SERP positions.",
    icon: "fas fa-exclamation-circle",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    title: "Consistent Page Authority Growth Across Core Pages",
    description:
      "Authority has improved across key pages:“What is Remote Desktop” page (36 → 43),“What is Remote Support” page (33 → 40),Remote Access product page (43 → 47),Patch Management solution page (33 → 38).This reflects sustained authority building across both informational and solution-led pages.",
    icon: "fas fa-chart-line",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
 
];


export const BUSINESS_IMPACT_CONFIG = {
  topKeywordsCount: 18,
  // chartTitle: "Critical Keywords",
  chartSubtitle: "Critical keywords Performance",
  insightText: [
  "Remote access keywords are showing good improvement, especially the commercial keywords 'remote access software (1)' and ‘remote support software (1)’ now ranking in the first position.",
  "Most of the competitor keywords are showing great improvement, with three keywords now ranking in the top 10 positions.",
  "All three keywords are showing significant improvement, with one keyword now ranking in the top 10 positions: autonomous endpoint management (7)."
],
  trendChartTitle: "Ranking Performance Trend",
  trendKeyTakeaway:
    "Remote Desktop Software: 10 backlinks added in June boosted its ranking to page 1. \n\nRemote Access: 30 backlinks were added in Jan, helping maintain a stable position on page 1.",
};

export const REFERRING_DOMAINS_CONFIG = {
  qualityStatement:
    "Approximately 89% of referring domains fall within the DA 41–100 range, reflecting a strong and credible backlink profile supported by high-quality, authoritative referring websites.",
};

export const IMPLEMENTATION_CONFIG = {
  sheetUrl:
    "https://docs.google.com/spreadsheets/d/1n4DS4gZ-HHtsGh5CXGdxUHXd8dlTbX01LcWD3OHnGxM/edit?gid=0#gid=0",
  sheetLinkText: "Detailed Monthly Backlink Sheet",
};

export const IMAGE_PATHS = {
  splashtopLogo: "/splashtop_image.png",
  leadwalnutLogo: "/LeadWalnut light logo with tagline 3.png",
};

export const UI_TEXT = {
  keywordPerformance: {
    title: "Keyword Ranking Performance",
    top3Title: "Keywords in Top 5 Positions",
    firstPageTitle: "Keywords on Page 1",
    noKeywords: "No keywords in this category.",
  },
  performanceSummary: {
    title: "Performance Summary - URL wise Breakdown",
  },
  backlinkGrowth: {
    title: "Backlink Acquisition - Monthly Growth Trend",
  },
  referringDomains: {
    title: "Backlink Quality Assurance",
    subtitle: "Referring Domains DA",
  },
  businessImpact: {
    title: "Business Impact of Backlinks",
  },
  implementationDetails: {
    title: "Backlink Acquisition Details",
  },
  backlinkBestPractices: {
    title: "Backlink Best Practices",
  },
};
