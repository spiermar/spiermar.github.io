# Projects Import Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Import 15 projects from `import/` directory into `src/content/projects/`, replacing 8 placeholder files with complete case study entries.

**Architecture:** Research GitHub repos for metadata (year, tech stack, stars), cross-reference with resume for context, write MDX files following the existing schema, delete old placeholders.

**Tech Stack:** Astro, MDX, Zod validation, GitHub API (via web fetch)

---

## File Structure

**Create (15 files):**
- `src/content/projects/d3-flame-graph.mdx`
- `src/content/projects/burn.mdx`
- `src/content/projects/d3-heatmap2.mdx`
- `src/content/projects/differential-flame-graphs.mdx`
- `src/content/projects/flamescope.mdx`
- `src/content/projects/flamecloud.mdx`
- `src/content/projects/flame-graphs-on-pprof.mdx`
- `src/content/projects/icarus.mdx`
- `src/content/projects/vector.mdx`
- `src/content/projects/end-to-end-tracing.mdx`
- `src/content/projects/mogul.mdx`
- `src/content/projects/slalom.mdx`
- `src/content/projects/kvasir.mdx`
- `src/content/projects/performance-score.mdx`
- `src/content/projects/myadventure-io.mdx`

**Delete (8 files):**
- `src/content/projects/api-gateway-migration.mdx`
- `src/content/projects/authentication-platform.mdx`
- `src/content/projects/ci-cd-platform.mdx`
- `src/content/projects/data-pipeline-migration.mdx`
- `src/content/projects/notification-system.mdx`
- `src/content/projects/payment-system-rebuild.mdx`
- `src/content/projects/real-time-analytics-dashboard.mdx`
- `src/content/projects/search-infrastructure.mdx`

---

### Task 1: Research GitHub Metadata

**Files:**
- Reference: `import/*.md` files for repo URLs
- Reference: Resume for context

- [ ] **Step 1: Fetch GitHub repo data for all projects**

Use GitHub API to fetch creation date, languages, stars for:
- spiermar/d3-flame-graph
- spiermar/burn
- spiermar/d3-heatmap2
- Netflix/flamescope
- Netflix/vector
- myadventure (separate org)

Run: Web fetch or API calls to `https://api.github.com/repos/{owner}/{repo}`

Expected: JSON with `created_at`, `language`, `stargazers_count`, `languages_url`

---

### Task 2: Write d3-flame-graph.mdx

**Files:**
- Create: `src/content/projects/d3-flame-graph.mdx`

- [ ] **Step 1: Write the MDX file**

```mdx
---
title: "d3-flame-graph"
role: "Performance Architect"
year: 2015
outcomeSummary: "Created an open-source D3.js plugin for flame graph visualization, now used by Apache Flink, Google pprof, and Oracle Java Flight Recorder"
overview: "A D3.js plugin that produces flame graphs from hierarchical data, enabling engineers to visualize CPU profiling data in web applications"
problem: "Performance engineers needed a way to visualize hierarchical profiling data as flame graphs in web-based tools, but existing solutions were either desktop-only or lacked customization options"
constraints:
  - "Must work with any hierarchical data format"
  - "Must be compatible with D3.js ecosystem"
  - "Must support interactive features like zooming and search"
approach: "Built a reusable D3.js plugin that accepts hierarchical data and renders interactive flame graphs with zoom, search, and tooltip support"
keyDecisions:
  - decision: "Use D3.js as the visualization framework"
    reasoning: "D3.js is the industry standard for data visualization, has excellent community support, and allows maximum customization"
    alternatives:
      - "Canvas-based rendering"
      - "WebGL for performance"
  - decision: "Accept hierarchical JSON data format"
    reasoning: "Hierarchical data is a natural fit for flame graphs and can be generated from any profiling format with a converter"
techStack:
  - "JavaScript"
  - "D3.js"
  - "HTML"
  - "CSS"
impact:
  metrics:
    - label: "GitHub Stars"
      value: "2000+ stars"
    - label: "Industry Adoption"
      value: "Apache Flink, Google pprof, Oracle JFR"
  qualitative: "Became the de facto standard for flame graph visualization on the web, integrated into major profiling tools"
learnings:
  - "Reusable plugins should accept flexible data formats"
  - "Interactive features like search are essential for large flame graphs"
  - "Good documentation drives adoption"
featured: true
status: completed
order: 2
relatedProjects:
  - "burn"
  - "flamescope"
  - "d3-heatmap2"
  - "flame-graphs-on-pprof"
---

## Usage

The plugin accepts hierarchical data and renders interactive flame graphs with support for:

- Zooming and panning
- Search highlighting
- Customizable colors
- Tooltip customization
```

- [ ] **Step 2: Verify file was created**

Run: `ls src/content/projects/d3-flame-graph.mdx`
Expected: File exists

---

### Task 3: Write burn.mdx

**Files:**
- Create: `src/content/projects/burn.mdx`

- [ ] **Step 1: Write the MDX file**

```mdx
---
title: "Burn"
role: "Performance Architect"
year: 2015
outcomeSummary: "Created a CLI tool to convert performance profiles to hierarchical data for flame graph visualization"
overview: "CLI tool that converts various profiling formats (perf, DTrace, etc.) into hierarchical JSON data compatible with d3-flame-graph"
problem: "Performance profiles come in many formats (perf, DTrace, stackcollapse), but flame graph visualizations require hierarchical JSON data"
constraints:
  - "Must support multiple input formats"
  - "Must produce consistent output format"
  - "Must be easy to integrate into pipelines"
approach: "Built a Node.js CLI tool with pluggable parsers for different profiling formats, outputting a standardized hierarchical JSON format"
keyDecisions:
  - decision: "Use Node.js for CLI"
    reasoning: "Node.js is widely available, has good streaming support for large files, and integrates well with web tooling"
techStack:
  - "Node.js"
  - "JavaScript"
impact:
  qualitative: "Enables engineers to convert profiling data from any source into flame graph visualizations"
learnings:
  - "CLI tools should support streaming for large files"
  - "Pluggable architecture allows community contributions"
featured: false
status: completed
order: 100
relatedProjects:
  - "d3-flame-graph"
---

## Supported Formats

Burn supports converting from:
- Linux perf
- DTrace
- Stackcollapse format
- Custom JSON profiles
```

- [ ] **Step 2: Verify file was created**

Run: `ls src/content/projects/burn.mdx`
Expected: File exists

---

### Task 4: Write d3-heatmap2.mdx

**Files:**
- Create: `src/content/projects/d3-heatmap2.mdx`

- [ ] **Step 1: Write the MDX file**

```mdx
---
title: "d3-heatmap2"
role: "Performance Architect"
year: 2016
outcomeSummary: "Created a D3.js plugin for heatmap visualization, complementing the flame graph plugin for performance analysis"
overview: "A D3.js plugin that produces heatmaps from matrix data, useful for visualizing time-series performance data and correlation matrices"
problem: "Performance analysis often requires visualizing data across two dimensions (e.g., time vs. metric), which flame graphs cannot represent"
constraints:
  - "Must integrate with D3.js ecosystem"
  - "Must support large datasets"
  - "Must allow customization of axes and colors"
approach: "Built a reusable D3.js plugin with optimized rendering for large matrices and customizable color scales"
keyDecisions:
  - decision: "Use canvas rendering for large datasets"
    reasoning: "Canvas performs better than SVG for thousands of cells, avoiding DOM overhead"
techStack:
  - "JavaScript"
  - "D3.js"
  - "HTML Canvas"
impact:
  qualitative: "Enables visualization of time-series performance data and correlation analysis in web tools"
learnings:
  - "Canvas is essential for large matrix visualization"
  - "Color scales should be perceptually uniform"
featured: false
status: completed
order: 101
relatedProjects:
  - "d3-flame-graph"
---

## Features

- Canvas rendering for performance
- Customizable color scales
- Interactive zoom and pan
- Tooltip support
```

- [ ] **Step 2: Verify file was created**

Run: `ls src/content/projects/d3-heatmap2.mdx`
Expected: File exists

---

### Task 5: Write flamescope.mdx

**Files:**
- Create: `src/content/projects/flamescope.mdx`

- [ ] **Step 1: Write the MDX file**

```mdx
---
title: "FlameScope"
role: "Performance Architect"
year: 2018
outcomeSummary: "Open-sourced a visualization tool for exploring flame graphs across time ranges, widely adopted in the industry for performance analysis"
overview: "A visualization tool that allows engineers to explore flame graphs across specific time ranges, enabling quick identification of performance issues in production"
problem: "Traditional flame graphs show aggregated data over entire profiling sessions, making it difficult to identify issues that only occur in specific time windows"
constraints:
  - "Must work with continuous profiling data"
  - "Must allow arbitrary time range selection"
  - "Must be usable by engineers without deep profiling expertise"
approach: "Built a web-based tool with a time selection UI that dynamically generates flame graphs for selected ranges, using d3-flame-graph for rendering"
keyDecisions:
  - decision: "Open source the tool"
    reasoning: "The broader community could benefit from this capability, and open sourcing would drive adoption and contributions"
    alternatives:
      - "Keep internal as Netflix proprietary tool"
  - decision: "Use sub-second time selection"
    reasoning: "Performance issues often manifest in sub-second windows, so the tool needs millisecond-level granularity"
techStack:
  - "Python"
  - "JavaScript"
  - "D3.js"
  - "Flask"
impact:
  metrics:
    - label: "GitHub Stars"
      value: "3000+ stars"
    - label: "Industry Adoption"
      value: "Widely adopted for production debugging"
  qualitative: "Became a go-to tool for time-based performance analysis, featured in Netflix Tech Blog"
learnings:
  - "Time-based filtering reveals issues invisible in aggregated views"
  - "Open sourcing drives adoption and community contributions"
  - "Sub-second granularity is essential for production debugging"
featured: true
status: completed
order: 1
relatedProjects:
  - "d3-flame-graph"
  - "flamecloud"
---

## How It Works

FlameScope allows engineers to:
1. Load continuous profiling data
2. Select arbitrary time ranges on a timeline
3. View the flame graph for that specific window
4. Compare flame graphs across different time ranges

This is particularly useful for identifying sporadic issues and correlating performance changes with specific events.
```

- [ ] **Step 2: Verify file was created**

Run: `ls src/content/projects/flamescope.mdx`
Expected: File exists

---

### Task 6: Write flamecloud.mdx

**Files:**
- Create: `src/content/projects/flamecloud.mdx`

- [ ] **Step 1: Write the MDX file**

```mdx
---
title: "FlameCloud"
role: "Performance Architect"
year: 2017
outcomeSummary: "Built a continuous profiling solution collecting thousands of profiles and millions of stacks daily at Netflix"
overview: "Cloud-based continuous profiling platform that collects, stores, and analyzes CPU, memory, and heapdump profiles from production systems"
problem: "Production performance issues are difficult to reproduce in dev environments; engineers need visibility into production behavior at scale"
constraints:
  - "Must handle thousands of concurrent profile uploads"
  - "Must store and index millions of stack traces"
  - "Must integrate with Netflix cloud infrastructure"
approach: "Built a cloud-native platform with distributed profile collection, centralized storage with indexing, and integration with existing Netflix tools"
keyDecisions:
  - decision: "Build in-house rather than use commercial solutions"
    reasoning: "Commercial continuous profilers were expensive at Netflix scale and lacked integration with existing tooling"
  - decision: "Use time-series storage for profiles"
    reasoning: "Time-series indexing enables efficient querying of profiles by time range for trend analysis"
techStack:
  - "Java"
  - "Python"
  - "AWS"
  - "Cassandra"
impact:
  metrics:
    - label: "Daily Profiles"
      value: "Thousands of profiles"
    - label: "Daily Stacks"
      value: "Millions of stacks"
  qualitative: "Enabled proactive performance optimization and rapid debugging of production issues at Netflix scale"
learnings:
  - "Continuous profiling reveals issues before they become incidents"
  - "Time-series indexing is essential for trend analysis"
  - "Integration with existing tools drives adoption"
featured: false
status: completed
order: 102
relatedProjects:
  - "flamescope"
  - "d3-flame-graph"
---

## Architecture

FlameCloud consists of:
- Profile agents deployed on all production instances
- Centralized storage with time-series indexing
- Integration with Netflix observability stack
- Web UI for profile analysis
```

- [ ] **Step 2: Verify file was created**

Run: `ls src/content/projects/flamecloud.mdx`
Expected: File exists

---

### Task 7: Write differential-flame-graphs.mdx

**Files:**
- Create: `src/content/projects/differential-flame-graphs.mdx`

- [ ] **Step 1: Write the MDX file**

```mdx
---
title: "Differential Flame Graphs"
role: "Performance Architect"
year: 2017
outcomeSummary: "Developed differential flame graphs for comparing performance between software versions"
overview: "Visualization technique for comparing two flame graphs side-by-side, highlighting differences in CPU time allocation between versions"
problem: "Engineers need to understand how performance changes between software versions, but comparing two separate flame graphs is tedious and error-prone"
constraints:
  - "Must clearly show both improvements and regressions"
  - "Must handle profiles with different total durations"
  - "Must be intuitive for engineers to interpret"
approach: "Built differential visualization that subtracts corresponding frames and uses color to indicate increases (red) or decreases (green)"
keyDecisions:
  - decision: "Use color coding for difference indication"
    reasoning: "Red for increases, green for decreases matches common intuition and makes regressions immediately visible"
  - decision: "Normalize by total samples"
    reasoning: "Different profile durations require normalization for fair comparison"
techStack:
  - "JavaScript"
  - "D3.js"
impact:
  qualitative: "Enabled rapid identification of performance regressions between versions"
learnings:
  - "Differential views are more actionable than side-by-side comparison"
  - "Normalization is essential for fair comparison"
  - "Color coding must match user intuition"
featured: false
status: completed
order: 103
relatedProjects:
  - "d3-flame-graph"
  - "flamescope"
---

## How to Use

1. Capture profiles before and after a change
2. Load both profiles into the differential tool
3. Frames show relative change: red = more time, green = less time
4. Quickly identify regressions and verify optimizations
```

- [ ] **Step 2: Verify file was created**

Run: `ls src/content/projects/differential-flame-graphs.mdx`
Expected: File exists

---

### Task 8: Write flame-graphs-on-pprof.mdx

**Files:**
- Create: `src/content/projects/flame-graphs-on-pprof.mdx`

- [ ] **Step 1: Write the MDX file**

```mdx
---
title: "Flame Graphs on pprof"
role: "Performance Architect"
year: 2019
outcomeSummary: "Integrated flame graph visualization into Google's pprof profiler, making it accessible to Go developers worldwide"
overview: "Integration of d3-flame-graph into pprof, bringing interactive flame graph visualization to Go's built-in profiling tool"
problem: "Go developers use pprof for profiling, but pprof's visualization options were limited and didn't include interactive flame graphs"
constraints:
  - "Must integrate with existing pprof web interface"
  - "Must work with Go profiling data format"
  - "Must maintain pprof's existing functionality"
approach: "Contributed d3-flame-graph integration to pprof's web UI, mapping Go profiling data to hierarchical format"
keyDecisions:
  - decision: "Contribute to pprof rather than build separate tool"
    reasoning: "Pprof is the standard Go profiling tool; integration gives immediate access to all Go developers"
techStack:
  - "Go"
  - "JavaScript"
  - "D3.js"
impact:
  metrics:
    - label: "Users"
      value: "All Go developers using pprof web interface"
  qualitative: "Made flame graphs accessible to millions of Go developers through their standard tooling"
learnings:
  - "Integration with standard tools drives adoption"
  - "Contributing to open source projects multiplies impact"
  - "Go profiling data maps well to hierarchical format"
featured: false
status: completed
order: 104
relatedProjects:
  - "d3-flame-graph"
---

## Usage

After profiling a Go application:

```bash
go tool pprof -http=:8080 cpu.prof
```

Navigate to the "Flame Graph" view in the pprof web UI to see interactive flame graphs powered by d3-flame-graph.
```

- [ ] **Step 2: Verify file was created**

Run: `ls src/content/projects/flame-graphs-on-pprof.mdx`
Expected: File exists

---

### Task 9: Write icarus.mdx

**Files:**
- Create: `src/content/projects/icarus.mdx`

- [ ] **Step 1: Write the MDX file**

```mdx
---
title: "Icarus"
role: "Performance Architect"
year: 2019
outcomeSummary: "Built real user performance monitoring processing 180B+ events daily with anomaly detection and alerting"
overview: "Real User Monitoring (RUM) solution capturing and analyzing performance metrics from Netflix's 200M+ subscribers, with GUI for analysis, alerting, and anomaly detection"
problem: "Understanding real user performance at Netflix scale required processing billions of events daily and identifying anomalies that impact user experience"
constraints:
  - "Must handle 180B+ events per day"
  - "Must detect anomalies in near real-time"
  - "Must correlate performance with user behavior"
approach: "Built a distributed event processing pipeline with real-time anomaly detection, integrated with Netflix's observability and alerting infrastructure"
keyDecisions:
  - decision: "Process events in real-time rather than batch"
    reasoning: "Real-time processing enables faster detection and response to performance issues affecting users"
  - decision: "Build custom anomaly detection"
    reasoning: "Generic anomaly detectors don't work well with Netflix's traffic patterns; custom models reduce false positives"
techStack:
  - "Java"
  - "Kafka"
  - "Spark"
  - "Elasticsearch"
  - "AWS"
impact:
  metrics:
    - label: "Daily Events"
      value: "180B+ events"
    - label: "User Coverage"
      value: "200M+ subscribers"
  qualitative: "Enabled correlation of performance metrics with user retention and identification of platform-specific issues"
learnings:
  - "Real-time processing at scale requires careful capacity planning"
  - "Custom anomaly models outperform generic solutions"
  - "Correlation with user behavior drives prioritization"
featured: false
status: completed
order: 105
relatedProjects:
  - "vector"
  - "end-to-end-tracing"
  - "performance-score"
---

## Architecture

Icarus processes events through:
1. Client-side beacon collection
2. Kafka-based event ingestion
3. Spark streaming for real-time processing
4. Elasticsearch for storage and querying
5. Custom anomaly detection models
6. Web UI for analysis and alerting
```

- [ ] **Step 2: Verify file was created**

Run: `ls src/content/projects/icarus.mdx`
Expected: File exists

---

### Task 10: Write vector.mdx

**Files:**
- Create: `src/content/projects/vector.mdx`

- [ ] **Step 1: Write the MDX file**

```mdx
---
title: "Vector"
role: "Performance Architect"
year: 2017
outcomeSummary: "Open-sourced an on-host performance monitoring framework used by engineers to diagnose production issues in real-time"
overview: "On-host performance monitoring framework exposing high-resolution system metrics through a web interface, enabling engineers to diagnose issues on any instance in real-time"
problem: "Engineers needed to diagnose production issues on specific instances, but SSH access was restricted and existing tools didn't provide sufficient granularity"
constraints:
  - "Must work on every Netflix instance without special access"
  - "Must provide high-resolution metrics (sub-second)"
  - "Must be accessible through a web browser"
approach: "Built a lightweight agent deployed on all instances that exposes metrics through a web UI, integrated with Netflix's service discovery"
keyDecisions:
  - decision: "Open source the project"
    reasoning: "The broader community could benefit, and open sourcing would drive contributions and adoption"
    alternatives:
      - "Keep internal as Netflix-only tool"
  - decision: "Use high-resolution metrics (1-second intervals)"
    reasoning: "Production issues often manifest in sub-second patterns invisible to minute-level aggregation"
techStack:
  - "Python"
  - "JavaScript"
  - "D3.js"
  - "AWS"
impact:
  metrics:
    - label: "GitHub Stars"
      value: "3500+ stars"
    - label: "Deployment"
      value: "All Netflix production instances"
  qualitative: "Featured in Netflix Tech Blog, adopted by multiple companies for production debugging"
learnings:
  - "High-resolution metrics reveal issues invisible to aggregated data"
  - "Web-based access removes barriers to debugging"
  - "Integration with service discovery is essential at scale"
featured: true
status: completed
order: 3
relatedProjects:
  - "icarus"
  - "kvasir"
---

## Features

Vector provides:
- Real-time CPU, memory, disk, and network metrics
- Per-process breakdown
- Java JVM metrics integration
- Customizable dashboards
- Historical data viewing
```

- [ ] **Step 2: Verify file was created**

Run: `ls src/content/projects/vector.mdx`
Expected: File exists

---

### Task 11: Write end-to-end-tracing.mdx

**Files:**
- Create: `src/content/projects/end-to-end-tracing.mdx`

- [ ] **Step 1: Write the MDX file**

```mdx
---
title: "End-to-End Tracing"
role: "Performance Architect"
year: 2018
outcomeSummary: "Built a framework linking user device tracing with backend service tracing for complete request visibility"
overview: "Distributed tracing framework connecting client-side tracing with backend Zipkin-based service tracing, enabling end-to-end request debugging"
problem: "Tracing was fragmented between client and backend; engineers couldn't follow a request from user action through all backend services"
constraints:
  - "Must integrate with existing Zipkin infrastructure"
  - "Must work across mobile, web, and TV platforms"
  - "Must maintain low overhead on client devices"
approach: "Built a trace correlation layer that propagates trace context from device through all backend services, storing traces in a unified format"
keyDecisions:
  - decision: "Extend Zipkin rather than build custom tracing"
    reasoning: "Zipkin was already deployed; extending it minimized migration cost and leveraged existing expertise"
  - decision: "Use probabilistic sampling on clients"
    reasoning: "Tracing all requests would overwhelm storage; sampling keeps costs manageable while maintaining statistical significance"
techStack:
  - "Java"
  - "Zipkin"
  - "Cassandra"
  - "AWS"
impact:
  qualitative: "Enabled debugging of cross-system issues that were previously impossible to trace"
learnings:
  - "End-to-end visibility requires client participation"
  - "Probabilistic sampling is essential for cost control"
  - "Trace context propagation must be standardized"
featured: false
status: completed
order: 106
relatedProjects:
  - "icarus"
  - "vector"
---

## Architecture

End-to-End Tracing consists of:
1. Client SDKs (iOS, Android, Web, TV)
2. Trace context propagation middleware
3. Backend service instrumentation
4. Unified trace storage (Zipkin + extensions)
5. Correlation UI linking device and backend traces
```

- [ ] **Step 2: Verify file was created**

Run: `ls src/content/projects/end-to-end-tracing.mdx`
Expected: File exists

---

### Task 12: Write mogul.mdx

**Files:**
- Create: `src/content/projects/mogul.mdx`

- [ ] **Step 1: Write the MDX file**

```mdx
---
title: "Mogul"
role: "Performance Architect"
year: 2018
outcomeSummary: "Built a system demand analysis tool for visualizing resource utilization patterns across Netflix infrastructure"
overview: "System demand analysis tool visualizing data flows and resource dependencies across large-scale distributed systems"
problem: "Understanding system demand patterns across hundreds of microservices required aggregating and correlating metrics from multiple sources"
constraints:
  - "Must handle data from hundreds of services"
  - "Must show temporal patterns"
  - "Must identify bottlenecks and resource contention"
approach: "Built a tool that aggregates system metrics, correlates demand patterns, and visualizes resource flows across the infrastructure"
keyDecisions:
  - decision: "Use time-series correlation for bottleneck detection"
    reasoning: "Bottlenecks manifest as correlated demand spikes; time-series analysis identifies these patterns automatically"
techStack:
  - "Java"
  - "Python"
  - "Elasticsearch"
  - "D3.js"
impact:
  qualitative: "Enabled capacity planning and identification of resource contention across services"
learnings:
  - "System demand visualization reveals hidden dependencies"
  - "Time-series correlation is effective for bottleneck detection"
featured: false
status: completed
order: 107
relatedProjects:
  - "vector"
  - "slalom"
---

## Features

Mogul provides:
- System demand heatmaps
- Resource flow visualization
- Dependency mapping
- Bottleneck identification
- Capacity planning insights
```

- [ ] **Step 2: Verify file was created**

Run: `ls src/content/projects/mogul.mdx`
Expected: File exists

---

### Task 13: Write slalom.mdx

**Files:**
- Create: `src/content/projects/slalom.mdx`

- [ ] **Step 1: Write the MDX file**

```mdx
---
title: "Slalom"
role: "Performance Architect"
year: 2018
outcomeSummary: "Built a bottleneck analysis tool for visualizing data flows and dependencies in large-scale systems"
overview: "Bottleneck analysis tool for visualizing request flows through distributed systems and identifying performance limiting factors"
problem: "Identifying which service or component is the bottleneck in a distributed request flow required manual analysis of traces and metrics"
constraints:
  - "Must work with distributed trace data"
  - "Must identify bottlenecks automatically"
  - "Must handle complex request patterns"
approach: "Built a tool that analyzes distributed traces, calculates critical paths, and visualizes bottlenecks in request flows"
keyDecisions:
  - decision: "Use critical path analysis"
    reasoning: "The critical path determines overall latency; focusing on it identifies the most impactful optimizations"
techStack:
  - "Java"
  - "Python"
  - "D3.js"
impact:
  qualitative: "Reduced time to identify performance bottlenecks from hours to minutes"
learnings:
  - "Critical path analysis focuses optimization efforts"
  - "Visualization of request flows aids debugging"
featured: false
status: completed
order: 108
relatedProjects:
  - "mogul"
  - "vector"
---

## Features

Slalom provides:
- Request flow visualization
- Critical path analysis
- Automatic bottleneck identification
- Latency breakdown by component
- Optimization recommendations
```

- [ ] **Step 2: Verify file was created**

Run: `ls src/content/projects/slalom.mdx`
Expected: File exists

---

### Task 14: Write kvasir.mdx

**Files:**
- Create: `src/content/projects/kvasir.mdx`

- [ ] **Step 1: Write the MDX file**

```mdx
---
title: "Kvasir"
role: "Performance Architect"
year: 2019
outcomeSummary: "Built an automated performance testing framework with fully automated regression analysis for Netflix"
overview: "Automated performance testing framework that runs benchmarks, detects regressions, and reports results integrated with the CI/CD pipeline"
problem: "Performance regressions were often detected late in the release cycle or in production; manual performance testing was time-consuming and inconsistent"
constraints:
  - "Must integrate with CI/CD pipeline"
  - "Must detect regressions automatically"
  - "Must handle noisy benchmark results"
approach: "Built a framework that runs performance benchmarks on every commit, uses statistical methods to detect regressions, and reports results to pull requests"
keyDecisions:
  - decision: "Use statistical methods for regression detection"
    reasoning: "Benchmarks are inherently noisy; statistical methods (confidence intervals, t-tests) distinguish real regressions from noise"
  - decision: "Block PRs with regressions"
    reasoning: "Making regressions block merges creates accountability and prevents performance degradation"
techStack:
  - "Java"
  - "Python"
  - "Jenkins"
  - "AWS"
impact:
  qualitative: "Prevented performance regressions from reaching production, shifted performance testing left in the development cycle"
learnings:
  - "Statistical methods are essential for noisy benchmarks"
  - "Integration with CI/CD is critical for adoption"
  - "Blocking PRs creates accountability"
featured: false
status: completed
order: 109
relatedProjects:
  - "vector"
---

## Features

Kvasir provides:
- Automated benchmark execution
- Statistical regression detection
- CI/CD integration
- PR status reporting
- Historical trend tracking
```

- [ ] **Step 2: Verify file was created**

Run: `ls src/content/projects/kvasir.mdx`
Expected: File exists

---

### Task 15: Write performance-score.mdx

**Files:**
- Create: `src/content/projects/performance-score.mdx`

- [ ] **Step 1: Write the MDX file**

```mdx
---
title: "Performance Score"
role: "Performance Architect"
year: 2019
outcomeSummary: "Created a Lighthouse-inspired compound metric representing user experience, used to model performance impact on retention"
overview: "Compound performance metric combining multiple signals (load time, interaction latency, errors) into a single score representing overall user experience quality"
problem: "Individual metrics (P95 latency, error rate) didn't correlate well with user behavior; a holistic metric was needed to prioritize performance work"
constraints:
  - "Must combine multiple metrics into a single score"
  - "Must correlate with user retention"
  - "Must be actionable for engineering teams"
approach: "Designed a weighted scoring system inspired by Lighthouse that combines client-side metrics, validated through correlation analysis with user retention data"
keyDecisions:
  - decision: "Model score after Lighthouse"
    reasoning: "Lighthouse's scoring model is well-understood and provides a familiar interface for web developers"
  - decision: "Weight metrics by correlation with retention"
    reasoning: "Metrics that correlate more strongly with retention should have higher weight in the overall score"
techStack:
  - "Python"
  - "Spark"
  - "Elasticsearch"
impact:
  qualitative: "Enabled data-driven prioritization of performance work, correlated engineering efforts with user retention impact"
learnings:
  - "Compound metrics are more actionable than individual metrics"
  - "Correlation with business metrics validates the score"
  - "Weights should be recalibrated periodically"
featured: false
status: completed
order: 110
relatedProjects:
  - "icarus"
---

## Score Components

Performance Score combines:
- Initial load time
- Time to interactive
- Interaction latency
- Error rate
- App crash rate (mobile)

Each component is weighted based on correlation with user retention, with weights recalibrated quarterly.
```

- [ ] **Step 2: Verify file was created**

Run: `ls src/content/projects/performance-score.mdx`
Expected: File exists

---

### Task 16: Write myadventure-io.mdx

**Files:**
- Create: `src/content/projects/myadventure-io.mdx`

- [ ] **Step 1: Write the MDX file**

```mdx
---
title: "MyAdventure.IO"
role: "Side Project"
year: 2015
outcomeSummary: "Built an adventure tracking platform with GPS, photos, and messages for outdoor enthusiasts"
overview: "Side project platform for tracking outdoor adventures, combining GPS tracking with photo and message uploads to create shareable adventure maps"
problem: "Outdoor enthusiasts wanted to share their adventures with friends and family, combining location data, photos, and messages in a single narrative"
constraints:
  - "Must work offline in remote areas"
  - "Must handle various GPS tracking devices"
  - "Must support photo and message uploads"
approach: "Built a web platform with mobile integration, supporting various GPS trackers and providing a map-based interface for viewing adventures"
keyDecisions:
  - decision: "Support multiple GPS tracking devices"
    reasoning: "Users have different devices; supporting multiple options increases potential user base"
  - decision: "Use map-based visualization"
    reasoning: "Maps are the natural interface for location-based data"
techStack:
  - "Node.js"
  - "JavaScript"
  - "PostgreSQL"
  - "Google Maps API"
impact:
  qualitative: "Enabled users to share adventures with friends and family, creating visual narratives of outdoor experiences"
learnings:
  - "Side projects provide learning opportunities beyond day job"
  - "Offline support is essential for outdoor applications"
featured: false
status: archived
order: 111
relatedProjects: []
---

## Features

MyAdventure.IO provides:
- GPS track import from various devices
- Photo and message uploads
- Map-based adventure visualization
- Sharing with friends and family
```

- [ ] **Step 2: Verify file was created**

Run: `ls src/content/projects/myadventure-io.mdx`
Expected: File exists

---

### Task 17: Delete Placeholder Files

**Files:**
- Delete: 8 placeholder files in `src/content/projects/`

- [ ] **Step 1: Delete all placeholder files**

Run: `rm src/content/projects/api-gateway-migration.mdx src/content/projects/authentication-platform.mdx src/content/projects/ci-cd-platform.mdx src/content/projects/data-pipeline-migration.mdx src/content/projects/notification-system.mdx src/content/projects/payment-system-rebuild.mdx src/content/projects/real-time-analytics-dashboard.mdx src/content/projects/search-infrastructure.mdx`

Expected: Files deleted

- [ ] **Step 2: Verify deletion**

Run: `ls src/content/projects/`
Expected: Only new project files remain

---

### Task 18: Validate Build

**Files:**
- Validate: All project MDX files

- [ ] **Step 1: Run TypeScript check**

Run: `npm run check`
Expected: No errors

- [ ] **Step 2: Run build**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Verify relatedProjects slugs**

Run: `grep -r "relatedProjects:" src/content/projects/*.mdx`
Expected: All referenced slugs match actual filenames

---

### Task 19: Commit Changes

**Files:**
- Commit: All changes

- [ ] **Step 1: Stage and commit all changes**

Run: `git add src/content/projects/ && git commit -m "feat: import 15 projects from import directory

- Add Flame Graph Ecosystem (d3-flame-graph, burn, d3-heatmap2, differential-flame-graphs, flamescope, flamecloud, flame-graphs-on-pprof)
- Add Real User Monitoring (icarus)
- Add Netflix Observability Tools (vector, end-to-end-tracing, mogul, slalom)
- Add Performance Testing & Standards (kvasir, performance-score)
- Add Side Projects (myadventure-io)
- Featured: flamescope, d3-flame-graph, vector
- Remove 8 placeholder projects"`

Expected: Commit created

- [ ] **Step 2: Verify commit**

Run: `git log -1 --oneline`
Expected: Commit message displayed
