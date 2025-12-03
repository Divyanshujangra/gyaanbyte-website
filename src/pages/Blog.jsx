import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "50+ Projects Completed: Our Journey in Financial Data Engineering",
      date: "January 2025",
      category: "Milestone",
      excerpt: "From startups to established businesses, we've successfully delivered over 50 projects across multiple industries. Here's what we've learned along the way.",
      image: "📊",
      content: "At GyaanByte Labs, we've had the privilege of working with 30+ clients, completing over 50 projects in financial data engineering. Our expertise spans QuickBooks migrations, Sage Intacct implementations, custom dashboards, and system integrations. Each project has reinforced our commitment to 99.9% data accuracy and zero data loss.",
      stats: ["50+ Projects", "30+ Clients", "2M+ Records Migrated"],
      gradient: "from-gb-blue-600 to-gb-blue-700"
    },
    {
      id: 2,
      title: "Achieving 99.9% Data Accuracy: Our Quality Standards",
      date: "January 2025",
      category: "Quality",
      excerpt: "Data accuracy isn't just a metric—it's our promise. Learn about the rigorous processes that ensure 99.9% accuracy across 2M+ migrated records.",
      image: "🎯",
      content: "With 2 million+ records successfully migrated, maintaining 99.9% accuracy is no accident. Our battle-tested migration process includes multi-layer validation, automated reconciliation, and manual verification. Every project follows US accounting standards and includes comprehensive testing before go-live.",
      stats: ["99.9% Accuracy", "2M+ Records", "Zero Data Loss"],
      gradient: "from-green-600 to-emerald-700"
    },
    {
      id: 3,
      title: "Government Recognition: Startup India & Skill India Certifications",
      date: "January 2025",
      category: "Recognition",
      excerpt: "Official recognition from Government of India validates our commitment to quality, innovation, and skill development in financial technology.",
      image: "🏆",
      content: "GyaanByte Labs is proud to be Startup India certified (DIPP228466) by the Department for Promotion of Industry & Internal Trade. We're also a Skill India partner, contributing to India's skill development in Big Data & Analytics. These certifications validate our quality standards and commitment to excellence.",
      stats: ["Startup India Certified", "Skill India Partner", "Big Data & Analytics"],
      gradient: "from-gb-orange-600 to-gb-orange-700"
    },
    {
      id: 4,
      title: "Training 100+ Engineers: Building India's Data Engineering Talent",
      date: "January 2025",
      category: "Academy",
      excerpt: "Through our 8-week intensive program, we've trained over 100 engineers in financial data engineering, creating career opportunities and industry expertise.",
      image: "🎓",
      content: "Our training academy has successfully trained 100+ engineers in financial data engineering. The 8-week program covers QuickBooks, Sage Intacct, ETL processes, and real-world project experience. Graduates have gone on to work with leading firms, earning ₹3-6 LPA, bridging the gap between education and industry needs.",
      stats: ["100+ Engineers Trained", "8-Week Program", "Job-Ready Skills"],
      gradient: "from-purple-600 to-indigo-700"
    },
    {
      id: 5,
      title: "90% Client Retention: Why Customers Choose to Stay",
      date: "January 2025",
      category: "Success",
      excerpt: "Our 90% repeat client rate speaks volumes about service quality, reliability, and results. Here's what keeps clients coming back.",
      image: "⭐",
      content: "With a 90% repeat client rate, we've built lasting relationships based on trust, transparency, and results. Clients return because we deliver on time, maintain data integrity, provide excellent support, and treat their business like our own. From single migrations to ongoing partnerships, we're committed to long-term success.",
      stats: ["90% Repeat Clients", "30+ Long-term Partners", "24/7 Support"],
      gradient: "from-pink-600 to-rose-700"
    },
    {
      id: 6,
      title: "US Quality, Indian Pricing: The GyaanByte Advantage",
      date: "January 2025",
      category: "Business",
      excerpt: "How we deliver US-standard financial data services at Indian cost advantage—without compromising on quality, security, or compliance.",
      image: "💼",
      content: "Founded by Ex-Accenture professional with IIT Patna MTech credentials, GyaanByte Labs bridges US quality standards with Indian pricing. We follow US accounting standards, maintain SOC 2 compliant processes, and deliver at 40-60% lower cost than US-based firms. This unique positioning makes premium financial data engineering accessible to SMBs.",
      stats: ["US Standards", "40-60% Cost Savings", "Ex-Accenture Led"],
      gradient: "from-blue-600 to-cyan-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Blog - Achievements & Insights"
        description="Read about GyaanByte Labs' journey: 50+ projects, 30+ clients, 100+ engineers trained, 99.9% data accuracy, and government certifications. Insights on financial data engineering excellence."
        keywords="financial data engineering blog, gyaanbyte achievements, quickbooks migration success, sage intacct expertise, data engineering training, startup india certified"
        canonical="/blog"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gb-blue-600 via-gb-blue-700 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20 mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Our Journey & Achievements</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              GyaanByte Labs <span className="text-gb-orange-400">Blog</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stories of excellence in financial data engineering. 50+ projects. 30+ clients. 100+ engineers trained. Government certified.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-gb-blue-600">50+</div>
              <div className="text-sm text-gray-600 mt-1">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">99.9%</div>
              <div className="text-sm text-gray-600 mt-1">Data Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gb-orange-600">100+</div>
              <div className="text-sm text-gray-600 mt-1">Engineers Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">90%</div>
              <div className="text-sm text-gray-600 mt-1">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Our Achievements & Insights
            </h2>
            <p className="text-xl text-gray-600">
              Real stories, real results from the field of financial data engineering.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
              >
                {/* Header with Gradient */}
                <div className={`bg-gradient-to-r ${post.gradient} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-6xl">{post.image}</span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                  <p className="text-sm text-white/80">{post.date}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {post.content}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.stats.map((stat, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <Link
                      to="/contact"
                      className="text-gb-blue-600 hover:text-gb-blue-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                    >
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <span className="text-sm text-gray-500">5 min read</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Government Certifications Section */}
      <section className="py-12 sm:py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Government Recognized Excellence
            </h2>
            <p className="text-xl text-gray-600">
              Official certifications validating our quality and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Startup India Certified</h3>
              <p className="text-gray-700 mb-4">
                Certificate Number: <span className="font-semibold">DIPP228466</span>
              </p>
              <p className="text-gray-600">
                Recognized by Department for Promotion of Industry & Internal Trade, Ministry of Commerce & Industry, Government of India.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 border-2 border-green-200">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Skill India Partner</h3>
              <p className="text-gray-700 mb-4">
                Focus: <span className="font-semibold">Financial Data Engineering</span>
              </p>
              <p className="text-gray-600">
                Certified training provider by Ministry of Skill Development & Entrepreneurship, Government of India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gb-blue-600 to-gb-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join 30+ satisfied clients and experience the GyaanByte difference.
            Government certified. Battle-tested. Results guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-gb-blue-700 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              Get Free Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/academy"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all border-2 border-white/30"
            >
              Explore Training Academy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
