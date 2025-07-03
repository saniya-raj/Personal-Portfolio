# Portfolio Website Project

## Overview

This is a modern, responsive portfolio website built for Alex Johnson, a full-stack developer and UI/UX designer. The application showcases professional experience, skills, projects, and provides a contact form for potential clients or employers to reach out.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and build processes
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Built-in memory storage with fallback to PostgreSQL sessions
- **API Design**: RESTful API endpoints

## Key Components

### Client-Side Components
- **Single Page Application**: Home page with multiple sections (Hero, About, Skills, Experience, Projects, Contact)
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Interactive Elements**: Smooth scrolling navigation, animated sections, form validation
- **UI Library**: Comprehensive component library based on Radix UI primitives

### Server-Side Components
- **Express Server**: RESTful API with middleware for logging and error handling
- **Contact Form Handler**: Validates and stores contact form submissions
- **Static File Serving**: Serves built React application in production
- **Development Integration**: Vite middleware for hot module replacement

### Database Schema
- **Contact Messages Table**: Stores contact form submissions with fields for name, email, subject, message, and timestamp
- **Schema Validation**: Zod schemas for runtime type checking and validation

## Data Flow

1. **User Interaction**: User navigates the portfolio sections and fills out contact form
2. **Form Submission**: Contact form data is validated client-side using React Hook Form and Zod
3. **API Request**: Form data is sent to `/api/contact` endpoint via POST request
4. **Server Processing**: Express server validates data and stores in database via Drizzle ORM
5. **Response Handling**: Success/error responses are displayed to user via toast notifications
6. **Admin Access**: Contact messages can be retrieved via GET `/api/contact` endpoint

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form, TanStack Query
- **UI Framework**: Radix UI components, Tailwind CSS, Lucide React icons
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Validation**: Zod for schema validation
- **Utilities**: Class Variance Authority, clsx, date-fns

### Development Dependencies
- **Build Tools**: Vite, ESBuild, TypeScript compiler
- **Development**: TSX for TypeScript execution, Replit-specific plugins

## Deployment Strategy

### Development Mode
- **Frontend**: Vite development server with HMR
- **Backend**: TSX for TypeScript execution with auto-restart
- **Database**: Neon Database with connection pooling

### Production Mode
- **Build Process**: Vite builds React app to `dist/public`, ESBuild bundles server to `dist/index.js`
- **Server**: Node.js serves static files and API endpoints
- **Database**: Production PostgreSQL database with connection pooling
- **Environment**: Configured via `DATABASE_URL` environment variable

### Key Architectural Decisions

1. **Monorepo Structure**: Client, server, and shared code in single repository for easier development and deployment
2. **Memory Storage Fallback**: In-memory storage for development, with database integration ready for production
3. **Type Safety**: Full TypeScript coverage with shared types between client and server
4. **Modern Tooling**: Vite for fast development, ESBuild for efficient production builds
5. **Component Library**: Radix UI primitives ensure accessibility and consistency
6. **Database ORM**: Drizzle provides type-safe database operations with PostgreSQL
7. **Validation Strategy**: Zod schemas shared between client and server for consistent validation

## Changelog

Changelog:
- July 03, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.