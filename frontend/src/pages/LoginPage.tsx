import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      const result = await login(email, password);
      if (result.success) {
        navigate(from, { replace: true });
      } else {
        setError(result.error || 'Login failed');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-cream-50 to-luxury-cream-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Link to="/" className="flex justify-center">
            <h1 className="text-4xl font-serif font-bold text-luxury-charcoal-900">
              <span className="text-gradient-gold">Velato</span>
            </h1>
          </Link>
          <h2 className="mt-6 text-center text-3xl font-serif font-semibold text-luxury-charcoal-900">
            Welcome back
          </h2>
          <p className="mt-2 text-center text-luxury-charcoal-600">
            Sign in to your account
          </p>
        </div>
        
        <div className="bg-white shadow-luxury rounded-none p-8 border border-luxury-cream-200">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm">
                {error}
              </div>
            )}
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-luxury-charcoal-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-luxury-cream-300 placeholder-luxury-charcoal-400 text-luxury-charcoal-900 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500 focus:border-luxury-gold-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-luxury-charcoal-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none relative block w-full pl-10 pr-10 py-3 border border-luxury-cream-300 placeholder-luxury-charcoal-400 text-luxury-charcoal-900 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500 focus:border-luxury-gold-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-luxury-charcoal-400 hover:text-luxury-charcoal-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-luxury-charcoal-400 hover:text-luxury-charcoal-600" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-luxury-gold-600 focus:ring-luxury-gold-500 border-luxury-cream-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-luxury-charcoal-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="font-medium text-luxury-gold-600 hover:text-luxury-gold-500 transition-colors duration-200"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-none text-white bg-luxury-charcoal-900 hover:bg-luxury-charcoal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-luxury-gold-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  'Sign in'
                )}
              </button>
            </div>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-luxury-cream-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-luxury-charcoal-500">Or</span>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-luxury-charcoal-600">
                Don't have an account?{' '}
                <Link
                  to="/signup"
                  className="font-medium text-luxury-gold-600 hover:text-luxury-gold-500 transition-colors duration-200"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
        
        {/* Demo credentials for testing */}
        <div className="bg-luxury-cream-50 border border-luxury-cream-200 p-4 rounded-sm">
          <h3 className="text-sm font-medium text-luxury-charcoal-700 mb-2">Demo Credentials:</h3>
          <div className="text-xs text-luxury-charcoal-600 space-y-1">
            <p><strong>Email:</strong> isabella@example.com</p>
            <p><strong>Password:</strong> password123</p>
            <p className="text-luxury-charcoal-500 italic">Or use any of: alex@example.com, sophia@example.com, james@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 