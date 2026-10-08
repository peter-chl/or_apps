# or_apps

Lecture notes on applications of operations research — logistics, scheduling,
services, pricing, finance and energy — with each model written out in full.

Live site: https://peter-chl.github.io/or_apps

## Development

```bash
npm install
npm run dev     # local dev server at http://localhost:3000/or_apps
npm run check   # fast MDX + KaTeX syntax check of every lecture
npm run build   # static export to out/
npm run lint
```

## Adding a lecture

1. Write `src/content/<slug>.mdx`. No front matter and no `# H1` — the page
   renders the title and summary from the nav registry. Use `##` for sections
   (they are numbered automatically, e.g. 3.2).
2. Register it in `src/content/nav.ts` under the right part. Order there sets
   lecture numbers, the sidebar and prev/next links.
3. `npm run check && npm run build`.

Available in MDX without imports:

- `$inline$` and `$$display$$` math (KaTeX)
- GFM tables
- `<Definition name="…">`, `<Example>`, `<Result>`, `<Remark>` — numbered
  per lecture ("Example 3.2") by CSS counters
- `<Figure caption="…">` for inline SVG or other figures
