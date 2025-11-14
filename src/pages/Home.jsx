import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Hero />

      {/* Services Bento Box Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gb-blue-100 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-gb-blue-600 to-gb-orange-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade financial data solutions tailored for your business
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Featured Card - Data Migration */}
            <div className="md:col-span-2 lg:row-span-2 bg-gradient-to-br from-gb-blue-500 to-gb-blue-700 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-1">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm">
                  Most Popular
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Data Migration</h3>
              <p className="text-lg mb-6 text-white/90 leading-relaxed">
                Seamless migration between QuickBooks Online, QuickBooks Enterprise, and Sage Intacct. Zero data loss, 99.9% accuracy guaranteed.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Complete GL, AP, AR migration',
                  'Custom field mapping',
                  'Historical data preservation',
                  'Post-migration support'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/95">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-white/20">
                <div>
                  <div className="text-sm text-white/80">Starting at</div>
                  <div className="text-3xl font-bold">$3,000</div>
                </div>
                <Link to="/services" className="px-6 py-3 bg-white text-gb-blue-700 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Dashboard Development */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-gb-orange-200 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-gb-orange-400 to-gb-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom Dashboards</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Real-time financial KPIs, beautiful visualizations, actionable insights.
              </p>
              <div className="text-2xl font-bold text-gray-900 mb-2">$2,000+</div>
              <div className="text-sm text-gray-500">Starting price</div>
            </div>

            {/* System Integration */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-green-100 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">API Integration</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Connect your systems seamlessly with powerful integrations.
              </p>
              <div className="text-2xl font-bold text-gray-900 mb-2">$1,500+</div>
              <div className="text-sm text-gray-500">Starting price</div>
            </div>

            {/* Data Consulting */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-purple-100 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Expert Consulting</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Strategic guidance for your financial data infrastructure.
              </p>
              <div className="text-2xl font-bold text-gray-900 mb-2">$150/hr</div>
              <div className="text-sm text-gray-500">Hourly rate</div>
            </div>

            {/* CTA Card */}
            <div className="md:col-span-2 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-white shadow-xl flex items-center justify-between group hover:shadow-2xl transition-all">
              <div>
                <h3 className="text-2xl font-bold mb-2">Need a custom solution?</h3>
                <p className="text-gray-300">Let's discuss your unique requirements</p>
              </div>
              <Link to="/contact" className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 whitespace-nowrap">
                Contact Us
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Section - Modern Card Design */}
      <section className="py-20 bg-gradient-to-br from-gb-blue-50 via-white to-gb-orange-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gb-orange-100 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-green-800">Skill India Certified</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                <span className="block">GyaanByte</span>
                <span className="block bg-gradient-to-r from-green-600 to-gb-blue-600 bg-clip-text text-transparent">
                  Training Academy
                </span>
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your career with our intensive <span className="font-semibold text-gray-900">8-week financial data engineering program</span>. From zero to placement-ready.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: '🎓', label: 'Government Certified', value: 'Skill India' },
                  { icon: '⏱️', label: 'Duration', value: '8 Weeks' },
                  { icon: '👥', label: 'Batch Size', value: 'Max 10' },
                  { icon: '💼', label: 'Job Assistance', value: 'Included' }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                    <div className="font-bold text-gray-900">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/academy"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                >
                  Enroll Now
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/academy"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all border-2 border-gray-200"
                >
                  Download Syllabus
                </Link>
              </div>
            </div>

            {/* Right - Course Features Card */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">What You'll Learn</h3>
                  <div className="w-12 h-12 bg-gradient-to-br from-gb-blue-500 to-gb-blue-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { week: 'Week 1-2', title: 'Financial Systems Basics', progress: 100 },
                    { week: 'Week 3-4', title: 'QuickBooks & Sage Intacct', progress: 100 },
                    { week: 'Week 5-6', title: 'Data Migration Projects', progress: 75 },
                    { week: 'Week 7-8', title: 'Dashboard Development', progress: 50 }
                  ].map((module, index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl p-5 hover:bg-gray-100 transition-colors group">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="text-xs font-semibold text-gb-blue-600 uppercase tracking-wide">{module.week}</div>
                          <div className="text-base font-bold text-gray-900 mt-1">{module.title}</div>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-gb-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-gb-blue-500 to-gb-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${module.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500">Investment</div>
                      <div className="text-3xl font-bold text-gray-900">₹12,000</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Next Batch</div>
                      <div className="text-lg font-bold text-gb-orange-600">Starting Soon</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-gb-orange-400 to-gb-orange-500 text-white px-6 py-3 rounded-full shadow-xl transform rotate-3 animate-float">
                <div className="text-xs font-semibold">Limited Seats</div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-8 -left-8 w-32 h-32 bg-green-200 rounded-full blur-2xl opacity-50 animate-float" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Projects Completed', icon: '🚀' },
              { value: '99.9%', label: 'Data Accuracy', icon: '🎯' },
              { value: '24/7', label: 'Support Available', icon: '⚡' },
              { value: '2M+', label: 'Records Migrated', icon: '📊' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-gb-blue-400 to-gb-orange-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gb-blue-600 to-gb-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yLTEuOCA0LTQgNHMtNC0xLjgtNC00IDEuOC00IDQtNCA0IDEuOCA0IDR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Ready to Transform Your Financial Data?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join 50+ businesses that trust GyaanByte Labs for their financial data infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gb-blue-700 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              Get Free Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all border-2 border-white/30"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
