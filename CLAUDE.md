# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Next.js dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Run production build
npm run lint     # ESLint (flat config: eslint.config.mjs)
```

There is no test runner configured.

## Architecture

A Next.js 16 (App Router) + React 19 portfolio site organized as a strict **layered architecture**. Dependencies point inward toward the domain — Presentation → Application → Domain ← Infrastructure. The Domain layer must not import from Next.js, React, or any other framework.

```
app/
  page.tsx              Server Component entry; fetches via UseCases, renders Presentation
  composition.ts        Composition Root — the ONLY place repositories are wired into UseCases
  layout.tsx            Root layout, fonts, site-wide <Metadata>
  globals.css           Tailwind v4 entrypoint

  domain/               Layer 1 — pure types, no framework imports
    entities/           Experience, Skill, Profile (all readonly)
    repositories/       Repository interfaces (e.g. ExperienceRepository.findAll())

  application/          Layer 2 — UseCase classes (one per query)
    usecases/           GetExperiences / GetSkills / GetProfile
                        Each takes a Repository in its constructor and exposes execute()

  infrastructure/       Layer 3 — concrete repository implementations
    repositories/       StaticXxxRepository — static `as const` arrays/objects implementing the Domain IFs

  presentation/         Layer 4 — UI
    components/         Server Components by default; client-only ones declare 'use client'
    hooks/              Client-only React hooks
```

### Data flow on each request

1. `app/page.tsx` (Server Component, async) imports the three UseCase singletons from `app/composition.ts`.
2. UseCases are called in parallel via `Promise.all` and their results are passed as props to Presentation components.
3. `GetExperiences.execute()` sorts by `period.start` descending — sort order lives in the UseCase, not in the repository or the component.

### Adding a new domain concept

Follow the four-layer split end-to-end:

1. `app/domain/entities/Foo.ts` — define the entity as a `readonly` interface.
2. `app/domain/repositories/FooRepository.ts` — declare the interface (`findAll() / get()` returning `Promise`).
3. `app/application/usecases/GetFoo.ts` — class with `constructor(private readonly repo: FooRepository)` and `async execute()`. Apply ordering/business rules here.
4. `app/infrastructure/repositories/StaticFooRepository.ts` — `as const` static data + class implementing the IF.
5. `app/composition.ts` — instantiate `new GetFoo(new StaticFooRepository())` and export.
6. Consume via `import { getFoo } from '@/app/composition'` inside a Server Component.

### Content updates (no new layers needed)

Edit only the static arrays in `app/infrastructure/repositories/`:

- **Experiences:** push to the `experiences` array in `StaticExperienceRepository.ts`. `category` must be `'Internship' | 'Research' | 'Personal Project'`; `period.start` is `'YYYY-MM'` (used for sort), omit `period.end` for ongoing items. Section grouping order is fixed in `app/presentation/components/Experience.tsx` (`CATEGORY_ORDER`).
- **Skills:** push to `StaticSkillRepository.ts`. `category` must be one of `'Languages' | 'Web' | 'Mobile' | 'ML / Simulation' | 'Cloud'`. Section order is fixed in `app/presentation/components/Skills.tsx` (`CATEGORY_ORDER`) — adding a new category requires updating both the union type and this list.
- **Profile:** edit the single object in `StaticProfileRepository.ts`.

### Conventions

- **Path alias:** `@/*` resolves to repo root (see `tsconfig.json`), so always import as `@/app/...`.
- **Server vs Client:** components are Server Components by default. Add `'use client'` only when you need state, effects, or browser-only APIs — `Header.tsx` and `useMobileMenu.ts` are the current examples.
- **Immutability:** entity fields and arrays are `readonly` / `readonly[]`; static data is declared `as const`. Preserve this when adding entities.
- **Site copy is Japanese** (`<html lang="ja">`); section labels and UI copy mix Japanese body text with English mono-font tags.
- **Styling:** Tailwind v4 via `@tailwindcss/postcss`. The layout container pattern is `max-w-4xl mx-auto px-6`; sections use `py-24 md:py-32 border-t border-zinc-200`.
- **Icons:** `lucide-react` (used by `Header`, `Footer`, `ExperienceItem`).
