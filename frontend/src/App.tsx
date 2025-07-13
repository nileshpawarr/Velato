import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import AccountPage from './pages/AccountPage';
import SearchResultsPage from './pages/SearchResultsPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-luxury-cream-50">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />
          
          {/* Product Routes */}
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/products" element={<CategoryPage />} />
          <Route path="/featured" element={<CategoryPage />} />
          <Route path="/new-arrivals" element={<CategoryPage />} />
          <Route path="/sale" element={<CategoryPage />} />
          
          {/* Category Routes */}
          <Route path="/women" element={<CategoryPage />} />
          <Route path="/women/:subcategory" element={<CategoryPage />} />
          <Route path="/men" element={<CategoryPage />} />
          <Route path="/men/:subcategory" element={<CategoryPage />} />
          <Route path="/accessories" element={<CategoryPage />} />
          <Route path="/accessories/:subcategory" element={<CategoryPage />} />
          
          {/* Authentication Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* User Routes */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/account" element={
            <ProtectedRoute>
              <AccountPage />
            </ProtectedRoute>
          } />
          <Route path="/checkout" element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          } />
          
          {/* Search */}
          <Route path="/search" element={<SearchResultsPage />} />
          
          {/* Utility Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/shipping" element={<AboutPage />} />
          <Route path="/returns" element={<AboutPage />} />
          <Route path="/size-guide" element={<AboutPage />} />
          <Route path="/faq" element={<AboutPage />} />
          <Route path="/careers" element={<AboutPage />} />
          <Route path="/sustainability" element={<AboutPage />} />
          <Route path="/press" element={<AboutPage />} />
          
          {/* 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App; 