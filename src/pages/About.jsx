import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gb-blue to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              About GyaanByte Labs
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Engineering Innovation. Powered by Future Talent.
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Bridging US Accounting Standards with Indian Engineering Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                GyaanByte Labs is a government-recognized innovative startup specializing in financial data engineering solutions. We combine deep technical expertise with a commitment to developing India's next generation of data professionals.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2025 and headquartered in Rohtak, Haryana, we serve clients across the United States and India, delivering world-class data migration, integration, and business intelligence solutions.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-gb-blue">2025</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gb-blue">$3K-8K</div>
                  <div className="text-sm text-gray-600">Project Range</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gb-blue">US + India</div>
                  <div className="text-sm text-gray-600">Markets Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gb-blue">2</div>
                  <div className="text-sm text-gray-600">Govt Certifications</div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Government Recognition</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Startup India Recognized</p>
                      <p className="text-sm text-gray-600">Certificate No: DIPP228466</p>
                      <p className="text-sm text-gray-600">Issued by: Department for Promotion of Industry and Internal Trade</p>
                      <p className="text-sm text-gray-600">Sector: Big Data & Analytics</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Skill India Training Partner</p>
                      <p className="text-sm text-gray-600">Ministry of Skill Development & Entrepreneurship</p>
                      <p className="text-sm text-gray-600">Government of India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Leadership</h2>
            <p className="mt-4 text-lg text-gray-600">
              Experienced professionals driving innovation in financial data engineering
            </p>
          </div>

          {/* CEO Profile */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-gb-blue to-blue-700 p-8 text-white flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-5xl font-bold text-gb-blue">DJ</span>
                  </div>
                  <h3 className="text-2xl font-bold">Divyanshu Jangra</h3>
                  <p className="text-blue-100 mt-2">Founder & CEO</p>
                  <div className="mt-4">
                    <a
                      href="https://www.linkedin.com/in/divyanshu-jangra/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
                    >
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    With expertise in financial data engineering and experience from Accenture, Divyanshu founded GyaanByte Labs to deliver world-class data migration and integration solutions for businesses across the United States and India.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Currently pursuing an Executive MTech in Big Data & Blockchain from IIT Patna, he combines academic knowledge with hands-on industry experience to solve complex financial data challenges.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Education & Credentials</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-gb-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900">Executive MTech, Big Data & Blockchain</p>
                        <p className="text-sm text-gray-600">Indian Institute of Technology, Patna</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-gb-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900">Ex-Accenture</p>
                        <p className="text-sm text-gray-600">Led IOCL project, specialized in data engineering</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Core Expertise</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">Sage Intacct</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">QuickBooks</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">Data Migration</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">ETL Engineering</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">Business Intelligence</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">Cloud Integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notable Client Experience */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Track Record of Excellence</h2>
            <p className="mt-4 text-lg text-gray-600">
              Experience serving premier organizations across sectors
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-gb-blue mb-2">Ex-Accenture</div>
              <p className="text-gray-600">Top-tier consulting experience with Fortune 500 clients</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-gb-blue mb-2">IOCL Project</div>
              <p className="text-gray-600">Indian Oil Corporation Limited - India's premier PSU</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-gb-blue mb-2">US Clients</div>
              <p className="text-gray-600">Leading data migrations for New York-based firms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                To become the leading financial data engineering company bridging US accounting standards with Indian engineering talent, while training the next generation of data professionals.
              </p>
              <p className="text-lg text-gray-600">
                We believe in delivering excellence through technical precision, client collaboration, and continuous innovation.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our Values</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-gb-blue text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Excellence</h3>
                    <p className="text-gray-600">Delivering top-tier solutions with precision and reliability</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-gb-blue text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Talent Development</h3>
                    <p className="text-gray-600">Building India's future workforce in data engineering</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-gb-blue text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Innovation</h3>
                    <p className="text-gray-600">Leveraging cutting-edge technologies to solve complex problems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-gb-blue to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Work with Us?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can solve your financial data challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-gb-blue transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-gb-blue font-semibold rounded-md hover:bg-blue-50 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
