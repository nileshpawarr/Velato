import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { banners } from '../data/dummyData';

const HeroBanner: React.FC = () => {
  const activeBanner = banners.find(banner => banner.isActive) || banners[0];

  return (
    <section className="relative overflow-hidden bg-luxury-cream-50">
      {/* Background Image */}
      <div className="absolute inset-0">
        <picture>
          <source 
            media="(min-width: 768px)" 
            srcSet={activeBanner.image}
          />
          <img
            src={activeBanner.mobileImage || activeBanner.image}
            alt={activeBanner.title}
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-luxury-charcoal-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative container-max section-padding">
        <div className="flex items-center min-h-[60vh] lg:min-h-[80vh]">
          <div className="max-w-2xl text-white animate-fade-in">
            {/* Subtitle */}
            {activeBanner.subtitle && (
              <p className="text-luxury-gold-400 font-light text-lg lg:text-xl mb-4 tracking-wide uppercase">
                {activeBanner.subtitle}
              </p>
            )}

            {/* Title */}
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-serif font-bold mb-6 leading-tight">
              {activeBanner.title}
            </h1>

            {/* Description */}
            {activeBanner.description && (
              <p className="text-lg lg:text-xl mb-8 font-light leading-relaxed text-luxury-cream-100 max-w-xl">
                {activeBanner.description}
              </p>
            )}

            {/* CTA Button */}
            {activeBanner.buttonText && (
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={activeBanner.link || '/products'}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-luxury-charcoal-800 font-medium tracking-wide uppercase transition-all duration-300 hover:bg-luxury-gold-500 hover:text-luxury-charcoal-900 focus:outline-none focus:ring-2 focus:ring-luxury-gold-500 focus:ring-offset-2 group"
                >
                  {activeBanner.buttonText}
                  <ChevronRight 
                    size={20} 
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                  />
                </Link>
                
                <Link
                  to="/new-arrivals"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white hover:text-luxury-charcoal-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 group"
                >
                  New Arrivals
                  <ChevronRight 
                    size={20} 
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner; 