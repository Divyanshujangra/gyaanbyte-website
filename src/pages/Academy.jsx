import React from 'react';
import { Link } from 'react-router-dom';

const Academy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-gb-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">
                Skill India Training Partner
              </span>
            </div>
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              GyaanByte Training Academy
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Government-certified data engineering program | Build real-world skills
            </p>
          </div>
        </div>
      </div>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                8-Week Data Engineering Program
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Our intensive training program is designed to transform beginners into job-ready data engineers with hands-on experience in financial data systems.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                As a Skill India certified training partner, we combine classroom learning with real-world projects, giving you the skills employers actually need.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-green-600">8 Weeks</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">₹12,000</div>
                  <div className="text-sm text-gray-600">Program Fee</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">Hands-On</div>
                  <div className="text-sm text-gray-600">Real Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">Certified</div>
                  <div className="text-sm text-gray-600">Skill India</div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Learn</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Financial data systems (Sage Intacct, QuickBooks)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">ETL processes and data pipelines</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">SQL, Python, and data transformation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Business intelligence and dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Real-world project experience</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Why Train with GyaanByte Labs?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real Projects</h3>
              <p className="text-gray-600">Work on actual client projects during training, not just theory</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Performance Scorecard</h3>
              <p className="text-gray-600">Track your progress and qualify for internship opportunities</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Direct Path to Jobs</h3>
              <p className="text-gray-600">Top performers get internship offers from GyaanByte Labs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Status */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Next Batch Starting Soon
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're currently accepting applications for our upcoming pilot batch. Limited seats available for our introductory program.
          </p>
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-8">
            <p className="text-lg font-semibold text-green-900 mb-2">Early Bird Offer</p>
            <p className="text-gray-700">First batch participants get special pricing and priority consideration for internship positions</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Academy;
