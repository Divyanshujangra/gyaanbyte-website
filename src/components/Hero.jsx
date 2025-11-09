import React from 'react';

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <div className="pt-8 sm:pt-12 lg:pt-16">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Transform Your</span>{' '}
                  <span className="block text-gb-blue xl:inline">Financial Data</span>{' '}
                  <span className="block xl:inline">Infrastructure</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Expert QuickBooks migrations, Sage Intacct integrations, and custom financial dashboards for growing businesses.
                  Bridging US accounting standards with Indian engineering talent.
                </p>

                {/* Government Certifications */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3 lg:justify-start sm:justify-center">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Startup India Recognized
                  </div>
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-semibold">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Skill India Partner
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-gb-blue rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-900">US Standards</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-gb-blue rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-900">Cost Advantage</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-gb-blue rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-900">24/7 Support</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-gb-blue rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-900">Proven Results</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="/contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gb-blue hover:bg-blue-700 transition-colors md:py-4 md:text-lg md:px-10"
                    >
                      Get Free Consultation
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="/case-studies"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gb-blue bg-gray-50 hover:bg-gray-100 transition-colors md:py-4 md:text-lg md:px-10"
                    >
                      View Our Work
                    </a>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-3 gap-8">
                  <div>
                    <div className="text-2xl font-bold text-gb-blue">100%</div>
                    <div className="text-sm text-gray-500">Project Success Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gb-blue">$50K+</div>
                    <div className="text-sm text-gray-500">Data Migrated</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gb-blue">24hrs</div>
                    <div className="text-sm text-gray-500">Average Response</div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Right side - Dashboard Preview */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-gradient-to-r from-gb-blue to-gb-orange sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
          <div className="text-center text-white">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 max-w-md">
              <h3 className="text-xl font-semibold mb-4">Financial Dashboard Preview</h3>
              <div className="space-y-3">
                <div className="bg-white/20 rounded p-3 text-left">
                  <div className="text-sm opacity-75">Revenue This Month</div>
                  <div className="text-2xl font-bold">$45,230</div>
                </div>
                <div className="bg-white/20 rounded p-3 text-left">
                  <div className="text-sm opacity-75">Active Clients</div>
                  <div className="text-2xl font-bold">127</div>
                </div>
                <div className="bg-white/20 rounded p-3 text-left">
                  <div className="text-sm opacity-75">Data Accuracy</div>
                  <div className="text-2xl font-bold">99.8%</div>
                </div>
              </div>
              <div className="mt-4 text-sm opacity-75">
                Real-time financial insights for your business
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;