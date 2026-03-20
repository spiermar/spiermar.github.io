# Journey Section Update Design

## Overview

Replace placeholder journey content with authentic career milestones from Martin Spier's 15+ year engineering career, spanning performance engineering at Dell and Netflix, leadership at PicPay, and current work in AI infrastructure.

## Scope

- Remove all 9 existing placeholder `.mdx` files in `src/content/journey/`
- Create 12 new journey entries reflecting actual career milestones
- Follow existing schema: date, title, type (milestone/learning/transition), description, skills

## Timeline

| # | Date | Title | Type | Description |
|---|------|-------|------|-------------|
| 1 | 2007-01 | Started Performance Engineering at Dell | milestone | Foundation in Brazil |
| 2 | 2011-01 | Moved to Expedia | transition | First US role |
| 3 | 2012-12 | Joined Netflix | milestone | Global streaming platform |
| 4 | 2016-06 | Built Vector | milestone | On-host performance monitoring |
| 5 | 2017-03 | Open Sourced d3-flame-graph | milestone | Flame graph visualization |
| 6 | 2018-04 | Open Sourced FlameScope | milestone | Time-range flame graphs |
| 7 | 2018-06 | Created Netflix User Performance Score | milestone | Data-driven UX metric |
| 8 | 2021-05 | Snowflake Performance Architect | transition | Cloud data platform |
| 9 | 2021-11 | VP Platform Engineering at PicPay | transition | Leadership at scale |
| 10 | 2024-06 | Deep Dive into AI and LLMs | learning | AI focus shift |
| 11 | 2025-07 | VP Engineering at Parasail | milestone | AI deployment network |
| 12 | 2026-03 | Joined OpenAI | milestone | ChatGPT infrastructure |

## Entry Details

### 1. Started Performance Engineering at Dell (2007-01)

**Type:** milestone

**Description:** Started my career as a Performance Engineer at Dell in Porto Alegre, Brazil. This foundational role introduced me to performance analysis, profiling, and the importance of measuring before optimizing—principles that would define my entire career.

**Skills:** Performance Engineering, Java, Load Testing, Profiling

**Body:**

## The Beginning

Fresh out of university with a B.Sc. in Computer Science, I joined Dell's IT division in Brazil. Performance engineering was a niche field, and I was drawn to the detective work of finding bottlenecks and making systems faster.

## What I Learned

- How to profile Java applications and interpret the results
- The difference between perceived performance and measured performance
- That "slow" is rarely about one thing—it's usually death by a thousand cuts
- How to communicate technical findings to non-technical stakeholders

This role gave me the foundation I'd build on for the next 15+ years.

---

### 2. Moved to Expedia (2011-01)

**Type:** transition

**Description:** Left Brazil for the United States to join Expedia as a Performance Engineer. Moving countries and joining a major travel platform taught me to scale both systems and myself.

**Skills:** Performance Engineering, Distributed Systems, Cross-functional Collaboration

**Body:**

## The Challenge

Moving from Brazil to the US was a personal and professional leap. I had to adapt to a new culture, new ways of working, and systems operating at a different scale.

## What Changed

At Expedia, I worked on performance for high-traffic travel booking systems. The scale was different from anything I'd experienced, and the stakes were higher—every second of latency meant lost revenue.

## Key Learnings

- Performance at scale requires thinking about distributed systems differently
- Collaboration across teams is essential for end-to-end performance
- Building relationships matters as much as building solutions

This transition prepared me for the scale I'd encounter at Netflix.

---

### 3. Joined Netflix (2012-12)

**Type:** milestone

**Description:** Joined Netflix as a Performance Architect during the company's pivotal cloud migration. For nearly 9 years, I helped optimize the streaming platform serving 200+ million subscribers worldwide.

**Skills:** Performance Engineering, AWS, Distributed Systems, Observability, Cloud Architecture

**Body:**

## The Opportunity

Netflix was in the middle of migrating to AWS and rebuilding its streaming platform. The scale was unprecedented—a single performance issue affected millions of users simultaneously. I joined to help build the performance engineering practice from the ground up.

## What I Built

- Performance analysis tools and frameworks for microservices architectures
- Visualization tools for understanding system behavior at scale
- Practices and patterns that other engineers could apply

## Impact

My work at Netflix shaped how I think about performance—not as an afterthought, but as a fundamental property of well-designed systems. I learned that at scale, you can't fix performance problems after the fact; you have to build performance in.

---

### 4. Built Vector (2016-06)

**Type:** milestone

**Description:** Created Vector, an open-source on-host performance monitoring framework that exposes high-resolution metrics to every engineer's browser. The project gained 3,600+ GitHub stars and was widely adopted in the industry.

**Skills:** Performance Monitoring, JavaScript, React, D3.js, Open Source

**Body:**

## The Problem

Engineers at Netflix needed high-resolution performance metrics, but existing tools were either too coarse-grained or required deep expertise to use. I wanted to make performance data accessible to every engineer, not just specialists.

## What I Built

Vector was a web-based framework that connected to PCP (Performance Co-Pilot) on hosts and displayed real-time, high-resolution metrics. Engineers could see CPU, memory, disk, and network behavior at sub-second resolution without leaving their browser.

## Open Source Impact

Vector was open-sourced in 2016 and adopted by companies worldwide. The project was eventually retired in 2021 as we migrated its capabilities to Grafana, but the core ideas—making performance data accessible and visual—lived on.

## What I Learned

Building tools for other engineers taught me that usability matters as much as functionality. The best performance tool is the one people actually use.

---

### 5. Open Sourced d3-flame-graph (2017-03)

**Type:** milestone

**Description:** Created and open-sourced d3-flame-graph, a D3.js plugin for visualizing flame graphs from hierarchical data. The library is now used by major projects including Apache Flink, Google's pprof, and Oracle's Java Flight Recorder, with 960+ GitHub stars.

**Skills:** Data Visualization, D3.js, JavaScript, Open Source, Flame Graphs

**Body:**

## The Need

Flame graphs are essential for understanding CPU profiles, but existing visualization tools were static SVGs. I wanted an interactive, web-native visualization that could be embedded in any tool.

## What I Built

d3-flame-graph is a D3.js plugin that renders interactive flame graphs. You can zoom, search, and explore the call hierarchy. It handles large profiles gracefully and integrates easily into existing applications.

## Adoption

The library was adopted by major projects:
- Apache Flink for job profiling
- Google's pprof profiler
- Oracle's Java Flight Recorder

Seeing my code used in tools I admired was incredibly rewarding.

## What I Learned

Open source is about more than code. Documentation, examples, and responsive issue handling are what make a project successful. I also learned that a focused, well-documented library often has more impact than a larger, more complex tool.

---

### 6. Open Sourced FlameScope (2018-04)

**Type:** milestone

**Description:** Created and open-sourced FlameScope, a visualization tool for exploring different time ranges as flame graphs. The tool helps identify performance perturbations, variance, and patterns that would be invisible in aggregate views. Over 3,100 GitHub stars.

**Skills:** Performance Analysis, Python, React, Data Visualization, Open Source

**Body:**

## The Problem

Traditional flame graphs show aggregated profiles, but performance issues often occur in specific time windows. A CPU spike lasting 200ms would be invisible in an hour-long profile. I needed a way to see patterns across time and zoom into specific ranges.

## The Innovation

FlameScope combines two visualizations:
1. A subsecond-offset heat map showing patterns over time
2. Interactive flame graphs for selected time ranges

This lets you see *when* problems occur and *what* code is responsible, without filtering through irrelevant data.

## Impact

FlameScope was presented at conferences and adopted by companies dealing with performance variance. It revealed patterns that were previously invisible to engineers.

## What I Learned

The right visualization can make complex data intuitive. FlameScope taught me that tools should reveal patterns, not just display data.

---

### 7. Created Netflix User Performance Score (2018-06)

**Type:** milestone

**Description:** Developed the Netflix User Performance Score, a Lighthouse-inspired compound metric representing user experience. This metric became the foundation for modeling how performance bottlenecks impact user retention.

**Skills:** Performance Metrics, Data Analysis, User Experience, Statistical Modeling

**Body:**

## The Challenge

Netflix had thousands of performance metrics, but no single number that represented user experience. Engineers optimized individual metrics, but did those optimizations actually improve the user's experience?

## What I Built

The Netflix User Performance Score was a compound metric inspired by Google Lighthouse. It combined:
- Playback start time
- Buffering events
- UI responsiveness
- Error rates

Into a single score that correlated with user behavior.

## Impact

This metric enabled data-driven performance decisions. We could model how a 100ms improvement in playback start time affected user retention. Performance work became measurable, not just technical.

## What I Learned

Good metrics connect technical work to business outcomes. When engineers can see the impact of their optimizations, they make better decisions.

---

### 8. Snowflake Performance Architect (2021-05)

**Type:** transition

**Description:** Joined Snowflake as a Performance Architect, working on the cloud data platform's core components. This role shifted my focus from streaming to data analytics infrastructure.

**Skills:** Performance Engineering, Cloud Architecture, Data Platforms, Observability

**Body:**

## The Change

After nearly 9 years at Netflix, I was ready for a new challenge. Snowflake's cloud data platform presented different performance problems—batch workloads, data pipelines, and query optimization.

## What I Did

- Analyzed and optimized core service components
- Developed prototypes for system observability and performance analysis
- Collaborated on service deployment models to improve availability

## Key Learnings

Different domains require different performance approaches. What worked for streaming didn't always apply to data warehousing. This role expanded my toolkit and understanding of distributed data systems.

---

### 9. VP Platform Engineering at PicPay (2021-11)

**Type:** transition

**Description:** Became VP of Platform Engineering at PicPay, Latin America's largest digital wallet with 60+ million users. Led a 200+ engineer organization across cloud infrastructure, backend, mobile, data, ML platforms, observability, and developer experience.

**Skills:** Engineering Leadership, Platform Engineering, Cloud Infrastructure, Developer Experience, FinOps

**Body:**

## The Challenge

Moving from individual contributor to VP of a 200+ engineer organization was the biggest transition of my career. I had to shift from solving technical problems myself to enabling others to solve them.

## Platform Engineering Strategy

I defined and executed a platform engineering strategy that:
- Reduced Change Lead Time by 20%
- Increased Deployment Frequency
- Improved developer satisfaction (CSAT) from 22% to 87%

## Key Achievements

**Developer Experience:** Consolidated developer tooling into a unified Internal Developer Portal. Drove adoption through training and support.

**Cost Efficiency:** Established a FinOps practice across 16 Business Units, delivering over $30M in annualized savings.

**Mobile Development:** Spearheaded a Server-Driven UI framework that reduced time-to-market by 94%.

**End User Experience:** Focused on non-functional quality metrics, reducing ANRs by 88% and crashes by 80%.

## What I Learned

Leadership is about multiplying impact through others. My job shifted from writing code to removing obstacles, making decisions, and communicating vision. The scale of impact was larger, but the work was less hands-on.

---

### 10. Deep Dive into AI and LLMs (2024-06)

**Type:** learning

**Description:** Shifted focus to AI and LLMs, exploring local deployments, agent-driven development, and skill engineering. This wasn't a role change but a deliberate learning investment that would shape my next career move.

**Skills:** LLMs, AI Agents, Prompt Engineering, Local LLMs, Skill Engineering

**Body:**

## The Catalyst

The AI boom wasn't something I could ignore. I'd spent my career building tools for engineers; AI was building tools that could help engineers build faster. I needed to understand it deeply.

## What I Explored

- **Local LLMs:** Privacy-focused AI assistance without cloud dependencies
- **Agent-driven development:** Autonomous workflows where AI executes tasks
- **Skill engineering:** Teaching AI agents domain-specific capabilities
- **OpenCode:** Containerized development environments for AI-assisted coding

## Projects

I started building practical projects:
- Custom skills for AI agents
- Containerized environments for local LLM development
- Tools connecting AI to development workflows

## What I Learned

AI isn't replacing engineers—it's changing how engineers work. The engineers who thrive will be those who can effectively collaborate with AI, not compete with it. This learning investment positioned me for my next role.

---

### 11. VP Engineering at Parasail (2025-07)

**Type:** milestone

**Description:** Joined Parasail as VP of Engineering. Parasail provides the AI Deployment Network—the world's largest pool of on-demand GPU compute, enabling AI builders to deploy and scale models without cloud complexity.

**Skills:** Engineering Leadership, AI Infrastructure, GPU Compute, Platform Engineering

**Body:**

## The Opportunity

Parasail sat at the intersection of my experience: platform engineering, infrastructure, and AI. The mission was to make AI deployment as simple as it should be—no contracts, no quotas, no cloud complexity.

## The Challenge

Building infrastructure for AI workloads is fundamentally different from traditional applications. GPU compute is scarce, expensive, and requires different optimization approaches.

## What I Built

Led the engineering organization building:
- GPU orchestration platform
- Inference optimization
- Developer tooling for AI deployment

## Key Learnings

AI infrastructure is still infrastructure—the principles of reliability, observability, and developer experience apply. But the constraints are different, and understanding those differences is essential.

---

### 12. Joined OpenAI (2026-03)

**Type:** milestone

**Description:** Joined OpenAI to work on ChatGPT infrastructure. After years building performance tools and platforms, I'm now helping scale the AI systems that are changing how people work and create.

**Skills:** AI Infrastructure, Distributed Systems, Performance Engineering, Scale

**Body:**

## The Next Chapter

OpenAI represents the frontier of AI deployment at scale. ChatGPT serves millions of users with real-time inference requirements that push the boundaries of what's possible.

## Why This Role

Every role I've had prepared me for this:
- Performance engineering taught me to optimize
- Netflix taught me scale
- PicPay taught me leadership
- Parasail taught me AI infrastructure

Now I'm applying all of it to one of the most impactful AI products in the world.

## What I'm Learning

The scale of AI inference is unlike anything I've worked on. Real-time responses, massive model sizes, and user expectations that don't tolerate latency. It's the hardest performance problem I've faced.

## Looking Forward

I believe AI will transform every industry. Being part of building that infrastructure—making AI faster, more reliable, more accessible—is the most important work I can do right now.
