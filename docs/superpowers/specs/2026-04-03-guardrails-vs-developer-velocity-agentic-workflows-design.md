# Guardrails vs. Developer Velocity in Agentic Workflows Design

## Goal

Create a new draft post in the `writing` collection that captures an opinionated personal operating model: `codex --yolo` is acceptable when architecture, rollout, and development environments are designed to contain failure and learn from it.

## Context

The site already contains draft-first writing entries in `src/content/writing/` with minimal frontmatter and bullet-based content. The new post should follow that lightweight pattern rather than introducing a fully written essay.

## Chosen Approach

Use a single new MDX file in `src/content/writing/` with:

- standard `writing` collection frontmatter
- `draft: true`
- a short description
- a compact bullet scaffold that can be expanded later

This draft should emphasize the author's point of view rather than detailed execution guidance.

## Content Shape

The post should cover these ideas:

- guardrails should protect production and blast radius, not eliminate fast local iteration
- `codex --yolo` is viable when mistakes are contained by design
- antifragile architecture allows safe exposure to small failures and gets stronger from them
- safe rollout processes are the real operational guardrails
- development sandboxes are required for aggressive agentic workflows
- detailed rollout practices, development practices, and resiliency patterns can be expanded in later revisions
- the effort required to build systems, processes, and teams to this level is substantial
- that investment will widen the gap between stronger and weaker companies

## File Plan

- Create `src/content/writing/guardrails-vs-developer-velocity-agentic-workflows.mdx`

## Constraints

- Keep the content intentionally brief
- Match the existing repo style for draft posts
- Do not add unrelated structure, tags, or sections unless needed by the collection schema

## Out of Scope

- publishing the post
- expanding bullets into prose sections
- adding images or custom layout treatment
- covering detailed rollout, development, or resiliency guidance in this pass
