# Velato Backend API

Backend API for the Velato luxury fashion e-commerce platform.

## 🚀 Getting Started

### Technology Stack Options

Choose one of these recommended stacks:

#### Option 1: Node.js + Express + TypeScript
```bash
# Initialize project
npm init -y

# Install dependencies
npm install express cors helmet morgan bcryptjs jsonwebtoken
npm install pg redis stripe

# Install dev dependencies
npm install -D typescript @types/node @types/express @types/cors @types/bcryptjs @types/jsonwebtoken nodemon ts-node

# Initialize TypeScript
npx tsc --init
```

#### Option 2: Python + FastAPI
```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install fastapi uvicorn sqlalchemy psycopg2-binary redis python-jose[cryptography] passlib[bcrypt] stripe
pip install -r requirements.txt
```

#### Option 3: Node.js + Fastify + TypeScript
```bash
# Initialize project
npm init -y

# Install dependencies
npm install fastify @fastify/cors @fastify/helmet @fastify/jwt
npm install pg redis stripe

# Install dev dependencies
npm install -D typescript @types/node nodemon ts-node
```

#### Option 4: Java + Spring Boot
```bash
# Using Spring Initializr (https://start.spring.io/) or CLI
# Dependencies to include: Web, Security, JPA, PostgreSQL, Redis, Validation

# Or using Maven
mvn archetype:generate -DgroupId=com.velato.api -DartifactId=velato-backend -DarchetypeArtifactId=maven-archetype-quickstart

# Or using Gradle
gradle init --type java-application --dsl groovy --test-framework junit --package com.velato.api --project-name velato-backend
```

**Maven Dependencies (pom.xml):**
```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-security</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-redis</artifactId>
    </dependency>
    <dependency>
        <groupId>org.postgresql</groupId>
        <artifactId>postgresql</artifactId>
        <scope>runtime</scope>
    </dependency>
    <dependency>
        <groupId>io.jsonwebtoken</groupId>
        <artifactId>jjwt</artifactId>
        <version>0.9.1</version>
    </dependency>
    <dependency>
        <groupId>com.stripe</groupId>
        <artifactId>stripe-java</artifactId>
        <version>24.16.0</version>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
```

## 📁 Recommended Project Structure

### Node.js/TypeScript Structure
```
backend/
├── src/
│   ├── routes/           # API route handlers
│   │   ├── auth.ts      # Authentication routes
│   │   ├── products.ts  # Product routes
│   │   ├── users.ts     # User management routes
│   │   ├── cart.ts      # Shopping cart routes
│   │   ├── orders.ts    # Order management routes
│   │   └── reviews.ts   # Review routes
│   ├── middleware/       # Custom middleware
│   │   ├── auth.ts      # JWT authentication middleware
│   │   ├── validation.ts # Request validation
│   │   └── rateLimiter.ts # Rate limiting
│   ├── models/          # Data models/schemas
│   │   ├── User.ts      # User model
│   │   ├── Product.ts   # Product model
│   │   ├── Order.ts     # Order model
│   │   └── Review.ts    # Review model
│   ├── services/        # Business logic
│   │   ├── authService.ts
│   │   ├── productService.ts
│   │   ├── paymentService.ts
│   │   └── emailService.ts
│   ├── utils/           # Utility functions
│   │   ├── db.ts        # Database connection
│   │   ├── redis.ts     # Redis connection
│   │   └── logger.ts    # Logging utility
│   ├── types/           # TypeScript type definitions
│   │   └── index.ts
│   └── app.ts           # Main application setup
├── migrations/          # Database migrations
├── seeds/              # Database seed data
├── tests/              # Test files
├── docs/               # API documentation
├── .env.example        # Environment variables template
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

### Java Spring Boot Structure
```
backend/
├── src/
│   ├── main/
│   │   ├── java/com/velato/api/
│   │   │   ├── VelatoApiApplication.java    # Main application class
│   │   │   ├── config/                      # Configuration classes
│   │   │   │   ├── SecurityConfig.java     # Security configuration
│   │   │   │   ├── RedisConfig.java        # Redis configuration
│   │   │   │   └── CorsConfig.java         # CORS configuration
│   │   │   ├── controller/                  # REST controllers (route handlers)
│   │   │   │   ├── AuthController.java     # Authentication endpoints
│   │   │   │   ├── ProductController.java  # Product endpoints
│   │   │   │   ├── UserController.java     # User management endpoints
│   │   │   │   ├── CartController.java     # Shopping cart endpoints
│   │   │   │   ├── OrderController.java    # Order management endpoints
│   │   │   │   └── ReviewController.java   # Review endpoints
│   │   │   ├── dto/                        # Data Transfer Objects
│   │   │   │   ├── request/                # Request DTOs
│   │   │   │   └── response/               # Response DTOs
│   │   │   ├── entity/                     # JPA entities (database models)
│   │   │   │   ├── User.java              # User entity
│   │   │   │   ├── Product.java           # Product entity
│   │   │   │   ├── Order.java             # Order entity
│   │   │   │   └── Review.java            # Review entity
│   │   │   ├── repository/                 # JPA repositories
│   │   │   │   ├── UserRepository.java
│   │   │   │   ├── ProductRepository.java
│   │   │   │   ├── OrderRepository.java
│   │   │   │   └── ReviewRepository.java
│   │   │   ├── service/                    # Business logic services
│   │   │   │   ├── AuthService.java
│   │   │   │   ├── ProductService.java
│   │   │   │   ├── PaymentService.java
│   │   │   │   └── EmailService.java
│   │   │   ├── security/                   # Security components
│   │   │   │   ├── JwtAuthenticationFilter.java
│   │   │   │   ├── JwtTokenProvider.java
│   │   │   │   └── UserDetailsServiceImpl.java
│   │   │   ├── exception/                  # Exception handling
│   │   │   │   ├── GlobalExceptionHandler.java
│   │   │   │   └── CustomExceptions.java
│   │   │   └── util/                       # Utility classes
│   │   │       ├── DateUtil.java
│   │   │       └── ValidationUtil.java
│   │   └── resources/
│   │       ├── application.yml             # Application configuration
│   │       ├── application-dev.yml         # Development configuration
│   │       ├── application-prod.yml        # Production configuration
│   │       └── db/migration/               # Flyway database migrations
│   └── test/                               # Test files
├── target/                                 # Compiled classes (Maven)
├── docs/                                   # API documentation
├── pom.xml                                 # Maven dependencies
└── README.md                              # This file
```

## 🔧 Environment Setup

### Node.js/TypeScript Environment

Create a `.env` file in the backend directory:

```env
# Server
PORT=8000
NODE_ENV=development

# Database
DATABASE_URL=postgresql://username:password@localhost:5432/velato_db

# Redis
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_REFRESH_SECRET=your-super-secret-refresh-key
JWT_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d

# Stripe
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Email (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# File Upload
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_BUCKET_NAME=velato-assets
AWS_REGION=us-east-1
```

### Java Spring Boot Configuration

Create `application.yml` in `src/main/resources/`:

```yaml
spring:
  application:
    name: velato-api
  
  datasource:
    url: jdbc:postgresql://localhost:5432/velato_db
    username: ${DB_USERNAME:postgres}
    password: ${DB_PASSWORD:password}
    driver-class-name: org.postgresql.Driver
  
  jpa:
    hibernate:
      ddl-auto: validate
    show-sql: false
    properties:
      hibernate:
        dialect: org.hibernate.dialect.PostgreSQLDialect
        format_sql: true
  
  redis:
    host: ${REDIS_HOST:localhost}
    port: ${REDIS_PORT:6379}
    password: ${REDIS_PASSWORD:}
  
  security:
    jwt:
      secret: ${JWT_SECRET:your-super-secret-jwt-key}
      refresh-secret: ${JWT_REFRESH_SECRET:your-super-secret-refresh-key}
      expiration: ${JWT_EXPIRATION:900000} # 15 minutes in milliseconds
      refresh-expiration: ${JWT_REFRESH_EXPIRATION:604800000} # 7 days in milliseconds

server:
  port: ${PORT:8000}

stripe:
  secret-key: ${STRIPE_SECRET_KEY:sk_test_your_stripe_secret_key}
  webhook-secret: ${STRIPE_WEBHOOK_SECRET:whsec_your_webhook_secret}

aws:
  access-key-id: ${AWS_ACCESS_KEY_ID:your-aws-access-key}
  secret-access-key: ${AWS_SECRET_ACCESS_KEY:your-aws-secret-key}
  bucket-name: ${AWS_BUCKET_NAME:velato-assets}
  region: ${AWS_REGION:us-east-1}

logging:
  level:
    com.velato.api: ${LOG_LEVEL:INFO}
    org.springframework.security: DEBUG
```

Create `application-dev.yml` for development:

```yaml
spring:
  jpa:
    show-sql: true
    hibernate:
      ddl-auto: update

logging:
  level:
    com.velato.api: DEBUG
    org.springframework.security: DEBUG
```

## 🗄️ Database Setup

### PostgreSQL Installation

#### macOS (using Homebrew)
```bash
brew install postgresql
brew services start postgresql
createdb velato_db
```

#### Ubuntu/Debian
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo -u postgres createdb velato_db
```

#### Windows
Download and install from: https://www.postgresql.org/download/windows/

### Database Schema

Run these SQL commands to create the initial tables:

```sql
-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    avatar_url TEXT,
    join_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products table
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    original_price DECIMAL(10,2),
    category VARCHAR(50) NOT NULL,
    subcategory VARCHAR(50),
    brand VARCHAR(100),
    material TEXT,
    care_instructions TEXT[],
    is_featured BOOLEAN DEFAULT FALSE,
    is_new BOOLEAN DEFAULT FALSE,
    is_on_sale BOOLEAN DEFAULT FALSE,
    stock INTEGER NOT NULL DEFAULT 0,
    rating DECIMAL(3,2) DEFAULT 0,
    review_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Product images table
CREATE TABLE product_images (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    alt_text VARCHAR(255),
    sort_order INTEGER DEFAULT 0
);

-- Product sizes table
CREATE TABLE product_sizes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    size_name VARCHAR(50) NOT NULL,
    size_value VARCHAR(50) NOT NULL,
    in_stock BOOLEAN DEFAULT TRUE
);

-- Product colors table
CREATE TABLE product_colors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    color_name VARCHAR(50) NOT NULL,
    color_hex VARCHAR(7) NOT NULL,
    in_stock BOOLEAN DEFAULT TRUE
);

-- Cart items table
CREATE TABLE cart_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    quantity INTEGER NOT NULL DEFAULT 1,
    size VARCHAR(50),
    color VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders table
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    order_number VARCHAR(100) UNIQUE NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'pending',
    subtotal DECIMAL(10,2) NOT NULL,
    tax DECIMAL(10,2) NOT NULL,
    shipping DECIMAL(10,2) NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    shipping_address JSONB NOT NULL,
    payment_method VARCHAR(50) NOT NULL,
    payment_id VARCHAR(255),
    estimated_delivery DATE,
    tracking_number VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Order items table
CREATE TABLE order_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id),
    quantity INTEGER NOT NULL,
    size VARCHAR(50),
    color VARCHAR(50),
    price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Reviews table
CREATE TABLE reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    title VARCHAR(255),
    comment TEXT,
    verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Wishlist table
CREATE TABLE wishlist_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, product_id)
);

-- Indexes for better performance
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_featured ON products(is_featured);
CREATE INDEX idx_products_price ON products(price);
CREATE INDEX idx_cart_items_user ON cart_items(user_id);
CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_reviews_product ON reviews(product_id);
```

## 🚀 Quick Start Commands

### Node.js/TypeScript Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run tests
npm test

# Run database migrations
npm run migrate

# Seed database with sample data
npm run seed
```

### Java Spring Boot Commands
```bash
# Using Maven
mvn spring-boot:run                 # Start development server
mvn clean compile                   # Compile the project
mvn package                         # Build JAR for production
mvn test                           # Run tests
mvn flyway:migrate                 # Run database migrations
mvn clean install                  # Clean and install dependencies

# Using Gradle
./gradlew bootRun                  # Start development server
./gradlew build                    # Build for production
./gradlew test                     # Run tests
./gradlew flywayMigrate           # Run database migrations
./gradlew clean build             # Clean and build

# Run JAR directly
java -jar target/velato-backend-1.0.0.jar
```

## 📊 API Development Priority

Implement in this order:

1. **Authentication APIs** (login, register, refresh)
2. **User Profile APIs** (get/update profile)
3. **Product APIs** (get products, search, filters)
4. **Category APIs** (get categories)
5. **Cart APIs** (add/remove/update items)
6. **Order APIs** (create/get orders)
7. **Review APIs** (get/add reviews)
8. **Wishlist APIs** (add/remove items)
9. **Payment APIs** (Stripe integration)

## 🔐 Security Checklist

- [ ] JWT authentication with refresh tokens
- [ ] Password hashing with bcrypt
- [ ] Input validation and sanitization
- [ ] Rate limiting on all endpoints
- [ ] CORS configuration
- [ ] SQL injection prevention
- [ ] XSS protection
- [ ] HTTPS in production
- [ ] Environment variables for secrets
- [ ] API versioning

## 🧪 Testing Strategy

- Unit tests for services and utilities
- Integration tests for API endpoints
- Database transaction tests
- Authentication middleware tests
- Payment integration tests

## 📚 Useful Libraries

### Node.js/Express
- `express-validator` - Request validation
- `express-rate-limit` - Rate limiting
- `helmet` - Security headers
- `morgan` - HTTP request logging
- `compression` - Response compression
- `multer` - File upload handling
- `nodemailer` - Email sending
- `jest` - Testing framework

### Python/FastAPI
- `pydantic` - Data validation
- `python-multipart` - File uploads
- `slowapi` - Rate limiting
- `pytest` - Testing framework
- `alembic` - Database migrations
- `celery` - Background tasks

### Java/Spring Boot
- `spring-boot-starter-validation` - Bean validation
- `spring-boot-starter-mail` - Email sending
- `spring-boot-starter-actuator` - Health checks and metrics
- `spring-boot-starter-cache` - Caching support
- `bucket4j-spring-boot-starter` - Rate limiting
- `springdoc-openapi-ui` - API documentation (Swagger)
- `flyway-core` - Database migrations
- `testcontainers` - Integration testing with Docker
- `mockito-core` - Mocking framework for testing
- `assertj-core` - Fluent assertions for testing

## 🚀 Deployment Options

### Platform-as-a-Service (Recommended for beginners)
- **Railway**: https://railway.app
- **Render**: https://render.com
- **Heroku**: https://heroku.com

### Cloud Providers
- **AWS** (Elastic Beanstalk, Lambda, EC2)
- **Google Cloud** (App Engine, Cloud Run)
- **Azure** (App Service)

### Database Hosting
- **Supabase** (PostgreSQL + additional features)
- **PlanetScale** (MySQL compatible)
- **AWS RDS** (PostgreSQL)
- **Google Cloud SQL**

## 📖 Next Steps

1. Choose your preferred technology stack
2. Set up the development environment
3. Create the database schema
4. Implement authentication first
5. Build the product catalog APIs
6. Add shopping cart functionality
7. Integrate payment processing
8. Deploy to production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Implement your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License. 