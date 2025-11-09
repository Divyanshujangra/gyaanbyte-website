import React from 'react';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Hero />

      {/* Services Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Comprehensive financial data solutions for businesses of all sizes
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-gb-blue mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Migration</h3>
              <p className="text-gray-500 mb-4">
                Seamless migration between QuickBooks Online, QuickBooks Enterprise, and Sage Intacct
              </p>
              <div className="text-sm text-gb-blue font-medium">Starting at $3,000</div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-gb-blue mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dashboard Development</h3>
              <p className="text-gray-500 mb-4">
                Custom financial reporting dashboards with real-time KPI tracking
              </p>
              <div className="text-sm text-gb-blue font-medium">Starting at $2,000</div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-gb-blue mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">System Integration</h3>
              <p className="text-gray-500 mb-4">
                Connect your financial systems with third-party applications and APIs
              </p>
              <div className="text-sm text-gb-blue font-medium">Starting at $1,500</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gb-blue hover:bg-blue-700 transition-colors"
            >
              View All Services
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <div className="flex gap-2 mb-4 flex-wrap">
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
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                GyaanByte Academy
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Transform your career with our intensive 8-week financial data engineering program.
                From zero to placement-ready in just two months. Earn a government-recognized Skill India certificate upon completion.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-gb-orange rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-700">Real-world project experience</span>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-gb-orange rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-700">Job placement assistance</span>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-gb-orange rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-700">Industry expert mentorship</span>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-gb-orange rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-700">Skill India recognized certificate</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/academy"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gb-orange hover:bg-orange-600 transition-colors"
                >
                  Learn More About Academy
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="bg-gradient-to-r from-gb-blue to-gb-orange rounded-lg p-8 text-white">
                <h3 className="text-xl font-semibold mb-6">Next Batch Starting Soon</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-semibold">8 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Schedule:</span>
                    <span className="font-semibold">Weekends</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Batch Size:</span>
                    <span className="font-semibold">Max 10 students</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Investment:</span>
                    <span className="font-semibold">₹12,000</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold">Limited Seats</div>
                    <div className="text-sm opacity-90">Apply now to secure your spot</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Certifications Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Government Recognized & Certified
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Validated by the Government of India for innovation and quality training
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Startup India Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-bold">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  CERTIFIED
                </div>
                <div className="text-gb-blue">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Startup India Recognition
              </h3>

              <div className="mb-4">
                <p className="text-sm text-gray-500">Certificate No.</p>
                <p className="text-lg font-semibold text-gray-900">DIPP228466</p>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-500">Issued By</p>
                <p className="text-base font-medium text-gray-900">
                  Department for Promotion of Industry and Internal Trade (DPIIT)
                </p>
                <p className="text-sm text-gray-500">Ministry of Commerce & Industry, Govt. of India</p>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-500">Industry & Sector</p>
                <p className="text-base font-medium text-gray-900">Analytics | Big Data</p>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm text-gray-600 mb-3">This certification recognizes GyaanByte Labs as an innovative startup in the Analytics and Big Data sector, validated for quality and innovation.</p>
                <div className="flex items-center text-sm text-blue-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Valid until August 17, 2035</span>
                </div>
              </div>
            </div>

            {/* Skill India Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-bold">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  CERTIFIED
                </div>
                <div className="text-green-600">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Skill India Training Partner
              </h3>

              <div className="mb-4">
                <p className="text-sm text-gray-500">Partnership Status</p>
                <p className="text-lg font-semibold text-gray-900">Certified Training Provider</p>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-500">Issued By</p>
                <p className="text-base font-medium text-gray-900">
                  Ministry of Skill Development & Entrepreneurship
                </p>
                <p className="text-sm text-gray-500">Government of India</p>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-500">Training Focus</p>
                <p className="text-base font-medium text-gray-900">Financial Data Engineering</p>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm text-gray-600 mb-3">Authorized to provide government-recognized skill development training and issue Skill India certificates to graduates.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-green-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Government-recognized certificates</span>
                  </div>
                  <div className="flex items-center text-sm text-green-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>National qualification framework aligned</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              What This Means for You
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <svg className="w-6 h-6 text-gb-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Government Validated Quality</h4>
                <p className="text-sm text-gray-600">Both certifications represent government verification of our innovation and training quality standards.</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Recognized Certifications</h4>
                <p className="text-sm text-gray-600">Our training graduates receive government-recognized Skill India certificates valued across India.</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                  <svg className="w-6 h-6 text-gb-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Innovation Recognition</h4>
                <p className="text-sm text-gray-600">Startup India certification validates our innovative approach in Analytics & Big Data sector.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;