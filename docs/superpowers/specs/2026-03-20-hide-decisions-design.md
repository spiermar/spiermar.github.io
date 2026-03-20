# Design: Hide Decisions Section

**Date:** 2026-03-20

## Summary

Remove the decisions section from the website's visible navigation and homepage while preserving all underlying files and content.

## Scope

### Files Modified

1. **`src/config.ts`** - Remove Decisions from navigation
2. **`src/pages/index.astro`** - Remove decision-related content and rewrite text

### Files Preserved (Not Modified)

- `src/pages/decisions/` routes
- `src/content/decisions/` content collection
- `src/components/DecisionCard.astro`

## Changes

### 1. Navigation (`src/config.ts`)

Remove the Decisions nav item from the `nav` array.

### 2. Homepage (`src/pages/index.astro`)

1. **Remove Recent Decisions section** - Delete the entire section that displays recent decisions
2. **Remove hero CTA button** - Remove the "How I Make Decisions" secondary button
3. **Rewrite hero title** - Simplify to focus on case studies without decision documentation emphasis
4. **Rewrite intro text** - Remove the sentence about documenting decisions
5. **Rewrite thinking section** - Remove the decision documentation bullet point

## Outcome

The decisions content remains in the codebase but is no longer accessible through navigation or visible on the homepage. URLs like `/decisions` will still work if accessed directly.
