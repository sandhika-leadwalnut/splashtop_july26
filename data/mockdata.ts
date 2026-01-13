import { PagePerformanceData, PerformanceSummary } from "./types";

// ============================================================================
// PERFORMANCE SUMMARY
// ============================================================================
// High-level summary of page performance (used in PerformanceSummaryTable)
export const performanceSummary: PerformanceSummary[] = [
  {
    url: "https://www.splashtop.com/blog/what-is-remote-access",
    paChange: 2,
    bestKeywordMove: { keyword: "Remote Access", change: "+9" },
    worstKeywordMove: null,
    overallStatus: "Positive",
  },
  {
    url: "https://www.splashtop.com/blog/what-is-remote-support",
    paChange: -7,
    bestKeywordMove: { keyword: "Remote support", change: "+93" },
    worstKeywordMove: null,
    overallStatus: "Positive",
  },
  {
    url: "https://www.splashtop.com/products/remote-access",
    paChange: 10,
    bestKeywordMove: { keyword: "Remote Access Solution", change: "+97" },
    worstKeywordMove: null,
    overallStatus: "Positive",
  },
  {
    url: "https://www.splashtop.com/products/remote-support",
    paChange: 1,
    bestKeywordMove: { keyword: "Remote Support Solution", change: "+8" },
    worstKeywordMove: null,
    overallStatus: "Positive",
  },
  {
    url: "https://www.splashtop.com/solutions/remote-desktop",
    paChange: 1,
    bestKeywordMove:  { keyword: "Remote Desktop", change: "+29" },
    worstKeywordMove: { keyword: "Remote Desktop solution", change: "-21" },
    overallStatus: "Need Improvement",
  },
  {
    url: "https://www.splashtop.com/blog/what-is-secure-remote-access",
    paChange: -1,
    bestKeywordMove: { keyword: "what is secure remote access", change: "+39" },
    worstKeywordMove: null,
    overallStatus: "Positive",
  },
  {
    url: "https://www.splashtop.com/solutions/remote-desktop/secure",
    paChange: 0,
    bestKeywordMove:null,
    worstKeywordMove: { keyword: "Remote desktop secure", change: "-80" },
    overallStatus: "Negative",
  },
  {
    url: "https://www.splashtop.com/blog/what-is-remote-desktop",
    paChange: 0,
    bestKeywordMove: { keyword: "What is Remote Desktop", change: "+46" },
    worstKeywordMove: null,
    overallStatus: "Positive",
  },
    {
    url: "https://www.splashtop.com/blog/anydesk-pricing-comparison",
    paChange: 0,
    bestKeywordMove: { keyword: "Anydesk pricing", change: "+1" },
    worstKeywordMove: null,
    overallStatus: "Positive",
  },
   {
    url: "https://www.splashtop.com/blog/teamviewer-pricing-comparison",
    paChange: 0,
    bestKeywordMove: null,
    worstKeywordMove: { keyword: "teamviewer pricing", change: "-13" },
    overallStatus: "Negative",
  },
   {
    url: "https://www.splashtop.com/compare/anydesk-alternative",
    paChange: 0,
    bestKeywordMove: { keyword: "anydesk alternative", change: "+8" },
    worstKeywordMove: null,
    overallStatus: "Positive",
  },
    {
    url: "https://www.splashtop.com/compare/gotomypc-alternative",
    paChange: 1,
    bestKeywordMove: null,
    worstKeywordMove: { keyword: "gotomypc alternative", change: "-3" },
    overallStatus: "Negative",
  },
  {
    url: "https://www.splashtop.com/compare/gotomypc-alternative/pricing",
    paChange: 2,
    bestKeywordMove: null,
    worstKeywordMove: { keyword: "gotomypc pricing", change: "-7" },
    overallStatus: "Negative",
  },
    {
    url: "https://www.splashtop.com/compare/logmein-alternative",
    paChange: 4,
    bestKeywordMove: null,
    worstKeywordMove: { keyword: "logmein alternative", change: "-17" },
    overallStatus: "Negative",
  },
   {
    url: "https://www.splashtop.com/compare/teamviewer-alternative",
    paChange: 2,
    bestKeywordMove:  { keyword: "teamviewer alternative", change: "+6" },
    worstKeywordMove:null,
    overallStatus: "Positive",
  },

];

// ============================================================================
// BACKLINK DATA
// ============================================================================
// Referring domains distribution by DA (Domain Authority) score
export const referringDomainsData = [
  { name: "DA 71-100", value: 32, color: "#14b8a6" },
  { name: "DA 41-70", value: 99, color: "#3b82f6" },
  { name: "DA 30-40", value: 4, color: "#22c55e" },
];

// Monthly backlink growth trend (used in BacklinkGrowthChart)
export const monthlyBacklinkGrowth = [
  { month: "Jan'25", backlinks: 17 },
  { month: "Feb'25", backlinks: 21 },
  { month: "Mar'25", backlinks: 26 },
  { month: "Apr'25", backlinks: 40 },
  { month: "May'25", backlinks: 81 },
  { month: "June'25", backlinks: 90 },
  { month: "July'25", backlinks: 95 },
  { month: "Aug'25", backlinks: 114 },
  { month: "Sep'25", backlinks: 118 },
  { month: "Oct'25", backlinks: 119 },
  { month: "Nov'25", backlinks: 121 },
  {month: "Dec'25", backlinks: 135},
];

// ============================================================================
// KEYWORD RANKING SNAPSHOTS
// ============================================================================
// Snapshot data for keyword rankings at specific time points (Jan'25 and Nov'25)
// Used in KeywordPerformance component for Top 3 and First Page statistics
export const keywordRankingPerformance = {
  topThree: {
    jan25: 0,
    oct25: 1,
    data: [
      {
        url: "https://www.splashtop.com/blog/what-is-remote-support",
        keyword: "What is Remote Support",
        jan25Rank: 4,
        oct25Rank: 3,
      },
      
    ],
  },
  firstPage: {
    jan25: 2,
    oct25: 12,
    jan25Data: [
      {
        url: "https://www.splashtop.com/blog/what-is-remote-access",
        keyword: "Remote Access",
        rank: 16,
      },
      {
        url: "https://www.splashtop.com/blog/what-is-remote-access",
        keyword: "What is remote access",
        rank: 10,
      },
      {
        url: "https://www.splashtop.com/blog/what-is-remote-support",
        keyword: "Remote support",
        rank: 101,
      },
      {
        url: "https://www.splashtop.com/blog/what-is-remote-support",
        keyword: "What is Remote Support",
        rank: 101,
      },
      {
        url: "https://www.splashtop.com/products/remote-access",
        keyword: "Remote Access Solution",
        rank: 101,
      },
    
      {
        url: "https://www.splashtop.com/products/remote-support",
        keyword: "Remote Support Solution",
        rank: 12,
      },
      {
        url: "https://www.splashtop.com/blog/what-is-secure-remote-access",
        keyword: "what is secure remote access",
        rank: 43,
      },
      {
        url: "https://www.splashtop.com/blog/what-is-remote-desktop",
        keyword: "Remote Desktop",
        rank: 50,
      },
      {
        url: "https://www.splashtop.com/blog/what-is-remote-desktop",
        keyword: "What is remote desktop",
        rank: 39,
      },
       {
        url: "https://www.splashtop.com/blog/anydesk-pricing-comparison",
        keyword: "anydesk pricing",
        rank: 9,
      },
      {
        url: "https://www.splashtop.com/compare/gotomypc-alternative",
        keyword: "gotomypc alternative",
        rank: 5,
      },
      {
        url: "https://www.splashtop.com/compare/teamviewer-alternative",
        keyword: "teamviewer alternative",
        rank: 13,
      },
    ],
    oct25Data: [
      {
        url: "https://www.splashtop.com/blog/what-is-remote-access",
        keyword: "Remote Access",
        rank: 7,
      },
      {
        url: "https://www.splashtop.com/blog/what-is-remote-access",
        keyword: "What is remote access",
        rank: 8,
      },
      {
        url: "https://www.splashtop.com/blog/what-is-remote-support",
        keyword: "Remote support",
        rank: 8,
      },
      {
        url: "https://www.splashtop.com/blog/what-is-remote-support",
        keyword: "What is Remote Support",
        rank: 3,
      },
      {
        url: "https://www.splashtop.com/products/remote-access",
        keyword: "Remote Access Solution",
        rank: 4,
      },
  
      {
        url: "https://www.splashtop.com/products/remote-support",
        keyword: "Remote Support Solution",
        rank: 4,
      },
      {
        url: "https://www.splashtop.com/blog/what-is-secure-remote-access",
        keyword: "what is secure remote access",
        rank: 4,
      },
      {
        url: "https://www.splashtop.com/blog/what-is-remote-desktop",
        keyword: "Remote Desktop",
        rank: 4,
      },
      {
        url: "https://www.splashtop.com/blog/what-is-remote-desktop",
        keyword: "What is remote desktop",
        rank: 5,
      },
      {
        url: "https://www.splashtop.com/blog/anydesk-pricing-comparison",
        keyword: "anydesk pricing",
        rank: 8,
      },
      {
        url: "https://www.splashtop.com/compare/gotomypc-alternative",
        keyword: "gotomypc alternative",
        rank: 7,
      },
      {
        url: "https://www.splashtop.com/compare/teamviewer-alternative",
        keyword: "teamviewer alternative",
        rank: 7,
      },
    ],
  },
};

// ============================================================================
// RANKING PERFORMANCE TREND DATA
// ============================================================================
// ⭐ THIS IS WHERE YOU UPDATE KEYWORD RANKING TRENDS ⭐
//
// This contains monthly ranking data for all pages and their keywords.
// Each page has multiple metrics:
//   - "Total Backlinks": Backlink count over time
//   - Keywords (isKeyword: true): Ranking positions over time (THIS IS THE TREND DATA)
//   - "Page Authority": PA score over time
//
// To update keyword ranking trends:
//   1. Find the page by URL
//   2. Find the keyword metric (where isKeyword: true)
//   3. Update the monthlyData array (matches the 'months' array from constants.ts)
//      - Array indices correspond to months array: 0=Dec'24, 1=Jan'25, 2=Feb'25, ..., 10=Oct'25
//      - Use null for months with no data
//      - Numbers represent Google ranking position (1-100+)
//   4. If you need to change the time period, update 'months' in constants.ts first
//
export const performanceData: PagePerformanceData[] = [
  {
    id: 1,
    url: "https://www.splashtop.com/blog/what-is-remote-access",
    metrics: [
      {
        name: "Total Backlinks",
        monthlyData: [null, 8, 10, 12, 18, 32, 35, 38, 45, 47],
        lastWeekIncrease: "4.44%",
        overallGrowth: "487.50%",
      },
      {
        // ⭐ KEYWORD RANKING TREND: "Remote Access"
        name: "Remote Access",
        isKeyword: true,
        monthlyData: [null, 16, null, null, null, null, null, null, 7, 8],
        lastWeekIncrease: "14.29%",
        overallGrowth: "+8%",
      },
      {
        // ⭐ KEYWORD RANKING TREND: "What is remote access"
        name: "What is remote access",
        isKeyword: true,
        monthlyData: [null, 10, null, null, null, null, null, null, 4, 6],
        lastWeekIncrease: "50.00%",
        overallGrowth: "+4%",
      },
      {
        name: "Page Authority",
        monthlyData: [40, 41, 41, 42, 42, 43, 43, 45, 45],
        lastWeekIncrease: "0%",
        overallGrowth: "12.20%",
      },
    ],
  },
  {
    id: 2,
    url: "www.splashtop.com/blog/what-is-remote-support",
    metrics: [
      {
        name: "Total Backlinks",
        monthlyData: [null, 5, 6, 8, 12, 20, 22, 24, 28, 29],
        lastWeekIncrease: "3.57%",
        overallGrowth: "480.00%",
      },
      {
        name: "Remote support",
        isKeyword: true,
        monthlyData: [null, 22, null, null, null, null, null, null, 0, 9],
        lastWeekIncrease: "N/A",
        overallGrowth: "+13%",
      },
      {
        name: "What is Remote Support",
        isKeyword: true,
        monthlyData: [null, 4, null, null, null, null, null, null, 3, 3],
        lastWeekIncrease: "0%",
        overallGrowth: "+1%",
      },
      {
        name: "Page Authority",
        monthlyData: [40, 40, 40, 40, 40, 41, 42, 44, 44],
        lastWeekIncrease: "0%",
        overallGrowth: "10.00%",
      },
    ],
  },
  {
    id: 3,
    url: "https://www.splashtop.com/products/remote-access",
    metrics: [
      {
        name: "Total Backlinks",
        monthlyData: [null, 7, 8, 9, 12, 22, 25, 26, 30, 31],
        lastWeekIncrease: "3.33%",
        overallGrowth: "342.86%",
      },
      {
        name: "Remote access software",
        isKeyword: true,
        monthlyData: [null, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        lastWeekIncrease: "0%",
        overallGrowth: "0%",
      },
      {
        name: "Remote Access Solution",
        isKeyword: true,
        monthlyData: [null, 101, null, null, null, null, null, null, 7, 7],
        lastWeekIncrease: "0%",
        overallGrowth: "+94%",
      },
      {
        name: "Page Authority",
        monthlyData: [33, 33, 33, 33, 36, 42, 43, 53, 53],
        lastWeekIncrease: "0%",
        overallGrowth: "60.61%",
      },
    ],
  },
  {
    id: 4,
    url: "https://www.splashtop.com/products/remote-support",
    metrics: [
      {
        name: "Total Backlinks",
        monthlyData: [null, 4, 4, 4, 5, 10, 12, 10, 12, 13],
        lastWeekIncrease: "8.33%",
        overallGrowth: "225.00%",
      },
      {
        name: "Remote support software",
        isKeyword: true,
        monthlyData: [null, 13, null, null, null, null, null, null, 10, 10],
        lastWeekIncrease: "0%",
        overallGrowth: "+3%",
      },
      {
        name: "Remote Support Solution",
        isKeyword: true,
        monthlyData: [null, 12, null, null, null, null, null, null, 8, 6],
        lastWeekIncrease: "-25.00%",
        overallGrowth: "+6%",
      },
      {
        name: "Page Authority",
        monthlyData: [44, 44, 44, 44, 44, 45, 45, 46, 46],
        lastWeekIncrease: "0%",
        overallGrowth: "4.55%",
      },
    ],
  },
  {
    id: 5,
    url: "https://www.splashtop.com/solutions/remote-desktop",
    metrics: [
      {
        name: "Total Backlinks",
        monthlyData: [null, 2, 2, 2, 2, 4, 4, 4, 6, 6],
        lastWeekIncrease: "0%",
        overallGrowth: "200.00%",
      },
      {
        name: "Remote Desktop",
        isKeyword: true,
        monthlyData: [44, 41, 35, 46, 23, 23, 23, 24, 30, 30],
        lastWeekIncrease: "0%",
        overallGrowth: "+14%",
      },
      {
        name: "Remote Desktop solution",
        isKeyword: true,
        monthlyData: [12, 11, 12, 14, 15, 15, 15, 21, 16, 9],
        lastWeekIncrease: "-43.75%",
        overallGrowth: "-3%",
      },
      {
        name: "Page Authority",
        monthlyData: [44, 44, 44, 44, 44, 44, 45, 46, 46],
        lastWeekIncrease: "0%",
        overallGrowth: "4.55%",
      },
    ],
  },
  {
    id: 6,
    url: "https://www.splashtop.com/blog/what-is-secure-remote-access",
    metrics: [
      {
        name: "Total Backlinks",
        monthlyData: [null, 0, 0, 0, 0, 2, 2, 2, 3, 3],
        lastWeekIncrease: "0%",
        overallGrowth: "N/A",
      },
      {
        name: "what is secure remote access",
        isKeyword: true,
        monthlyData: [null, 43, null, null, null, null, null, null, 0, 8],
        lastWeekIncrease: "N/A",
        overallGrowth: "+35%",
      },
      {
        name: "Page Authority",
        monthlyData: [36, 36, 36, 36, 36, 36, 36, 36, 36],
        lastWeekIncrease: "0%",
        overallGrowth: "0%",
      },
    ],
  },
  {
    id: 7,
    url: "https://www.splashtop.com/solutions/remote-desktop/secure",
    metrics: [
      {
        name: "Total Backlinks",
        monthlyData: [null, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        lastWeekIncrease: "0%",
        overallGrowth: "N/A",
      },
      {
        name: "remote desktop secure",
        isKeyword: true,
        monthlyData: [null, 20, null, null, null, null, null, null, 0, 10],
        lastWeekIncrease: "N/A",
        overallGrowth: "+10%",
      },
      {
        name: "secure remote desktop",
        isKeyword: true,
        monthlyData: [null, 13, null, null, null, null, null, null, 0, 1],
        lastWeekIncrease: "N/A",
        overallGrowth: "+12%",
      },
      {
        name: "Page Authority",
        monthlyData: [44, 44, 44, 44, 44, 44, 44, 44, 44],
        lastWeekIncrease: "0%",
        overallGrowth: "0%",
      },
    ],
  },
  {
    id: 8,
    url: "https://www.splashtop.com/blog/what-is-remote-desktop",
    metrics: [
      {
        name: "Total Backlinks",
        monthlyData: [null, 0, 0, 0, 0, 2, 2, 2, 2, 2],
        lastWeekIncrease: "0%",
        overallGrowth: "N/A",
      },
      {
        name: "Remote Desktop",
        isKeyword: true,
        monthlyData: [null, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        lastWeekIncrease: "0%",
        overallGrowth: "0%",
      },
      {
        name: "What is remote desktop",
        isKeyword: true,
        monthlyData: [null, 39, null, null, null, null, null, null, 9, 9],
        lastWeekIncrease: "0%",
        overallGrowth: "+30%",
      },
      {
        name: "Page Authority",
        monthlyData: [36, 36, 36, 36, 36, 36, 36, 36, 36],
        lastWeekIncrease: "0%",
        overallGrowth: "0%",
      },
    ],
  },
];

// ============================================================================
// DASHBOARD STATISTICS
// ============================================================================
// Summary statistics displayed in the dashboard header
export const dashboardStats = {
  urlsTracked: 15,
  totalBacklinks: 135,
  keywordsTracked: 23,
  dataSource: "Semrush, GSC, Moz",
};

// ============================================================================
// BUSINESS IMPACT DATA - BAR CHART VALUES
// ============================================================================
// ⭐ THIS IS WHERE YOU UPDATE THE BAR CHART VALUES ⭐
//
// This data powers the "Six critical keywords moved to Page 1" bar chart
// in the Business Impact of Backlinks section.
//
// The first 6 keywords in this array are displayed in the chart:
//   1. remote access
//   2. remote access software
//   3. remote support
//   4. remote support software
//   5. remote desktop
//   6. remote desktop software
//
// To update the chart values:
//   - baseline: The ranking position at baseline (Jan'25)
//   - jun25: The ranking position in June'25 (optional, not shown in chart)
//   - oct25: The ranking position in current month (Oct'25) - THIS IS THE CURRENT VALUE
//
// The chart shows baseline vs current month (oct25) for the top 6 keywords.
export interface KeywordImpactRow {
  keyword: string;
  baseline: number; // Jan'25 ranking
  jan25: number; // June'25 ranking (not displayed in chart)
  dec25: number; // Current month ranking (Oct'25) - UPDATE THIS MONTHLY
}

export const keywordImpactRows: KeywordImpactRow[] = [
  // Top 9 keywords shown in the bar chart
   { keyword: "remote Access", baseline:16, jan25: 16, dec25: 7 },
  { keyword: "remote support", baseline: 22, jan25: 22, dec25: 8 },
  { keyword: "remote access solution", baseline: 101, jan25: 101,dec25: 4 },
  { keyword: "remote support software", baseline: 13, jan25: 13, dec25: 12},
  { keyword: "remote support solution", baseline: 12, jan25: 12, dec25: 4 },
  { keyword: "secure remote desktop", baseline: 13, jan25: 13, dec25: 34},
  { keyword: "remote desktop", baseline: 41, jan25: 41, dec25: 12},
  { keyword: "remote desktop software", baseline: 22, jan25: 22,dec25: 8 },
  { keyword: "remote access software", baseline: 101, jan25: 101, dec25: 13 },
  // Additional keywords (not shown in chart, but available for future use)
  // { keyword: "teamviewer alternative", baseline: 4, jun25: 3, nov25: 3 },
  // { keyword: "teamviewer pricing", baseline: 6, jun25: 7, nov25: 6 },
  // { keyword: "logmein alternative", baseline: 3, jun25: 3, nov25: 3 },
  // { keyword: "logmein pricing", baseline: 5, jun25: 7, nov25: 8 },
  // { keyword: "anydesk alternative", baseline: 27, jun25: 20, nov25: 16 },
  // { keyword: "anydesk pricing", baseline: 9, jun25: 8, nov25: 6 },
  // { keyword: "gotomypc alternative", baseline: 1, jun25: 2, nov25: 1 },
  // { keyword: "gotomypc pricing", baseline: 3, jun25: 3, nov25: 4 },
];

// ============================================================================
// KEYWORD TREND CHARTS DATA
// ============================================================================
// Extended trend data for specific keywords (used in Business Impact charts)
// These arrays contain 17 data points matching extendedMonths from constants.ts
// Indices: 0=Jul'24, 1=Aug'24, ..., 15=Oct'25, 16=Nov'25
export const remoteAccessTrendData = [
  14, 36, 18, 25, 13, 15, 13, 10, 9, 9, 12, 13, 5, 4, 6, 4, 5,7
];

export const remoteDesktopSoftwareTrendData = [
  29, 32, 27, 32, 18, 15, 19, 21, 19, 18, 15, 11, 14, 13, 6, 8, 14,8
];
