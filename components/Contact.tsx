'use client';

import { useState, FormEvent } from 'react';
import { FaPaperPlane, FaCheck, FaUser, FaEnvelope, FaComment } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business? Let's discuss your project and bring your ideas to life.
          </p>
        </div>
        
        <div className="card p-8 md:p-12 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-xl rounded-3xl">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
              <p className="text-gray-600 text-lg">
                Thank you for your message! We'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                  <FaUser className="inline w-4 h-4 mr-2 text-sky-500" />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-3 focus:ring-sky-500/20 focus:border-sky-500 transition-all duration-300 bg-white/50 backdrop-blur-sm shadow-sm"
                  placeholder="Your full name"
                />
              </div>
              
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                  <FaEnvelope className="inline w-4 h-4 mr-2 text-sky-500" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-3 focus:ring-sky-500/20 focus:border-sky-500 transition-all duration-300 bg-white/50 backdrop-blur-sm shadow-sm"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="relative">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                  <FaComment className="inline w-4 h-4 mr-2 text-sky-500" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-3 focus:ring-sky-500/20 focus:border-sky-500 transition-all duration-300 bg-white/50 backdrop-blur-sm shadow-sm resize-none"
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-8 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Additional Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
          <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200/50">
            <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="w-6 h-6 text-sky-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
            <p className="text-gray-600">contact@ultraquad.com</p>
          </div>
          
          <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200/50">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUser className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
            <p className="text-gray-600">Within 24 hours</p>
          </div>
          
          <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200/50">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaComment className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
            <p className="text-gray-600">24/7 Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}