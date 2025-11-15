import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Services = () => {
  const services = [
    {
      id: 'migration-qb-sage',
      title: "QuickBooks to Sage Intacct Migration",
      shortDesc: "Enterprise-grade migration with zero data loss",
      description: "Seamlessly migrate your financial data from QuickBooks to Sage Intacct with our battle-tested process. Trusted by US businesses for accurate, secure transitions.",
      features: [
        "Complete GL, AP, AR, Inventory migration",
        "Custom field mapping & validation",
        "Historical data preservation (unlimited years)",
        "US accounting standards compliance",
        "Dedicated project manager",
        "30-day post-migration support"
      ],
      pricing: "$3,000 - $5,000",
      timeline: "4-6 weeks",
      icon: "🔄",
      color: "from-gb-blue-500 to-gb-blue-700"
    },
    {
      id: 'migration-sage-qb',
      title: "Sage Intacct to QuickBooks Migration",
      shortDesc: "Reverse migration with data integrity guarantee",
      description: "Moving back to QuickBooks? Our proven reverse migration process ensures all your Sage Intacct data transfers smoothly with 99.9% accuracy.",
      features: [
        "Full data extraction & transformation",
        "Chart of accounts restructuring",
        "Transaction history (all periods)",
        "Reconciliation & validation reports",
        "User training sessions included",
        "Knowledge transfer documentation"
      ],
      pricing: "$3,000 - $5,000",
      timeline: "4-6 weeks",
      icon: "↩️",
      color: "from-gb-orange-500 to-gb-orange-700"
    },
    {
      id: 'dashboards',
      title: "Financial Dashboards",
      shortDesc: "Real-time insights for better decisions",
      description: "Custom-built dashboards that turn your financial data into actionable insights. Beautiful, fast, and tailored to your business needs.",
      features: [
        "Real-time KPI tracking",
        "Multi-source data integration",
        "Automated report generation",
        "Mobile-responsive design",
        "Drill-down capabilities",
        "White-label options available"
      ],
      pricing: "$2,000 - $8,000",
      timeline: "2-4 weeks",
      icon: "📊",
      color: "from-green-500 to-emerald-700"
    },
    {
      id: 'integration',
      title: "System Integration & ETL",
      shortDesc: "Connect your systems, automate workflows",
      description: "Break down data silos. Our custom integrations connect QuickBooks, Sage Intacct, CRMs, and other business tools for seamless data flow.",
      features: [
        "API integrations (Sage, QB, Salesforce, etc.)",
        "Automated data pipelines",
        "Real-time sync capabilities",
        "Error handling & monitoring",
        "Scalable cloud architecture",
        "Ongoing maintenance included"
      ],
      pricing: "$2,000 - $6,000",
      timeline: "3-5 weeks",
      icon: "🔗",
      color: "from-purple-500 to-indigo-700"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Services"
        description="QuickBooks to Sage Intacct migration ($3K-5K), Financial Dashboards ($2K-8K), System Integration & ETL. Transparent pricing, clear timelines, 99.9% accuracy guaranteed."
        keywords="quickbooks migration, sage intacct migration, financial dashboards, system integration, etl services, data migration pricing, accounting software migration"
        canonical="/services"
      />
      {/* Hero Section - Emphasize Trust */}
      <section className="relative bg-gradient-to-br from-gb-blue-600 via-gb-blue-700 to-gb-blue-900 text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yLTEuOCA0LTQgNHMtNC0xLjgtNC00IDEuOC00IDQtNCA0IDEuOCA0IDR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            {/* Trust badges */}
            <div className="flex justify-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Startup India Certified
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Ex-Accenture Led
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Financial Data Engineering <br />
              <span className="text-gb-orange-400">You Can Trust</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Government-recognized expertise. US quality standards. <br className="hidden sm:block" />
              Indian cost advantage. Zero compromises.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-sm text-blue-200">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">99.9%</div>
                <div className="text-sm text-blue-200">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">$3K</div>
                <div className="text-sm text-blue-200">Starting At</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparent pricing. Clear timelines. No surprises.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${service.color} p-4 sm:p-6 text-white`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-5xl">{service.icon}</span>
                    <span className="px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                      {service.timeline}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90">{service.shortDesc}</p>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
                      What's Included:
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-6 flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Investment</div>
                      <div className="text-2xl font-bold text-gray-900">{service.pricing}</div>
                    </div>
                    <Link
                      to="/contact"
                      className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
                    >
                      Get Quote
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose GyaanByte - Emphasize Unique Value */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Why <span className="text-gb-blue-600">GyaanByte</span> Labs?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your partner in financial data excellence, delivering measurable results through proven expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Government Recognition */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Government Validated</h3>
              <p className="text-gray-600 leading-relaxed">
                Startup India certified (DIPP228466) & Skill India training partner.
                Official recognition of our quality and innovation.
              </p>
            </div>

            {/* Founder Expertise */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gb-orange-500 to-gb-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Founded by Ex-Accenture professional with IIT Patna MTech.
                Enterprise experience meets entrepreneurial agility.
              </p>
            </div>

            {/* US-India Bridge */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best of Both Worlds</h3>
              <p className="text-gray-600 leading-relaxed">
                US accounting standards & quality. Indian engineering talent & pricing.
                You get premium service at 40-60% lower cost.
              </p>
            </div>

            {/* Transparent Process */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Surprises</h3>
              <p className="text-gray-600 leading-relaxed">
                Fixed pricing. Clear timelines. Weekly progress updates.
                You know exactly what you're getting and when.
              </p>
            </div>

            {/* Data Security */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bank-Level Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Your financial data is sacred. SSL encryption, secure servers,
                NDAs signed. SOC 2 compliant processes.
              </p>
            </div>

            {/* Personal Touch */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Founder-Led Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Not a faceless corporation. Direct access to the founder.
                We're invested in your success, not just the contract.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Building Section - Process */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600">
              Battle-tested on 50+ projects. Refined to perfection.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Free consultation. Understand your needs, timeline, budget.' },
              { step: '02', title: 'Planning', desc: 'Detailed project plan. Mapping, validation strategy, timeline.' },
              { step: '03', title: 'Execution', desc: 'Migration/development. Weekly updates. Your approval at each stage.' },
              { step: '04', title: 'Support', desc: '30-day warranty. Training. Documentation. Always available.' }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-5xl font-bold text-gb-blue-200 mb-4">{phase.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-gray-600">{phase.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gb-blue-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-gb-blue-600 to-gb-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Let's Discuss Your Project
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Schedule a complimentary 30-minute consultation to discuss your requirements
            and explore how we can help achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-gb-blue-700 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              Schedule Free Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="mailto:divyanshu.jangra@gyaanbytelabs.com"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all border-2 border-white/30"
            >
              Email Us Directly
            </a>
          </div>

          <p className="mt-8 text-sm text-blue-200">
            Average response time: &lt; 4 hours (Mon-Sat, 9 AM - 6 PM IST)
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
