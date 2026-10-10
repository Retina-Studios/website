# Nuxt Migration Plan (Incremental)

## Current status
- Nuxt app scaffolded at repository root
- Shared shell in place (`layout + header + footer`)
- Route stubs created:
  - `/`
  - `/post/[slug]`
- Wix snapshot references copied to `public/wix-snapshots/`

## Next steps
1. Extract global navigation and footer links/content from snapshot HTML into reusable Vue components.
2. Rebuild homepage sections as native Vue components under `app/components/home/`.
3. Build a dedicated blog-post component tree for `/post/[slug]`.
4. Replace snapshot iframes route-by-route as each page reaches visual/content parity.

## Working rule
- Keep the snapshot viewer until each route is fully migrated; then remove it for that route.
