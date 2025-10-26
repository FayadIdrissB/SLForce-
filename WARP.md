# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

SLForce is a messaging application connecting coaches and athletes in the fitness industry. The system enables coach-athlete communication with subscription-based access, payment processing (PayPal for athletes, Stripe for coaches), and integrated chat functionality via Stream Chat.

## Architecture

**Backend**: ASP.NET Core 6.0 Web API with minimal API setup
- **Main Entry Point**: `slf-backend/Program.cs` - Standard ASP.NET Core startup with Swagger/OpenAPI
- **Database**: SQL database with comprehensive user management, subscription, and messaging schema
- **Payment Integration**: Dual payment system (PayPal for athletes, Stripe for coaches)
- **Messaging**: Stream Chat integration for real-time communication

**Database Schema**:
- **User Management**: Three-tier user system (base user → athlete/coach specialization)
- **Subscription Model**: Separate tables for PayPal (athletes) and Stripe (coaches) subscriptions
- **Messaging System**: Integration with Stream Chat via message tracking tables
- **Admin System**: Admin privileges for account management and moderation

## Development Commands

### Backend Development

```bash
# Navigate to backend directory
cd slf-backend

# Restore dependencies
dotnet restore

# Build the application
dotnet build

# Run in development mode (launches Swagger at https://localhost:7070)
dotnet run

# Build for production
dotnet build --configuration Release

# Run tests (when tests are implemented)
dotnet test
```

### Development URLs
- **API**: https://localhost:7070 (HTTPS) or http://localhost:5120 (HTTP)
- **Swagger UI**: https://localhost:7070/swagger
- **IIS Express**: http://localhost:65327 (HTTPS: 44313)

## Key Implementation Details

### Security Strategy
The project follows a comprehensive security strategy (detailed in `conception/security strategy.md`):
- **Authentication**: JWT-based with access/refresh token pattern
- **Password Security**: bcrypt hashing with strong password policies  
- **Communication**: HTTPS mandatory, Stream Chat provides message encryption
- **Payment Security**: PCI-DSS compliant via Stripe/PayPal, no card data storage
- **Attack Prevention**: Protection against XSS, CSRF, SQL injection, brute force

### Business Rules
Core business logic (from `conception/gestion rules.md`):
- **User Registration**: Must choose Coach or Athlete role during signup
- **Authentication**: 8 failed login attempts limit, password reset via email
- **Subscriptions**: Athletes use PayPal, Coaches use Stripe, both required for premium features
- **Messaging**: Coach-athlete communication via Stream Chat with message status tracking
- **Admin Powers**: Account deletion, banning, and user management

### Database Design
The database supports:
- **Multi-role Users**: Base user table with specialized athlete/coach extensions
- **Payment Tracking**: Separate subscription management for each payment provider
- **Message Audit**: Message tracking with Stream Chat integration for compliance
- **Admin Management**: Centralized admin control over all user accounts

## Testing Strategy

The CI pipeline (`.github/workflows/app.yml`) runs on:
- **Triggers**: Push/PR to `main` and `develop` branches
- **Environment**: Ubuntu latest with .NET 6
- **Steps**: Restore → Build → Test

**To run tests locally**:
```bash
cd slf-backend
dotnet test --verbosity normal
```

## Project Structure Context

```
SLForce 💪🏽/
├── conception/                    # Project documentation and design
│   ├── data dictionary.md         # Complete database schema documentation
│   ├── gestion rules.md          # Business rules and logic specifications
│   ├── security strategy.md      # Comprehensive security implementation plan
│   └── sql/script.sql            # Database creation script
├── slf-backend/                  # ASP.NET Core 6.0 Web API
│   ├── Controllers/              # API controllers
│   ├── Program.cs               # Application entry point and configuration
│   └── Properties/launchSettings.json  # Development server configuration
```

## Development Notes

- **Framework**: .NET 6.0 with implicit usings enabled
- **API Documentation**: Swagger/OpenAPI integrated for development
- **Namespace**: Uses `slf_backend` with underscores (converted from hyphens)
- **Dependencies**: Currently minimal - just Swashbuckle for Swagger

**Current State**: This appears to be a freshly scaffolded ASP.NET Core project with the standard WeatherForecast template. The business logic, database integration, payment processing, and Stream Chat integration are yet to be implemented based on the comprehensive design documents in the `conception/` folder.

## Next Development Steps

Based on the design documents, priority implementation areas:
1. **Database Integration**: Implement Entity Framework models matching the SQL schema
2. **Authentication System**: JWT-based auth with role-based access control
3. **User Management**: Registration, login, profile management for coaches/athletes
4. **Payment Integration**: Stripe and PayPal SDK integration
5. **Stream Chat Integration**: Real-time messaging between coaches and athletes
6. **Admin Panel**: User management and moderation features

<citations>
<document>
<document_type>WARP_DOCUMENTATION</document_type>
<document_id>getting-started/quickstart-guide/coding-in-warp</document_id>
</document>
</citations>