import { randomBytes } from "crypto";
import { PagePerformanceData, PerformanceSummary } from "./types";

// ============================================================================
// PERFORMANCE SUMMARY
// ============================================================================
// High-level summary of page performance (used in PerformanceSummaryTable)
export const performanceSummary: PerformanceSummary[] = [
  {
    url: "https://www.splashtop.com/blog/what-is-remote-access",
    paChange: 1,
    bestKeywordMove: { keyword: "what is remote access", change: "+5" },
    worstKeywordMove: { keyword: "benefits of remote access", change: "-1" },
    overallStatus: "Positive",
  },
  {
    url: "https://www.splashtop.com/products/remote-access",
    paChange: 4,
    bestKeywordMove: null,
    worstKeywordMove:{keyword: "remote access solution", change: "-97"},
    overallStatus: "Negative",
  },
  {
    url: "https://www.splashtop.com/blog/what-is-remote-desktop",
    paChange: 7,
    bestKeywordMove: { keyword: "remote desktop", change: "+1" },
    worstKeywordMove: { keyword: "what is remote desktop", change: "-17" },
    overallStatus: "Negative",
  },
  {
    url: "https://www.splashtop.com/solutions/remote-desktop",
    paChange: 1,
    bestKeywordMove: { keyword: "remote desktop program", change: "+22" },
    worstKeywordMove: { keyword: "remote desktop software", change: "-8" },
    overallStatus: "Positive",
  },
  {
    url: "https://www.splashtop.com/blog/what-is-remote-support",
    paChange: 9,
    bestKeywordMove: { keyword: "remote support", change: "+2" },
    worstKeywordMove: { keyword: "remote desktop support", change: "-2" },
    overallStatus: "Positive",
  },
  {
    url: "https://www.splashtop.com/products/remote-support",
    paChange: 3,
    bestKeywordMove: null,
    worstKeywordMove: { keyword: "remote support solution", change: "-97" },
    overallStatus: "Negative",
  },
  {
    url: "https://www.splashtop.com/blog/what-is-patch-management",
    paChange: 1,
    bestKeywordMove: { keyword: "patch management", change: "+54" },
    worstKeywordMove: null,
    overallStatus: "Positive",
  },
  {
    url: "https://www.splashtop.com/solutions/patch-management",
    paChange: 6,
    bestKeywordMove: null,
    worstKeywordMove: null,
    overallStatus: "Stable",
  },
  {
    url: "https://www.splashtop.com/blog/autonomous-endpoint-management",
    paChange: 5,
    bestKeywordMove:{ keyword: "autonomous endpoint", change: "+12" },
    worstKeywordMove: null,
    overallStatus: "Positive",
  },
  {
    url: "https://www.splashtop.com/compare/teamviewer-alternative",
    paChange: 0,
    bestKeywordMove: null,
    worstKeywordMove: { keyword: "teamviewer alternative", change: "-2" },
    overallStatus: "Negative",
  },
  {
    url: "https://www.splashtop.com/blog/teamviewer-pricing-comparison",
    paChange: 0,
    bestKeywordMove: { keyword: "teamviewer pricing", change: "+15" },
    worstKeywordMove: null,
    overallStatus: "Positive",
  },
  {
    url: "https://www.splashtop.com/compare/anydesk-alternative",
    paChange: 0,
    bestKeywordMove: { keyword: "anydesk alternative", change: "+1" },
    worstKeywordMove: null,
    overallStatus: "Positive",
  },
  {
    url: "https://www.splashtop.com/blog/anydesk-pricing-comparison",
    paChange: -12,
    bestKeywordMove: { keyword: "anydesk pricing", change: "+4" },
    worstKeywordMove: null,
    overallStatus: "Positive",
  },
  {
    url: "https://www.splashtop.com/compare/logmein-alternative",
    paChange: 1,
    bestKeywordMove: { keyword: "logmein alternative", change: "+5" },
    worstKeywordMove: null,
    overallStatus: "Positive",
  },
  {
    url: "https://www.splashtop.com/compare/logmein-alternative/pricing",
    paChange: -15,
    bestKeywordMove: null,
    worstKeywordMove: { keyword: "logmein pricing", change: "-21" },
    overallStatus: "Negative",
  },
];


// ============================================================================
// BACKLINK DATA
// ============================================================================
// Referring domains distribution by DA (Domain Authority) score
export const referringDomainsData = [
  { name: "DA 71-100", value: 47, color: "#14b8a6" },
  { name: "DA 41-70", value: 258, color: "#3b82f6" },
  { name: "DA 25-40", value: 41, color: "#22c55e" },
];

// Monthly backlink growth trend (used in BacklinkGrowthChart)
export const monthlyBacklinkGrowth = [
  {month: "Feb'26", backlinks: 50},
  {month: "Mar'26", backlinks: 25},
  {month: "Apr'26", backlinks: 48},
  {month: "May'26", backlinks: 83},
  {month: "June'26", backlinks: 32},
  {month: "July'26", backlinks: 108},
];

// ============================================================================
// KEYWORD RANKING SNAPSHOTS
// ============================================================================
// Snapshot data for keyword rankings at specific time points (Jan'25 and Nov'25)
// Used in KeywordPerformance component for Top 3 and First Page statistics
export const keywordRankingPerformance = {
  topThree: {
    jan25: 0,
    oct25: 5,

    data: [
      {
        url: "https://www.splashtop.com/blog/what-is-remote-desktop",
        keyword: "remote desktop",
        jan25Rank: 12,
        oct25Rank: 3,
      },
      {
        url: "https://www.splashtop.com/blog/what-is-remote-access",
        keyword: "remote access",
        jan25Rank: 7,
        oct25Rank: 5,
      },
      {
        url: "https://www.splashtop.com/blog/teamviewer-pricing-comparison",
        keyword: "teamviewer pricing",
        jan25Rank: 20,
        oct25Rank: 5,
      },
      {
        url: "https://www.splashtop.com/blog/anydesk-pricing-comparison",
        keyword: "anydesk pricing",
        jan25Rank: 8,
        oct25Rank: 4,
      },
      {
        url: "https://www.splashtop.com/blog/autonomous-endpoint-management",
        keyword: "autonomous endpoint management",
        jan25Rank: 14,
        oct25Rank: 2,
      }
    ],
  },

  firstPage: {
    jan25: 4,
    oct25: 8,

    jan25Data: [
      {
        url: "https://www.splashtop.com/blog/what-is-remote-desktop",
        keyword: "remote desktop",
        rank: 12,
      },
      {
        url: "https://www.splashtop.com/blog/what-is-remote-access",
        keyword: "remote access",
        rank: 7,
      },
      {
        url: "https://www.splashtop.com/blog/what-is-remote-support",
        keyword: "remote support",
        rank: 8,
      },
      {
        url: "https://www.splashtop.com/blog/teamviewer-pricing-comparison",
        keyword: "teamviewer pricing",
        rank: 20,
      },
      {
        url: "https://www.splashtop.com/blog/anydesk-pricing-comparison",
        keyword: "anydesk pricing",
        rank: 8,
      },
      {
        url: "https://www.splashtop.com/compare/teamviewer-alternative",
        keyword: "teamviewer alternative",
        rank: 7,
      },
      {
        url: "https://www.splashtop.com/blog/what-is-patch-management",
        keyword: "patch management",
        rank: 62,
      },
      {
        url: "https://www.splashtop.com/blog/autonomous-endpoint-management",
        keyword: "autonomous endpoint management",
        rank: 14,
      }
    ],

    oct25Data: [
      {
        url: "https://www.splashtop.com/blog/what-is-remote-desktop",
        keyword: "remote desktop",
        rank: 3,
      },
      {
        url: "https://www.splashtop.com/blog/what-is-remote-access",
        keyword: "remote access",
        rank: 5,
      },
      {
        url: "https://www.splashtop.com/blog/what-is-remote-support",
        keyword: "remote support",
        rank: 6,
      },
      {
        url: "https://www.splashtop.com/blog/teamviewer-pricing-comparison",
        keyword: "teamviewer pricing",
        rank: 5,
      },
      {
        url: "https://www.splashtop.com/blog/anydesk-pricing-comparison",
        keyword: "anydesk pricing",
        rank: 4,
      },
      {
        url: "https://www.splashtop.com/compare/teamviewer-alternative",
        keyword: "teamviewer alternative",
        rank: 9,
      },
      {
        url: "https://www.splashtop.com/blog/what-is-patch-management",
        keyword: "patch management",
        rank: 8,
      },
      {
        url: "https://www.splashtop.com/blog/autonomous-endpoint-management",
        keyword: "autonomous endpoint management",
        rank: 2,
      }
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
monthlyData: [34,34,34],
lastWeekIncrease: "0%",
overallGrowth: "0%",
},
{
name: "Remote Access",
isKeyword: true,
monthlyData: [7,8,6],
lastWeekIncrease: "-25%",
overallGrowth: "-14%",
},
{
name: "What is remote access",
isKeyword: true,
monthlyData: [8,7,6],
lastWeekIncrease: "-14%",
overallGrowth: "-25%",
},
{
name: "Page Authority",
monthlyData: [43,43,44],
lastWeekIncrease: "2.33%",
overallGrowth: "2.33%",
},
],
},

{
id: 2,
url: "https://www.splashtop.com/blog/what-is-remote-support",
metrics: [
{
name: "Total Backlinks",
monthlyData: [20,20,20],
lastWeekIncrease: "0%",
overallGrowth: "0%",
},
{
name: "Remote support",
isKeyword: true,
monthlyData: [8,18,12],
lastWeekIncrease: "-33%",
overallGrowth: "50%",
},
{
name: "What is Remote Support",
isKeyword: true,
monthlyData: [3,3,3],
lastWeekIncrease: "0%",
overallGrowth: "0%",
},
{
name: "Page Authority",
monthlyData: [33,37,38],
lastWeekIncrease: "2.70%",
overallGrowth: "15.15%",
},
],
},

{
id: 3,
url: "https://www.splashtop.com/products/remote-access",
metrics: [
{
name: "Total Backlinks",
monthlyData: [32,34,34],
lastWeekIncrease: "0%",
overallGrowth: "6.25%",
},
{
name: "Remote access software",
isKeyword: true,
monthlyData: [13,4,1],
lastWeekIncrease: "-75%",
overallGrowth: "-92%",
},
{
name: "Remote Access Solution",
isKeyword: true,
monthlyData: [4,4,1],
lastWeekIncrease: "-75%",
overallGrowth: "-75%",
},
{
name: "Page Authority",
monthlyData: [43,45,46],
lastWeekIncrease: "2.22%",
overallGrowth: "6.97%",
},
],
},

{
id: 4,
url: "https://www.splashtop.com/products/remote-support",
metrics: [
{
name: "Total Backlinks",
monthlyData: [32,34,34],
lastWeekIncrease: "0%",
overallGrowth: "6.25%",
},
{
name: "Remote support software",
isKeyword: true,
monthlyData: [12,11,82],
lastWeekIncrease: "645%",
overallGrowth: "583%",
},
{
name: "Remote Support Solution",
isKeyword: true,
monthlyData: [4,17,2],
lastWeekIncrease: "-88%",
overallGrowth: "-50%",
},
{
name: "Page Authority",
monthlyData: [45,47,47],
lastWeekIncrease: "0%",
overallGrowth: "4.44%",
},
],
},

{
id: 5,
url: "https://www.splashtop.com/solutions/remote-desktop",
metrics: [
{
name: "Total Backlinks",
monthlyData: [13,13,13],
lastWeekIncrease: "0%",
overallGrowth: "0%",
},
{
name: "Remote Desktop",
isKeyword: true,
monthlyData: [12,41,72],
lastWeekIncrease: "75%",
overallGrowth: "500%",
},
{
name: "Remote Desktop solution",
isKeyword: true,
monthlyData: [32,83,53],
lastWeekIncrease: "-36%",
overallGrowth: "65%",
},
{
name: "Page Authority",
monthlyData: [45,45,45],
lastWeekIncrease: "0%",
overallGrowth: "0%",
},
],
},

{
id: 6,
url: "https://www.splashtop.com/blog/what-is-secure-remote-access",
metrics: [
{
name: "Total Backlinks",
monthlyData: [16,16,16],
lastWeekIncrease: "0%",
overallGrowth: "0%",
},
{
name: "secure remote access",
isKeyword: true,
monthlyData: [20,30,18],
lastWeekIncrease: "-40%",
overallGrowth: "-10%",
},
{
name: "what is secure remote access",
isKeyword: true,
monthlyData: [4,3,6],
lastWeekIncrease: "100%",
overallGrowth: "50%",
},
{
name: "Page Authority",
monthlyData: [53,38,39],
lastWeekIncrease: "2.63%",
overallGrowth: "-26%",
},
],
},

{
id: 7,
url: "https://www.splashtop.com/solutions/remote-desktop/secure",
metrics: [
{
name: "Total Backlinks",
monthlyData: [13,13,13],
lastWeekIncrease: "0%",
overallGrowth: "0%",
},
{
name: "remote desktop secure",
isKeyword: true,
monthlyData: [null,38,10],
lastWeekIncrease: "-73%",
overallGrowth: "N/A",
},
{
name: "secure remote desktop",
isKeyword: true,
monthlyData: [34,34,16],
lastWeekIncrease: "-52%",
overallGrowth: "-52%",
},
{
name: "Page Authority",
monthlyData: [33,37,37],
lastWeekIncrease: "0%",
overallGrowth: "12%",
},
],
},

{
id: 8,
url: "https://www.splashtop.com/blog/what-is-remote-desktop",
metrics: [
{
name: "Total Backlinks",
monthlyData: [27,27,27],
lastWeekIncrease: "0%",
overallGrowth: "0%",
},
{
name: "Remote Desktop",
isKeyword: true,
monthlyData: [4,85,72],
lastWeekIncrease: "-15%",
overallGrowth: "1700%",
},
{
name: "What is remote desktop",
isKeyword: true,
monthlyData: [5,9,9],
lastWeekIncrease: "0%",
overallGrowth: "80%",
},
{
name: "Page Authority",
monthlyData: [36,40,41],
lastWeekIncrease: "2.5%",
overallGrowth: "13.88%",
},
],
},

{
id: 9,
url: "https://www.splashtop.com/blog/anydesk-pricing-comparison",
metrics: [
{
name: "Total Backlinks",
monthlyData: [1,1,1],
lastWeekIncrease: "0%",
overallGrowth: "0%",
},
{
name: "anydesk pricing",
isKeyword: true,
monthlyData: [8,8,7],
lastWeekIncrease: "-12.5%",
overallGrowth: "-12.5%",
},
{
name: "Page Authority",
monthlyData: [54,54,41],
lastWeekIncrease: "-24%",
overallGrowth: "-24%",
},
],
},
{
id: 10,
url: "https://www.splashtop.com/blog/teamviewer-pricing-comparison",
metrics: [
{
name: "Total Backlinks",
monthlyData: [1,1,1],
},
{
name: "teamviewer pricing",
isKeyword: true,
monthlyData: [20,14,11],
},
{
name: "Page Authority",
monthlyData: [41,41,41],
},
],
},

{
id: 11,
url: "https://www.splashtop.com/compare/anydesk-alternative",
metrics: [
{
name: "Total Backlinks",
monthlyData: [1,1,1],
},
{
name: "anydesk alternative",
isKeyword: true,
monthlyData: [20,23,16],
},
{
name: "Page Authority",
monthlyData: [40,40,40],
},
],
},

{
id: 12,
url: "https://www.splashtop.com/compare/gotomypc-alternative",
metrics: [
{
name: "Total Backlinks",
monthlyData: [1,1,1],
},
{
name: "gotomypc alternative",
isKeyword: true,
monthlyData: [7,8,3],
},
{
name: "Page Authority",
monthlyData: [37,37,38],
},
],
},

{
id: 13,
url: "https://www.splashtop.com/compare/gotomypc-alternative/pricing",
metrics: [
{
name: "Total Backlinks",
monthlyData: [1,1,1],
},
{
name: "gotomypc pricing",
isKeyword: true,
monthlyData: [11,10,11],
},
{
name: "Page Authority",
monthlyData: [37,37,37],
},
],
},

{
id: 14,
url: "https://www.splashtop.com/compare/logmein-alternative",
metrics: [
{
name: "Total Backlinks",
monthlyData: [1,1,1],
},
{
name: "logmein alternative",
isKeyword: true,
monthlyData: [22,31,21],
},
{
name: "Page Authority",
monthlyData: [39,39,40],
},
],
},

{
id: 15,
url: "https://www.splashtop.com/compare/teamviewer-alternative",
metrics: [
{
name: "Total Backlinks",
monthlyData: [1,1,1],
},
{
name: "teamviewer alternative",
isKeyword: true,
monthlyData: [7,7,6],
},
{
name: "Page Authority",
monthlyData: [43,43,43],
},
],
},

{
id: 16,
url: "https://www.splashtop.com/compare/logmein-alternative/pricing",
metrics: [
{
name: "Total Backlinks",
monthlyData: [0,1,1],
},
{
name: "logmein pricing",
isKeyword: true,
monthlyData: [11,16,14],
},
{
name: "Page Authority",
monthlyData: [54,54,39],
},
],
},
];
// ============================================================================
// DASHBOARD STATISTICS
// ============================================================================
// // Summary statistics displayed in the dashboard header
export const dashboardStats = {
  urlsTracked: 15,
  totalBacklinks: 346,
  keywordsTracked: 35,
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
  { keyword: "remote access", baseline: 7, jan25: 5, dec25: 5 },
  { keyword: "remote access software", baseline: 13, jan25: 101, dec25: 101 },

  { keyword: "remote support", baseline: 8, jan25: 6, dec25: 6 },
  { keyword: "remote support software", baseline: 12, jan25: 101, dec25: 101 },

  { keyword: "remote desktop", baseline: 12, jan25: 3, dec25: 3 },
  { keyword: "remote desktop software", baseline: 20, jan25: 28, dec25: 28 },

  { keyword: "teamviewer alternative", baseline: 7, jan25: 9, dec25: 9 },
  { keyword: "teamviewer pricing", baseline: 20, jan25: 5, dec25: 5 },

  { keyword: "logmein alternative", baseline: 22, jan25: 17, dec25: 17 },
  { keyword: "logmein pricing", baseline: 11, jan25: 32, dec25: 32 },

  { keyword: "anydesk alternative", baseline: 20, jan25: 19, dec25: 19 },
  { keyword: "anydesk pricing", baseline: 8, jan25: 4, dec25: 4 },

  { keyword: "patch management", baseline: 62, jan25: 8, dec25: 8 },
  { keyword: "patch management software", baseline: 101, jan25: 101, dec25: 101 },

  { keyword: "autonomous endpoint management", baseline: 14, jan25: 101, dec25: 101 },
];
// ============================================================================
// KEYWORD TREND CHARTS DATA
// ============================================================================
// Extended trend data for specific keywords (used in Business Impact charts)
// These arrays contain 17 data points matching extendedMonths from constants.ts
// Indices: 0=Jul'24, 1=Aug'24, ..., 15=Oct'25, 16=Nov'25
export const remoteAccessTrendData = [
  14, 36, 18, 25, 13, 15, 13, 10, 9, 9, 12, 13, 5, 4, 6, 4, 5,7,11
];

export const remoteDesktopSoftwareTrendData = [
  29, 32, 27, 32, 18, 15, 19, 21, 19, 18, 15, 11, 14, 13, 6, 8, 14,8,14
];
