import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Heart, ShoppingCart, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import { products } from '../data/dummyData';
import { Product, Size, Color } from '../types';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold text-luxury-charcoal-900 mb-4">
            Product Not Found
          </h2>
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    console.log('Added to cart:', { product, selectedSize, selectedColor, quantity });
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="container-max section-padding py-6">
        <div className="flex items-center space-x-2 text-sm text-luxury-charcoal-600">
          <Link to="/" className="hover:text-luxury-gold-600">Home</Link>
          <span>/</span>
          <Link to={`/${product.category}`} className="hover:text-luxury-gold-600 capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-luxury-charcoal-900">{product.name}</span>
        </div>
      </div>

      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/5] bg-luxury-cream-100 rounded-none overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Image Thumbnails */}
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-none w-20 h-20 rounded-none overflow-hidden border-2 transition-colors duration-200 ${
                    selectedImage === index ? 'border-luxury-gold-500' : 'border-luxury-cream-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Back Button */}
            <Link
              to="/"
              className="inline-flex items-center text-luxury-charcoal-600 hover:text-luxury-gold-600 transition-colors duration-200"
            >
              <ChevronLeft size={20} className="mr-2" />
              Back to Products
            </Link>

            {/* Product Info */}
            <div>
              <p className="text-luxury-charcoal-600 text-sm font-medium mb-2 tracking-wide uppercase">
                {product.brand}
              </p>
              <h1 className="text-3xl lg:text-4xl font-serif font-bold text-luxury-charcoal-900 mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? 'text-luxury-gold-500 fill-current' : 'text-luxury-cream-300'}
                    />
                  ))}
                </div>
                <span className="text-luxury-charcoal-600 text-sm">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-luxury-charcoal-900">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-luxury-charcoal-500 line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                    <span className="px-2 py-1 bg-red-100 text-red-600 text-sm font-medium rounded-full">
                      -{discountPercentage}%
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-medium text-luxury-charcoal-900 mb-3">
                Color: {selectedColor?.name || 'Select Color'}
              </h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    disabled={!color.inStock}
                    className={`w-12 h-12 rounded-full border-2 transition-all duration-200 ${
                      selectedColor?.id === color.id
                        ? 'border-luxury-gold-500 ring-2 ring-luxury-gold-200'
                        : 'border-luxury-cream-300 hover:border-luxury-gold-300'
                    } ${!color.inStock ? 'opacity-50 cursor-not-allowed' : ''}`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-medium text-luxury-charcoal-900 mb-3">
                Size: {selectedSize?.name || 'Select Size'}
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size)}
                    disabled={!size.inStock}
                    className={`py-3 px-4 border transition-all duration-200 font-medium ${
                      selectedSize?.id === size.id
                        ? 'border-luxury-gold-500 bg-luxury-gold-50 text-luxury-gold-700'
                        : 'border-luxury-cream-300 text-luxury-charcoal-700 hover:border-luxury-gold-300'
                    } ${!size.inStock ? 'opacity-50 cursor-not-allowed bg-luxury-cream-50' : ''}`}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-medium text-luxury-charcoal-900 mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-luxury-cream-300 rounded-none">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-luxury-charcoal-600 hover:text-luxury-charcoal-900 transition-colors duration-200"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-luxury-charcoal-900 font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-luxury-charcoal-600 hover:text-luxury-charcoal-900 transition-colors duration-200"
                  >
                    +
                  </button>
                </div>
                <span className="text-luxury-charcoal-600 text-sm">
                  {product.stock} in stock
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 btn-primary flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button
                onClick={handleWishlist}
                className={`px-4 py-3 border border-luxury-charcoal-800 rounded-none transition-all duration-200 ${
                  isWishlisted
                    ? 'bg-red-50 border-red-500 text-red-600'
                    : 'text-luxury-charcoal-800 hover:bg-luxury-charcoal-800 hover:text-white'
                }`}
              >
                <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-luxury-cream-200">
              <div className="flex items-center gap-3">
                <Truck size={20} className="text-luxury-gold-500" />
                <span className="text-sm text-luxury-charcoal-600">Free shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield size={20} className="text-luxury-gold-500" />
                <span className="text-sm text-luxury-charcoal-600">2-year warranty</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw size={20} className="text-luxury-gold-500" />
                <span className="text-sm text-luxury-charcoal-600">30-day returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-luxury-cream-200">
            <nav className="flex space-x-8">
              {['description', 'details', 'care', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors duration-200 ${
                    activeTab === tab
                      ? 'border-luxury-gold-500 text-luxury-gold-600'
                      : 'border-transparent text-luxury-charcoal-600 hover:text-luxury-charcoal-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose prose-lg max-w-none">
                <p className="text-luxury-charcoal-700 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}
            
            {activeTab === 'details' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-luxury-charcoal-900 mb-4">Product Details</h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-luxury-charcoal-600 font-medium">Material</dt>
                      <dd className="text-luxury-charcoal-900">{product.material}</dd>
                    </div>
                    <div>
                      <dt className="text-luxury-charcoal-600 font-medium">Brand</dt>
                      <dd className="text-luxury-charcoal-900">{product.brand}</dd>
                    </div>
                    <div>
                      <dt className="text-luxury-charcoal-600 font-medium">Category</dt>
                      <dd className="text-luxury-charcoal-900 capitalize">{product.category}</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-luxury-charcoal-900 mb-4">Available Sizes</h3>
                  <div className="space-y-2">
                    {product.sizes.map((size) => (
                      <div key={size.id} className="flex justify-between">
                        <span className="text-luxury-charcoal-700">{size.name}</span>
                        <span className={`text-sm ${size.inStock ? 'text-green-600' : 'text-red-600'}`}>
                          {size.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'care' && (
              <div>
                <h3 className="text-lg font-medium text-luxury-charcoal-900 mb-4">Care Instructions</h3>
                <ul className="space-y-2">
                  {product.care.map((instruction, index) => (
                    <li key={index} className="text-luxury-charcoal-700 flex items-start">
                      <span className="w-2 h-2 bg-luxury-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-lg font-medium text-luxury-charcoal-900 mb-4">Customer Reviews</h3>
                <div className="text-center py-8 text-luxury-charcoal-600">
                  <p>Reviews feature coming soon!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage; 