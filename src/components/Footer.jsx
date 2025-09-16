import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="xl:col-span-1">
            <div className="text-2xl font-bold text-gb-blue mb-4">
              GyaanByte
              <span className="text-gb-orange text-sm ml-1">Labs</span>
            </div>
            <p className="text-gray-500 text-base max-w-md">
              Financial Data Engineering Excellence. Bridging US accounting standards with Indian engineering talent.
            </p>
            <div className="flex space-x-6 mt-6">
              <a href="#" className="text-gray-400 hover:text-gb-blue">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gb-blue">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
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
                    divya@gyaanbyte.com
                  </p>
                  <p className="text-base text-gray-500">
                    www.gyaanbyte.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-base text-gray-400">
              &copy; 2024 GyaanByte Labs Pvt Ltd. All rights reserved.
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