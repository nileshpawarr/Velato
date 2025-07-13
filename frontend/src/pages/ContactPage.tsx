import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-luxury-cream-50">
      <div className="container-max section-padding py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-luxury-charcoal-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-luxury-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            We're here to help with any questions about our products, orders, or services. 
            Our luxury concierge team is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white border border-luxury-cream-200 p-8">
            <h2 className="text-2xl font-serif font-bold text-luxury-charcoal-900 mb-6">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-luxury-cream-300 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-luxury-cream-300 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-luxury-cream-300 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500"
                >
                  <option value="general">General Inquiry</option>
                  <option value="order">Order Support</option>
                  <option value="returns">Returns & Exchanges</option>
                  <option value="styling">Personal Styling</option>
                  <option value="wholesale">Wholesale</option>
                  <option value="press">Press & Media</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-luxury-cream-300 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-3 py-2 border border-luxury-cream-300 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500 resize-none"
                  placeholder="Please provide details about your inquiry..."
                  required
                />
              </div>

              <button type="submit" className="w-full btn-primary">
                Send Message
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-luxury-cream-200">
              <p className="text-sm text-luxury-charcoal-600">
                We typically respond within 24 hours during business days. 
                For urgent matters, please call us directly.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Store Locations */}
            <div className="bg-white border border-luxury-cream-200 p-8">
              <h2 className="text-2xl font-serif font-bold text-luxury-charcoal-900 mb-6">
                Visit Our Boutiques
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-luxury-charcoal-900 mb-3">
                    New York Flagship
                  </h3>
                  <div className="space-y-2 text-luxury-charcoal-600">
                    <div className="flex items-start gap-2">
                      <MapPin size={16} className="mt-1 text-luxury-gold-500" />
                      <span>123 Madison Avenue<br />New York, NY 10016</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-luxury-gold-500" />
                      <span>+1 (212) 555-0123</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock size={16} className="mt-1 text-luxury-gold-500" />
                      <div>
                        <div>Mon-Sat: 10:00 AM - 8:00 PM</div>
                        <div>Sunday: 12:00 PM - 6:00 PM</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-luxury-cream-200 pt-6">
                  <h3 className="text-lg font-semibold text-luxury-charcoal-900 mb-3">
                    Beverly Hills
                  </h3>
                  <div className="space-y-2 text-luxury-charcoal-600">
                    <div className="flex items-start gap-2">
                      <MapPin size={16} className="mt-1 text-luxury-gold-500" />
                      <span>456 Rodeo Drive<br />Beverly Hills, CA 90210</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-luxury-gold-500" />
                      <span>+1 (310) 555-0456</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock size={16} className="mt-1 text-luxury-gold-500" />
                      <div>
                        <div>Mon-Sat: 10:00 AM - 9:00 PM</div>
                        <div>Sunday: 11:00 AM - 7:00 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Service */}
            <div className="bg-white border border-luxury-cream-200 p-8">
              <h2 className="text-2xl font-serif font-bold text-luxury-charcoal-900 mb-6">
                Customer Service
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-luxury-gold-500" />
                  <div>
                    <div className="font-medium text-luxury-charcoal-900">Email Support</div>
                    <div className="text-luxury-charcoal-600">support@velato.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-luxury-gold-500" />
                  <div>
                    <div className="font-medium text-luxury-charcoal-900">Phone Support</div>
                    <div className="text-luxury-charcoal-600">+1 (800) VELATO-1</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MessageCircle size={20} className="text-luxury-gold-500" />
                  <div>
                    <div className="font-medium text-luxury-charcoal-900">Live Chat</div>
                    <div className="text-luxury-charcoal-600">Available 9 AM - 6 PM EST</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="bg-luxury-charcoal-900 text-white p-8">
              <h2 className="text-2xl font-serif font-bold mb-6">
                Concierge Services
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-luxury-gold-400 mb-2">
                    Personal Styling
                  </h3>
                  <p className="text-luxury-cream-200 text-sm">
                    Complimentary one-on-one styling sessions with our expert stylists.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-luxury-gold-400 mb-2">
                    Private Appointments
                  </h3>
                  <p className="text-luxury-cream-200 text-sm">
                    Book exclusive shopping experiences at our boutiques.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-luxury-gold-400 mb-2">
                    Worldwide Shipping
                  </h3>
                  <p className="text-luxury-cream-200 text-sm">
                    White-glove delivery service to over 50 countries.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-luxury-gold-400 mb-2">
                    Alterations
                  </h3>
                  <p className="text-luxury-cream-200 text-sm">
                    Expert tailoring services for the perfect fit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-serif font-bold text-luxury-charcoal-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-luxury-charcoal-900 mb-2">
                  What is your return policy?
                </h3>
                <p className="text-luxury-charcoal-600">
                  We offer a 30-day return policy for unworn items in original condition 
                  with tags attached. Custom pieces are final sale.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-luxury-charcoal-900 mb-2">
                  Do you offer international shipping?
                </h3>
                <p className="text-luxury-charcoal-600">
                  Yes, we ship worldwide with complimentary shipping on orders over $500. 
                  Duties and taxes may apply based on destination.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-luxury-charcoal-900 mb-2">
                  How do I schedule a styling appointment?
                </h3>
                <p className="text-luxury-charcoal-600">
                  Contact our concierge team or visit any boutique to schedule a 
                  complimentary personal styling session.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-luxury-charcoal-900 mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-luxury-charcoal-600">
                  We accept all major credit cards, PayPal, Apple Pay, and offer 
                  flexible payment plans through our partners.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-luxury-charcoal-900 mb-2">
                  Do you offer gift cards?
                </h3>
                <p className="text-luxury-charcoal-600">
                  Yes, digital and physical gift cards are available in any amount. 
                  Perfect for giving the gift of luxury.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-luxury-charcoal-900 mb-2">
                  How can I track my order?
                </h3>
                <p className="text-luxury-charcoal-600">
                  You'll receive tracking information via email once your order ships. 
                  You can also track orders in your account dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 