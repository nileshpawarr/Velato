import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Package, Heart, Settings, CreditCard, MapPin, LogOut } from 'lucide-react';
import { products } from '../data/dummyData';
import { useAuth } from '../context/AuthContext';

const AccountPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const { user, logout } = useAuth();

  // Since this is a protected route, user should always be available
  if (!user) {
    return null; // This shouldn't happen due to ProtectedRoute
  }

  const orders = [
    {
      id: 'VEL-2024-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 2450,
      items: [products[0]]
    },
    {
      id: 'VEL-2024-002',
      date: '2024-01-08',
      status: 'Processing',
      total: 1850,
      items: [products[1]]
    }
  ];

  const wishlistItems = products.slice(0, 4);

  const addresses = [
    {
      id: '1',
      type: 'Home',
      name: 'Isabella Chen',
      street: '123 Madison Avenue',
      city: 'New York',
      state: 'NY',
      zipCode: '10016',
      country: 'United States',
      isDefault: true
    },
    {
      id: '2',
      type: 'Office',
      name: 'Isabella Chen',
      street: '456 Park Avenue',
      city: 'New York',
      state: 'NY',
      zipCode: '10022',
      country: 'United States',
      isDefault: false
    }
  ];

  const paymentMethods = [
    {
      id: '1',
      type: 'Visa',
      last4: '4242',
      expiryMonth: '12',
      expiryYear: '2026',
      isDefault: true
    },
    {
      id: '2',
      type: 'Mastercard',
      last4: '8888',
      expiryMonth: '06',
      expiryYear: '2025',
      isDefault: false
    }
  ];

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-luxury-cream-50">
      <div className="container-max section-padding py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <img
              src={user.avatar}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-16 h-16 rounded-full object-cover border-2 border-luxury-gold-200"
            />
            <div>
              <h1 className="text-2xl lg:text-3xl font-serif font-bold text-luxury-charcoal-900">
                Welcome back, {user.firstName}
              </h1>
              <p className="text-luxury-charcoal-600">
                Member since {user.joinDate}
              </p>
            </div>
          </div>
          <button 
            onClick={logout}
            className="flex items-center gap-2 text-luxury-charcoal-600 hover:text-luxury-gold-600 transition-colors duration-200"
          >
            <LogOut size={20} />
            Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="bg-white border border-luxury-cream-200 p-6">
              <ul className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <li key={tab.id}>
                      <button
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-none transition-colors duration-200 ${
                          activeTab === tab.id
                            ? 'bg-luxury-gold-50 text-luxury-gold-700 border-r-2 border-luxury-gold-500'
                            : 'text-luxury-charcoal-700 hover:bg-luxury-cream-50'
                        }`}
                      >
                        <Icon size={20} />
                        {tab.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-luxury-cream-200 p-6">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-xl font-serif font-bold text-luxury-charcoal-900 mb-6">
                    Profile Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={user.firstName}
                        className="w-full px-3 py-2 border border-luxury-cream-300 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={user.lastName}
                        className="w-full px-3 py-2 border border-luxury-cream-300 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={user.email}
                        className="w-full px-3 py-2 border border-luxury-cream-300 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={user.phone}
                        className="w-full px-3 py-2 border border-luxury-cream-300 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="btn-primary">
                      Edit Profile
                    </button>
                  </div>
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-xl font-serif font-bold text-luxury-charcoal-900 mb-6">
                    Order History
                  </h2>
                  <div className="space-y-4">
                    {orders.map(order => (
                      <div key={order.id} className="border border-luxury-cream-200 p-4">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-medium text-luxury-charcoal-900">
                              Order #{order.id}
                            </h3>
                            <p className="text-sm text-luxury-charcoal-600">
                              Placed on {new Date(order.date).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              order.status === 'Delivered' 
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {order.status}
                            </span>
                            <p className="text-lg font-bold text-luxury-charcoal-900 mt-1">
                              ${order.total.toLocaleString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          {order.items.map(item => (
                            <Link
                              key={item.id}
                              to={`/product/${item.id}`}
                              className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200"
                            >
                              <img
                                src={item.images[0]}
                                alt={item.name}
                                className="w-16 h-16 object-cover"
                              />
                              <div>
                                <p className="font-medium text-luxury-charcoal-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-luxury-charcoal-600">
                                  ${item.price.toLocaleString()}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Wishlist Tab */}
              {activeTab === 'wishlist' && (
                <div>
                  <h2 className="text-xl font-serif font-bold text-luxury-charcoal-900 mb-6">
                    Your Wishlist
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {wishlistItems.map(item => (
                      <div key={item.id} className="border border-luxury-cream-200 p-4">
                        <Link to={`/product/${item.id}`} className="block group">
                          <img
                            src={item.images[0]}
                            alt={item.name}
                            className="w-full h-48 object-cover mb-4 group-hover:opacity-90 transition-opacity duration-200"
                          />
                          <h3 className="font-medium text-luxury-charcoal-900 mb-2 group-hover:text-luxury-gold-600 transition-colors duration-200">
                            {item.name}
                          </h3>
                          <p className="text-luxury-charcoal-900 font-bold">
                            ${item.price.toLocaleString()}
                          </p>
                        </Link>
                        <button className="w-full btn-primary mt-4">
                          Add to Cart
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Addresses Tab */}
              {activeTab === 'addresses' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-serif font-bold text-luxury-charcoal-900">
                      Saved Addresses
                    </h2>
                    <button className="btn-secondary">
                      Add New Address
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {addresses.map(address => (
                      <div key={address.id} className="border border-luxury-cream-200 p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium text-luxury-charcoal-900">
                            {address.type}
                          </h3>
                          {address.isDefault && (
                            <span className="px-2 py-1 bg-luxury-gold-100 text-luxury-gold-800 text-xs font-medium rounded-full">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="text-luxury-charcoal-700">{address.name}</p>
                        <p className="text-luxury-charcoal-600 text-sm">
                          {address.street}<br />
                          {address.city}, {address.state} {address.zipCode}<br />
                          {address.country}
                        </p>
                        <div className="flex gap-2 mt-4">
                          <button className="text-sm text-luxury-gold-600 hover:text-luxury-gold-700">
                            Edit
                          </button>
                          <button className="text-sm text-red-600 hover:text-red-700">
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Payment Tab */}
              {activeTab === 'payment' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-serif font-bold text-luxury-charcoal-900">
                      Payment Methods
                    </h2>
                    <button className="btn-secondary">
                      Add New Card
                    </button>
                  </div>
                  <div className="space-y-4">
                    {paymentMethods.map(method => (
                      <div key={method.id} className="border border-luxury-cream-200 p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-8 bg-luxury-charcoal-800 rounded flex items-center justify-center">
                              <span className="text-white text-xs font-bold">
                                {method.type.toUpperCase()}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium text-luxury-charcoal-900">
                                •••• •••• •••• {method.last4}
                              </p>
                              <p className="text-sm text-luxury-charcoal-600">
                                Expires {method.expiryMonth}/{method.expiryYear}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {method.isDefault && (
                              <span className="px-2 py-1 bg-luxury-gold-100 text-luxury-gold-800 text-xs font-medium rounded-full">
                                Default
                              </span>
                            )}
                            <button className="text-sm text-luxury-gold-600 hover:text-luxury-gold-700">
                              Edit
                            </button>
                            <button className="text-sm text-red-600 hover:text-red-700">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-xl font-serif font-bold text-luxury-charcoal-900 mb-6">
                    Account Settings
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-luxury-charcoal-900 mb-4">
                        Notifications
                      </h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="mr-3 text-luxury-gold-500 focus:ring-luxury-gold-500"
                          />
                          <span className="text-luxury-charcoal-700">
                            Email notifications for new arrivals
                          </span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="mr-3 text-luxury-gold-500 focus:ring-luxury-gold-500"
                          />
                          <span className="text-luxury-charcoal-700">
                            SMS updates for order status
                          </span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-3 text-luxury-gold-500 focus:ring-luxury-gold-500"
                          />
                          <span className="text-luxury-charcoal-700">
                            Marketing communications
                          </span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-luxury-charcoal-900 mb-4">
                        Privacy
                      </h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="mr-3 text-luxury-gold-500 focus:ring-luxury-gold-500"
                          />
                          <span className="text-luxury-charcoal-700">
                            Allow personalized recommendations
                          </span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-3 text-luxury-gold-500 focus:ring-luxury-gold-500"
                          />
                          <span className="text-luxury-charcoal-700">
                            Share data with partners for better experience
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-luxury-cream-200">
                      <h3 className="text-lg font-medium text-luxury-charcoal-900 mb-4">
                        Account Actions
                      </h3>
                      <div className="space-y-3">
                        <button className="btn-ghost">
                          Change Password
                        </button>
                        <button className="btn-ghost">
                          Download My Data
                        </button>
                        <button className="text-red-600 hover:text-red-700 font-medium">
                          Delete Account
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage; 