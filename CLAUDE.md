# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal web page. The main goal is to publish blog posts, project details, decision logs and talks to a wide variety of readers, and serve as a central repository for all content published by the author.

## Tech Stack
- **Framework:** Astro (v5+)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** Markdown/MDX via Content Collections (`src/content/`)
- **Testing:** Vitest

## Commands
- `npm run dev`: Start development server.
- `npm run build`: Build for production.
- `npm run check`: Run TypeScript check (`astro check`).
- `npm run lint`: Lint code.
- `npm run test:run`: Run unit tests.

## MCP Tools
- Use {Link: Astro Docs MCP server https://mcp.docs.astro.build/mcp} for latest syntax.

## Coding Standards and Conventions

### Astro-Specific Guidelines
- Use `.astro` components for UI, following the component script + template pattern.
- Prefer Astro components over framework components (React/Vue) unless interactive islands are required.
- Leverage `---` frontmatter for all server-side data fetching and logic.
- Use `astro:content` for type-safe content loading.
- Implement proper SEO using `<head>` components and `@astrojs/sitemap`.
- Use `src/layouts/` for page wrappers.

### Version Control
- Use Conventional Commits specification for git commit messages
- Use semantic versioning (SemVer)

## Architecture Overview

### Project Structure
- `src/components/`: Reusable UI components.
- `src/content/`: Markdown files and Zod schemas (`config.ts`).
- `src/layouts/`: Astro layouts.
- `src/pages/`: Routing and endpoints.
- `src/styles/`: Global CSS and Tailwind imports.
- `src/assets/`: Static assets.
- `public/`: Public static files.

### Content Structure

- `src/content/decisions`: A transparent log of architectural and technical decisions.
- `src/content/journey`: A timeline of my professional growth and learning progression. 
- `src/content/projects`: Case studies that demonstrate how I approach complex problems, make technical decisions, and deliver measurable impact.
- `src/content/speaking`: A collection of my talks and presentations.
- `src/content/writing`: Technical articles, insights, and lessons learned from building software systems.

## Workflows
 