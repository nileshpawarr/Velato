export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  subcategory?: string;
  sizes: Size[];
  colors: Color[];
  brand: string;
  material: string;
  care: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  isOnSale?: boolean;
  stock: number;
  rating: number;
  reviewCount: number;
  tags: string[];
}

export interface Size {
  id: string;
  name: string;
  value: string;
  inStock: boolean;
}

export interface Color {
  id: string;
  name: string;
  hex: string;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image: string;
  subcategories?: Subcategory[];
  productCount: number;
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image: string;
  productCount: number;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedSize: Size;
  selectedColor: Color;
  addedAt: Date;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  addresses: Address[];
  orders: Order[];
  wishlist: string[];
  preferences: UserPreferences;
}

export interface Address {
  id: string;
  type: 'billing' | 'shipping';
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone?: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  shippingAddress: Address;
  billingAddress: Address;
  status: OrderStatus;
  paymentMethod: string;
  createdAt: Date;
  updatedAt: Date;
}

export type OrderStatus = 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';

export interface UserPreferences {
  newsletter: boolean;
  smsUpdates: boolean;
  currency: string;
  language: string;
  theme: 'light' | 'dark';
}

export interface Collection {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  products: Product[];
  season: string;
  year: number;
  isActive: boolean;
}

export interface Banner {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  mobileImage?: string;
  link?: string;
  buttonText?: string;
  isActive: boolean;
  priority: number;
}

export interface FilterOptions {
  categories: string[];
  brands: string[];
  priceRange: {
    min: number;
    max: number;
  };
  sizes: string[];
  colors: string[];
  materials: string[];
  sortBy: SortOption;
}

export type SortOption = 'newest' | 'price-low' | 'price-high' | 'rating' | 'popular';

export interface SearchResult {
  products: Product[];
  categories: Category[];
  brands: string[];
  totalResults: number;
  query: string;
  filters: FilterOptions;
} 