# Projects Import Design

**Date:** 2026-03-20
**Status:** Approved

## Summary

Import 15 projects from `import/` directory into `src/content/projects/`, replacing 8 existing placeholder files. Research GitHub repositories and resume to fill in project details, using placeholders for missing information.

## Project Categories

### Flame Graph Ecosystem (7 projects)
| Project | Description |
|---------|-------------|
| d3-flame-graph | D3.js plugin for flame graph visualization |
| burn | CLI converter for performance profiles to hierarchical data |
| d3-heatmap2 | D3.js heatmap visualization plugin |
| differential-flame-graphs | Compare performance between versions |
| FlameScope | Time-range flame graph analysis |
| FlameCloud | Continuous profiling platform |
| Flame Graphs on pprof | Integration with Go profiler |

### Real User Monitoring (1 project)
| Project | Description |
|---------|-------------|
| Icarus | Real user performance monitoring (180B+ events/day) |

### Netflix Observability Tools (4 projects)
| Project | Description |
|---------|-------------|
| Vector | On-host performance monitoring framework |
| End-to-End Tracing | Device-to-backend tracing framework |
| Mogul | System demand analysis tool |
| Slalom | Bottleneck analysis tool |

### Performance Testing & Standards (2 projects)
| Project | Description |
|---------|-------------|
| Kvasir | Automated performance testing with regression analysis |
| Performance Score | Lighthouse-inspired user experience metric |

### Side Projects (1 project)
| Project | Description |
|---------|-------------|
| MyAdventure.IO | Adventure tracking with GPS, photos, and messages |

## Featured Projects

Three projects marked as featured:
- **FlameScope** - Open-sourced, widely adopted, Netflix blog post
- **d3-flame-graph** - Used by Apache Flink, Google pprof, Oracle JFR
- **Vector** - Open-sourced, Netflix tech blog feature

## Content Structure

Each project MDX file follows the schema from `src/content.config.ts`:

### Required Fields
- `title: string` - Project name
- `role: string` - Job role at time (inferred from resume: "Performance Architect" for Netflix era)
- `year: number` - Derived from GitHub repo creation date
- `outcomeSummary: string` - Brief impact summary
- `overview: string` - High-level description
- `problem: string` - What problem it solves
- `constraints: string[]` - Array of limitation strings
- `approach: string` - Solution strategy
- `keyDecisions: { decision: string, reasoning: string, alternatives?: string[] }[]` - Array of decision objects
- `techStack: string[]` - Array of technology names
- `impact: { metrics?: { label: string, value: string }[], qualitative: string }` - Impact object with optional metrics
- `learnings: string[]` - Array of takeaway strings

### Optional Fields
- `duration: string` - Project timeframe (e.g., "2 years")
- `teamSize: number` - Team size if applicable
- `featured: boolean` - true for 3 featured projects, false otherwise
- `status: "completed" | "ongoing" | "archived"` - Default: completed
- `order: number` - Lower numbers sort first. Featured: 1-10, others: 100+
- `relatedProjects: string[]` - Array of project slugs (filename without .mdx)
- `relatedDecisions: string[]` - Array of decision slugs (leave empty for now)

### File Naming Convention
- Use kebab-case matching import filenames (e.g., `d3-flame-graph.mdx`, `flamescope.mdx`)
- Slug is derived from filename without extension

### Order Field Strategy
- Featured projects: 1, 2, 3 (FlameScope, d3-flame-graph, Vector)
- Non-featured projects: 100+ (sorted alphabetically within category)

### Placeholders
Use `TODO: Add details` for fields that cannot be inferred from available sources.

### Projects with Minimal Source Data
For projects like MyAdventure.IO with no description in import file:
1. Research GitHub repo (https://github.com/myadventure)
2. If still insufficient, create minimal entry with:
   - `outcomeSummary: "TODO: Add outcome summary"`
   - `overview: "TODO: Add overview"`
   - Other required fields populated with best available inference

## Execution Plan

### Phase 1: Research
1. Fetch GitHub repo metadata for all 15 projects:
   - Creation date → year
   - Languages → techStack
   - Stars, forks → impact metrics
   - Description → overview
2. Cross-reference with resume for context
3. Use BlogLink from import files for:
   - `overview` content enrichment
   - `impact` metrics and qualitative results
   - `approach` details

### Phase 2: Write MDX Files
1. Create 15 new `.mdx` files in `src/content/projects/`
2. Use kebab-case filenames matching import files
3. Populate frontmatter with researched data
4. Add placeholders for missing fields
5. Set featured flags and order values

### Phase 3: Cleanup
1. Delete 8 placeholder files:
   - api-gateway-migration.mdx
   - authentication-platform.mdx
   - ci-cd-platform.mdx
   - data-pipeline-migration.mdx
   - notification-system.mdx
   - payment-system-rebuild.mdx
   - real-time-analytics-dashboard.mdx
   - search-infrastructure.mdx

### Phase 4: Validate
1. Run `npm run check` for TypeScript/schema validation
2. Run `npm run build` to verify build succeeds
3. Verify `relatedProjects` slugs match actual filenames

## Project Cross-References

Projects that work together should reference each other:
- d3-flame-graph ↔ burn (converter + visualization)
- d3-flame-graph ↔ FlameScope (shared visualization)
- d3-flame-graph ↔ d3-heatmap2 (related D3 visualizations)
- d3-flame-graph ↔ flame-graphs-on-pprof (shared visualization)
- FlameScope ↔ FlameCloud (analysis + collection)
- Vector ↔ Icarus (on-host + real user monitoring)
- Vector ↔ Kvasir (monitoring + automated testing)
- Icarus ↔ end-to-end-tracing (Netflix observability suite)
- Icarus ↔ performance-score (metrics + real user data)

### Cross-Reference Format
Use slug (filename without .mdx) in `relatedProjects` array:
```yaml
relatedProjects:
  - "d3-flame-graph"
  - "burn"
```

## Sources

- Resume: https://raw.githubusercontent.com/spiermar/resume.md/refs/heads/main/README.md
- GitHub: https://github.com/spiermar
- MyAdventure: https://github.com/myadventure
