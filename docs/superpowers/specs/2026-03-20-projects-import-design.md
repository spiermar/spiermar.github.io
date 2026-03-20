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
- `title` - Project name
- `role` - Job role at time (inferred from resume: "Performance Architect" for Netflix era)
- `year` - Derived from GitHub repo creation date
- `outcomeSummary` - Brief impact summary
- `overview` - High-level description
- `problem` - What problem it solves
- `constraints` - Limitations and challenges
- `approach` - Solution strategy
- `keyDecisions` - Technical decisions with reasoning
- `techStack` - Technologies used (from repo languages + resume)
- `impact` - Metrics and qualitative results
- `learnings` - Key takeaways

### Optional Fields
- `duration` - Project timeframe
- `teamSize` - Team size if applicable
- `featured` - Boolean (true for 3 featured projects)
- `status` - completed/ongoing/archived (default: completed)
- `order` - Sort order
- `relatedProjects` - Cross-references to related projects
- `relatedDecisions` - Related decision records

### Placeholders
Use `TODO: Add details` for fields that cannot be inferred from available sources.

## Execution Plan

### Phase 1: Research
1. Fetch GitHub repo metadata for all 15 projects:
   - Creation date → year
   - Languages → techStack
   - Stars, forks → impact metrics
   - Description → overview
2. Cross-reference with resume for context

### Phase 2: Write MDX Files
1. Create 15 new `.mdx` files in `src/content/projects/`
2. Populate frontmatter with researched data
3. Add placeholders for missing fields
4. Set featured flags

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

## Project Cross-References

Projects that work together should reference each other:
- d3-flame-graph ↔ burn (converter + visualization)
- d3-flame-graph ↔ FlameScope (shared visualization)
- FlameScope ↔ FlameCloud (analysis + collection)
- Vector ↔ Icarus (on-host + real user monitoring)
- d3-flame-graph ↔ Flame Graphs on pprof (shared visualization)

## Sources

- Resume: https://raw.githubusercontent.com/spiermar/resume.md/refs/heads/main/README.md
- GitHub: https://github.com/spiermar
- MyAdventure: https://github.com/myadventure
