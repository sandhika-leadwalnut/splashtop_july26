export const REPORT_CONFIG = {
  reportDate: "Dec 10, 2025",
  reportTitle: "Backlink Performance Summary Report",
  reportSubtitle: "Country: US | Source: GA, moz, GSC",
  dataSource: "GA, moz, GSC",
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
  baseline: "Jan 2025", // Display label for baseline month
  current: "Nov 2025", // Display label for current month
};

export const DASHBOARD_STATS = {
  urlsTracked: 8,
  totalBacklinks: 121,
  keywordsTracked: 16,
  dataSource: "GA, moz, GSC",
};

export const KEY_FINDINGS = [
  {
    title: "High-Quality Backlink Profile",
    description:
      "The backlink profile is of high quality, with over 96% of its referring domains having an authoritative score of 41 or higher.",
    icon: "fas fa-shield-alt",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Remote Access Product Page: Campaign Standout",
    description:
      'The Remote Access Product page is the campaign\'s standout performer. It achieved the highest authority growth (+10 PA) and a massive ranking surge, moving +93 positions for the high-intent keyword "Remote Access Solution."',
    icon: "fas fa-trophy",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: '"What is..." Blog Pages Show Strong Ranking Growth',
    description:
      '"What is..." blog pages are seeing significant ranking improvements despite flat or declining Page Authority. "What is Remote Desktop" (+31 positions) and "What is Secure Remote Access" (+34 positions) proved that content relevance is currently driving rankings more than raw link power for top-of-funnel queries.',
    icon: "fas fa-chart-line",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Secure Remote Desktop Page Shows Volatility",
    description:
      'The Secure Remote Desktop solution page is showing dangerous volatility. While it gained +12 spots for one variation, it crashed -81 positions for "Remote desktop secure." This page need to be prioritized for consistent link building.',
    icon: "fas fa-exclamation-triangle",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
];

export const BUSINESS_IMPACT_CONFIG = {
  topKeywordsCount: 6,
  chartTitle: "Top 6 critical keywords",
  chartSubtitle: "Six critical keywords moved to Page 1",
  insightText:
    "Backlinks played a key role in stabilizing rankings by killing volatility, resulting in consistent, upward movement for the critical keywords.",
  trendChartTitle: "Ranking Performance Trend",
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
