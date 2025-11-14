import React from 'react';
import { Link } from 'react-router-dom';

const Academy = () => {
  const curriculum = [
    {
      week: 'Week 1-2',
      title: 'Financial Systems Fundamentals',
      topics: ['Accounting basics', 'QuickBooks essentials', 'Sage Intacct overview', 'Data structures'],
      icon: '📚',
      color: 'from-blue-500 to-blue-600'
    },
    {
      week: 'Week 3-4',
      title: 'Data Engineering Core',
      topics: ['SQL & databases', 'Python for data', 'ETL processes', 'API integration'],
      icon: '⚙️',
      color: 'from-purple-500 to-purple-600'
    },
    {
      week: 'Week 5-6',
      title: 'Real-World Projects',
      topics: ['Data migration project', 'Dashboard building', 'Report automation', 'Quality testing'],
      icon: '🚀',
      color: 'from-gb-orange-500 to-gb-orange-600'
    },
    {
      week: 'Week 7-8',
      title: 'Job Readiness',
      topics: ['Portfolio development', 'Interview prep', 'Client communication', 'Industry best practices'],
      icon: '💼',
      color: 'from-green-500 to-green-600'
    }
  ];

  const outcomes = [
    { metric: '8 Weeks', description: 'Intensive Training', icon: '⏱️' },
    { metric: '₹12,000', description: 'Program Fee', icon: '💰' },
    { metric: '100%', description: 'Hands-on Projects', icon: '🛠️' },
    { metric: 'Certified', description: 'Skill India', icon: '🏆' }
  ];

  const benefits = [
    {
      title: 'Learn from Industry Experts',
      description: 'Training led by Ex-Accenture professionals with real-world experience in US & Indian markets',
      icon: '👨‍🏫',
      gradient: 'from-gb-blue-500 to-gb-blue-600'
    },
    {
      title: 'Work on Live Projects',
      description: 'Get hands-on experience with actual client projects, not just dummy exercises',
      icon: '💻',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Performance-Based Internships',
      description: 'Top performers get direct internship offers at GyaanByte Labs with stipend',
      icon: '🎯',
      gradient: 'from-gb-orange-500 to-gb-orange-600'
    },
    {
      title: 'Government Recognized Certificate',
      description: 'Earn Skill India certified credential that adds weight to your resume',
      icon: '📜',
      gradient: 'from-green-500 to-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gb-blue-600 via-gb-blue-700 to-purple-700 text-white py-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-white to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Skill India Badge */}
            <div className="flex justify-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border-2 border-white/30 shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Skill India Training Partner
              </div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border-2 border-white/30 shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                Government Certified
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 animate-slide-up">
              <span className="block">GyaanByte Academy</span>
              <span className="block text-gb-orange-400 mt-2">Learn. Build. Earn.</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              8-week intensive program to become a <span className="font-bold text-white">job-ready financial data engineer</span> — from fundamentals to real-world projects
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gb-blue-700 bg-white rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Apply for Next Batch</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="#curriculum"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-200"
              >
                View Curriculum
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {outcomes.map((outcome, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                  <div className="text-4xl mb-2">{outcome.icon}</div>
                  <div className="text-2xl font-bold mb-1">{outcome.metric}</div>
                  <div className="text-sm text-blue-100">{outcome.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why GyaanByte Academy */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Why Train With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized training focuses on <span className="font-semibold text-gray-900">financial data engineering</span> — a high-demand niche where technical expertise meets business impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className={`bg-gradient-to-r ${benefit.gradient} p-6 text-white`}>
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{benefit.icon}</div>
                    <h3 className="text-2xl font-bold">{benefit.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 text-lg leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Special Callout */}
          <div className="mt-12 bg-gradient-to-br from-gb-orange-50 to-gb-blue-50 rounded-3xl p-8 border-2 border-gb-orange-200">
            <div className="flex items-start gap-4">
              <div className="text-4xl">💡</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">The GyaanByte Advantage</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Unlike generic data science bootcamps, we focus exclusively on <strong>financial data systems</strong> used by real businesses.
                  You'll learn QuickBooks, Sage Intacct, financial reporting — skills that are <strong>immediately employable</strong> and pay ₹4-8 LPA for freshers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              8-Week Learning Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured curriculum designed to take you from beginner to job-ready in just 2 months
            </p>
          </div>

          <div className="space-y-6">
            {curriculum.map((module, index) => (
              <div key={index} className="group bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Icon & Week */}
                  <div className={`flex-shrink-0 bg-gradient-to-br ${module.color} rounded-2xl p-6 text-white text-center shadow-lg`}>
                    <div className="text-5xl mb-2">{module.icon}</div>
                    <div className="text-sm font-semibold">{module.week}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{module.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.map((topic, topicIndex) => (
                        <span key={topicIndex} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Final Project Highlight */}
          <div className="mt-12 bg-gradient-to-br from-gb-blue-500 to-purple-600 rounded-3xl p-10 text-white shadow-2xl">
            <div className="flex items-start gap-6">
              <div className="text-6xl">🏆</div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Capstone Project</h3>
                <p className="text-lg text-blue-100 leading-relaxed mb-6">
                  In the final weeks, you'll work on a <strong className="text-white">real client project</strong> under mentorship.
                  This becomes part of your portfolio and demonstrates job-ready skills to employers.
                </p>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Portfolio-Ready Work
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Path to Employment */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Your Path to Employment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From training to placement: a structured pathway to launch your career in financial data engineering
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-gb-blue-400 to-gb-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg">
                  01
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Learn & Build</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Complete the 8-week program, working on real projects and building your portfolio
                </p>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-gb-orange-400 to-gb-orange-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg">
                  02
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Review</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Get evaluated on project quality, code standards, and client communication skills
                </p>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 shadow-lg text-white">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">
                03
              </div>
              <h3 className="text-2xl font-bold mb-4">Job Placement</h3>
              <p className="text-green-100 text-lg leading-relaxed mb-4">
                Top performers get internship offers at GyaanByte Labs with ₹10-15K/month stipend
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Performance-Based
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-blue-100">
              <h4 className="text-xl font-bold text-gray-900 mb-3">For Top Performers</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Direct internship at GyaanByte Labs</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>₹10-15K/month stipend during internship</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Full-time job consideration after 3-6 months</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-orange-100">
              <h4 className="text-xl font-bold text-gray-900 mb-3">For All Graduates</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Skill India certified credential</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Portfolio-ready capstone project</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Resume review & interview preparation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-20 bg-gradient-to-br from-gb-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Accepting Applications for Next Batch
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Limited seats available. Early applicants get priority consideration for internship positions.
          </p>

          {/* Pricing Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border-2 border-white/30 mb-10 max-w-md mx-auto">
            <div className="text-sm font-semibold text-blue-200 mb-2">Program Fee</div>
            <div className="text-6xl font-extrabold mb-4">₹12,000</div>
            <div className="text-blue-100 mb-6">One-time payment • No hidden costs</div>
            <div className="space-y-2 text-left mb-6">
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>8 weeks intensive training</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Real project experience</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Skill India certificate</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Internship opportunities</span>
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-gb-blue-700 bg-white rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-200"
          >
            <span>Apply Now</span>
            <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <p className="mt-6 text-sm text-blue-200">
            Questions? <Link to="/contact" className="underline hover:text-white">Get in touch</Link> for a free consultation
          </p>
        </div>
      </section>
    </div>
  );
};

export default Academy;
