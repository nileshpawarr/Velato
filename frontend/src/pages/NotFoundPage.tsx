import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-luxury-cream-50 flex items-center justify-center">
      <div className="container-max section-padding py-16">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl lg:text-[12rem] font-serif font-bold text-luxury-charcoal-200 leading-none">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-luxury-charcoal-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-luxury-charcoal-600 leading-relaxed">
              We're sorry, but the page you're looking for doesn't exist. 
              It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Navigation Options */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <Link
              to="/"
              className="flex flex-col items-center p-6 bg-white border border-luxury-cream-200 hover:border-luxury-gold-500 hover:bg-luxury-gold-50 transition-all duration-200 group"
            >
              <Home size={32} className="text-luxury-charcoal-600 group-hover:text-luxury-gold-600 mb-3" />
              <span className="font-medium text-luxury-charcoal-900 group-hover:text-luxury-gold-600">
                Go Home
              </span>
              <span className="text-sm text-luxury-charcoal-600 mt-1">
                Return to homepage
              </span>
            </Link>

            <Link
              to="/search"
              className="flex flex-col items-center p-6 bg-white border border-luxury-cream-200 hover:border-luxury-gold-500 hover:bg-luxury-gold-50 transition-all duration-200 group"
            >
              <Search size={32} className="text-luxury-charcoal-600 group-hover:text-luxury-gold-600 mb-3" />
              <span className="font-medium text-luxury-charcoal-900 group-hover:text-luxury-gold-600">
                Search
              </span>
              <span className="text-sm text-luxury-charcoal-600 mt-1">
                Find what you need
              </span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="flex flex-col items-center p-6 bg-white border border-luxury-cream-200 hover:border-luxury-gold-500 hover:bg-luxury-gold-50 transition-all duration-200 group"
            >
              <ArrowLeft size={32} className="text-luxury-charcoal-600 group-hover:text-luxury-gold-600 mb-3" />
              <span className="font-medium text-luxury-charcoal-900 group-hover:text-luxury-gold-600">
                Go Back
              </span>
              <span className="text-sm text-luxury-charcoal-600 mt-1">
                Previous page
              </span>
            </button>
          </div>

          {/* Popular Links */}
          <div className="mb-8">
            <h3 className="text-xl font-serif font-bold text-luxury-charcoal-900 mb-4">
              Popular Pages
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/women"
                className="px-4 py-2 bg-white border border-luxury-cream-300 text-luxury-charcoal-700 hover:border-luxury-gold-500 hover:text-luxury-gold-600 transition-colors duration-200"
              >
                Women's Collection
              </Link>
              <Link
                to="/men"
                className="px-4 py-2 bg-white border border-luxury-cream-300 text-luxury-charcoal-700 hover:border-luxury-gold-500 hover:text-luxury-gold-600 transition-colors duration-200"
              >
                Men's Collection
              </Link>
              <Link
                to="/new-arrivals"
                className="px-4 py-2 bg-white border border-luxury-cream-300 text-luxury-charcoal-700 hover:border-luxury-gold-500 hover:text-luxury-gold-600 transition-colors duration-200"
              >
                New Arrivals
              </Link>
              <Link
                to="/accessories"
                className="px-4 py-2 bg-white border border-luxury-cream-300 text-luxury-charcoal-700 hover:border-luxury-gold-500 hover:text-luxury-gold-600 transition-colors duration-200"
              >
                Accessories
              </Link>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-white border border-luxury-cream-200 p-8">
            <h3 className="text-lg font-serif font-bold text-luxury-charcoal-900 mb-4">
              Need Help?
            </h3>
            <p className="text-luxury-charcoal-600 mb-4">
              If you believe this is an error or need assistance finding what you're looking for, 
              our customer service team is here to help.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-block"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage; 