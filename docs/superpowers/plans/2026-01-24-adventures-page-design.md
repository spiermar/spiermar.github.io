# Adventures Page Design

**Date:** 2026-01-24
**Status:** Approved
**Type:** New Feature

## Overview

Add an "Adventures" page to display travel and outdoor adventures (hiking, climbing, trips). This is a personal section showing a different dimension beyond professional content, featuring completed and planned adventures with photos stored externally.

## Goals

- Create a personal space for travel and outdoor adventure content
- Keep it separate from professional portfolio content
- Display adventures with photos and basic metadata
- Support both completed and planned adventures
- Use external photo storage (Imgur, Google Photos, etc.)

## Content Collection Schema

Create a new content collection at `src/content/adventures/` with the following schema:

### Required Fields
- `title` (string): Adventure name (e.g., "Mount Whitney Summit")
- `location` (string): Where it happened (e.g., "California, USA")
- `date` (date): When it happened or will happen
- `coverImage` (string URL): External URL to hero photo for card and detail page

### Optional Fields
- `status` (enum: "completed" | "planned"): Adventure status. If not specified, inferred from date (past = completed, future = planned)
- `gallery` (string URL): Link to external gallery (Imgur album, Google Photos, Flickr set, etc.)
- `images` (array of URL strings): Individual photo URLs if not using a gallery service
- `category` (enum): "hiking", "climbing", "backpacking", "travel", etc. - for potential future filtering
- `featured` (boolean): To highlight special adventures

### Example Content Files

**With Imgur gallery:**
```yaml
---
title: "Mount Whitney Summit"
location: "California, USA"
date: 2024-08-15
category: "hiking"
coverImage: "https://i.imgur.com/abc123.jpg"
gallery: "https://imgur.com/a/xyz789"
featured: true
---
```

**With individual images:**
```yaml
---
title: "Half Dome Hike"
location: "Yosemite, California"
date: 2023-06-20
coverImage: "https://i.imgur.com/def456.jpg"
images:
  - "https://i.imgur.com/img1.jpg"
  - "https://i.imgur.com/img2.jpg"
  - "https://i.imgur.com/img3.jpg"
---
```

## Page Structure & Routing

### 1. Adventures Index Page (`src/pages/adventures.astro`)

**Features:**
- Lists all adventures in a single column layout
- Sorted chronologically (newest first)
- Grouped by year with year section headers
- Each card shows: cover image, title, date, location, optional "planned" status badge
- Cards are clickable links to individual adventure detail pages
- Optional PageStats showing total count (e.g., "12 adventures · 3 planned")
- Empty state handling

**Layout Pattern:**
- Follow speaking.astro structure
- Group adventures by year
- Year headers with bottom border (same as .year-heading)
- Single column of cards within each year (.adventures-list)

### 2. Adventure Detail Pages (`src/pages/adventures/[slug].astro`)

**Features:**
- Dynamic route for individual adventures (e.g., `/adventures/mount-whitney`)
- Hero image section using coverImage (large, full-width)
- Metadata: title (h1), date, location, optional status badge
- Gallery/Photos section:
  - If `gallery` URL exists: Display prominent "View Full Gallery" button/link (opens in new tab)
  - If `images` array exists: Display images in simple vertical stack (single column)
- Optional MDX content area for future narratives

**Photo Handling:**
- Cover image: Full-width hero at top
- Individual images: Full-width, stacked vertically with spacing
- Gallery link button: Prominent, with external link icon, styled like talk-link

### Navigation

Add "Adventures" link to `src/config.ts` nav array:
- Position: Between "Projects" and "Decisions"
- Label: "Adventures"
- Href: "/adventures"

### Page Metadata

Add to `src/pages.config.ts`:
```typescript
adventures: {
  title: 'Adventures - Travel & Exploration',
  description: 'A collection of hiking, climbing, and travel adventures from around the world.',
  heading: 'Adventures',
  intro: 'A personal collection of outdoor adventures and travels.',
}
```

## Component Structure

### AdventureCard Component (`src/components/AdventureCard.astro`)

**Purpose:** Display adventure preview in the index page list

**Props:**
- `title` (string): Adventure name
- `date` (Date): Adventure date
- `location` (string): Adventure location
- `status` (optional string): "completed" | "planned"
- `coverImage` (string): URL to cover photo
- `slug` (string): URL slug for linking to detail page

**Layout (top to bottom):**
1. Status badge (if status is "planned")
2. Cover image (full-width within card)
3. Date (formatted as "Month Year")
4. Title (h3)
5. Location

**Styling:**
- Follow TalkCard pattern (speaking page)
- Secondary background, border, subtle hover effect
- Status badge styled like featured badge in TalkCard
- Date styled like talk-date (small, muted text)
- Entire card wrapped in `<a>` tag linking to detail page
- Single column layout (no responsive grid)

## Implementation Files

### Files to Create

1. **Content Collection Schema** (`src/content.config.ts`)
   - Add `adventuresCollection` definition
   - Export in collections object

2. **Component** (`src/components/AdventureCard.astro`)
   - Adventure card component following TalkCard pattern

3. **Index Page** (`src/pages/adventures.astro`)
   - Query all adventures from collection
   - Sort by date (descending)
   - Group by year
   - Render year sections with AdventureCard components
   - Optional PageStats

4. **Detail Page** (`src/pages/adventures/[slug].astro`)
   - Dynamic route using `getCollection` and `getEntry`
   - Display hero image, metadata, gallery link or images
   - Optional MDX body content rendering

5. **Configuration Updates**
   - Add to `src/config.ts` nav array
   - Add to `src/pages.config.ts`

6. **Sample Content** (optional)
   - Create 1-2 sample MDX files in `src/content/adventures/` for testing

## Data Flow

1. Content authors add MDX files to `src/content/adventures/`
2. Astro content collections validate schema at build time
3. Index page queries all adventures, groups by year, renders cards
4. Cards link to detail pages using slug
5. Detail pages query individual adventure by slug, render full layout

## Design Decisions

### Why External Photo Storage?
- Keeps repository size small
- Easier photo management for large images
- Flexibility to use existing photo services (Imgur, Google Photos)
- No need to version control large binary files

### Why Single Column Layout?
- Simplicity over complexity
- Consistent with minimalist design approach
- Focus on individual adventures rather than grid browsing
- Better for photo-heavy content

### Why Follow Speaking Page Pattern?
- Consistency with existing site architecture
- Proven component patterns (TalkCard)
- Familiar year-based grouping
- Reusable styling and layout conventions

### Why Separate from Professional Content?
- Adventures are personal, not professional work
- Clear separation of concerns
- Humanizes the portfolio
- Shows personality beyond technical skills

## Future Considerations

- Could add category filtering if adventure count grows significantly
- Could add map view using category/location data
- Could add rich narratives using MDX body content
- Could add metrics (distance, elevation, duration) to schema
- Could add tags/topics similar to speaking page
