import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface ProductGridProps {
  title: string;
  products: Product[];
  viewAllLink?: string;
  className?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  title, 
  products, 
  viewAllLink = '/products',
  className = ''
}) => {
  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-luxury-charcoal-900 mb-4">
              {title}
            </h2>
            <p className="text-luxury-charcoal-600 text-lg font-light max-w-2xl">
              Discover our curated collection of luxury fashion pieces, carefully selected for their exceptional quality and timeless elegance.
            </p>
          </div>
          
          {/* View All Button */}
          <div className="mt-6 lg:mt-0">
            <Link
              to={viewAllLink}
              className="inline-flex items-center text-luxury-charcoal-700 hover:text-luxury-gold-600 font-medium tracking-wide transition-colors duration-200 group"
            >
              View All
              <ChevronRight 
                size={20} 
                className="ml-2 transition-transform duration-200 group-hover:translate-x-1" 
              />
            </Link>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              className="animate-fade-in"
            />
          ))}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-luxury-charcoal-600 text-lg font-light">
              No products found.
            </p>
          </div>
        )}

        {/* Load More Button - for pagination */}
        {products.length > 0 && (
          <div className="text-center mt-12">
            <button className="btn-ghost">
              Load More Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid; 