import {
  ResponsiveContainer,
  ComposedChart,
  BarChart,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Line,
  Cell,
} from "recharts";
import {
  keywordImpactRows,
  remoteAccessTrendData,
  remoteDesktopSoftwareTrendData,
  extendedMonths,
  BUSINESS_IMPACT_CONFIG,
  MONTH_LABELS,
  UI_TEXT,
} from "../data/index";

const remoteAccessData = remoteAccessTrendData.map((pos, i) => ({
  month: extendedMonths[i],
  pos,
}));

const remoteDesktopSoftwareData = remoteDesktopSoftwareTrendData.map(
  (pos, i) => ({
    month: extendedMonths[i],
    pos,
  })
);

const BusinessImpactOfBacklinks = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-8">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          {UI_TEXT.businessImpact.title}
        </h2>
        <h3 className="text-lg font-semibold text-gray-700 mt-2">
          {BUSINESS_IMPACT_CONFIG.chartTitle}
        </h3>
        <div className="mt-3 px-4 py-2 bg-gray-100 rounded-md inline-block">
          <p className="text-sm font-semibold text-gray-700">Source: GSC</p>
        </div>
      </div>

      <div className="mb-6">
        <div style={{ width: "100%", height: 400 }}>
          <ResponsiveContainer>
            <ComposedChart
              data={keywordImpactRows
                .slice(0, BUSINESS_IMPACT_CONFIG.topKeywordsCount)
                .map((row) => ({
                  keyword: row.keyword,
                  jan25: row.baseline,
                  oct25: row.nov25,
                }))}
              margin={{ top: 50, right: 30, left: 30, bottom: 120 }}
              barCategoryGap="25%"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis
                dataKey="keyword"
                tick={{ fontSize: 10, fontWeight: "bold" }}
                interval={0}
                angle={-35}
                textAnchor="end"
                height={100}
                label={{
                  value: "Keywords",
                  position: "insideBottom",
                  offset: -10,
                  style: {
                    textAnchor: "middle",
                    fill: "#6b7280",
                    fontSize: 15,
                    fontWeight: "bold",
                  },
                }}
              />
              <YAxis
                label={{
                  value: "Position",
                  angle: -90,
                  position: "insideLeft",
                  style: { fontWeight: "bold" },
                }}
                domain={[0, 30]}
                tick={{ fontWeight: "bold" }}
              />
              <Tooltip />
              <Legend
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{ paddingTop: "20px" }}
                iconType="rect"
              />
              <text
                x="50%"
                y="15"
                textAnchor="middle"
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  fill: "#9c51b6",
                }}
              >
                {BUSINESS_IMPACT_CONFIG.chartSubtitle}
              </text>
              <Bar
                dataKey="jan25"
                fill="#3b82f6"
                name={MONTH_LABELS.baseline}
                barSize={30}
                radius={[4, 4, 0, 0]}
                label={{
                  position: "top",
                  style: {
                    fontSize: "10px",
                    fontWeight: "bold",
                    fill: "#1f2937",
                  },
                }}
              />
              <Bar
                dataKey="oct25"
                fill="#059669"
                name={MONTH_LABELS.current}
                barSize={30}
                radius={[4, 4, 0, 0]}
                label={{
                  position: "top",
                  style: {
                    fontSize: "10px",
                    fontWeight: "bold",
                    fill: "#1f2937",
                  },
                }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="space-y-4">
        <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
          <div className="flex items-start gap-3">
            <i className="fa-solid fa-arrow-trend-up text-green-600 mt-1"></i>
            <p className="text-gray-700 font-bold">
              {BUSINESS_IMPACT_CONFIG.insightText}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {BUSINESS_IMPACT_CONFIG.trendChartTitle}
        </h3>
        <div className="mb-4 px-4 py-2 bg-gray-100 rounded-md inline-block">
          <p className="text-sm font-semibold text-gray-700">Source: Semrush</p>
        </div>
        <div className="mb-4 p-4 rounded-lg border border-gray-200 bg-gray-50">
          <div className="flex items-start gap-3">
            <i className="fa-solid fa-lightbulb text-yellow-600 mt-1"></i>
            <p className="text-gray-700 font-bold">
              {BUSINESS_IMPACT_CONFIG.trendKeyTakeaway}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg border p-4">
            <h4 className="text-base font-semibold text-blue-700 mb-2">
              Remote Access
            </h4>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <LineChart
                  data={remoteAccessData}
                  margin={{ top: 5, right: 10, left: 45, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 11 }}
                    angle={-25}
                    textAnchor="end"
                    height={45}
                  />
                  <YAxis
                    width={56}
                    label={{
                      value: "Keyword Position",
                      angle: -90,
                      position: "insideLeft",
                      offset: 6,
                      style: { fill: "#6b7280", fontSize: 11 },
                    }}
                    domain={[0, 40]}
                    tick={{ fontSize: 11 }}
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="pos"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    activeDot={{ r: 6 }}
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-white rounded-lg border p-4">
            <h4 className="text-base font-semibold text-blue-700 mb-2">
              Remote Desktop Software
            </h4>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <LineChart
                  data={remoteDesktopSoftwareData}
                  margin={{ top: 5, right: 10, left: 45, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 11 }}
                    angle={-25}
                    textAnchor="end"
                    height={45}
                  />
                  <YAxis
                    width={56}
                    label={{
                      value: "Keyword Position",
                      angle: -90,
                      position: "insideLeft",
                      offset: 6,
                      style: { fill: "#6b7280", fontSize: 11 },
                    }}
                    domain={[0, 40]}
                    tick={{ fontSize: 11 }}
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="pos"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    activeDot={{ r: 6 }}
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessImpactOfBacklinks;
