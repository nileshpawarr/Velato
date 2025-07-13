import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lock, Truck, CreditCard, MapPin } from 'lucide-react';

const CheckoutPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    shippingMethod: 'standard',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const mockOrderSummary = {
    items: [
      { id: '1', name: 'Silk Evening Dress', price: 2450, quantity: 1, image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
      { id: '2', name: 'Cashmere Blazer', price: 1850, quantity: 1, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    ],
    subtotal: 4300,
    shipping: 0,
    tax: 344,
    total: 4644
  };

  const steps = [
    { id: 1, title: 'Information', icon: MapPin },
    { id: 2, title: 'Shipping', icon: Truck },
    { id: 3, title: 'Payment', icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-luxury-cream-50">
      <div className="container-max section-padding py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/cart"
            className="inline-flex items-center text-luxury-charcoal-600 hover:text-luxury-gold-600 transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Cart
          </Link>
          <div className="flex items-center gap-2 text-luxury-charcoal-600">
            <Lock size={16} />
            <span className="text-sm">Secure Checkout</span>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className={`flex items-center space-x-3 ${
                    currentStep >= step.id ? 'text-luxury-gold-600' : 'text-luxury-charcoal-400'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      currentStep >= step.id
                        ? 'border-luxury-gold-500 bg-luxury-gold-500 text-white'
                        : 'border-luxury-charcoal-300 text-luxury-charcoal-400'
                    }`}
                  >
                    <Icon size={16} />
                  </div>
                  <span className="font-medium">{step.title}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div className="bg-white border border-luxury-cream-200 p-8">
            <h1 className="text-2xl font-serif font-bold text-luxury-charcoal-900 mb-6">
              Checkout
            </h1>

            {/* Step 1: Customer Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-medium text-luxury-charcoal-900 mb-4">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-luxury-cream-300 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-medium text-luxury-charcoal-900 mb-4">
                    Shipping Address
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-luxury-cream-300 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-luxury-cream-300 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-luxury-cream-300 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-luxury-cream-300 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-luxury-cream-300 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-luxury-cream-300 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                        Country
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-luxury-cream-300 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500"
                      >
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Italy">Italy</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setCurrentStep(2)}
                  className="w-full btn-primary"
                >
                  Continue to Shipping
                </button>
              </div>
            )}

            {/* Step 2: Shipping Method */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-luxury-charcoal-900 mb-4">
                  Shipping Method
                </h2>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border border-luxury-cream-300 cursor-pointer hover:border-luxury-gold-500 transition-colors duration-200">
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="standard"
                      checked={formData.shippingMethod === 'standard'}
                      onChange={handleInputChange}
                      className="mr-3 text-luxury-gold-500 focus:ring-luxury-gold-500"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-medium text-luxury-charcoal-900">Standard Shipping</span>
                        <span className="text-luxury-charcoal-600">Free</span>
                      </div>
                      <p className="text-sm text-luxury-charcoal-600">5-7 business days</p>
                    </div>
                  </label>
                  <label className="flex items-center p-4 border border-luxury-cream-300 cursor-pointer hover:border-luxury-gold-500 transition-colors duration-200">
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="express"
                      checked={formData.shippingMethod === 'express'}
                      onChange={handleInputChange}
                      className="mr-3 text-luxury-gold-500 focus:ring-luxury-gold-500"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-medium text-luxury-charcoal-900">Express Shipping</span>
                        <span className="text-luxury-charcoal-600">$25</span>
                      </div>
                      <p className="text-sm text-luxury-charcoal-600">2-3 business days</p>
                    </div>
                  </label>
                  <label className="flex items-center p-4 border border-luxury-cream-300 cursor-pointer hover:border-luxury-gold-500 transition-colors duration-200">
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="overnight"
                      checked={formData.shippingMethod === 'overnight'}
                      onChange={handleInputChange}
                      className="mr-3 text-luxury-gold-500 focus:ring-luxury-gold-500"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-medium text-luxury-charcoal-900">Overnight Shipping</span>
                        <span className="text-luxury-charcoal-600">$50</span>
                      </div>
                      <p className="text-sm text-luxury-charcoal-600">Next business day</p>
                    </div>
                  </label>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="flex-1 btn-ghost"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="flex-1 btn-primary"
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-luxury-charcoal-900 mb-4">
                  Payment Information
                </h2>
                
                <div className="space-y-3">
                  <label className="flex items-center p-4 border border-luxury-cream-300 cursor-pointer hover:border-luxury-gold-500 transition-colors duration-200">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                      className="mr-3 text-luxury-gold-500 focus:ring-luxury-gold-500"
                    />
                    <span className="font-medium text-luxury-charcoal-900">Credit Card</span>
                  </label>
                  <label className="flex items-center p-4 border border-luxury-cream-300 cursor-pointer hover:border-luxury-gold-500 transition-colors duration-200">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleInputChange}
                      className="mr-3 text-luxury-gold-500 focus:ring-luxury-gold-500"
                    />
                    <span className="font-medium text-luxury-charcoal-900">PayPal</span>
                  </label>
                </div>

                {formData.paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-3 py-2 border border-luxury-cream-300 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          className="w-full px-3 py-2 border border-luxury-cream-300 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          className="w-full px-3 py-2 border border-luxury-cream-300 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        name="nameOnCard"
                        value={formData.nameOnCard}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-luxury-cream-300 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500"
                        required
                      />
                    </div>
                  </div>
                )}

                <div className="flex gap-4">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="flex-1 btn-ghost"
                  >
                    Back
                  </button>
                  <button className="flex-1 btn-primary">
                    Complete Order
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-white border border-luxury-cream-200 p-8 h-fit sticky top-8">
            <h2 className="text-xl font-serif font-bold text-luxury-charcoal-900 mb-6">
              Order Summary
            </h2>
            
            <div className="space-y-4 mb-6">
              {mockOrderSummary.items.map(item => (
                <div key={item.id} className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover border border-luxury-cream-200"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-luxury-charcoal-900">{item.name}</h3>
                    <p className="text-sm text-luxury-charcoal-600">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-medium text-luxury-charcoal-900">
                    ${item.price.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t border-luxury-cream-200 pt-4">
              <div className="flex justify-between">
                <span className="text-luxury-charcoal-600">Subtotal</span>
                <span className="text-luxury-charcoal-900">${mockOrderSummary.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-luxury-charcoal-600">Shipping</span>
                <span className="text-luxury-charcoal-900">
                  {mockOrderSummary.shipping === 0 ? 'Free' : `$${mockOrderSummary.shipping}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-luxury-charcoal-600">Tax</span>
                <span className="text-luxury-charcoal-900">${mockOrderSummary.tax}</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t border-luxury-cream-200 pt-3">
                <span className="text-luxury-charcoal-900">Total</span>
                <span className="text-luxury-charcoal-900">${mockOrderSummary.total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage; 