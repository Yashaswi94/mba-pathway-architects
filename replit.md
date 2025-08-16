# MBA Coaching Platform

## Overview

This is a React-based web application for an MBA coaching and admissions consulting service focused on UK and European business schools. The platform appears to be a marketing/landing page showcasing coaching services, with the potential for future expansion into a full-featured coaching platform with user management and interactive features.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Framework**: Comprehensive component library based on shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with a custom design system including CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: React Router for client-side navigation
- **Build System**: Vite with custom configuration for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API structure with route registration system
- **Database Layer**: Drizzle ORM providing type-safe database operations
- **Session Management**: PostgreSQL session store using connect-pg-simple
- **Development**: Custom middleware for request logging and error handling

### Data Storage
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM with schema-first approach
- **Migrations**: Drizzle Kit for database schema management
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`
- **Connection**: Serverless-optimized connection pooling

### Design System
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Theme System**: CSS custom properties with light/dark mode support
- **Typography**: Responsive design with mobile-first approach
- **Icons**: Lucide React icon library
- **Layout**: Flexible grid and flexbox layouts with Tailwind utilities

### Development Architecture
- **Monorepo Structure**: Client and server code in separate directories with shared types
- **Type Safety**: Full TypeScript coverage with shared type definitions
- **Development Server**: Vite dev server with HMR and custom middleware integration
- **Build Process**: Separate client (Vite) and server (esbuild) build pipelines
- **Code Organization**: Feature-based organization with clear separation of concerns

### Authentication & Authorization
- **Current State**: Basic user schema defined but not implemented
- **Planned Features**: User registration, login, and session management infrastructure ready
- **Session Storage**: PostgreSQL-backed session management configured

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver for database connectivity
- **drizzle-orm**: Type-safe ORM for database operations and query building
- **drizzle-kit**: Database migration and schema management tooling

### UI and Component Libraries
- **@radix-ui/***: Comprehensive set of headless UI primitives for accessible components
- **@tanstack/react-query**: Server state management and data fetching library
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: Type-safe variant API for component styling
- **lucide-react**: Feather-inspired icon library

### Development and Build Tools
- **vite**: Next-generation frontend build tool with fast HMR
- **@vitejs/plugin-react**: React support for Vite with Fast Refresh
- **esbuild**: Fast JavaScript bundler for server-side code
- **tsx**: TypeScript execution environment for development

### Form and Validation
- **react-hook-form**: Performant forms library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for react-hook-form
- **zod**: TypeScript-first schema validation (via drizzle-zod)

### Utility Libraries
- **date-fns**: Modern JavaScript date utility library
- **clsx**: Utility for constructing className strings conditionally
- **nanoid**: URL-safe unique string ID generator

### Replit Integration
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific development tools