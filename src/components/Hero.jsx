import { memo } from 'react';
import { Link } from 'react-router-dom';
import { LightningIcon, GlobeIcon, MoneyIcon, TargetIcon } from './Icons';

const Hero = memo(() => {
  return (
    <div className="relative bg-gradient-to-br from-gb-blue-50 via-white to-gb-orange-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-gb-blue-200/20 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-gb-orange-200/20 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            {/* Government Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm text-blue-800 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Startup India
              </div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100/80 backdrop-blur-sm text-green-800 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Skill India Partner
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              <span className="block text-gray-900">Transform Your</span>
              <span className="block bg-gradient-to-r from-gb-blue-600 to-gb-orange-500 bg-clip-text text-transparent">
                Financial Data
              </span>
              <span className="block text-gray-900">Infrastructure</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Expert <span className="font-semibold text-gray-900">QuickBooks migrations</span>, <span className="font-semibold text-gray-900">Sage Intacct integrations</span>, and custom financial dashboards for growing businesses.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-gb-blue-600 to-gb-blue-700 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Get Free Consultation</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gb-blue-700 bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 border-2 border-gb-blue-100"
              >
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: LightningIcon, label: 'Fast Delivery' },
                { icon: GlobeIcon, label: 'US Standards' },
                { icon: MoneyIcon, label: 'Cost Efficient' },
                { icon: TargetIcon, label: '99.9% Accuracy' }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <IconComponent className="w-6 h-6 text-gb-blue-600" />
                    <span className="font-medium text-gray-700">{item.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Professional Credentials */}
            <div className="mt-6 pt-6 sm:mt-8 sm:pt-8 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Founded by</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gb-blue-500 rounded-full"></span>
                  <span>Ex-Accenture</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gb-blue-500 rounded-full"></span>
                  <span>IIT</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gb-blue-500 rounded-full"></span>
                  <span>US & India Markets</span>
                </div>
              </div>
            </div>
          </div>

{/* Right Side - Interactive Dashboard Preview */}
<div className="relative lg:h-[550px] animate-slide-up" style={{animationDelay: '0.2s'}}>
  {/* Floating badge - positioned above card */}
  <div className="absolute -top-8 -right-8 bg-gradient-to-br from-gb-orange-400 to-gb-orange-500 text-white px-7 py-3.5 rounded-full shadow-2xl transform rotate-3 hover:rotate-0 transition-transform z-20">
    <div className="text-sm font-bold whitespace-nowrap">Live Demo</div>
  </div>

            {/* Main glass card */}
            <div className="relative h-full bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl rounded-3xl p-4 sm:p-6 lg:p-8 shadow-glass-lg border border-white/30">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Financial Dashboard</h3>
                  <p className="text-sm text-gray-600 mt-1">Real-time insights</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center shadow-lg animate-float">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="space-y-4">
                {/* Revenue Card */}
                <div className="bg-gradient-to-br from-gb-blue-500 to-gb-blue-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-transform">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium opacity-90">Monthly Revenue</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">+12%</span>
                  </div>
                  <div className="text-4xl font-bold mb-1">$45,230</div>
                  <div className="text-sm opacity-75">↑ $4,892 from last month</div>
                </div>

                {/* Two column grid */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Active Projects */}
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-gb-orange-500 mb-2">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">127</div>
                    <div className="text-sm text-gray-600">Active Clients</div>
                  </div>

                  {/* Accuracy */}
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-green-500 mb-2">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">99.8%</div>
                    <div className="text-sm text-gray-600">Data Accuracy</div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 shadow-md">
                  <div className="text-sm font-semibold text-gray-900 mb-3">Recent Activity</div>
                  <div className="space-y-3">
                    {[
                      { label: 'QuickBooks Migration', status: 'Completed', colorClass: 'bg-green-100 text-green-700' },
                      { label: 'Dashboard Setup', status: 'In Progress', colorClass: 'bg-blue-100 text-blue-700' },
                      { label: 'Data Validation', status: 'Scheduled', colorClass: 'bg-gray-100 text-gray-700' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">{item.label}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.colorClass}`}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-8 -left-8 w-32 h-32 bg-gb-blue-200 rounded-full blur-2xl opacity-50 animate-float"></div>
            <div className="absolute -z-10 -bottom-8 -right-8 w-40 h-40 bg-gb-orange-200 rounded-full blur-2xl opacity-50 animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';

export default Hero;
