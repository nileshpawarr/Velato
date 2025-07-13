import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, Grid, List, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/dummyData';
import { SortOption } from '../types';

const SearchResultsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [showFilters, setShowFilters] = useState(false);

  // Filter products based on search query
  const searchResults = useMemo(() => {
    if (!query) return [];

    let filtered = products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.brand.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.material.toLowerCase().includes(query.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );

    // Sort products
    switch (sortBy) {
      case 'price-low':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...filtered].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...filtered].sort((a, b) => b.rating - a.rating);
      case 'popular':
        return [...filtered].sort((a, b) => b.reviewCount - a.reviewCount);
      case 'newest':
      default:
        return [...filtered].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }
  }, [query, sortBy]);

  if (!query) {
    return (
      <div className="min-h-screen bg-luxury-cream-50">
        <div className="container-max section-padding py-16">
          <div className="text-center">
            <Search size={64} className="mx-auto text-luxury-charcoal-400 mb-4" />
            <h1 className="text-3xl font-serif font-bold text-luxury-charcoal-900 mb-4">
              Search Velato
            </h1>
            <p className="text-luxury-charcoal-600 mb-8">
              Discover our luxury fashion collection
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-4 py-3 pr-12 border border-luxury-cream-300 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500 text-luxury-charcoal-800"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-luxury-charcoal-600 hover:text-luxury-gold-600 transition-colors duration-200">
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury-cream-50">
      <div className="container-max section-padding py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-serif font-bold text-luxury-charcoal-900 mb-2">
              Search Results
            </h1>
            <p className="text-luxury-charcoal-600">
              {searchResults.length} results for "{query}"
            </p>
          </div>

          <div className="flex items-center gap-4 mt-4 lg:mt-0">
            {/* View Mode Toggle */}
            <div className="flex bg-white border border-luxury-cream-300 rounded-none overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-colors duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-luxury-charcoal-800 text-white' 
                    : 'text-luxury-charcoal-600 hover:bg-luxury-cream-100'
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 transition-colors duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-luxury-charcoal-800 text-white' 
                    : 'text-luxury-charcoal-600 hover:bg-luxury-cream-100'
                }`}
              >
                <List size={20} />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none bg-white border border-luxury-cream-300 px-4 py-2 pr-8 text-luxury-charcoal-700 focus:outline-none focus:ring-2 focus:ring-luxury-gold-500"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="popular">Most Popular</option>
              </select>
              <ChevronDown size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-luxury-charcoal-600 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <input
              type="text"
              defaultValue={query}
              placeholder="Refine your search..."
              className="w-full px-4 py-3 pr-12 border border-luxury-cream-300 rounded-none focus:outline-none focus:ring-2 focus:ring-luxury-gold-500 text-luxury-charcoal-800"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-luxury-charcoal-600 hover:text-luxury-gold-600 transition-colors duration-200">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Results */}
        {searchResults.length === 0 ? (
          <div className="text-center py-16">
            <Search size={64} className="mx-auto text-luxury-charcoal-400 mb-4" />
            <h3 className="text-xl font-medium text-luxury-charcoal-900 mb-2">
              No results found
            </h3>
            <p className="text-luxury-charcoal-600 mb-6">
              Try adjusting your search terms or browse our categories.
            </p>
            <div className="space-y-2">
              <p className="text-luxury-charcoal-600 font-medium">Popular searches:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['dresses', 'silk', 'cashmere', 'accessories', 'luxury'].map(term => (
                  <Link
                    key={term}
                    to={`/search?q=${term}`}
                    className="px-3 py-1 bg-white border border-luxury-cream-300 text-luxury-charcoal-700 hover:border-luxury-gold-500 hover:text-luxury-gold-600 transition-colors duration-200 text-sm"
                  >
                    {term}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className={
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-6'
          }>
            {searchResults.map(product => (
              <ProductCard 
                key={product.id} 
                product={product}
                className={viewMode === 'list' ? 'flex' : ''}
              />
            ))}
          </div>
        )}

        {/* Suggested Categories */}
        {searchResults.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-bold text-luxury-charcoal-900 mb-6">
              Related Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Women', 'Men', 'Accessories', 'New Arrivals'].map(category => (
                <Link
                  key={category}
                  to={`/${category.toLowerCase().replace(' ', '-')}`}
                  className="p-4 bg-white border border-luxury-cream-200 text-center hover:border-luxury-gold-500 hover:bg-luxury-gold-50 transition-colors duration-200"
                >
                  <h3 className="font-medium text-luxury-charcoal-900">
                    {category}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage; 