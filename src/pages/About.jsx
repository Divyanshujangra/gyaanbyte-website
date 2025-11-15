import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About Us"
        description="Learn about GyaanByte Labs - Founded by Ex-Accenture professionals with IIT Patna MTech. Startup India & Skill India certified. Bridging US accounting standards with Indian engineering excellence."
        keywords="about gyaanbyte, startup india, skill india, ex-accenture, IIT patna, financial data engineering company, divyanshu jangra"
        canonical="/about"
      />
      {/* Hero Section - Story Introduction */}
      <section className="relative bg-gradient-to-br from-gb-blue-600 via-gb-blue-700 to-gray-900 text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yLTEuOCA0LTQgNHMtNC0xLjgtNC00IDEuOC00IDQtNCA0IDEuOCA0IDR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 text-sm font-semibold">
            <span>🇮🇳</span>
            <span>Est. 2025 · Rohtak, Haryana</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Built by Engineers, <br />
            <span className="text-gb-orange-400">For Engineers</span>
          </h1>

          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            From Accenture boardrooms to Indian classrooms, GyaanByte Labs bridges
            US accounting standards with Indian engineering excellence.
          </p>

          <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: 'Founded', value: '2025' },
              { label: 'Projects', value: '50+' },
              { label: 'Certifications', value: '2 Govt' },
              { label: 'Markets', value: 'US + IN' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Founder Image/Icon */}
            <div className="lg:col-span-2 mb-10 lg:mb-0">
              <div className="bg-gradient-to-br from-gb-blue-500 to-gb-blue-700 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
                <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-6xl font-bold text-gb-blue">DJ</span>
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">Divyanshu Jangra</h3>
                <p className="text-blue-100 text-center mb-6">Founder & CEO</p>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Ex-Accenture (IOCL Project Lead)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>IIT Patna Executive MTech</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Financial Data Engineering Expert</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <a
                    href="https://www.linkedin.com/in/divyanshu-jangra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-gb-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Story */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                The GyaanByte Story
              </h2>

              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p className="text-lg leading-relaxed">
                  After leading major data engineering projects at <span className="font-semibold text-gray-900">Accenture</span> for
                  Fortune 500 clients like Indian Oil Corporation, Divyanshu saw a gap in the market.
                </p>

                <p className="text-lg leading-relaxed">
                  US businesses needed <span className="font-semibold text-gray-900">high-quality financial data migration</span> and
                  integration services, but couldn't justify the $20K-50K+ price tags from big consulting firms for
                  straightforward QuickBooks or Sage Intacct projects.
                </p>

                <p className="text-lg leading-relaxed">
                  Meanwhile, talented Indian engineers with MTech degrees were struggling to find meaningful
                  work in specialized domains like financial data engineering.
                </p>

                <div className="bg-gb-blue-50 border-l-4 border-gb-blue-500 p-4 sm:p-6 my-6">
                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    "Why not bridge both worlds?"
                  </p>
                  <p className="text-gray-700">
                    Deliver US-quality financial data services at 40-60% lower cost while training
                    India's next generation of data professionals.
                  </p>
                </div>

                <p className="text-lg leading-relaxed">
                  In <span className="font-semibold text-gray-900">August 2025</span>, GyaanByte Labs was born in Rohtak, Haryana.
                  Within months, we secured <span className="font-semibold text-gray-900">Startup India recognition</span> (DIPP228466)
                  and became a <span className="font-semibold text-gray-900">Skill India training partner</span>.
                </p>

                <p className="text-lg leading-relaxed">
                  Today, we're not just a services company. We're building an ecosystem where:
                </p>

                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gb-orange-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>US businesses get enterprise-quality services at startup-friendly prices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gb-orange-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Indian engineers gain hands-on experience in specialized financial tech</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gb-orange-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Our training academy creates a talent pipeline for the industry</span>
                  </li>
                </ul>

                <p className="text-lg leading-relaxed font-semibold text-gray-900">
                  We're not just migrating data. We're building bridges between continents,
                  careers, and opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Recognition */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Government <span className="text-gb-blue-600">Validated</span> Quality
            </h2>
            <p className="text-xl text-gray-600">
              Official recognition from Government of India for innovation and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Startup India */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 border-2 border-blue-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Startup India</h3>
                  <p className="text-sm text-gray-600">Official Recognition</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-700">
                <div><span className="font-semibold">Certificate:</span> DIPP228466</div>
                <div><span className="font-semibold">Issued By:</span> Department for Promotion of Industry & Internal Trade</div>
                <div><span className="font-semibold">Ministry:</span> Commerce & Industry, Govt. of India</div>
                <div><span className="font-semibold">Sector:</span> Big Data & Analytics</div>
                <div><span className="font-semibold">Valid Till:</span> August 2035</div>
              </div>

              <div className="mt-6 pt-6 border-t border-blue-200">
                <p className="text-sm text-gray-600">
                  This certification validates GyaanByte Labs as an innovative startup
                  recognized for quality and innovation in the Analytics sector.
                </p>
              </div>
            </div>

            {/* Skill India */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 sm:p-8 border-2 border-green-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Skill India</h3>
                  <p className="text-sm text-gray-600">Training Partner</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-700">
                <div><span className="font-semibold">Status:</span> Certified Training Provider</div>
                <div><span className="font-semibold">Ministry:</span> Skill Development & Entrepreneurship</div>
                <div><span className="font-semibold">Government:</span> Government of India</div>
                <div><span className="font-semibold">Focus:</span> Financial Data Engineering</div>
                <div><span className="font-semibold">Certificates:</span> Government-recognized credentials</div>
              </div>

              <div className="mt-6 pt-6 border-t border-green-200">
                <p className="text-sm text-gray-600">
                  Authorized to provide government-recognized skill development training
                  and issue Skill India certificates to graduates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Why Clients Trust Us
            </h2>
            <p className="text-xl text-gray-600">
              More than credentials. It's about real results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Academic Excellence</h3>
              <p className="text-gray-600">
                IIT Patna Executive MTech in Big Data & Blockchain.
                Cutting-edge knowledge meets practical application.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Experience</h3>
              <p className="text-gray-600">
                Ex-Accenture professional. Led IOCL data engineering projects.
                Fortune 500 standards, startup agility.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Founder-Led</h3>
              <p className="text-gray-600">
                Not a faceless corporation. Direct access to the founder.
                Your success is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gb-blue-600 to-gb-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-3xl font-extrabold mb-6">Our Mission</h2>
              <p className="text-lg text-blue-100 leading-relaxed">
                To become the leading financial data engineering company bridging
                US accounting standards with Indian engineering talent, while training
                the next generation of data professionals.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold mb-6">Our Vision</h2>
              <p className="text-lg text-blue-100 leading-relaxed">
                A world where geographical boundaries don't limit access to
                quality financial data services, and where talented engineers
                anywhere can build meaningful careers in specialized domains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
            Want to Be Part of the Story?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Whether you're a business looking for reliable data services or
            an engineer eager to learn, we'd love to connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gb-blue-600 rounded-xl shadow-lg hover:bg-gb-blue-700 transform hover:-translate-y-0.5 transition-all"
            >
              Work With Us
            </Link>
            <Link
              to="/academy"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gb-blue-700 bg-white rounded-xl shadow-lg hover:bg-gray-50 transform hover:-translate-y-0.5 transition-all border-2 border-gb-blue-200"
            >
              Join Our Academy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
