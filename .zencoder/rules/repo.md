# Arun Portfolio Information

## Summary
A modern, fully responsive portfolio website built with Next.js, React, and Tailwind CSS to showcase the skills, projects, and achievements of Arunpandian C. The portfolio features a responsive design, animated UI elements, dark/light mode toggle, command palette for quick navigation, and performance optimizations.

## Structure
- **app/**: Main Next.js App Router pages and layout
- **components/**: UI components organized by sections and reusable UI elements
- **hooks/**: Custom React hooks for animations, mobile optimization, and state management
- **lib/**: Utility functions, constants, and TypeScript types
- **public/**: Static assets including images and resume
- **styles/**: Global CSS styles and Tailwind configuration
- **scripts/**: Utility scripts for optimization

## Language & Runtime
**Language**: TypeScript
**Framework**: Next.js 15 (App Router)
**Node Version**: Compatible with Node.js 18+ (inferred from Next.js 15 requirements)
**Build System**: Next.js build system
**Package Manager**: pnpm (based on lock file)

## Dependencies
**Main Dependencies**:
- Next.js 15.2.4: React framework
- React 19: UI library
- Tailwind CSS 3.4.17: Utility-first CSS framework
- Radix UI components: Accessible UI primitives
- Lucide React 0.454.0: Icon library
- next-themes: Theme management
- react-hook-form: Form handling
- zod 3.24.1: Schema validation

**Development Dependencies**:
- TypeScript 5: Static type checking
- ESLint 9.31.0: Code linting
- PostCSS 8.5: CSS processing
- @types packages: TypeScript type definitions

## Build & Installation
```bash
# Install dependencies
pnpm install

# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Type checking
pnpm type-check

# Format code
pnpm format
```

## Performance Optimizations
- Image optimization with Next.js Image component
- Lazy loading of components and sections
- CSS animations with Intersection Observer
- Bundle optimization with package imports
- Mobile-specific optimizations
- Debounced event handlers

## Features
- Responsive design for all devices
- Dark/Light mode theme toggle
- Command palette with keyboard shortcuts
- Search functionality (triggered with `/` key)
- Scroll progress indicator
- Interactive contact form with validation
- Error boundary for graceful error handling
- Performance monitoring and optimization
- Animated UI elements and transitions