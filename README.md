# @sharadox/icon-web-library

Line icons for every Sharadox site: one React component, drawn on a 24 grid in the current color.

```tsx
import { Icon } from "@sharadox/icon-web-library/icon";

<button aria-label="Next photo">
  <Icon name="chevron-right" />
</button>;
```

- **`icon`:** `Icon({ name, label?, strokeWidth?, className? })`. The icon is one em square and takes the text's color, so it sizes and colors with the words around it. It is decorative (hidden from assistive technology) unless it has a `label`.
- **`brand-icon`:** `BrandIcon({ name, label?, className? })`, a brand's mark (social networks, Google reviews) filled in the current color, one em square. A link with only a mark needs a `label`.
- **`brand-icon-path`:** `BRAND_ICON_PATHS`: facebook, instagram, tiktok, youtube, x, threads, pinterest, linkedin, google. From Simple Icons (CC0 1.0), except LinkedIn, drawn here.
- **`flag`:** `Flag({ country, label?, className? })`, a country's flag by ISO code (`"PT"`), 1.5 by 1 em. Decorative unless it has a `label`.
- **`flag-svg`:** `FLAG_SVGS`, the 245 countries that have a phone calling code, and the `FlagCountry` type. From country-flag-icons (MIT, see `NOTICE.md`). It is one module of about 160 KB (47 KB compressed), so import it only where flags are shown.
- **`icon-path`:** `ICON_PATHS`, the path data for every icon:
  - chevrons (left, right, up, down)
  - close, check, expand, zoom-in
  - call, sms, whatsapp, email, directions
  - sun, cookie
  - document-check, euro, package, truck, wrench, bolt, pointer (work and activity: approved, paid, ordered, delivered, installed, automatic; the pointer is drawn solid by filling it)

Sites use these instead of text arrows (→ ↑ ×), so every arrow on every site is the same drawing. A new icon is one more entry in `ICON_PATHS`.

## Develop

`pnpm verify` runs formatting, lint, type-check, tests with 100% coverage and the build. Branches follow `<feature>.development` → `development` → `index`, and releases are `v<version>` tags on `index`.

## License

Licença Sharadox de Código Aberto, versão 0.1.0. See [português](LICENCA.md) (the binding text) and the [English translation](LICENSE.md). The flags come from country-flag-icons (MIT) and the brand marks from Simple Icons (CC0): see `NOTICE.md`.
