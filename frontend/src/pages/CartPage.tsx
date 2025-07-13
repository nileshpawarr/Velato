import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, X, ShoppingBag, ArrowLeft } from 'lucide-react';
import { products } from '../data/dummyData';
import { CartItem } from '../types';

const CartPage: React.FC = () => {
  // Mock cart items (in a real app, this would come from context/state management)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      product: products[0],
      quantity: 2,
      selectedSize: products[0].sizes[1],
      selectedColor: products[0].colors[0],
      addedAt: new Date(),
    },
    {
      id: '2',
      product: products[1],
      quantity: 1,
      selectedSize: products[1].sizes[0],
      selectedColor: products[1].colors[0],
      addedAt: new Date(),
    },
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-luxury-cream-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag size={64} className="mx-auto text-luxury-charcoal-400 mb-4" />
          <h2 className="text-2xl font-serif font-bold text-luxury-charcoal-900 mb-4">
            Your cart is empty
          </h2>
          <p className="text-luxury-charcoal-600 mb-6">
            Discover our luxury collection and add items to your cart.
          </p>
          <Link to="/" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury-cream-50">
      <div className="container-max section-padding py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-serif font-bold text-luxury-charcoal-900 mb-2">
              Shopping Cart
            </h1>
            <p className="text-luxury-charcoal-600">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center text-luxury-charcoal-600 hover:text-luxury-gold-600 transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Continue Shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white border border-luxury-cream-200 p-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full sm:w-32 h-40 object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 space-y-4">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-luxury-charcoal-900">
                          <Link 
                            to={`/product/${item.product.id}`}
                            className="hover:text-luxury-gold-600 transition-colors duration-200"
                          >
                            {item.product.name}
                          </Link>
                        </h3>
                        <p className="text-luxury-charcoal-600 text-sm uppercase tracking-wide">
                          {item.product.brand}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-luxury-charcoal-400 hover:text-red-500 transition-colors duration-200"
                        aria-label="Remove item"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    {/* Size and Color */}
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-luxury-charcoal-600">Size:</span>
                        <span className="font-medium text-luxury-charcoal-900">
                          {item.selectedSize.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-luxury-charcoal-600">Color:</span>
                        <div className="flex items-center gap-2">
                          <div
                            className="w-4 h-4 rounded-full border border-luxury-cream-300"
                            style={{ backgroundColor: item.selectedColor.hex }}
                          />
                          <span className="font-medium text-luxury-charcoal-900">
                            {item.selectedColor.name}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Quantity and Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-luxury-cream-300 rounded-none">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-2 text-luxury-charcoal-600 hover:text-luxury-charcoal-900 transition-colors duration-200"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-2 text-luxury-charcoal-900 font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-2 text-luxury-charcoal-600 hover:text-luxury-charcoal-900 transition-colors duration-200"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-luxury-charcoal-900">
                          ${(item.product.price * item.quantity).toLocaleString()}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-sm text-luxury-charcoal-600">
                            ${item.product.price.toLocaleString()} each
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-luxury-cream-200 p-6 sticky top-8">
              <h2 className="text-xl font-serif font-bold text-luxury-charcoal-900 mb-6">
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-luxury-charcoal-600">Subtotal</span>
                  <span className="text-luxury-charcoal-900 font-medium">
                    ${subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-luxury-charcoal-600">Shipping</span>
                  <span className="text-luxury-charcoal-900 font-medium">
                    {shipping === 0 ? 'Free' : `$${shipping.toLocaleString()}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-luxury-charcoal-600">Tax</span>
                  <span className="text-luxury-charcoal-900 font-medium">
                    ${tax.toFixed(2)}
                  </span>
                </div>
                <div className="border-t border-luxury-cream-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-medium text-luxury-charcoal-900">Total</span>
                    <span className="text-xl font-bold text-luxury-charcoal-900">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-luxury-charcoal-900 mb-2">
                  Promo Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 px-3 py-2 border border-luxury-cream-300 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500 text-luxury-charcoal-800"
                  />
                  <button className="btn-ghost px-4 py-2 text-sm">
                    Apply
                  </button>
                </div>
              </div>

              {/* Checkout Button */}
              <Link to="/checkout" className="block w-full btn-primary text-center mb-4">
                Proceed to Checkout
              </Link>

              {/* Security Info */}
              <div className="text-center text-sm text-luxury-charcoal-600">
                <p className="mb-2">🔒 Secure checkout</p>
                <p>Free shipping on orders over $500</p>
              </div>
            </div>
          </div>
        </div>

        {/* You might also like */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold text-luxury-charcoal-900 mb-8">
            You might also like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(2, 6).map(product => (
              <div key={product.id} className="bg-white border border-luxury-cream-200 p-4">
                <Link to={`/product/${product.id}`} className="block group">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4 group-hover:opacity-90 transition-opacity duration-200"
                  />
                  <h3 className="font-medium text-luxury-charcoal-900 mb-2 group-hover:text-luxury-gold-600 transition-colors duration-200">
                    {product.name}
                  </h3>
                  <p className="text-luxury-charcoal-900 font-bold">
                    ${product.price.toLocaleString()}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage; 