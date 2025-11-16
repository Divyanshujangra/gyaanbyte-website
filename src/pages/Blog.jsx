import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Blog"
        description="Insights, tips, and updates on financial data engineering, QuickBooks migrations, Sage Intacct integrations, and data transformation best practices."
        keywords="financial data engineering blog, quickbooks tips, sage intacct insights, data migration guide, ETL processes"
        canonical="/blog"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gb-blue to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              GyaanByte Blog
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Insights, tips, and updates on financial data engineering
            </p>
          </div>
        </div>
      </div>

      {/* Coming Soon Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <svg className="w-20 h-20 text-gb-blue mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Blog Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We're preparing valuable content on financial data engineering, migration best practices, and industry insights.
            </p>
            <p className="text-gray-600 mb-8">
              Stay tuned for regular updates on data engineering trends, migration tips, and case studies from our projects.
            </p>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
              <p className="text-lg font-semibold text-gb-blue mb-2">Coming Topics</p>
              <ul className="text-left text-gray-700 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>QuickBooks vs Sage Intacct: Which is Right for Your Business?</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>5 Critical Steps for a Successful Data Migration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Understanding ETL Processes in Financial Systems</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Career Path: Becoming a Data Engineer in India</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/academy"
                className="inline-flex items-center justify-center px-6 py-3 bg-gb-blue text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
              >
                Explore Training Academy
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gb-blue text-gb-blue font-semibold rounded-md hover:bg-blue-50 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Get Notified When We Launch
          </h3>
          <p className="text-gray-600 mb-8">
            Want to be the first to read our content? Contact us and we'll let you know when the blog is live.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors"
          >
            Stay Updated
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
