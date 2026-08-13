import { KEY_FINDINGS } from "../data/index";

const KeyFindings = () => {
  const findings = KEY_FINDINGS;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-5">Key Findings</h2>

      <ul className="space-y-3 pl-2">
        {findings.map((finding, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-900" />
            <p
              className="text-[15px] leading-7 text-gray-700 [&>strong]:font-bold [&>strong]:text-gray-900"
              dangerouslySetInnerHTML={{ __html: finding.description }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyFindings;