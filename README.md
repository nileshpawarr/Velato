# Velato - Luxury Fashion E-Commerce Platform

A sophisticated, mobile-first luxury fashion e-commerce application built with React, TypeScript, and Tailwind CSS.

## 🏗️ Project Structure

```
Velato/
├── frontend/          # React TypeScript Frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React Context providers
│   │   ├── data/          # Mock data and types
│   │   ├── hooks/         # Custom React hooks
│   │   ├── utils/         # Utility functions
│   │   └── types/         # TypeScript type definitions
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
├── backend/           # Backend API (to be implemented)
└── README.md         # This file
```

## 🚀 Quick Start

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
yarn install

# Start development server
yarn dev
```

The application will be available at `http://localhost:3000`

## 🎯 Features

### ✅ Implemented Features

- **Responsive Design**: Mobile-first approach with seamless tablet/desktop scaling
- **Authentication System**: Complete login/signup with protected routes
- **Product Catalog**: 22+ luxury fashion products across categories
- **Shopping Cart**: Add to cart, quantity management, cart persistence
- **Product Search**: Search functionality with filters
- **Category Navigation**: Browse by Women, Men, Accessories
- **User Account**: Profile management, order history, wishlist
- **Checkout Process**: Multi-step checkout with forms
- **Modern UI**: Luxury aesthetic with smooth animations

### 🔐 Authentication System

**Demo Credentials:**
```
Email: isabella@example.com | Password: password123
Email: alex@example.com | Password: password123  
Email: sophia@example.com | Password: password123
Email: james@example.com | Password: password123
```

**Features:**
- Session persistence with localStorage
- Protected routes (Account, Checkout)
- Responsive authentication UI
- Form validation and error handling

### 📦 Product Catalog

**22 Products across 3 main categories:**

**Women's Collection (9 products):**
- Silk Evening Dress, Cashmere Blazer, Wool Trench Coat
- Midi Wrap Dress, Cashmere Turtleneck Sweater, Leather Midi Skirt
- Silk Button-Down Blouse, Wool Blazer, High-Waisted Linen Pants, Merino Wool Cardigan

**Men's Collection (5 products):**
- Silk Dress Shirt, Navy Wool Suit, Cashmere Overcoat
- Pima Cotton Polo, Italian Leather Dress Shoes

**Accessories Collection (8 products):**
- Italian Leather Handbag, Diamond Tennis Necklace, Silk Printed Scarf
- Italian Leather Belt, Cashmere Wrap, Pearl Drop Earrings
- Swiss Luxury Watch, Designer Sunglasses, Evening Clutch

## 🔧 Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Smooth animations

### Backend (To Be Implemented)
- **Recommended**: Node.js with Express/Fastify or Python with FastAPI
- **Database**: PostgreSQL with Redis for caching
- **Authentication**: JWT tokens with refresh tokens
- **File Storage**: AWS S3 or similar for product images
- **Payment**: Stripe or PayPal integration

---

# 📡 Backend API Specification

## 🎯 Complete API Guide for Backend Development

### 🔗 Base URL Structure
```
Production: https://api.velato.com/v1
Development: http://localhost:8000/v1
```

### 🔐 Authentication APIs

#### 1. **POST** `/auth/register`
Create a new user account

**Request Body:**
```json
{
  "firstName": "string",
  "lastName": "string", 
  "email": "string",
  "password": "string",
  "phone": "string (optional)"
}
```

**Response (201):**
```json
{
  "user": {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "phone": "string",
    "joinDate": "ISO date",
    "avatar": "string (URL)"
  },
  "tokens": {
    "accessToken": "string",
    "refreshToken": "string"
  }
}
```

#### 2. **POST** `/auth/login`
Authenticate user and return tokens

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response (200):**
```json
{
  "user": {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "phone": "string",
    "joinDate": "ISO date",
    "avatar": "string (URL)"
  },
  "tokens": {
    "accessToken": "string",
    "refreshToken": "string"
  }
}
```

#### 3. **POST** `/auth/refresh`
Refresh access token

**Request Body:**
```json
{
  "refreshToken": "string"
}
```

**Response (200):**
```json
{
  "accessToken": "string",
  "refreshToken": "string"
}
```

#### 4. **POST** `/auth/logout`
Invalidate refresh token

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
{
  "message": "Logged out successfully"
}
```

### 👤 User Profile APIs

#### 5. **GET** `/users/profile`
Get current user profile

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
{
  "id": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phone": "string",
  "joinDate": "ISO date",
  "avatar": "string (URL)"
}
```

#### 6. **PUT** `/users/profile`
Update user profile

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "firstName": "string",
  "lastName": "string",
  "phone": "string",
  "avatar": "string (URL)"
}
```

#### 7. **GET** `/users/addresses`
Get user addresses

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
[
  {
    "id": "string",
    "type": "string", // "home", "work", "other"
    "name": "string",
    "street": "string",
    "city": "string",
    "state": "string",
    "zipCode": "string",
    "country": "string",
    "isDefault": "boolean"
  }
]
```

#### 8. **POST** `/users/addresses`
Add new address

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "type": "string",
  "name": "string",
  "street": "string",
  "city": "string",
  "state": "string",
  "zipCode": "string",
  "country": "string",
  "isDefault": "boolean"
}
```

### 🛍️ Product APIs

#### 9. **GET** `/products`
Get products with filtering and pagination

**Query Parameters:**
- `page` (integer, default: 1)
- `limit` (integer, default: 20)
- `category` (string) - "women", "men", "accessories"
- `subcategory` (string)
- `priceMin` (number)
- `priceMax` (number)
- `brand` (string)
- `material` (string)
- `inStock` (boolean)
- `featured` (boolean)
- `onSale` (boolean)
- `sortBy` (string) - "price", "name", "rating", "newest"
- `sortOrder` (string) - "asc", "desc"

**Response (200):**
```json
{
  "products": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "price": "number",
      "originalPrice": "number (optional)",
      "images": ["string (URLs)"],
      "category": "string",
      "subcategory": "string",
      "sizes": [
        {
          "id": "string",
          "name": "string",
          "value": "string",
          "inStock": "boolean"
        }
      ],
      "colors": [
        {
          "id": "string",
          "name": "string",
          "hex": "string",
          "inStock": "boolean"
        }
      ],
      "brand": "string",
      "material": "string",
      "care": ["string"],
      "isFeatured": "boolean",
      "isNew": "boolean",
      "isOnSale": "boolean",
      "stock": "number",
      "rating": "number",
      "reviewCount": "number",
      "tags": ["string"]
    }
  ],
  "pagination": {
    "page": "number",
    "limit": "number",
    "total": "number",
    "totalPages": "number"
  }
}
```

#### 10. **GET** `/products/{id}`
Get single product by ID

**Response (200):**
```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "price": "number",
  "originalPrice": "number (optional)",
  "images": ["string (URLs)"],
  "category": "string",
  "subcategory": "string",
  "sizes": [
    {
      "id": "string",
      "name": "string",
      "value": "string",
      "inStock": "boolean"
    }
  ],
  "colors": [
    {
      "id": "string",
      "name": "string",
      "hex": "string",
      "inStock": "boolean"
    }
  ],
  "brand": "string",
  "material": "string",
  "care": ["string"],
  "isFeatured": "boolean",
  "isNew": "boolean",
  "isOnSale": "boolean",
  "stock": "number",
  "rating": "number",
  "reviewCount": "number",
  "tags": ["string"]
}
```

#### 11. **GET** `/products/search`
Search products

**Query Parameters:**
- `q` (string) - Search query
- `page` (integer, default: 1)
- `limit` (integer, default: 20)
- `category` (string)
- `priceMin` (number)
- `priceMax` (number)

**Response (200):**
```json
{
  "products": [/* Product objects */],
  "pagination": {
    "page": "number",
    "limit": "number",
    "total": "number",
    "totalPages": "number"
  },
  "searchQuery": "string"
}
```

### 🏷️ Category APIs

#### 12. **GET** `/categories`
Get all categories

**Response (200):**
```json
[
  {
    "id": "string",
    "name": "string",
    "slug": "string",
    "description": "string",
    "image": "string (URL)",
    "productCount": "number",
    "subcategories": [
      {
        "id": "string",
        "name": "string",
        "slug": "string",
        "image": "string (URL)",
        "productCount": "number"
      }
    ]
  }
]
```

### 🛒 Shopping Cart APIs

#### 13. **GET** `/cart`
Get user's cart

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
{
  "id": "string",
  "items": [
    {
      "id": "string",
      "product": {
        "id": "string",
        "name": "string",
        "price": "number",
        "images": ["string"],
        "inStock": "boolean"
      },
      "quantity": "number",
      "size": "string",
      "color": "string",
      "addedAt": "ISO date"
    }
  ],
  "subtotal": "number",
  "tax": "number",
  "shipping": "number",
  "total": "number",
  "updatedAt": "ISO date"
}
```

#### 14. **POST** `/cart/items`
Add item to cart

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "productId": "string",
  "quantity": "number",
  "size": "string",
  "color": "string"
}
```

#### 15. **PUT** `/cart/items/{itemId}`
Update cart item

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "quantity": "number",
  "size": "string (optional)",
  "color": "string (optional)"
}
```

#### 16. **DELETE** `/cart/items/{itemId}`
Remove item from cart

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
{
  "message": "Item removed from cart"
}
```

### 💕 Wishlist APIs

#### 17. **GET** `/wishlist`
Get user's wishlist

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
{
  "items": [
    {
      "id": "string",
      "product": {
        "id": "string",
        "name": "string",
        "price": "number",
        "images": ["string"],
        "inStock": "boolean"
      },
      "addedAt": "ISO date"
    }
  ]
}
```

#### 18. **POST** `/wishlist/items`
Add item to wishlist

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "productId": "string"
}
```

#### 19. **DELETE** `/wishlist/items/{productId}`
Remove item from wishlist

**Headers:** `Authorization: Bearer <token>`

### 📦 Order APIs

#### 20. **POST** `/orders`
Create new order

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "items": [
    {
      "productId": "string",
      "quantity": "number",
      "size": "string",
      "color": "string",
      "price": "number"
    }
  ],
  "shippingAddress": {
    "name": "string",
    "street": "string",
    "city": "string",
    "state": "string",
    "zipCode": "string",
    "country": "string"
  },
  "paymentMethod": "string", // "stripe", "paypal"
  "paymentToken": "string"
}
```

**Response (201):**
```json
{
  "id": "string",
  "orderNumber": "string",
  "status": "string", // "pending", "processing", "shipped", "delivered", "cancelled"
  "items": [
    {
      "id": "string",
      "product": {
        "id": "string",
        "name": "string",
        "images": ["string"]
      },
      "quantity": "number",
      "size": "string",
      "color": "string",
      "price": "number"
    }
  ],
  "subtotal": "number",
  "tax": "number",
  "shipping": "number",
  "total": "number",
  "shippingAddress": {
    "name": "string",
    "street": "string",
    "city": "string",
    "state": "string",
    "zipCode": "string",
    "country": "string"
  },
  "estimatedDelivery": "ISO date",
  "createdAt": "ISO date"
}
```

#### 21. **GET** `/orders`
Get user's orders

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `page` (integer, default: 1)
- `limit` (integer, default: 10)
- `status` (string)

**Response (200):**
```json
{
  "orders": [
    {
      "id": "string",
      "orderNumber": "string",
      "status": "string",
      "total": "number",
      "itemCount": "number",
      "createdAt": "ISO date",
      "estimatedDelivery": "ISO date"
    }
  ],
  "pagination": {
    "page": "number",
    "limit": "number",
    "total": "number",
    "totalPages": "number"
  }
}
```

#### 22. **GET** `/orders/{id}`
Get order details

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
{
  "id": "string",
  "orderNumber": "string",
  "status": "string",
  "items": [
    {
      "id": "string",
      "product": {
        "id": "string",
        "name": "string",
        "images": ["string"]
      },
      "quantity": "number",
      "size": "string",
      "color": "string",
      "price": "number"
    }
  ],
  "subtotal": "number",
  "tax": "number",
  "shipping": "number",
  "total": "number",
  "shippingAddress": {
    "name": "string",
    "street": "string",
    "city": "string",
    "state": "string",
    "zipCode": "string",
    "country": "string"
  },
  "estimatedDelivery": "ISO date",
  "trackingNumber": "string",
  "createdAt": "ISO date",
  "updatedAt": "ISO date"
}
```

### ⭐ Review APIs

#### 23. **GET** `/products/{id}/reviews`
Get product reviews

**Query Parameters:**
- `page` (integer, default: 1)
- `limit` (integer, default: 10)
- `sortBy` (string) - "newest", "oldest", "rating"

**Response (200):**
```json
{
  "reviews": [
    {
      "id": "string",
      "user": {
        "id": "string",
        "firstName": "string",
        "lastName": "string",
        "avatar": "string (URL)"
      },
      "rating": "number", // 1-5
      "title": "string",
      "comment": "string",
      "verified": "boolean", // purchased product
      "createdAt": "ISO date"
    }
  ],
  "pagination": {
    "page": "number",
    "limit": "number",
    "total": "number",
    "totalPages": "number"
  },
  "averageRating": "number",
  "ratingDistribution": {
    "5": "number",
    "4": "number",
    "3": "number",
    "2": "number",
    "1": "number"
  }
}
```

#### 24. **POST** `/products/{id}/reviews`
Add product review

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "rating": "number", // 1-5
  "title": "string",
  "comment": "string"
}
```

### 💳 Payment APIs

#### 25. **POST** `/payments/stripe/payment-intent`
Create Stripe payment intent

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "amount": "number", // in cents
  "currency": "string" // "usd"
}
```

**Response (200):**
```json
{
  "clientSecret": "string",
  "paymentIntentId": "string"
}
```

## 🔧 Technical Implementation Notes

### Database Schema Recommendations

**Users Table:**
- id (UUID), email, password_hash, first_name, last_name, phone, avatar_url, join_date, created_at, updated_at

**Products Table:**
- id (UUID), name, description, price, original_price, category, subcategory, brand, material, care_instructions, is_featured, is_new, is_on_sale, stock, rating, review_count, created_at, updated_at

**Product_Images Table:**
- id (UUID), product_id (FK), image_url, alt_text, sort_order

**Product_Sizes Table:**
- id (UUID), product_id (FK), size_name, size_value, in_stock

**Product_Colors Table:**
- id (UUID), product_id (FK), color_name, color_hex, in_stock

**Cart_Items Table:**
- id (UUID), user_id (FK), product_id (FK), quantity, size, color, created_at, updated_at

**Orders Table:**
- id (UUID), user_id (FK), order_number, status, subtotal, tax, shipping, total, shipping_address (JSON), payment_method, payment_id, created_at, updated_at

**Order_Items Table:**
- id (UUID), order_id (FK), product_id (FK), quantity, size, color, price, created_at

### Security Considerations

1. **JWT Authentication**: Use access tokens (15-30 min expiry) + refresh tokens (7-30 days)
2. **Rate Limiting**: Implement rate limiting on all endpoints
3. **Input Validation**: Validate all inputs using schema validation
4. **CORS**: Configure CORS properly for frontend domain
5. **HTTPS**: Use HTTPS in production
6. **SQL Injection**: Use parameterized queries
7. **Password Security**: Hash passwords with bcrypt/scrypt

### Performance Optimizations

1. **Database Indexing**: Index frequently queried columns
2. **Caching**: Redis for product catalog, user sessions
3. **Image Optimization**: CDN for product images
4. **Pagination**: Implement cursor-based pagination for large datasets
5. **Database Connections**: Use connection pooling

### Deployment Architecture

```
Frontend (Vercel/Netlify) → Backend (Railway/Render) → Database (PostgreSQL)
                                    ↓
                               Redis Cache
                                    ↓
                               File Storage (AWS S3)
```

---

## 📝 Development Workflow

1. **Setup Backend**: Choose your preferred stack (Node.js/Python/Go)
2. **Database Setup**: PostgreSQL with migrations
3. **Authentication**: Implement JWT with refresh tokens
4. **Core APIs**: Start with products, categories, cart
5. **Payment Integration**: Add Stripe/PayPal
6. **Testing**: Unit tests and integration tests
7. **Deployment**: Deploy to cloud platform

## 🎓 Learning Resources

- **REST API Design**: [REST API Tutorial](https://restfulapi.net/)
- **JWT Authentication**: [JWT Best Practices](https://auth0.com/blog/a-look-at-the-latest-draft-for-jwt-bcp/)
- **Database Design**: [Database Design Fundamentals](https://www.lucidchart.com/pages/database-diagram/database-design)
- **Payment Integration**: [Stripe API Documentation](https://stripe.com/docs/api)

## 🚀 Next Steps

1. Choose your backend technology stack
2. Set up the development environment
3. Implement authentication APIs first
4. Build product catalog APIs
5. Add shopping cart functionality
6. Integrate payment processing
7. Add order management
8. Implement review system

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- **Tailwind CSS** for the utility-first approach
- **Lucide** for beautiful icons
- **React** team for the excellent framework 