# Portfolio Website - replit.md

## Overview

This is a modern, responsive portfolio website for Dheeraj Parihar, an Associate Engineer and Azure Certified Professional. The application is built using a full-stack architecture with React frontend, Express backend, and PostgreSQL database integration through Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.
Contact Information:
- Email: workwithdheeraj@outlook.com
- LinkedIn: https://www.linkedin.com/in/dheeraj-parihar
- GitHub: https://github.com/Dheeraj0-0

## Recent Changes

### July 19, 2025
- Updated contact information across all components with new email, LinkedIn, and GitHub links
- Enhanced hero section with social media buttons (GitHub, LinkedIn, Email)
- Made LinkedIn and GitHub links clickable in contact section
- Updated resume download content with new contact details
- Improved layout to match user's design preferences with better button placement
- **Added PostgreSQL database integration:**
  - Created database connection using Neon serverless PostgreSQL
  - Added contact submissions table to store form data
  - Replaced in-memory storage with DatabaseStorage class
  - Contact form now saves all submissions to database
  - Added admin endpoint to view contact submissions
- **Created completely static version:**
  - Removed all backend dependencies for pure static deployment
  - Contact form now opens email client with pre-filled data
  - Resume download generates and downloads text file client-side
  - Built optimized static assets in dist-static/ directory
  - Added deployment script and documentation for static hosting

## System Architecture

The application follows a monorepo structure with clear separation of concerns:

- **Frontend**: React application with TypeScript and modern UI components
- **Backend**: Express.js server with REST API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Styling**: TailwindCSS with shadcn/ui component library
- **Build System**: Vite for frontend bundling and esbuild for backend compilation

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: TailwindCSS with CSS custom properties for theming
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: Express sessions with PostgreSQL store
- **Validation**: Zod schemas for request/response validation
- **Development**: Hot reload with Vite development server integration

### Database Schema
- **Users Table**: Basic user authentication structure  
- **Contact Submissions Table**: Stores contact form submissions with name, email, message, and timestamp
- **Connection**: Neon Database serverless PostgreSQL
- **Migrations**: Drizzle Kit for schema management

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Processing**: Express routes handle requests with validation
3. **Database Operations**: Drizzle ORM manages database interactions
4. **Response Handling**: Type-safe responses sent back to frontend
5. **UI Updates**: React Query manages cache invalidation and UI updates

### Key Data Flows:
- Contact form submission: Client → API validation → Database storage
- Resume download: Direct file serving through Express static handler
- User authentication: Session-based auth with PostgreSQL storage
- Admin contact viewing: API endpoint → Database query → JSON response

## External Dependencies

### Core Dependencies:
- **@neondatabase/serverless**: Neon PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Headless UI components
- **react-hook-form**: Form state management
- **zod**: Schema validation

### Development Tools:
- **Vite**: Frontend build tool with HMR
- **esbuild**: Backend bundling
- **TypeScript**: Type safety across the stack
- **TailwindCSS**: Utility-first CSS framework

## Deployment Strategy

### Build Process:
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `npm run db:push`

### Environment Configuration:
- **Development**: Hot reload with Vite dev server
- **Production**: Static file serving with Express
- **Database**: Environment-based DATABASE_URL configuration

### Scripts:
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server startup
- `npm run db:push`: Apply database schema changes

### Hosting Considerations:
- Static assets served from `dist/public`
- API endpoints prefixed with `/api`
- Session storage requires persistent PostgreSQL connection
- Environment variables needed: DATABASE_URL

The application is designed to be easily deployable on platforms like Replit, with automatic asset serving and database connectivity handled through environment variables.