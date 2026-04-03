# Retina Studios Nuxt Migration

## Run locally

From repo root:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Routes prepared

- `/` (standard page template)
- `/services` (standard page template)
- `/post/[slug]` (blog-post template)

Each route currently includes a snapshot viewer that points to saved Wix exports under `public/wix-snapshots/`.

## Migration notes

See `MIGRATION_PLAN.md` for the step-by-step conversion path from Wix snapshot to native Nuxt components.
