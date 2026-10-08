# or_apps

Static Next.js site of lecture notes on applications of operations research,
deployed to GitHub Pages. Sibling of peter-chl/model_arch (same deploy setup,
different design: lecture-note layout with a left navigation panel).

## Structure

- `src/content/nav.ts` — table of contents (parts → lectures). Source of truth
  for numbering, sidebar and prev/next.
- `src/content/<slug>.mdx` — one lecture per file, rendered by
  `src/app/[slug]/page.tsx` via dynamic import.
- `src/components/Shell.tsx` — header + left sidebar (lists the current
  lecture's `##` sections, read from the DOM).
- `src/components/Env.tsx` — Definition / Example / Result / Remark boxes.
- `src/app/globals.css` — lecture typography, section and environment
  numbering (CSS counters).

## Content rules

- American English throughout: optimize, modeling, center, labor, traveling.
- Every number in a worked example must be verified by computing it (e.g.
  Python with scipy), not by hand. Leave out claims you can't confirm.
- In MDX prose, a bare `<` or `{` is parsed as JSX — use math mode or words.
- Run `npm run check` (fast) and `npm run build` before pushing.

## Git workflow

**Always push directly to `main`.** Do not open pull requests unless explicitly asked.

Use `git push origin HEAD:main` after committing.
