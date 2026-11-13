# @sharadox/icon-web-library

Line icons for every Sharadox site: one React component, drawn on a 24 grid in the current color.

```tsx
import { Icon } from "@sharadox/icon-web-library/icon";

<button aria-label="Next photo">
  <Icon name="chevron-right" />
</button>;
```

- **`icon`:** `Icon({ name, label?, strokeWidth?, className? })`. The icon is one em square and takes the text's color, so it sizes and colors with the words around it. It is decorative (hidden from assistive technology) unless it has a `label`.
- **`icon-path`:** `ICON_PATHS`, the path data for every icon:
  - chevrons (left, right, up, down)
  - close, expand, zoom-in
  - call, sms, whatsapp, email, directions
  - sun, cookie

Sites use these instead of text arrows (→ ↑ ×), so every arrow on every site is the same drawing. A new icon is one more entry in `ICON_PATHS`.

Built from `template-web-library`: TypeScript in `source/`, one thing per folder, imports by package name, versions from 0.1.0, released by tagging `v<version>` on `index`.

Open source: see `LICENSE.md`.
