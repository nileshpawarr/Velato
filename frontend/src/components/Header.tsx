import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, User, LogOut } from 'lucide-react';
import { categories } from '../data/dummyData';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <header className="bg-white shadow-luxury border-b border-luxury-cream-200 sticky top-0 z-50">
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-luxury-charcoal-700 hover:text-luxury-charcoal-900 focus:outline-none focus:ring-2 focus:ring-luxury-gold-500"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl lg:text-3xl font-serif font-bold text-luxury-charcoal-900">
                <span className="text-gradient-gold">Velato</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/${category.slug}`}
                className="text-luxury-charcoal-700 hover:text-luxury-gold-600 font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {category.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-luxury-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={toggleSearch}
              className="p-2 rounded-md text-luxury-charcoal-700 hover:text-luxury-charcoal-900 focus:outline-none focus:ring-2 focus:ring-luxury-gold-500 transition-colors duration-200"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* User Account - Desktop only */}
            <div className="hidden lg:block relative">
              {isAuthenticated ? (
                <div className="relative">
                  <button 
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-2 p-2 rounded-md text-luxury-charcoal-700 hover:text-luxury-charcoal-900 focus:outline-none focus:ring-2 focus:ring-luxury-gold-500 transition-colors duration-200"
                  >
                    {user?.avatar ? (
                      <img 
                        src={user.avatar} 
                        alt={user.firstName} 
                        className="w-6 h-6 rounded-full object-cover"
                      />
                    ) : (
                      <User size={20} />
                    )}
                    <span className="text-sm font-medium">
                      {user?.firstName}
                    </span>
                  </button>
                  
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-sm shadow-luxury border border-luxury-cream-200 py-1 z-50">
                      <Link
                        to="/account"
                        className="block px-4 py-2 text-sm text-luxury-charcoal-700 hover:bg-luxury-cream-50 transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        My Account
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setShowUserMenu(false);
                        }}
                        className="w-full text-left block px-4 py-2 text-sm text-luxury-charcoal-700 hover:bg-luxury-cream-50 transition-colors"
                      >
                        <div className="flex items-center space-x-2">
                          <LogOut size={16} />
                          <span>Sign out</span>
                        </div>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-luxury-charcoal-700 hover:text-luxury-gold-600 transition-colors duration-200"
                >
                  <User size={20} />
                  <span>Sign In</span>
                </Link>
              )}
            </div>

            {/* Cart */}
            <button 
              onClick={handleCartClick}
              className="p-2 rounded-md text-luxury-charcoal-700 hover:text-luxury-charcoal-900 focus:outline-none focus:ring-2 focus:ring-luxury-gold-500 transition-colors duration-200 relative"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-luxury-gold-500 text-luxury-charcoal-900 rounded-full flex items-center justify-center text-xs font-medium">
                3
              </span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-luxury-cream-200 animate-slide-up">
            <form onSubmit={handleSearch} className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search luxury fashion..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pr-12 border border-luxury-cream-300 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500 focus:border-luxury-gold-500 font-light text-luxury-charcoal-800 placeholder-luxury-charcoal-500"
                autoFocus
              />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-luxury-charcoal-600 hover:text-luxury-gold-600 transition-colors duration-200"
              >
                <Search size={20} />
              </button>
            </form>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-luxury-cream-200 animate-slide-up">
            <nav className="space-y-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/${category.slug}`}
                  className="block py-3 text-luxury-charcoal-700 hover:text-luxury-gold-600 font-medium tracking-wide transition-colors duration-200 border-b border-luxury-cream-100 last:border-b-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-luxury-cream-200">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/account"
                      className="flex items-center space-x-3 py-3 text-luxury-charcoal-700 hover:text-luxury-gold-600 font-medium tracking-wide transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User size={20} />
                      <span>My Account</span>
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center space-x-3 py-3 text-luxury-charcoal-700 hover:text-luxury-gold-600 font-medium tracking-wide transition-colors duration-200 w-full text-left"
                    >
                      <LogOut size={20} />
                      <span>Sign out</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="flex items-center space-x-3 py-3 text-luxury-charcoal-700 hover:text-luxury-gold-600 font-medium tracking-wide transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User size={20} />
                      <span>Sign In</span>
                    </Link>
                    <Link
                      to="/signup"
                      className="flex items-center space-x-3 py-3 text-luxury-charcoal-700 hover:text-luxury-gold-600 font-medium tracking-wide transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User size={20} />
                      <span>Sign Up</span>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 