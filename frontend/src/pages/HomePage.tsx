import React from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import CategoryNavigation from '../components/CategoryNavigation';
import ProductGrid from '../components/ProductGrid';
import { featuredProducts } from '../data/dummyData';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Banner */}
      <HeroBanner />
      
      {/* Featured Products */}
      <ProductGrid 
        title="Featured Collection"
        products={featuredProducts}
        viewAllLink="/featured"
        className="bg-white"
      />
      
      {/* Category Navigation */}
      <CategoryNavigation />
      
      {/* New Arrivals */}
      <ProductGrid 
        title="New Arrivals"
        products={featuredProducts.slice(0, 4)}
        viewAllLink="/new-arrivals"
        className="bg-white"
      />
      
      {/* Newsletter Section */}
      <section className="py-16 lg:py-24 bg-luxury-charcoal-900">
        <div className="container-max section-padding">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
              Stay In Touch
            </h2>
            <p className="text-luxury-cream-200 text-lg font-light mb-8">
              Be the first to know about new collections, exclusive offers, and fashion insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white text-luxury-charcoal-800 placeholder-luxury-charcoal-500 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500"
              />
              <button className="btn-secondary whitespace-nowrap">
                Subscribe
              </button>
            </div>
            
            <p className="text-luxury-cream-300 text-sm mt-4">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-charcoal-800 text-white py-16">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-gradient-gold mb-4">
                Velato
              </h3>
              <p className="text-luxury-cream-200 mb-4">
                Luxury fashion redefined. Discover timeless pieces that embody sophistication and elegance.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-luxury-cream-200 hover:text-luxury-gold-400 transition-colors duration-200">
                  Instagram
                </a>
                <a href="#" className="text-luxury-cream-200 hover:text-luxury-gold-400 transition-colors duration-200">
                  Facebook
                </a>
                <a href="#" className="text-luxury-cream-200 hover:text-luxury-gold-400 transition-colors duration-200">
                  Twitter
                </a>
              </div>
            </div>
            
            {/* Shop */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><Link to="/women" className="text-luxury-cream-200 hover:text-luxury-gold-400 transition-colors duration-200">Women</Link></li>
                <li><Link to="/men" className="text-luxury-cream-200 hover:text-luxury-gold-400 transition-colors duration-200">Men</Link></li>
                <li><Link to="/accessories" className="text-luxury-cream-200 hover:text-luxury-gold-400 transition-colors duration-200">Accessories</Link></li>
                <li><Link to="/new-arrivals" className="text-luxury-cream-200 hover:text-luxury-gold-400 transition-colors duration-200">New Arrivals</Link></li>
                <li><Link to="/sale" className="text-luxury-cream-200 hover:text-luxury-gold-400 transition-colors duration-200">Sale</Link></li>
              </ul>
            </div>
            
            {/* Customer Service */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-luxury-cream-200 hover:text-luxury-gold-400 transition-colors duration-200">Contact Us</Link></li>
                <li><Link to="/shipping" className="text-luxury-cream-200 hover:text-luxury-gold-400 transition-colors duration-200">Shipping Info</Link></li>
                <li><Link to="/returns" className="text-luxury-cream-200 hover:text-luxury-gold-400 transition-colors duration-200">Returns</Link></li>
                <li><Link to="/size-guide" className="text-luxury-cream-200 hover:text-luxury-gold-400 transition-colors duration-200">Size Guide</Link></li>
                <li><Link to="/faq" className="text-luxury-cream-200 hover:text-luxury-gold-400 transition-colors duration-200">FAQ</Link></li>
              </ul>
            </div>
            
            {/* About */}
            <div>
              <h4 className="text-lg font-semibold mb-4">About</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-luxury-cream-200 hover:text-luxury-gold-400 transition-colors duration-200">Our Story</Link></li>
                <li><Link to="/careers" className="text-luxury-cream-200 hover:text-luxury-gold-400 transition-colors duration-200">Careers</Link></li>
                <li><Link to="/sustainability" className="text-luxury-cream-200 hover:text-luxury-gold-400 transition-colors duration-200">Sustainability</Link></li>
                <li><Link to="/press" className="text-luxury-cream-200 hover:text-luxury-gold-400 transition-colors duration-200">Press</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-luxury-charcoal-700 mt-12 pt-8 text-center">
            <p className="text-luxury-cream-300 text-sm">
              © 2024 Velato. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage; 