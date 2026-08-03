# Zimbabwe Excellent Plumbers

React port of the five-page Zimbabwe Excellent Plumbers site (Harare).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # vite's dev preview of the built output
npm start        # production server (what Railway runs)
```

## WhatsApp number

Every call-to-action points at WhatsApp. Copy `.env.example` to `.env` and set
the number in international format, digits only:

```
VITE_WHATSAPP_NUMBER=263771234567
```

Until it is set, the buttons fall back to a `000000000000` placeholder and the
footer and contact page show a "number coming soon" note. Nothing else needs
changing to go live.

## Where things live

| Path              | What it holds                                              |
| ----------------- | ---------------------------------------------------------- |
| `src/data/`       | All copy and content — services, gallery, FAQs, site info   |
| `src/components/` | Shared UI: header, footer, gallery, lightbox, FAQ, stats    |
| `src/pages/`      | One file per route                                          |
| `src/index.css`   | Tailwind v4 `@theme` design tokens                          |

Editing text is almost always a change in `src/data/`, not in a component.

## Deployment (Railway)

`npm start` runs [`server.js`](server.js) — a dependency-free static server that
binds `0.0.0.0` on `process.env.PORT`, serves `dist/`, and falls back to
`index.html` for any unmatched path so a hard refresh on `/services` renders
instead of 404ing. `/healthz` returns `200 ok` for health checks. Node is pinned
to 20 via `engines` and `.nvmrc`.

Railway builds with `npm run build` and runs `npm start` under Nixpacks
auto-detect — no Dockerfile or custom config needed.

### Environment variables

| Variable                | Required | Notes                                      |
| ----------------------- | -------- | ------------------------------------------ |
| `VITE_WHATSAPP_NUMBER`  | Yes      | Digits only, country code, no `+`          |
| `PORT`                  | No       | Supplied by Railway; defaults to 3000      |

> **`VITE_` variables are baked in at build time, not read at runtime.** Vite
> inlines them into the bundle during `npm run build`, so changing
> `VITE_WHATSAPP_NUMBER` in Railway does nothing until you **redeploy**. Set it
> before the first build, and trigger a fresh deploy after any change.

## Notes

- Tailwind **v4** (not v3), because the original compiles to v4 `oklch` tokens;
  the palette in `src/index.css` is carried over value-for-value.
- The original stylesheet also carried an unused `.dark` token set. It is never
  activated on the live site, so this port is light-theme only.
- Deploying to a static host needs an SPA rewrite (all paths to `/index.html`),
  otherwise a hard refresh on `/services` will 404.
