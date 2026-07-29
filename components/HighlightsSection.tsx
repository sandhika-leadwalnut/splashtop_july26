const HighlightsSection = () => {
  return (
    <div className="mt-10">
      <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Highlights</h2>
          <div className="w-20 h-1 bg-blue-600 mt-3 rounded-full"></div>
        </div>

        {/* Highlight 1 */}
        <div className="mb-16">
          <div className="flex items-start gap-4 mb-5">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
              1
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 leading-snug">
                AEM Keyword Breaks into Top 10 with Sustained Gains
              </h3>
              <p className="text-gray-600 mt-4 leading-8 text-[15px] max-w-4xl">
                The &ldquo;autonomous endpoint management&rdquo; keyword has
                improved from 14 to 7 since Dec&rsquo;25 and is now consistently
                ranking in the Top 10, with early signs of impact from recent
                backlink efforts.
              </p>
            </div>
          </div>

          {/* Chart Image */}
          <div className="mt-8 border-2 border-gray-300 rounded-2xl overflow-hidden shadow-md bg-white p-3">
            <img
              src="/image3.png"
              alt="AEM keyword ranking growth"
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Highlight 2 */}
        <div className="mt-14">
          <div className="flex items-start gap-4 mb-5">
            <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-lg">
              2
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 leading-snug">
                Listicle-Based Backlinks Driving Authority &amp; Brand
                Visibility
              </h3>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 max-w-5xl">
            <p className="text-gray-700 leading-8 text-[15px]">
              Backlink efforts are strategically focused on listicle-based
              placements, enabling dual value through authoritative backlinks
              along with consistent brand mentions across third-party websites.
            </p>

            {/* Main Featured Image */}
            <div className="mt-8 flex justify-center">
              <div className="border-2 border-gray-300 rounded-2xl overflow-hidden shadow-md bg-white p-3 max-w-3xl">
                <img
                  src="/image2.png"
                  alt="Listicle backlink placement"
                  className="w-full h-auto rounded-lg object-contain"
                />
              </div>
            </div>

            
              {/* Examples */}
            <div className="mt-8">
              <p className="font-semibold text-gray-900 mb-4">Examples:</p>
              <div className="space-y-4">
                <a href="https://thetipsygypsies.net/top-5-remote-access-software-options-for-businesses-in-2026/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 hover:underline break-all text-[15px]">https://thetipsygypsies.net/top-5-remote-access-software-options-for-businesses-in-2026/</a>
                <a href="https://insiderpaper.com/top-remote-access-software-for-smooth-windows-and-mac-connections/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 hover:underline break-all text-[15px]">https://insiderpaper.com/top-remote-access-software-for-smooth-windows-and-mac-connections/</a>
                <a href="https://www.thecloudvibe.com/top-rated-remote-access-tools/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 hover:underline break-all text-[15px]">https://www.thecloudvibe.com/top-rated-remote-access-tools/</a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default HighlightsSection;