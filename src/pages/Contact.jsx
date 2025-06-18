import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Helmet>
        <title>Contact Us | Zyro House</title>
        <meta name="description" content="Get in touch with Zyro House - Premier Creator Management Agency" />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
            💬 Let's Connect
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to scale your influence or partner with us? We're here to help turn your creative vision into reality.
          </p>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email Card */}
            <div className="group bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100/50 hover:border-orange-200 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Email Us</h3>
              
              <a href="mailto:zyrohouse@gmail.com" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                zyrohouse@gmail.com
              </a>
            </div>

            {/* Location Card */}
            <div className="group bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100/50 hover:border-orange-200 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Visit Us</h3>
              
              <span className="text-orange-500 font-semibold">Mumbai, India</span>
            </div>

            {/* Social Card */}
            <div className="group bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100/50 hover:border-orange-200 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Follow Us</h3>
              
              <a href="#" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                @zyrohouse
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Send us a Message</h2>
              <p className="text-orange-100 text-lg">We'll get back to you within 24 hours</p>
            </div>
            
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name" 
                      className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-gray-800 placeholder-gray-500 hover:border-orange-300" 
                      required
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com" 
                      className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-gray-800 placeholder-gray-500 hover:border-orange-300" 
                      required
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label className="block text-gray-700 font-medium mb-2">Subject</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-gray-800 hover:border-orange-300"
                    required
                  >
                    <option value="" className="text-gray-500">Select a topic</option>
                    <option value="creator-application">Creator Application</option>
                    <option value="brand-partnership">Brand Partnership</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="support">Support</option>
                  </select>
                </div>
                
                <div className="group">
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    rows="6" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your project or inquiry..." 
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-gray-800 placeholder-gray-500 hover:border-orange-300 resize-none"
                    required
                  ></textarea>
                </div>
                
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-all duration-300"></div>
                  <button 
                    type="submit" 
                    className="relative w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-8 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-orange-400/20"
                  >
                    <span className="flex items-center justify-center gap-3">
                      Send Message
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      

      <Footer />
    </div>
  );
}