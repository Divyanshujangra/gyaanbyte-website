import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 5000);
  };

  const contactMethods = [
    {
      icon: '📞',
      title: 'Call Us',
      primary: '+91 8950 709 015',
      primaryLink: 'tel:+918950709015',
      secondary: 'Mon-Sat, 9AM-6PM IST',
      gradient: 'from-gb-blue-500 to-gb-blue-600'
    },
    {
      icon: '📧',
      title: 'Email Us',
      primary: 'info@gyaanbytelabs.com',
      primaryLink: 'mailto:info@gyaanbytelabs.com',
      secondary: 'sales@gyaanbytelabs.com',
      secondaryLink: 'mailto:sales@gyaanbytelabs.com',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      primary: 'Rohtak, Haryana, India',
      secondary: '1st Floor, Raj Singh Complex',
      gradient: 'from-gb-orange-500 to-gb-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gb-blue-600 via-gb-blue-700 to-purple-700 text-white pt-20 pb-32 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-white to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Response Time Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border-2 border-white/30 shadow-lg mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              We typically respond within 24 hours
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 animate-slide-up">
              <span className="block">Let's Talk About</span>
              <span className="block text-gb-orange-400 mt-2">Your Project</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Schedule a <span className="font-bold text-white">complimentary 30-minute consultation</span> to discuss your financial data infrastructure needs
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 -mt-20 sm:-mt-24 mb-12 sm:mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className={`bg-gradient-to-r ${method.gradient} p-4 sm:p-6 text-white text-center`}>
                  <div className="text-6xl mb-3">{method.icon}</div>
                  <h3 className="text-xl font-bold">{method.title}</h3>
                </div>
                <div className="p-4 sm:p-6 text-center">
                  {method.primaryLink ? (
                    <a href={method.primaryLink} className="text-lg font-semibold text-gray-900 hover:text-gb-blue-600 transition-colors block mb-2">
                      {method.primary}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-gray-900 mb-2">{method.primary}</p>
                  )}
                  {method.secondaryLink ? (
                    <a href={method.secondaryLink} className="text-sm text-gray-600 hover:text-gb-blue-600 transition-colors">
                      {method.secondary}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-600">{method.secondary}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 border border-gray-100">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Send Us a Message</h2>
                <p className="text-gray-600 text-lg">
                  Tell us about your project and we'll get back to you with a detailed proposal and timeline.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-green-900 mb-1">Message Sent Successfully!</p>
                      <p className="text-sm text-green-700">We've received your inquiry and will respond within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gb-blue-500 focus:border-gb-blue-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gb-blue-500 focus:border-gb-blue-500 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gb-blue-500 focus:border-gb-blue-500 transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gb-blue-500 focus:border-gb-blue-500 transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    What are you interested in?
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gb-blue-500 focus:border-gb-blue-500 transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="migration">📦 Data Migration (QuickBooks/Sage)</option>
                    <option value="dashboards">📊 Dashboard Development</option>
                    <option value="integration">🔗 System Integration</option>
                    <option value="consulting">💼 Consulting Services</option>
                    <option value="academy">🎓 Training Academy</option>
                    <option value="other">💬 Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell us about your project <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gb-blue-500 focus:border-gb-blue-500 transition-all resize-none"
                    placeholder="What challenges are you facing? What are your goals?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gb-blue-600 to-gb-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy. We never share your information.
                </p>
              </form>
            </div>

            {/* Right Column - Info Cards */}
            <div className="space-y-6">
              {/* Map */}
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
                <div className="h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486.7234567890123!2d76.58934!3d28.89678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDUzJzQ4LjQiTiA3NsKwMzUnMjEuNiJF!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="GyaanByte Labs Location"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Office</h3>
                  <p className="text-gray-600 mb-3">
                    1st Floor, Raj Singh Complex<br />
                    Near Sheela Bypass Flyover<br />
                    Rohtak 124001, Haryana, India
                  </p>
                  <a
                    href="https://share.google/NAyDAZsXGkJE7Axo9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gb-blue-600 hover:text-gb-blue-700 font-semibold"
                  >
                    <span>View on Maps</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Government Recognition */}
              <div className="bg-gradient-to-br from-gb-blue-50 to-purple-50 rounded-3xl p-8 shadow-lg border-2 border-gb-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="text-2xl">🏛️</span>
                  Government Recognized
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gb-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Startup India Recognized</p>
                      <p className="text-sm text-gray-600">Certificate: DIPP228466</p>
                      <p className="text-xs text-gray-500">Valid till August 2035</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Skill India Training Partner</p>
                      <p className="text-sm text-gray-600">Ministry of Skill Development</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="text-2xl">🕐</span>
                  Business Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Monday - Friday</span>
                    <span className="font-bold text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="font-bold text-gray-900">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="font-bold text-red-600">Closed</span>
                  </div>
                </div>
                <div className="mt-6 bg-gb-blue-50 rounded-xl p-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-gray-900">🌎 International Clients:</span> We serve US clients across all time zones. Calls can be scheduled outside regular hours via email.
                  </p>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-gradient-to-br from-gb-orange-500 to-gb-orange-600 rounded-3xl p-8 text-white shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">⚡</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Quick Response Guaranteed</h3>
                    <p className="text-orange-100 leading-relaxed">
                      Expect a detailed, personalized response within 24 hours from our technical team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Why Contact Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              What Happens Next?
            </h2>
            <p className="text-xl text-gray-600">
              Here's our simple, transparent process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gb-blue-400 to-gb-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                01
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">We Review Your Request</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team carefully reviews every inquiry to understand your specific requirements and technical challenges.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gb-orange-400 to-gb-orange-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                02
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consultation Call</h3>
              <p className="text-gray-600 leading-relaxed">
                We schedule a 30-minute consultation to discuss your project scope, timeline, and budget requirements.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                03
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Detailed Proposal</h3>
              <p className="text-gray-600 leading-relaxed">
                You receive a clear proposal with scope, timeline, pricing, and expected outcomes. No surprises.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-gb-blue-600 hover:text-gb-blue-700 font-semibold text-lg"
            >
              <span>Learn more about our team and process</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
