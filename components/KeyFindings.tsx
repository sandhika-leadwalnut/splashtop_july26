import { KEY_FINDINGS } from "../data/index";

const KeyFindings = () => {
  const findings = KEY_FINDINGS;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Key Findings</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {findings.map((finding, index) => (
          <div
            key={index}
            className={`${finding.bgColor} border border-gray-200 rounded-lg p-5`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`flex-shrink-0 w-10 h-10 ${finding.bgColor} rounded-lg flex items-center justify-center`}
              >
                <i className={`${finding.icon} ${finding.color} text-lg`}></i>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-2">
                  {finding.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {finding.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFindings;
