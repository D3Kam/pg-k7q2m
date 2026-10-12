# duai.lt

Vieno puslapio svetainė (LT + EN) Duai, UAB: dokumentų skenavimas, knygų leidyba, maketavimas.

- Stack: Astro + Tailwind 4, statinis. Tekstai: `src/i18n.ts`. Puslapis: `src/components/Page.astro`.
- Tokenai: `DESIGN.md` → `src/styles/global.css` (`@theme`). Sprendimų žurnalas: `docs/ui-decisions.md`.
- Deploy: push į `main` → GitHub Actions → GitHub Pages.
- Domenas: kol DNS nenukreiptas, `astro.config.mjs` turi `base: '/pg-k7q2m'`. Visos nuorodos per `import.meta.env.BASE_URL`.

## Development

```
npm run dev
npm run build && npm run preview
```

Full documentation: https://docs.astro.build
