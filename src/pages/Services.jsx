import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "QuickBooks to Sage Intacct Migration",
      description: "Seamlessly migrate your financial data from QuickBooks to Sage Intacct with zero data loss and minimal downtime.",
      features: [
        "Complete data migration (GL, AP, AR, Inventory)",
        "Custom field mapping and validation",
        "Historical data preservation",
        "User training and documentation",
        "Post-migration support (30 days)"
      ],
      pricing: "$3,000 - $5,000",
      timeline: "4-6 weeks"
    },
    {
      title: "Sage Intacct to QuickBooks Migration",
      description: "Migrate from Sage Intacct to QuickBooks while maintaining data integrity and business continuity.",
      features: [
        "Full data extraction and transformation",
        "Chart of accounts mapping",
        "Transaction history migration",
        "Reconciliation and validation",
        "Knowledge transfer sessions"
      ],
      pricing: "$3,000 - $5,000",
      timeline: "4-6 weeks"
    },
    {
      title: "Custom Dashboard Development",
      description: "Build powerful, interactive dashboards tailored to your business needs for real-time insights.",
      features: [
        "KPI tracking and visualization",
        "Multi-source data integration",
        "Automated report generation",
        "Mobile-responsive design",
        "Ongoing maintenance and updates"
      ],
      pricing: "$2,000 - $8,000",
      timeline: "2-4 weeks"
    },
    {
      title: "Data Integration & ETL",
      description: "Connect your disparate systems and automate data workflows for improved efficiency.",
      features: [
        "API integrations (Sage, QuickBooks, CRMs)",
        "Automated data pipelines",
        "Data quality checks",
        "Error handling and logging",
        "Scalable cloud architecture"
      ],
      pricing: "$2,000 - $6,000",
      timeline: "3-5 weeks"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gb-blue to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Expert financial data engineering solutions for US and Indian businesses
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Pricing</p>
                      <p className="text-xl font-bold text-gb-blue">{service.pricing}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Timeline</p>
                      <p className="text-lg font-semibold text-gray-900">{service.timeline}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Why Choose GyaanByte Labs?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gb-blue rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Government Recognized</h3>
              <p className="text-gray-600">Startup India certified (DIPP228466) and Skill India training partner</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gb-blue rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">Cost-effective solutions with transparent pricing and no hidden fees</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gb-blue rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">Efficient delivery without compromising quality or data integrity</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-gb-blue to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a free consultation to discuss your project requirements
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-gb-blue transition-colors"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
