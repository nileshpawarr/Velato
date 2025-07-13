import React, { useState, useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Filter, Grid, List, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/dummyData';
import { Product, SortOption } from '../types';

const CategoryPage: React.FC = () => {
  const { subcategory } = useParams();
  const location = useLocation();
  const categorySlug = location.pathname.split('/')[1];
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);

  // Find current category
  const currentCategory = categories.find(cat => cat.slug === categorySlug);
  
  // Filter products based on category and subcategory
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (categorySlug === 'featured') {
      filtered = products.filter(p => p.isFeatured);
    } else if (categorySlug === 'new-arrivals') {
      filtered = products.filter(p => p.isNew);
    } else if (categorySlug === 'sale') {
      filtered = products.filter(p => p.isOnSale);
    } else if (currentCategory) {
      filtered = products.filter(p => p.category === currentCategory.id);
    }

    // Filter by subcategory
    if (subcategory) {
      filtered = filtered.filter(p => p.subcategory === subcategory);
    }

    // Filter by price range
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Filter by brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(p => selectedBrands.includes(p.brand));
    }

    // Filter by materials
    if (selectedMaterials.length > 0) {
      filtered = filtered.filter(p => selectedMaterials.includes(p.material));
    }

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
  }, [categorySlug, subcategory, currentCategory, sortBy, priceRange, selectedBrands, selectedMaterials]);

  // Get unique brands and materials for filters
  const allBrands = Array.from(new Set(products.map(p => p.brand)));
  const allMaterials = Array.from(new Set(products.map(p => p.material)));

  const getPageTitle = () => {
    if (categorySlug === 'featured') return 'Featured Collection';
    if (categorySlug === 'new-arrivals') return 'New Arrivals';
    if (categorySlug === 'sale') return 'Sale Items';
    if (subcategory) {
      const subCat = currentCategory?.subcategories?.find(sub => sub.slug === subcategory);
      return subCat ? `${currentCategory?.name} - ${subCat.name}` : 'Products';
    }
    return currentCategory?.name || 'Products';
  };

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleMaterialToggle = (material: string) => {
    setSelectedMaterials(prev => 
      prev.includes(material) 
        ? prev.filter(m => m !== material)
        : [...prev, material]
    );
  };

  return (
    <div className="min-h-screen bg-luxury-cream-50">
      <div className="container-max section-padding py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-serif font-bold text-luxury-charcoal-900 mb-2">
              {getPageTitle()}
            </h1>
            <p className="text-luxury-charcoal-600">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
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

            {/* Filters Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-luxury-cream-300 text-luxury-charcoal-700 hover:bg-luxury-cream-100 transition-colors duration-200"
            >
              <Filter size={20} />
              Filters
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-64 flex-shrink-0">
              <div className="bg-white border border-luxury-cream-200 p-6 space-y-6">
                {/* Price Range */}
                <div>
                  <h3 className="text-lg font-medium text-luxury-charcoal-900 mb-4">Price Range</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-luxury-charcoal-600 mb-1">
                        Min: ${priceRange[0]}
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="10000"
                        step="100"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-luxury-charcoal-600 mb-1">
                        Max: ${priceRange[1]}
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="10000"
                        step="100"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Brands */}
                <div>
                  <h3 className="text-lg font-medium text-luxury-charcoal-900 mb-4">Brands</h3>
                  <div className="space-y-2">
                    {allBrands.map(brand => (
                      <label key={brand} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => handleBrandToggle(brand)}
                          className="mr-2 text-luxury-gold-500 focus:ring-luxury-gold-500"
                        />
                        <span className="text-luxury-charcoal-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Materials */}
                <div>
                  <h3 className="text-lg font-medium text-luxury-charcoal-900 mb-4">Materials</h3>
                  <div className="space-y-2">
                    {allMaterials.map(material => (
                      <label key={material} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedMaterials.includes(material)}
                          onChange={() => handleMaterialToggle(material)}
                          className="mr-2 text-luxury-gold-500 focus:ring-luxury-gold-500"
                        />
                        <span className="text-luxury-charcoal-700">{material}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setPriceRange([0, 10000]);
                    setSelectedBrands([]);
                    setSelectedMaterials([]);
                  }}
                  className="w-full btn-ghost text-sm"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}

          {/* Products Grid/List */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium text-luxury-charcoal-900 mb-2">
                  No products found
                </h3>
                <p className="text-luxury-charcoal-600">
                  Try adjusting your filters or search criteria.
                </p>
              </div>
            ) : (
              <div className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                  : 'space-y-6'
              }>
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                    className={viewMode === 'list' ? 'flex' : ''}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage; 