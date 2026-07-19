# Agent Orchestration

## Feature Implementation Workflow

1. **Plan First**
   - Use **planner** agent to create implementation plan
   - Identify dependencies and risks
   - Break down into phases

2. **Implement in TDD**
   - Use **tdd-guide** agent with /implement and /tdd skills
   - Write tests first (RED)
   - Implement to pass tests (GREEN)
   - Refactor (IMPROVE)
   - Verify 80%+ unit test coverage

3. **Code Review**
   - Use **code-reviewer** agent immediately after writing code
   - Address CRITICAL and HIGH issues
   - Fix MEDIUM issues when possible

4. **Commit & Push**
   - Detailed commit messages
   - Follow conventional commits format

## Immediate Agent Usage

No user prompt needed:

1. Complex feature requests — Use **planner** agent
2. Code just written/modified — Use **code-reviewer** agent
3. Bug fix or new feature — Use **tdd-guide** agent
4. Architectural decision — Use **architect** agent

## Context Window Management

Avoid last 20% of context window for:

- Large-scale refactoring
- Feature implementation spanning multiple files
- Debugging complex interactions

## After Writing/Editing Code

- Run `npm run format` to format JS/TS files
- Run `npm run lint` to lint JS/TS files
- Run `npx tsc --noEmit` to check for TypeScript errors
- Check for console.log statements and remove them

## Before Committing

- Run security checks manually
- Verify no secrets in code
- Run full test suite

## Success Metrics

You are successful when:

- All tests pass (80%+ coverage)
- No security vulnerabilities
- Code is readable and maintainable
- Performance is acceptable
- User requirements are met
