# Hide Decisions Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove decisions section from visible navigation and homepage while preserving underlying files.

**Architecture:** Modify navigation config and homepage to remove decision-related links, sections, and text references. Content files remain untouched.

**Tech Stack:** Astro, TypeScript

---

### Task 1: Remove Decisions from Navigation

**Files:**
- Modify: `src/config.ts:130`

- [ ] **Step 1: Remove Decisions nav item from config**

Remove the line containing the Decisions navigation item from the `nav` array in `src/config.ts`:

```typescript
nav: [
  { label: 'Projects', href: '/projects' },
  { label: 'Adventures', href: '/adventures' },
  { label: 'Journey', href: '/journey' },
  { label: 'Writing', href: '/writing' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'Contact', href: '/contact' },
],
```

- [ ] **Step 2: Verify change with typecheck**

Run: `npm run check`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/config.ts
git commit -m "chore: remove Decisions from navigation"
```

---

### Task 2: Remove Hero CTA Button and Rewrite Title

**Files:**
- Modify: `src/pages/index.astro:96-108`

- [ ] **Step 1: Rewrite hero title and remove decisions CTA**

Replace lines 96-108 in `src/pages/index.astro`:

```astro
<h1 class="hero-title">
  Case studies that show how I think,<br/>
  <span class="hero-title-emphasis">not just what I built.</span>
</h1>
<p class="hero-sub">
  A portfolio built around outcomes — not screenshots.
</p>
<p class="hero-meta">
  {siteConfig.author.name} · {siteConfig.author.title}
</p>
<div class="hero-cta">
  <a href="/projects" class="btn-primary">Explore Case Studies</a>
  <a href="/journey" class="btn-secondary">My Journey</a>
</div>
```

- [ ] **Step 2: Verify with dev server**

Run: `npm run dev`
Check: Homepage hero section displays correctly without decisions link

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: rewrite hero title and remove decisions CTA"
```

---

### Task 3: Rewrite Introduction Section

**Files:**
- Modify: `src/pages/index.astro:128-134`

- [ ] **Step 1: Remove decision documentation sentence from intro**

Replace lines 128-134 in `src/pages/index.astro`:

```astro
<p>
  I'm {siteConfig.author.name}, {siteConfig.author.title.toLowerCase()} focused on building systems that move real business metrics.
</p>
<p>
  I approach complex problems by understanding constraints, evaluating trade-offs, and delivering solutions that last.
</p>
<ForwardLink href="/journey" text="Read my journey" variant="muted" />
```

- [ ] **Step 2: Verify with dev server**

Run: `npm run dev`
Check: Introduction section displays correctly

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: rewrite introduction without decisions reference"
```

---

### Task 4: Remove Recent Decisions Section

**Files:**
- Modify: `src/pages/index.astro:70-73` (remove decision query)
- Modify: `src/pages/index.astro:137-161` (remove section)
- Modify: `src/pages/index.astro:343-404` (remove styles)

- [ ] **Step 1: Remove decision collection query**

Remove lines 70-73 in `src/pages/index.astro` (the allDecisions and recentDecisions query).

- [ ] **Step 2: Remove Recent Decisions section HTML**

Remove lines 137-161 in `src/pages/index.astro` (the entire `<section class="recent-decisions">` block).

- [ ] **Step 3: Remove decision-related CSS**

Remove the following CSS blocks from the `<style>` section:
- `.recent-decisions` (lines 343-345)
- `.section-header` (lines 347-358)
- `.decisions-list` (lines 360-365)
- `.decision-item` (lines 367-374)
- `.decision-date` (lines 376-384)
- `.decision-title` (lines 386-392)
- `.decision-context` (lines 394-398)
- `.no-decisions` (lines 400-404)

- [ ] **Step 4: Update comment block at top of file**

Remove references to "Recent Decisions" from the comment block (lines 7, 18, 25).

- [ ] **Step 5: Verify with build**

Run: `npm run build`
Expected: Build succeeds without errors

- [ ] **Step 6: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: remove Recent Decisions section from homepage"
```

---

### Task 5: Rewrite Thinking Section

**Files:**
- Modify: `src/pages/index.astro:170`

- [ ] **Step 1: Remove decision documentation from thinking list**

Replace line 170 in `src/pages/index.astro`:

```astro
<p class="thinking-list">
  How to scale systems without scaling complexity · When to choose consistency over availability · Making legacy codebases maintainable · Designing APIs that last · Building teams that ship · Turning technical debt into technical investment
</p>
```

- [ ] **Step 2: Verify with dev server**

Run: `npm run dev`
Check: Thinking section displays correctly without decisions reference

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: remove decision documentation from thinking section"
```

---

### Task 6: Final Verification

- [ ] **Step 1: Run full build and check**

Run: `npm run build && npm run check`
Expected: No errors

- [ ] **Step 2: Verify navigation locally**

Start dev server and verify:
- No "Decisions" link in navigation
- No "How I Make Decisions" button in hero
- No "Recent Decisions" section on homepage
- No decision references in intro or thinking sections

- [ ] **Step 3: Final commit (if any remaining changes)**

```bash
git status
# If clean, no additional commit needed
```
