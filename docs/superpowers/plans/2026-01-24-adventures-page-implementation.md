# Adventures Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Implement an Adventures page to display travel and outdoor adventures with external photo storage, following the Speaking page pattern.

**Architecture:** Content collection at `src/content/adventures/` with Zod schema validation, index page grouped by year, dynamic detail pages, and AdventureCard component following TalkCard styling patterns.

**Tech Stack:** Astro v5+, TypeScript, Zod, Tailwind CSS, MDX

---

## Task 1: Add Adventures Collection Schema

**Files:**
- Modify: `src/content.config.ts` (add adventuresCollection after speakingCollection, before testimonialsCollection)

**Step 1: Add adventures collection definition**

Add after line 277 (after speakingCollection):

```typescript
/**
 * Adventures Collection
 *
 * Travel and outdoor adventures including hiking, climbing, and trips.
 * Photos are stored externally (Imgur, Google Photos, etc.).
 *
 * Features:
 * - External photo storage via URLs
 * - Optional gallery links or individual images
 * - Status inferred from date if not specified
 * - Category for future filtering
 * - Featured flag for highlighting
 */
const adventuresCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/adventures' }),
  schema: z.object({
    /** Adventure title */
    title: z.string(),

    /** Location (e.g., "California, USA") */
    location: z.string(),

    /** Date of adventure */
    date: z.coerce.date(),

    /** External URL to cover image */
    coverImage: z.string().url(),

    /** Status (optional, inferred from date if not provided) */
    status: z.enum(['completed', 'planned']).optional(),

    /** External gallery URL (optional) */
    gallery: z.string().url().optional(),

    /** Individual image URLs (optional) */
    images: z.array(z.string().url()).optional(),

    /** Category (optional) */
    category: z.enum(['hiking', 'climbing', 'backpacking', 'travel']).optional(),

    /** Whether to feature this adventure */
    featured: z.boolean().default(false),
  }),
});
```

**Step 2: Add to collections export**

Update the collections export (around line 320):

```typescript
export const collections = {
  projects: projectsCollection,
  decisions: decisionsCollection,
  journey: journeyCollection,
  writing: writingCollection,
  speaking: speakingCollection,
  adventures: adventuresCollection,
  testimonials: testimonialsCollection,
};
```

**Step 3: Run type check**

Run: `npm run check`
Expected: Success with no errors

**Step 4: Commit**

```bash
git add src/content.config.ts
git commit -m "feat: add adventures content collection schema

Add adventures collection with schema for travel/outdoor adventures:
- Required: title, location, date, coverImage
- Optional: status, gallery, images, category, featured
- External photo storage via URLs

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 2: Update Configuration Files

**Files:**
- Modify: `src/config.ts` (add nav item)
- Modify: `src/pages.config.ts` (add page metadata)

**Step 1: Add navigation item**

In `src/config.ts`, update nav array (around line 127):

```typescript
nav: [
  { label: 'Projects', href: '/projects' },
  { label: 'Adventures', href: '/adventures' },
  { label: 'Decisions', href: '/decisions' },
  { label: 'Journey', href: '/journey' },
  { label: 'Writing', href: '/writing' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'Contact', href: '/contact' },
],
```

**Step 2: Add page metadata**

In `src/pages.config.ts`, add after speaking config (around line 109):

```typescript
/**
 * Adventures page (/adventures)
 */
adventures: {
  title: 'Adventures - Travel & Exploration',
  description: 'A collection of hiking, climbing, and travel adventures from around the world.',
  heading: 'Adventures',
  intro: 'A personal collection of outdoor adventures and travels.',
},
```

**Step 3: Run type check**

Run: `npm run check`
Expected: Success with no errors

**Step 4: Commit**

```bash
git add src/config.ts src/pages.config.ts
git commit -m "feat: add adventures navigation and page config

Add Adventures to main navigation between Projects and Decisions.
Add page metadata for Adventures page.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 3: Create AdventureCard Component

**Files:**
- Create: `src/components/AdventureCard.astro`

**Step 1: Create AdventureCard component**

Create `src/components/AdventureCard.astro`:

```astro
---
/**
 * AdventureCard Component
 *
 * Displays an adventure preview card with cover image, title, date, location,
 * and optional status badge. Entire card is clickable and links to detail page.
 *
 * Follows TalkCard styling patterns for consistency with Speaking page.
 *
 * @component
 */

interface Props {
  /** Adventure title */
  title: string;

  /** Adventure date */
  date: Date;

  /** Adventure location */
  location: string;

  /** Status (optional: "completed" | "planned") */
  status?: 'completed' | 'planned';

  /** URL to cover image */
  coverImage: string;

  /** URL slug for linking to detail page */
  slug: string;
}

const {
  title,
  date,
  location,
  status,
  coverImage,
  slug
} = Astro.props;

/**
 * Formats the adventure date to show month and year only
 * Example output: "June 2024"
 */
const formattedDate = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long'
}).format(date);
---

<a href={`/adventures/${slug}`} class="adventure-card">
  {status === 'planned' && (
    <span class="status-badge">
      Planned
    </span>
  )}

  <div class="adventure-image">
    <img src={coverImage} alt={title} />
  </div>

  <div class="adventure-content">
    <span class="adventure-date">{formattedDate}</span>
    <h3 class="adventure-title">{title}</h3>
    <p class="adventure-location">{location}</p>
  </div>
</a>

<style>
  .adventure-card {
    position: relative;
    display: block;
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: 8px;
    overflow: hidden;
    transition: border-color 0.2s ease, background 0.2s ease;
    text-decoration: none;
  }

  .adventure-card:hover {
    border-color: var(--color-text-muted);
    background: var(--color-bg-elevated);
  }

  .status-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 10;
    display: inline-flex;
    align-items: center;
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-accent);
    background: var(--color-bg-secondary);
    padding: 0.375rem 0.75rem;
    border-radius: 4px;
    border: 1px solid var(--color-accent);
  }

  .adventure-image {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: var(--color-bg);
  }

  .adventure-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .adventure-content {
    padding: 1.5rem 1.75rem;
  }

  .adventure-date {
    font-size: 0.75rem;
    color: var(--color-text-muted);
    display: block;
    margin-bottom: 0.5rem;
  }

  .adventure-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-text);
    margin: 0 0 0.5rem 0;
    line-height: 1.4;
  }

  .adventure-location {
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
    margin: 0;
    line-height: 1.6;
  }

  @media (max-width: 640px) {
    .adventure-content {
      padding: 1.25rem 1.5rem;
    }

    .adventure-title {
      font-size: 1rem;
    }
  }
</style>
```

**Step 2: Run type check**

Run: `npm run check`
Expected: Success with no errors

**Step 3: Commit**

```bash
git add src/components/AdventureCard.astro
git commit -m "feat: add AdventureCard component

Create adventure preview card component following TalkCard pattern:
- Cover image with 16:9 aspect ratio
- Title, date, location metadata
- Optional 'Planned' status badge
- Entire card is clickable link to detail page
- Consistent styling with speaking page

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 4: Create Adventures Index Page

**Files:**
- Create: `src/pages/adventures.astro`

**Step 1: Create adventures index page**

Create `src/pages/adventures.astro`:

```astro
---
/**
 * Adventures Page
 *
 * Lists all adventures including hiking, climbing, and travel experiences.
 * Organizes adventures by year in reverse chronological order, with each year
 * displaying adventures sorted by date (most recent first).
 *
 * Features:
 * - Queries all adventure entries from content collection
 * - Sorts by date (descending - most recent first)
 * - Groups adventures by year for easy navigation
 * - Displays statistics (total adventures, planned count)
 * - Single column layout
 * - Empty state handling
 *
 * Route: /adventures
 *
 * @page
 */

import BaseLayout from '../layouts/BaseLayout.astro';
import SEO from '../components/SEO.astro';
import AdventureCard from '../components/AdventureCard.astro';
import PageStats from '../components/PageStats.astro';
import { getCollection } from 'astro:content';
import { pagesConfig } from '../pages.config';

/**
 * Queries all adventure entries from the content collection
 */
const allAdventures = await getCollection('adventures');

/**
 * Sorts adventures by date in descending order (most recent first)
 */
const sortedAdventures = allAdventures.sort((a, b) => {
  return b.data.date.getTime() - a.data.date.getTime();
});

/**
 * Groups adventures by year for organized display
 *
 * Creates a record object where keys are years and values are arrays of adventures
 * from that year. This enables year-based section headers in the UI.
 */
const adventuresByYear = sortedAdventures.reduce((acc, adventure) => {
  const year = adventure.data.date.getFullYear();
  if (!acc[year]) {
    acc[year] = [];
  }
  acc[year].push(adventure);
  return acc;
}, {} as Record<number, typeof sortedAdventures>);

/**
 * Extracts and sorts years in descending order
 */
const years = Object.keys(adventuresByYear)
  .map(Number)
  .sort((a, b) => b - a);

/**
 * Total count of all adventures for statistics display
 */
const totalAdventures = sortedAdventures.length;

/**
 * Count of planned adventures for statistics display
 */
const plannedCount = sortedAdventures.filter(a => {
  const status = a.data.status || (a.data.date > new Date() ? 'planned' : 'completed');
  return status === 'planned';
}).length;
---

<BaseLayout>
  <SEO
    slot="head"
    title={pagesConfig.adventures.title}
    description={pagesConfig.adventures.description}
    type="website"
  />

  <main class="page-container">
    <header class="page-header">
      <h1 class="page-title">{pagesConfig.adventures.heading}</h1>
      <p class="page-intro">
        {pagesConfig.adventures.intro}
      </p>
      <PageStats text={`${totalAdventures} adventures · ${plannedCount} planned`} />
    </header>

    {years.length > 0 ? (
      <div class="adventures-by-year">
        {years.map((year) => (
          <section class="year-section">
            <h2 class="year-heading">{year}</h2>
            <div class="adventures-list">
              {adventuresByYear[year].map((adventure) => (
                <AdventureCard
                  title={adventure.data.title}
                  date={adventure.data.date}
                  location={adventure.data.location}
                  status={adventure.data.status || (adventure.data.date > new Date() ? 'planned' : 'completed')}
                  coverImage={adventure.data.coverImage}
                  slug={adventure.id}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    ) : (
      <p class="empty-state">No adventures yet.</p>
    )}
  </main>

  <style>
    .adventures-by-year {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    .year-section {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .year-heading {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--color-text);
      padding-bottom: 0.75rem;
      border-bottom: 2px solid var(--color-border);
      margin: 0;
    }

    .adventures-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    @media (max-width: 768px) {
      .year-heading {
        font-size: 1.25rem;
      }
    }
  </style>
</BaseLayout>
```

**Step 2: Run type check**

Run: `npm run check`
Expected: Success with no errors

**Step 3: Run dev server and verify**

Run: `npm run dev`
Visit: `http://localhost:4321/adventures`
Expected: Empty state message (no adventures yet)

**Step 4: Commit**

```bash
git add src/pages/adventures.astro
git commit -m "feat: add adventures index page

Create adventures listing page with:
- Query all adventures from content collection
- Group by year in reverse chronological order
- Display AdventureCard components in single column
- Show stats (total adventures, planned count)
- Empty state handling
- Follow speaking page layout pattern

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 5: Create Adventure Detail Page

**Files:**
- Create: `src/pages/adventures/[slug].astro`

**Step 1: Create adventure detail page**

Create `src/pages/adventures/[slug].astro`:

```astro
---
/**
 * Adventure Detail Page
 *
 * Dynamic page for individual adventure details. Displays hero image,
 * adventure metadata, and either a gallery link or individual images.
 *
 * Features:
 * - Large hero image (coverImage)
 * - Title, date, location, status
 * - Gallery link button (if gallery URL provided)
 * - Individual images display (if images array provided)
 * - Optional MDX body content
 *
 * Route: /adventures/[slug]
 *
 * @page
 */

import BaseLayout from '../../layouts/BaseLayout.astro';
import SEO from '../../components/SEO.astro';
import { getCollection, getEntry } from 'astro:content';

/**
 * Static path generation for all adventures
 */
export async function getStaticPaths() {
  const adventures = await getCollection('adventures');
  return adventures.map((adventure) => ({
    params: { slug: adventure.id },
    props: { adventure },
  }));
}

const { adventure } = Astro.props;
const { Content } = await adventure.render();

/**
 * Format date for display
 */
const formattedDate = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}).format(adventure.data.date);

/**
 * Determine status if not explicitly set
 */
const status = adventure.data.status || (adventure.data.date > new Date() ? 'planned' : 'completed');
---

<BaseLayout>
  <SEO
    slot="head"
    title={`${adventure.data.title} - Adventures`}
    description={`${adventure.data.title} - ${adventure.data.location}`}
    type="article"
  />

  <main class="page-container">
    <article class="adventure-detail">
      <!-- Hero Image -->
      <div class="hero-image">
        <img src={adventure.data.coverImage} alt={adventure.data.title} />
      </div>

      <!-- Header -->
      <header class="adventure-header">
        {status === 'planned' && (
          <span class="status-badge">Planned</span>
        )}
        <h1 class="adventure-title">{adventure.data.title}</h1>
        <div class="adventure-meta">
          <span class="meta-item">{formattedDate}</span>
          <span class="meta-separator">·</span>
          <span class="meta-item">{adventure.data.location}</span>
        </div>
      </header>

      <!-- Gallery/Images Section -->
      {(adventure.data.gallery || adventure.data.images) && (
        <section class="photos-section">
          {adventure.data.gallery && (
            <a
              href={adventure.data.gallery}
              target="_blank"
              rel="noopener noreferrer"
              class="gallery-link"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              View Full Gallery
              <svg class="external-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}

          {adventure.data.images && adventure.data.images.length > 0 && (
            <div class="images-grid">
              {adventure.data.images.map((image) => (
                <div class="image-item">
                  <img src={image} alt={`${adventure.data.title} photo`} />
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      <!-- Optional MDX Content -->
      {Content && (
        <div class="adventure-content prose">
          <Content />
        </div>
      )}
    </article>
  </main>

  <style>
    .adventure-detail {
      max-width: 48rem;
      margin: 0 auto;
    }

    .hero-image {
      width: 100%;
      aspect-ratio: 16 / 9;
      overflow: hidden;
      border-radius: 8px;
      margin-bottom: 2rem;
      background: var(--color-bg);
    }

    .hero-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .adventure-header {
      margin-bottom: 2rem;
    }

    .status-badge {
      display: inline-flex;
      align-items: center;
      font-size: 0.6875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--color-accent);
      background: var(--color-bg-secondary);
      padding: 0.375rem 0.75rem;
      border-radius: 4px;
      border: 1px solid var(--color-accent);
      margin-bottom: 1rem;
    }

    .adventure-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--color-text);
      margin: 0 0 1rem 0;
      line-height: 1.2;
    }

    .adventure-meta {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1rem;
      color: var(--color-text-secondary);
    }

    .meta-separator {
      color: var(--color-text-muted);
    }

    .photos-section {
      margin-bottom: 2rem;
    }

    .gallery-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1rem;
      font-weight: 500;
      color: var(--color-accent);
      text-decoration: none;
      padding: 0.75rem 1.25rem;
      background: var(--color-bg-secondary);
      border: 1px solid var(--color-border);
      border-radius: 6px;
      transition: opacity 0.2s ease, border-color 0.2s ease;
    }

    .gallery-link:hover {
      opacity: 0.8;
      border-color: var(--color-accent);
    }

    .gallery-link svg {
      flex-shrink: 0;
    }

    .external-icon {
      opacity: 0.6;
    }

    .images-grid {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-top: 1.5rem;
    }

    .image-item {
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
      background: var(--color-bg);
    }

    .image-item img {
      width: 100%;
      height: auto;
      display: block;
    }

    .adventure-content {
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid var(--color-border);
    }

    @media (max-width: 768px) {
      .adventure-title {
        font-size: 2rem;
      }

      .adventure-meta {
        font-size: 0.875rem;
      }
    }
  </style>
</BaseLayout>
```

**Step 2: Run type check**

Run: `npm run check`
Expected: Success with no errors

**Step 3: Commit**

```bash
git add src/pages/adventures/[slug].astro
git commit -m "feat: add adventure detail page

Create dynamic adventure detail page with:
- Hero image at top (16:9 aspect ratio)
- Title, date, location, status metadata
- Gallery link button if gallery URL provided
- Individual images display if images array provided
- Optional MDX content area
- Responsive design

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 6: Create Sample Content

**Files:**
- Create: `src/content/adventures/2024-sample-hike.mdx`
- Create: `src/content/adventures/2025-planned-trip.mdx`

**Step 1: Create completed adventure sample**

Create `src/content/adventures/2024-sample-hike.mdx`:

```mdx
---
title: "Sample Mountain Hike"
location: "Test Mountains, CA"
date: 2024-06-15
category: "hiking"
coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800"
images:
  - "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
  - "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800"
featured: true
---
```

**Step 2: Create planned adventure sample**

Create `src/content/adventures/2025-planned-trip.mdx`:

```mdx
---
title: "Upcoming Summit Attempt"
location: "Future Peak, USA"
date: 2025-08-01
status: "planned"
category: "climbing"
coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
gallery: "https://example.com/gallery"
---
```

**Step 3: Run build to test content loading**

Run: `npm run build`
Expected: Success, adventures pages generated

**Step 4: Test in dev mode**

Run: `npm run dev`
Visit: `http://localhost:4321/adventures`
Expected: See 2 adventures grouped by year (2024, 2025)
Visit: `http://localhost:4321/adventures/2024-sample-hike`
Expected: See adventure detail with images
Visit: `http://localhost:4321/adventures/2025-planned-trip`
Expected: See adventure detail with gallery link and "Planned" badge

**Step 5: Commit**

```bash
git add src/content/adventures/
git commit -m "feat: add sample adventure content

Add two sample adventures for testing:
- 2024 completed hike with individual images
- 2025 planned trip with gallery link and status badge

Uses Unsplash placeholder images for testing.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 7: Final Testing and Verification

**Files:**
- None (testing only)

**Step 1: Run full test suite**

Run: `npm run test:run`
Expected: All tests pass

**Step 2: Run TypeScript check**

Run: `npm run check`
Expected: No errors, no warnings

**Step 3: Run linter**

Run: `npm run lint`
Expected: No errors, no warnings

**Step 4: Build for production**

Run: `npm run build`
Expected: Successful build, adventures pages generated

**Step 5: Manual testing checklist**

Start dev server: `npm run dev`

Test the following:
- [ ] Navigate to /adventures from main navigation
- [ ] Verify adventures are grouped by year (2024, 2025)
- [ ] Verify 2025 adventure shows "Planned" badge
- [ ] Click on 2024 adventure card
- [ ] Verify detail page shows hero image, title, date, location
- [ ] Verify individual images are displayed
- [ ] Go back and click on 2025 adventure
- [ ] Verify "View Full Gallery" button is displayed
- [ ] Verify "Planned" status badge is shown
- [ ] Test responsive layout on mobile width

**Step 6: Final commit**

```bash
git add -A
git commit -m "test: verify adventures page implementation

Manual testing completed:
- Navigation working
- Year grouping correct
- Status badges displaying
- Detail pages rendering
- Images and gallery links working
- Responsive layout verified

All automated tests passing.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Implementation Complete

The Adventures page is now fully implemented with:
- ✅ Content collection schema with Zod validation
- ✅ Navigation integration
- ✅ Page configuration
- ✅ AdventureCard component
- ✅ Adventures index page with year grouping
- ✅ Dynamic adventure detail pages
- ✅ Sample content for testing
- ✅ All tests passing
- ✅ Production build verified

**Next Steps:**
1. Replace sample content with real adventures
2. Update Unsplash URLs with actual photos from Imgur/Google Photos
3. Optionally add more adventures over time
4. Consider future enhancements (category filtering, map view, etc.)
