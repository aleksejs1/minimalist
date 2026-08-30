# CLAUDE.md — Context and Workflow for minimalist.lv

## Project Overview
`minimalist.lv` is a multilingual static website dedicated to minimalism in lifestyle, technology, digital space, and tools. Built with Astro 5, TypeScript, Tailwind CSS / Vanilla CSS, and Pagefind.

## Essential Principles
- **Languages:** English (`en`, default), Russian (`ru`), Latvian (`lv`). Every content addition must cover all 3 languages.
- **Performance & Privacy:** 100/100 Lighthouse, Zero client-side JS by default, local fonts, zero external telemetry/trackers.
- **Content:** Stored in `src/content/` as Markdown/MDX, validated with Zod schemas.

## Quick Commands
- `npm install` — Install dependencies
- `npm run dev` — Start dev server on `http://localhost:4321`
- `npm run build` — Static build to `dist/` + build Pagefind search index
- `npm run preview` — Preview built production site
- `npm run lint` — Lint Markdown and code

## Project Proposals & Design Docs
See `proposals/`:
- `proposals/01-tech-stack-and-architecture.md`
- `proposals/02-core-knowledge-base-structure.md`
- `proposals/03-blog-topics-54-weeks.md`
- `proposals/04-minimalist-tools-and-software.md`
- `proposals/05-mvp-implementation-plan.md`
- `proposals/06-content-expansion-roadmap.md`

Detailed guidelines are available in `AGENTS.md`.
