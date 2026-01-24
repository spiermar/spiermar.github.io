# TODO: Setup Vitest for the Astro Project

**GitHub Issue:** #13

## Summary
Set up Vitest as the testing framework for this Astro project, including configuration, dependencies, and initial test coverage for utility functions.

## Current State
- No Vitest configuration exists
- No test files exist in `src/`
- `package.json` missing test scripts and Vitest dependencies
- CLAUDE.md mentions `npm run test:run` but it's not implemented

## Implementation Plan

### Phase 1: Install Dependencies
- [x] Install Vitest and related dependencies
- [x] Install testing utilities (@vitest/ui, happy-dom or jsdom)
- [x] Install Astro-specific testing support if needed

### Phase 2: Configure Vitest
- [x] Create `vitest.config.ts` with Astro-compatible settings
- [x] Configure test environment (happy-dom for DOM testing)
- [x] Set up path aliases to match tsconfig
- [x] Configure test coverage settings
- [x] Add test scripts to package.json

### Phase 3: Create Test Infrastructure
- [x] Create `src/utils/__tests__/` directory structure
- [x] Set up test helpers if needed
- [x] Create example test file to validate setup

### Phase 4: Write Initial Tests
- [x] Write comprehensive tests for `src/utils/readingTime.ts`
  - Test `calculateReadingTime()` with various inputs
  - Test `formatReadingTime()` formatting logic
  - Test `getReadingTime()` integration
  - Edge cases: empty content, code blocks, very short/long content
- [x] Validate tests pass (30/30 tests passing)

### Phase 5: Documentation and Integration
- [x] Update package.json scripts (dev, build, test, coverage)
- [x] Add test running instructions to README or docs
- [x] Run linting and type checking (0 errors)
- [x] Verify all tests pass (100% coverage on readingTime.ts)

### Phase 6: Commit and PR
- [ ] Create descriptive commit with conventional commit format
- [ ] Push changes
- [ ] Create PR linking to issue #13

## Test Coverage Goals
**Initial target:** `src/utils/readingTime.ts` (100% coverage)
**Future candidates:**
- Pagination logic in `src/components/Pagination.astro`
- Config helpers in `src/config.ts`
- Content schema validation

## Notes
- Use happy-dom instead of jsdom for lighter weight
- Follow Astro's recommendations for testing
- Ensure tests work with TypeScript strict mode
- Maintain compatibility with existing build process
