# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a SKYPASS mobile web application built with Next.js 15.5.6, React 19, and TypeScript. The project is configured for static site generation (`output: 'export'` in next.config.ts) and uses Turbopack for development and builds.

## Key Commands
- VISA관련 프로모션 페이지이다.
- 수요기능은 다음과 같다.
  - 프로모션 메인 페이지
  - 프로모션 서브 페이지
  - 프로모션 참여하기 버튼 클릭 시 외부 링크로 이동

### Development
```bash
npm run dev          # Start dev server with Turbopack
npm run build        # Build static site with Turbopack
npm start            # Start production server
npm run lint         # Run ESLint
```

### Testing
This project does not currently have a test suite configured.

## Architecture

### Next.js Configuration
- **Static Export**: This app is configured to generate static HTML (`output: 'export'`). This means:
  - No server-side APIs or API routes
  - Pages must use `generateStaticParams()` for dynamic routes
  - All data must be known at build time
- **Turbopack**: Enabled for both dev and build for faster compilation
- **Path Alias**: `@/*` maps to project root (e.g., `@/components/ImageSlider`)

### Routing Structure
- `app/page.tsx` - Default landing page (boilerplate)
- `app/[id]/page.tsx` - Dynamic ID-based page displaying SKYPASS content
  - Uses `generateStaticParams()` to pre-generate pages for IDs: '1', '2', '3'
  - Main app interface with header, image slider, content section, and bottom navigation

### Component Architecture
- **Client Components**: Components using interactivity (like Swiper) must use `'use client'` directive
- **ImageSlider** (`components/ImageSlider.tsx`): Client-side component using Swiper.js for auto-playing image carousels
  - Uses Swiper modules: Autoplay, Pagination
  - Configured with 3s autoplay delay and loop
- **Styling**: CSS Modules for component-scoped styling (`.module.css` files)

### Fonts
- Uses `next/font/google` with Geist and Geist Mono fonts
- Font variables applied at root layout level

### TypeScript
- Strict mode enabled
- Target: ES2017
- Module resolution: bundler (Next.js 15 default)

## Important Notes

- All images in `app/[id]/page.tsx` currently point to external HTTP server (1.201.169.106:8080)
- The main SKYPASS interface is on the dynamic `[id]` route, not the root page