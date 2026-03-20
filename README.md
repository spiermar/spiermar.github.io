# spiermar.github.io

Personal website and portfolio built with [Astro](https://astro.build) using the [Case theme](https://github.com/erlandv/case).

## Overview

This site serves as a central repository for publishing blog posts, project details, decision logs, and talks. It showcases engineering work through structured case studies and technical writing.

## Tech Stack

- **Framework:** Astro (v5+)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** Markdown/MDX via Content Collections
- **Testing:** Vitest

## Content Structure

- **Projects** — Case studies demonstrating problem-solving, technical decisions, and measurable impact
- **Decisions** — Architectural and technical decision records (ADR-style)
- **Journey** — Professional milestones and career progression
- **Writing** — Technical articles and engineering insights
- **Speaking** — Conference talks and presentations
- **Testimonials** — Peer and client recommendations
- **Adventures** — Personal adventures and travel

## Development

```bash
npm install        # Install dependencies
npm run dev        # Start development server (http://localhost:4321)
npm run build      # Build for production
npm run check      # TypeScript check
npm run test:run   # Run tests
```

## Project Structure

```
├── src/
│   ├── components/    # Reusable UI components
│   ├── content/       # Markdown/MDX content collections
│   ├── layouts/       # Astro layouts
│   ├── pages/         # Routes and endpoints
│   ├── styles/        # Global CSS and Tailwind
│   └── assets/        # Static assets
├── public/            # Public static files
└── docs/              # Theme documentation
```

## License

MIT
