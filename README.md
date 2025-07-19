# Velato Backend API

Backend API for the Velato luxury fashion e-commerce platform.

## 🚀 Getting Started

### Technology Stack Options

Choose one of these recommended stacks:

#### Java + Spring Boot
```bash
# Using Spring Initializr (https://start.spring.io/) or CLI
# Dependencies to include: Web, Security, JPA, PostgreSQL, Redis, Validation

# Or using Gradle
gradle init --type java-application --dsl groovy --test-framework junit --package com.velato.api --project-name velato-backend
```


## 📁 Project Structure

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
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
```

## 🚀 Quick Start Commands

### Java Spring Boot Commands
```bash

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

### Tasks

[x] Configure docker compose to run postgres via docker locally
[x] configure database connection -> appln prop.
[x] Flyway migration -> (tables to start) -- study normalisation concept for tables creation
[x] migrate users tables id, email, name, passwd
[ ] endpoint - users, auth (use Bcrypt - hash for passwords)
