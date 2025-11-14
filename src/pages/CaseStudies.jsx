import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gb-blue to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              Case Studies
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Real-world success stories from our client projects
            </p>
          </div>
        </div>
      </div>

      {/* Coming Soon Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <svg className="w-20 h-20 text-gb-blue mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Case Studies Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We're currently working on documenting our client success stories. As a newly launched government-recognized startup, we're actively building our portfolio of case studies.
            </p>
            <p className="text-gray-600 mb-8">
              In the meantime, feel free to learn about our services or get in touch to discuss how we can help with your financial data challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-6 py-3 bg-gb-blue text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
              >
                View Our Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gb-blue text-gb-blue font-semibold rounded-md hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            What Our Future Case Studies Will Cover
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gb-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Migration Projects</h4>
              <p className="text-gray-600">Detailed insights into QuickBooks to Sage Intacct migrations</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gb-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Time Saved</h4>
              <p className="text-gray-600">Quantifiable results and efficiency improvements achieved</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gb-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Client Testimonials</h4>
              <p className="text-gray-600">Feedback and recommendations from satisfied clients</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
