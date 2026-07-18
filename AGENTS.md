# AGENTS.md

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Versions

| What | Value |
|---|---|
| Node | `>= 24` (engines field in package.json) |
| Next.js | **16.2.10** — shipits own docs at `node_modules/next/dist/docs/` |
| React | 19.2.4 |
| Tailwind CSS | v4 |
| shadcn/ui | style: `base-nova` (with `@base-ui/react` primitives, not Radix) |
| Linter / Formatter | **Biome 2.2.0** (not ESLint, not Prettier) |
| Test runner | **Vitest** with `@vitejs/plugin-react` (not Jest) |

## Commands

```sh
npm run dev        # next dev
npm run build      # next build
npm run test       # vitest (watch mode)
npm run test:ci    # vitest run (single pass)
npm run lint       # biome check
npm run format     # biome format --write
```

## Toolchain quirks

- **Biome handles both linting and formatting.** VS Code is configured (`biomejs.biome`) as the default formatter with format-on-save and auto-fix on save. Do not add ESLint or Prettier configs.
- **Vitest** — tests live in `src/**/*.{test,spec}.{ts,tsx}`. Uses `jsdom` environment, `globals: true`, and resolves `@/` → `src/` via vite alias. Run a single file: `npx vitest run src/path/to/file.test.ts`.
- **Tailwind CSS v4** — uses `@import "tailwindcss"` instead of the v3 `@tailwind` directives. CSS is imported in `src/app/globals.css`. PostCSS config uses `@tailwindcss/postcss` (the v4 PostCSS plugin).
- **React Compiler** is enabled (`reactCompiler: true` in `next.config.ts`). Follow React 19 + compiler rules. The `babel-plugin-react-compiler` is a dev dependency.
- **shadcn/ui components** use `@base-ui/react` primitives (not Radix). The component style is `base-nova`. Components are installed via `npx shadcn@latest add <component>`.
- **Path alias**: `@/` maps to `src/` (configured in both `tsconfig.json` and `vitest.config.ts`).

## Project structure

```
src/
  app/            # Next.js App Router pages and layouts
    __tests__/    # co-located tests (vitest)
  components/
    ui/           # shadcn/ui components (button.tsx etc.)
  lib/
    utils.ts      # cn() utility (clsx + tailwind-merge)
instructions/     # loaded by opencode.json alongside this file
prompts/agents/   # system prompts for custom OpenCode subagents
```

## Available agent resources

- **Installed skills** listed in `skills-lock.json` (agent-browser, shadcn, diagnosing-bugs, code-review, design-taste-frontend, ui-ux-pro-max, vercel-react-best-practices, etc.) — load them via `task(load_skills=[...])`.
- **Custom subagents** defined in `opencode.json` (planner, architect, code-reviewer, security-reviewer, tdd-guide, build-error-resolver, e2e-runner, refactor-cleaner, docs-lookup).
- **This file + `instructions/INSTRUCTIONS.md`** (which indexes coding-style, testing-requirements, git-workflow, security-guidelines, agent-orchestration) are both loaded as instructions by `opencode.json`.
