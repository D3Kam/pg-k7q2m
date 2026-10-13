# DESIGN — DUAI (Duai, UAB)

## Brand
- One-line positioning: dokumentų skenavimas, knygų leidyba ir maketavimas – nuo popieriaus lapo iki išleistos knygos.
- Audience: TODO(ask) – įmonės su archyvais, autoriai, organizacijos (Claude prielaida, patikslinti)
- Tone of voice (3 words): TODO(ask)
- Market: Lietuva (Kaunas)
- Currency: EUR (kainos nerodomos – „pagal užklausą“)
- Number/date locale: lt-LT
- Languages: LT (pagrindinė, `/`), EN (`/en/`)
- Visual references the client likes (URLs) — reference only: dokdata.lt (modernumas, paprastumas), printeja.eu
- Things the client dislikes: TODO(ask)
- Contact: duaiaub@gmail.com (mailto), +370 626 68769 (tel:). Jokių vardų ir pavardžių.
- Rekvizitai: Duai, UAB · įm. k. 306968206 · A. Juozapavičiaus pr. 122, Kaunas

## Color tokens (light only)
Stilius: modernus, minimalus, šviesus, solidus. Logotipo ir firminių spalvų dar nėra – spalvos parinktos Claude (PLACEHOLDER, kol klientas nepateiks savų).

| Token | Light | Use |
|---|---|---|
| --color-background | #f6f5f2 | page bg (šiltas popierius) |
| --color-surface | #ffffff | kortelės, juostos |
| --color-foreground | #17171a | body text |
| --color-primary | #17171a | main CTA |
| --color-primary-foreground | #ffffff | text on primary |
| --color-muted | #ecebe6 | hover paviršiai |
| --color-muted-foreground | #5c5b57 | antrinis tekstas |
| --color-accent | #6f6248 | smulkūs akcentai, „Sprendimas“ etiketės |
| --color-border | #dcdad3 | lines |

Contrast checked (AA): Node santykio skaičiavimas (WCAG formulė) – foreground/bg 16.41, muted-fg/bg 6.24, accent/bg 5.48, accent/white 5.97. Lighthouse Accessibility 100 (mobile).
Dark mode: nėra (nereikalauta).

## Typography
- Heading & body font: Inter Tight Variable (Fontsource, self-hosted, latin-ext – lietuviškos raidės)
- Scale: 14 / 16 / 18 / 20 / 30 / 36 / 48 / 60
- Weights used: 400, 500, 600

## Shape & space
- Radius: 1rem kortelės, pilnai apvalūs mygtukai
- Spacing base: Tailwind 4px skalė
- Container max width: 72rem

## Motion
- Personality: none (tik spalvų hover perėjimai)
- Signature effect: nėra

## Imagery
- Photo style: šviesios, minimalistinės redakcinės nuotraukos, neutralūs akmens/smėlio tonai
- Šaltinis: sugeneruota Higgsfield (gpt_image_2_5), 2026-10-12
- Illustration / 3D: no
- Icon set: Lucide (@lucide/astro)

## Route & stack
- Route: landing (vietinis paslaugų verslas)
- Stack: Astro 7 + Tailwind 4, statinis, GitHub Pages
