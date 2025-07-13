import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/dummyData';

const CategoryNavigation: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-luxury-cream-50">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-luxury-charcoal-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-luxury-charcoal-600 text-lg font-light max-w-2xl mx-auto">
            Explore our carefully curated collections, from timeless classics to contemporary designs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/${category.slug}`}
              className="group relative overflow-hidden bg-white rounded-none shadow-luxury hover:shadow-luxury-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Category Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-luxury-charcoal-900/20 group-hover:bg-luxury-charcoal-900/40 transition-colors duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                  <span className="text-luxury-charcoal-700 text-sm font-medium">
                    {category.productCount} items
                  </span>
                </div>
              </div>

              {/* Category Info */}
              <div className="p-6">
                <h3 className="text-xl lg:text-2xl font-serif font-bold text-luxury-charcoal-900 mb-2 group-hover:text-luxury-gold-600 transition-colors duration-200">
                  {category.name}
                </h3>
                
                {category.description && (
                  <p className="text-luxury-charcoal-600 text-sm mb-4 line-clamp-2">
                    {category.description}
                  </p>
                )}

                {/* Subcategories */}
                {category.subcategories && category.subcategories.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {category.subcategories.slice(0, 3).map((subcategory) => (
                        <span
                          key={subcategory.id}
                          className="px-2 py-1 bg-luxury-cream-100 text-luxury-charcoal-600 text-xs rounded-full"
                        >
                          {subcategory.name}
                        </span>
                      ))}
                      {category.subcategories.length > 3 && (
                        <span className="px-2 py-1 bg-luxury-cream-100 text-luxury-charcoal-600 text-xs rounded-full">
                          +{category.subcategories.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Shop Button */}
                <div className="flex items-center justify-between">
                  <span className="text-luxury-charcoal-700 font-medium tracking-wide group-hover:text-luxury-gold-600 transition-colors duration-200">
                    Shop Now
                  </span>
                  <ArrowRight 
                    size={20} 
                    className="text-luxury-charcoal-700 group-hover:text-luxury-gold-600 group-hover:translate-x-1 transition-all duration-200" 
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Categories Carousel - Mobile */}
        <div className="mt-12 md:hidden">
          <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
            {categories.map((category) => (
              <Link
                key={`mobile-${category.id}`}
                to={`/${category.slug}`}
                className="flex-none w-48 group"
              >
                <div className="relative aspect-square overflow-hidden rounded-none mb-3">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-luxury-charcoal-900/20 group-hover:bg-luxury-charcoal-900/40 transition-colors duration-300"></div>
                </div>
                <h4 className="text-center text-luxury-charcoal-900 font-medium group-hover:text-luxury-gold-600 transition-colors duration-200">
                  {category.name}
                </h4>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-serif font-bold text-luxury-charcoal-900 mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-luxury-charcoal-600 mb-6">
            Browse our complete collection or contact our style consultants for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-primary">
              Browse All Products
            </Link>
            <Link to="/contact" className="btn-ghost">
              Style Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryNavigation; 