# Retina Studios Nuxt Migration

## Run locally

This repository uses a project-local Node runtime in `.tools/node-v24.14.0-darwin-arm64`.

From repo root:

```bash
export PATH="/Users/macbook/workspace/retinastudios/wix-website/.tools/node-v24.14.0-darwin-arm64/bin:$PATH"
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
