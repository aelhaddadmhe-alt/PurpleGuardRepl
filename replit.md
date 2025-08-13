# CyberShield Pro - Managed Security Services

## Overview

CyberShield Pro is a full-stack web application providing managed cybersecurity services for small and medium-sized businesses (SMBs). The platform offers both "Managed" services (traditional managed security) and "Purple" services (specialized security offerings), with integrated subscription management, payment processing via Stripe, and a comprehensive dashboard for users to monitor their security posture.

The application serves as a security services marketplace where businesses can browse services, subscribe to security packages, book consultations, access educational blog content, and manage their security operations through a centralized dashboard.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool

**Routing**: Wouter for client-side routing with conditional rendering based on authentication status

**State Management**: TanStack Query (React Query) for server state management and caching

**UI Framework**: 
- Shadcn/ui components built on Radix UI primitives
- Tailwind CSS for styling with custom design system
- CSS variables for theming with security-focused color palette

**Authentication Flow**: Conditional routing that shows different page sets for authenticated vs unauthenticated users

### Backend Architecture

**Framework**: Express.js with TypeScript running in ESM mode

**Authentication**: Replit OpenID Connect (OIDC) integration with Passport.js strategy and session management

**API Design**: RESTful endpoints with comprehensive error handling and request/response logging middleware

**File Structure**: Clean separation between routes, storage layer, and database connections

### Data Storage Solutions

**Database**: PostgreSQL with Neon serverless connection pooling

**ORM**: Drizzle ORM with type-safe schema definitions and migrations

**Session Storage**: PostgreSQL-backed sessions using connect-pg-simple

**Schema Design**: Comprehensive data model including:
- User management with Stripe integration fields
- Service catalog with categorization (managed/purple)
- Subscription and booking management
- Blog content management
- Security event tracking

### Authentication and Authorization

**Provider**: Replit Auth with OpenID Connect protocol

**Session Management**: Server-side sessions stored in PostgreSQL with configurable TTL

**Security**: HTTP-only secure cookies with session rotation and CSRF protection

**User Context**: Integrated with frontend state management for seamless authentication checks

### Payment Processing

**Provider**: Stripe integration for subscription management

**Implementation**: React Stripe.js components with server-side payment intent creation

**Features**: Subscription-based billing with customer and subscription ID tracking in user profiles

## External Dependencies

### Payment Services
- **Stripe**: Payment processing, subscription management, and customer billing
- Stripe React components for secure payment forms
- Webhook integration for payment status updates

### Database Services
- **Neon PostgreSQL**: Serverless PostgreSQL database with connection pooling
- WebSocket connections for real-time database operations

### Authentication Services
- **Replit Auth**: OpenID Connect authentication provider
- Passport.js for authentication middleware integration

### Development Tools
- **Replit Platform**: Development environment with live reload and error overlay
- Vite plugins for development tooling and runtime error handling

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography

### Email and Communication
- Form submission handling for booking requests and consultations
- Integration points prepared for email service providers

The architecture emphasizes type safety, developer experience, and scalability while maintaining clean separation of concerns between frontend, backend, and data layers.