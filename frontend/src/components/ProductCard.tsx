import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // Add to cart logic here
    console.log('Added to cart:', product.id);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    // Quick view logic here
    console.log('Quick view:', product.id);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className={`card-luxury group cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-3 py-1 bg-luxury-gold-500 text-luxury-charcoal-900 text-xs font-medium uppercase tracking-wide">
              New
            </span>
          )}
          {product.isOnSale && discountPercentage > 0 && (
            <span className="px-3 py-1 bg-red-500 text-white text-xs font-medium uppercase tracking-wide">
              -{discountPercentage}%
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={handleWishlist}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
              isWishlisted 
                ? 'bg-red-500 text-white' 
                : 'bg-white/90 text-luxury-charcoal-700 hover:bg-white hover:text-red-500'
            }`}
          >
            <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
          
          <button
            onClick={handleQuickView}
            className="w-10 h-10 rounded-full bg-white/90 text-luxury-charcoal-700 hover:bg-white hover:text-luxury-gold-600 flex items-center justify-center transition-all duration-200"
          >
            <Eye size={16} />
          </button>
        </div>

        {/* Image Navigation Dots */}
        {product.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {product.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentImageIndex 
                    ? 'bg-white' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        )}

        {/* Add to Cart Button - appears on hover */}
        <div className={`absolute bottom-4 inset-x-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-luxury-charcoal-800 text-white font-medium tracking-wide uppercase transition-all duration-300 hover:bg-luxury-gold-500 hover:text-luxury-charcoal-900 flex items-center justify-center gap-2"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Brand */}
        <p className="text-luxury-charcoal-600 text-sm font-medium mb-2 tracking-wide uppercase">
          {product.brand}
        </p>

        {/* Name */}
        <h3 className="text-luxury-charcoal-900 text-lg font-medium mb-2 line-clamp-2 group-hover:text-luxury-gold-600 transition-colors duration-200">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? 'text-luxury-gold-500 fill-current' : 'text-luxury-cream-300'}
              />
            ))}
          </div>
          <span className="text-luxury-charcoal-600 text-sm">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-luxury-charcoal-900 text-xl font-semibold">
            ${product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-luxury-charcoal-500 text-sm line-through">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Available Colors */}
        {product.colors.length > 0 && (
          <div className="flex items-center gap-2 mb-4">
            <span className="text-luxury-charcoal-600 text-sm">Colors:</span>
            <div className="flex gap-1">
              {product.colors.slice(0, 4).map((color) => (
                <div
                  key={color.id}
                  className={`w-4 h-4 rounded-full border-2 ${
                    color.inStock ? 'border-luxury-cream-300' : 'border-luxury-cream-200 opacity-50'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-luxury-charcoal-600 text-sm">+{product.colors.length - 4}</span>
              )}
            </div>
          </div>
        )}

        {/* Material */}
        <p className="text-luxury-charcoal-600 text-sm">
          {product.material}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard; 