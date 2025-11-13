import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center">
              <img
                src="/logos/gyaanbyte-logo.svg"
                alt="GyaanByte Labs"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/services" className="text-base font-medium text-gray-500 hover:text-gb-blue transition-colors">
              Services
            </Link>
            <Link to="/academy" className="text-base font-medium text-gray-500 hover:text-gb-blue transition-colors">
              Academy
            </Link>
            <Link to="/case-studies" className="text-base font-medium text-gray-500 hover:text-gb-blue transition-colors">
              Case Studies
            </Link>
            <Link to="/about" className="text-base font-medium text-gray-500 hover:text-gb-blue transition-colors">
              About
            </Link>
            <Link to="/blog" className="text-base font-medium text-gray-500 hover:text-gb-blue transition-colors">
              Blog
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              to="/contact"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gb-blue hover:bg-blue-700 transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <img
                  src="/logos/gyaanbyte-logo.svg"
                  alt="GyaanByte Labs"
                  className="h-8 w-auto"
                />
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link to="/services" className="text-base font-medium text-gray-900 hover:text-gb-blue" onClick={() => setIsMenuOpen(false)}>
                    Services
                  </Link>
                  <Link to="/academy" className="text-base font-medium text-gray-900 hover:text-gb-blue" onClick={() => setIsMenuOpen(false)}>
                    Academy
                  </Link>
                  <Link to="/case-studies" className="text-base font-medium text-gray-900 hover:text-gb-blue" onClick={() => setIsMenuOpen(false)}>
                    Case Studies
                  </Link>
                  <Link to="/about" className="text-base font-medium text-gray-900 hover:text-gb-blue" onClick={() => setIsMenuOpen(false)}>
                    About
                  </Link>
                  <Link to="/blog" className="text-base font-medium text-gray-900 hover:text-gb-blue" onClick={() => setIsMenuOpen(false)}>
                    Blog
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gb-blue hover:bg-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;