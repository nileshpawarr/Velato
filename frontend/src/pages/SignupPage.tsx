import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, User, Mail, Lock, Phone, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      return 'Please fill in all required fields';
    }
    
    if (formData.password !== formData.confirmPassword) {
      return 'Passwords do not match';
    }
    
    if (formData.password.length < 6) {
      return 'Password must be at least 6 characters long';
    }
    
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return 'Please enter a valid email address';
    }
    
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    
    setIsLoading(true);
    
    try {
      const result = await signup({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password
      });
      
      if (result.success) {
        navigate('/');
      } else {
        setError(result.error || 'Signup failed');
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
            Join Velato
          </h2>
          <p className="mt-2 text-center text-luxury-charcoal-600">
            Create your luxury fashion account
          </p>
        </div>
        
        <div className="bg-white shadow-luxury rounded-none p-8 border border-luxury-cream-200">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm">
                {error}
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                  First Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-luxury-charcoal-400" />
                  </div>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-luxury-cream-300 placeholder-luxury-charcoal-400 text-luxury-charcoal-900 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500 focus:border-luxury-gold-500 focus:z-10 sm:text-sm"
                    placeholder="First name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                  Last Name *
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="appearance-none relative block w-full px-3 py-3 border border-luxury-cream-300 placeholder-luxury-charcoal-400 text-luxury-charcoal-900 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500 focus:border-luxury-gold-500 focus:z-10 sm:text-sm"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                Email address *
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
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-luxury-cream-300 placeholder-luxury-charcoal-400 text-luxury-charcoal-900 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500 focus:border-luxury-gold-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                Phone (Optional)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-luxury-charcoal-400" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-luxury-cream-300 placeholder-luxury-charcoal-400 text-luxury-charcoal-900 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500 focus:border-luxury-gold-500 focus:z-10 sm:text-sm"
                  placeholder="Phone number"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                Password *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-luxury-charcoal-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none relative block w-full pl-10 pr-10 py-3 border border-luxury-cream-300 placeholder-luxury-charcoal-400 text-luxury-charcoal-900 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500 focus:border-luxury-gold-500 focus:z-10 sm:text-sm"
                  placeholder="Create a password"
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

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-luxury-charcoal-700 mb-2">
                Confirm Password *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-luxury-charcoal-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="appearance-none relative block w-full pl-10 pr-10 py-3 border border-luxury-cream-300 placeholder-luxury-charcoal-400 text-luxury-charcoal-900 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500 focus:border-luxury-gold-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-luxury-charcoal-400 hover:text-luxury-charcoal-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-luxury-charcoal-400 hover:text-luxury-charcoal-600" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-luxury-gold-600 focus:ring-luxury-gold-500 border-luxury-cream-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-luxury-charcoal-700">
                I agree to the{' '}
                <Link to="/terms" className="text-luxury-gold-600 hover:text-luxury-gold-500">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-luxury-gold-600 hover:text-luxury-gold-500">
                  Privacy Policy
                </Link>
              </label>
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
                  'Create Account'
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
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="font-medium text-luxury-gold-600 hover:text-luxury-gold-500 transition-colors duration-200"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage; 