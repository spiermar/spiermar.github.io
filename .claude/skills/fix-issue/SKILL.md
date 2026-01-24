---
name: fix-issue
description: Fix a GitHub issue
disable-model-invocation: true
---
Analyze and fix the GitHub issue: $ARGUMENTS.

1. Use `gh issue view` to get the issue details
2. Understand the problem described in the issue
3. Search the codebase for relevant files
4. Create implementation plan with the necessary changes to fix the issue
5. Document the plan and tasks to be executed in the TODO.md file
6. Execute the plan, marking the completed tasks in the TODO.md file
7. Write and run tests to verify the fix
8. Ensure code passes linting and type checking
9. Create a descriptive commit message
10. Push and create a PR

Remember to use the GitHub CLI (`gh`) for all GitHub-related tasks.
