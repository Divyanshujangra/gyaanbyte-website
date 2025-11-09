import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="xl:col-span-1">
            <img
              src="/logos/gyaanbyte-logo.svg"
              alt="GyaanByte Labs"
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-500 text-base max-w-md">
              Financial Data Engineering Excellence. Bridging US accounting standards with Indian engineering talent.
            </p>
            <div className="flex space-x-6 mt-6">
              <a href="https://www.linkedin.com/company/gyaanbytelabs/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gb-blue transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:info@gyaanbytelabs.com" className="text-gray-400 hover:text-gb-blue transition-colors">
                <span className="sr-only">Email</span>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Services</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="/services#migration" className="text-base text-gray-500 hover:text-gb-blue">
                      Data Migration
                    </a>
                  </li>
                  <li>
                    <a href="/services#dashboards" className="text-base text-gray-500 hover:text-gb-blue">
                      Dashboard Development
                    </a>
                  </li>
                  <li>
                    <a href="/services#integration" className="text-base text-gray-500 hover:text-gb-blue">
                      System Integration
                    </a>
                  </li>
                  <li>
                    <a href="/services#consulting" className="text-base text-gray-500 hover:text-gb-blue">
                      Consulting
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Academy</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="/academy" className="text-base text-gray-500 hover:text-gb-blue">
                      Training Programs
                    </a>
                  </li>
                  <li>
                    <a href="/academy#curriculum" className="text-base text-gray-500 hover:text-gb-blue">
                      Curriculum
                    </a>
                  </li>
                  <li>
                    <a href="/academy#success" className="text-base text-gray-500 hover:text-gb-blue">
                      Success Stories
                    </a>
                  </li>
                  <li>
                    <a href="/academy#apply" className="text-base text-gray-500 hover:text-gb-blue">
                      Apply Now
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="/about" className="text-base text-gray-500 hover:text-gb-blue">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/case-studies" className="text-base text-gray-500 hover:text-gb-blue">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="text-base text-gray-500 hover:text-gb-blue">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-base text-gray-500 hover:text-gb-blue">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact Info</h3>
                <div className="mt-4 space-y-4">
                  <p className="text-base text-gray-500">
                    1st Floor, Raj Singh Complex<br />
                    Rohtak, Haryana, India
                  </p>
                  <p className="text-base text-gray-500">
                    <a href="mailto:info@gyaanbytelabs.com" className="hover:text-gb-blue transition-colors">
                      info@gyaanbytelabs.com
                    </a>
                  </p>
                  <p className="text-base text-gray-500">
                    Sales: <a href="mailto:sales@gyaanbytelabs.com" className="hover:text-gb-blue transition-colors">
                      sales@gyaanbytelabs.com
                    </a>
                  </p>
                  <p className="text-base text-gray-500">
                    <a href="https://www.gyaanbytelabs.com" className="hover:text-gb-blue transition-colors">
                      www.gyaanbytelabs.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-base text-gray-400">
              &copy; 2025 GyaanByte Labs Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-sm text-gray-400 hover:text-gb-blue">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-gb-blue">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;