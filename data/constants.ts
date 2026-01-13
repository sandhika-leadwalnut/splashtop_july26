export const REPORT_CONFIG = {
  reportDate: "Jan 10, 2025",
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
  "Dec'24",
  "Jan'25",
  "Feb'25",
  "Mar'25",
  "Apr'25",
  "May'25",
  "June'25",
  "July'25",
  "Aug'25",
  "Sep'25",
  "Oct'25",
  "Nov'25",
  "Dec'25",
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
  baseline: "Jan 2025 (Baseline)", // Display label for baseline month
  current: "Dec 2025", // Display label for current month
};

export const DASHBOARD_STATS = {
  urlsTracked: 15,
  totalBacklinks: 135,
  keywordsTracked: 23,
  dataSource: "Semrush, GSC, Moz",
};

export const KEY_FINDINGS = [
  {
    title: "High-Quality Backlink Profile",
    description:
      "The link acquisition strategy is strongly quality-driven. Over 97% of newly acquired referring domains have a Domain Authority (DA) of 41+ (131 out of 135), including 32 links from elite-tier domains (DA 71–100). This highlights a consistent focus on authoritative and trustworthy sources.",
    icon: "fas fa-shield-alt",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Remote Access Product Page Sets the Benchmark",
    description:
      "The /products/remote-access page delivered outstanding performance, recording a +10 increase in Page Authority along with significant keyword ranking improvements. This page now serves as a benchmark for successful link acquisition and on-page optimization.",
    icon: "fas fa-trophy",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "TOFU Blog Page Requires Immediate Attention",
    description:
      "Key top-of-funnel content is showing warning signs. The /blog/what-is-remote-support page experienced a notable 7-point drop in Page Authority, indicating the need for renewed backlink support and content reinforcement.",
    icon: "fas fa-exclamation-circle",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    title: "Authority-Ranking Mismatch on Commercial Pages",
    description:
      "Several high-intent commercial pages show rising Page Authority but declining keyword rankings. Pages such as /compare/logmein-alternative (PA +4, rank -17) and /compare/gotomypc-alternative/pricing (PA +2, rank -7) indicate that continued and targeted backlink acquisition is required to translate authority gains into ranking improvements.",
    icon: "fas fa-chart-line",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
];


export const BUSINESS_IMPACT_CONFIG = {
  topKeywordsCount: 9,
  // chartTitle: "Critical Keywords",
  chartSubtitle: "Critical keywords Performance",
  insightText:
    "Backlinks played a key role in stabilizing rankings by killing volatility, resulting in consistent, upward movement for the critical keywords.",
  trendChartTitle: "Ranking Performance Trend",
  trendKeyTakeaway:
    "Remote Desktop Software: 10 backlinks added in June boosted its ranking to page 1. \n\nRemote Access: 30 backlinks were added in Jan, helping maintain a stable position on page 1.",
};

export const REFERRING_DOMAINS_CONFIG = {
  qualityStatement:
    "72% of referring domains have DA 41-70, indicating high-quality backlink profile",
};

export const IMPLEMENTATION_CONFIG = {
  sheetUrl:
    "https://docs.google.com/spreadsheets/d/1KWPr6SbGlpCdvmA8vrxzIPUJEHjwBUZFMql5ODZcj7U/edit?usp=sharing",
  sheetLinkText: "Detailed Monthly Backlink Sheet",
};

export const IMAGE_PATHS = {
  splashtopLogo: "/splashtop_image.png",
  leadwalnutLogo: "/LeadWalnut light logo with tagline 3.png",
};

export const UI_TEXT = {
  keywordPerformance: {
    title: "Keyword Ranking Performance",
    top3Title: "Keywords in Top 3 Positions",
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
    title: "Backlink Accquisation Details",
  },
  backlinkBestPractices: {
    title: "Backlink Best Practices",
  },
};
