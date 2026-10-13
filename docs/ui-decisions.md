# UI decisions — duai.lt

## 2026-10-12 — pirmasis onepager

- **Route:** landing (vietinis paslaugų verslas), vienas puslapis.
- **Stack:** Astro 7 + Tailwind 4 (`@tailwindcss/vite`) + `@astrojs/sitemap`. Klientas pasirinko Astro (taip pat praktika asmeniniam portfolio). Statinis build, 0 KB kliento JS.
- **Hostingas:** GitHub Pages per `withastro/action@v6` (pagal docs.astro.build deploy/github). Laikinai `base: /pg-k7q2m`; prijungus duai.lt – `site` = `https://www.duai.lt`, `base` = `/`, `public/CNAME`.
- **Repo:** viešas, neaiškiu pavadinimu `pg-k7q2m` (kliento prašymas – sunkiau surasti).
- **i18n:** LT `/`, EN `/en/`, Astro i18n `prefixDefaultLocale: false`, hreflang + x-default. Tekstai `src/i18n.ts`.
- **Struktūra:** Header → Hero → Problema→Sprendimas (3) → Paslaugos (3 kortelės: skenavimas, leidyba, maketavimas) → Kaip dirbame (3 žingsniai) → Kaina pagal užklausą (mailto CTA) → Footer su rekvizitais.
- **Komponentai:** shadcn/ui nenaudojamas (Astro be React; vienam puslapiui nereikia) – viskas iš Tailwind primityvų. Ikonos: Lucide (`@lucide/astro`, ISC).
- **Šriftas:** Inter Tight Variable (`@fontsource-variable/inter-tight`, OFL), self-hosted.
- **Nuotraukos:** 4 vnt. sugeneruotos Higgsfield; `astro:assets` `<Picture>` AVIF/WebP, hero `fetchpriority=high`, kitos lazy.
- **Kontaktas:** tik `mailto:` su iš anksto užpildyta tema. Forma, analitika ir slapukų juosta – nereikia (kliento sprendimas).
- **SEO:** title/description/canonical/OG/Twitter, LocalBusiness JSON-LD, sitemap, robots.txt.
- **Tekstai:** parašė Claude – klientas turi peržiūrėti paslaugų punktus (pvz., „Paieškai paruošti PDF“, „Skaitmeniniai formatai“, „Spaudos organizavimas“).

### Patikra (2026-10-12)
- Lighthouse 12 mobile, `astro preview` (production build): Performance 98, Accessibility 100, Best Practices 100, SEO 100; LCP 1.9 s, CLS 0, TBT 0 ms.
- Horizontalus scroll 375 px pločiu: nėra (`scrollWidth` 375 = `innerWidth`, Claude Browser).
- JSON-LD Google Rich Results Test: NOT MEASURED.

## 2026-10-13 — serverių priežiūra + telefonas

- Pridėta papildoma paslauga „Serverių priežiūra“ kaip atskira juosta prieš kontaktų bloką (be nuotraukos, Lucide `Server` ikona), kad neužgožtų 3 pagrindinių paslaugų. Tekstą („atnaujinimai, atsarginės kopijos ir stebėsena“) parašė Claude – klientas turi patvirtinti.
- Telefonas +370 626 68769: `tel:` mygtukas kontaktų bloke, poraštėje, `telephone` LocalBusiness JSON-LD.
- Patikra: horizontalaus scroll nėra 375 px (Claude Browser, `scrollWidth` 375 = `innerWidth`); desktop vaizdas – headless Chrome screenshot.
