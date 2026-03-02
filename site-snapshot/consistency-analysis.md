# Retina Studios Wix Snapshot: Consistent vs Variable Parts

## Pages compared
- `/` -> `site-snapshot/index.html`
- `/services` -> `site-snapshot/pages/services.html`
- `/post/white-night-2025` -> `site-snapshot/pages/white-night-2025.html`

## Consistent across all 3 pages (global shell)
- Same Wix shell container IDs exist on every page:
  - `SITE_CONTAINER`, `site-root`, `masterPage`
  - `SITE_HEADER`, `SITE_FOOTER`
  - `PAGES_CONTAINER`, `SITE_PAGES`
  - `CONTROLLER_COMP_CUSTOM_ID`
  - `SCROLL_TO_TOP`, `SCROLL_TO_BOTTOM`
- A shared `masterPage` JSON is always referenced:
  - `pageId=dab716_f9c3d72bb535c9946246e56c692b25a7_700.json`
- Thunderbolt runtime framework is used on all pages (same architecture, different hash versions).

## Variable by page type/route
- Page content JSON changes per route:
  - Home: `pageId=dab716_bd1a4971f4613ffbe5ad6c6d44ddbc4b_700.json`
  - Services: `pageId=dab716_526543b8dbcf2aac3a9ea6b1b0637221_700.json`
  - Blog post: `pageId=dab716_900e88a40d1c718ff79eeb8d097ccedf_694.json`
- SEO fields are route-specific:
  - `<title>`, `meta description`, `og:title`, `og:url`
- Script footprint differs by template:
  - Home: `11` scripts
  - Services: `11` scripts (same runtime family, different hashed filenames)
  - Blog post: `39` scripts (extra blog widget chunks)
- DOM complexity differs:
  - Home: `353` IDs
  - Services: `255` IDs
  - Blog post: `416` IDs

## Practical takeaway for static migration
- You have at least **2 page templates**:
  - Standard content template (home/services-like)
  - Blog-post template (Wix blog app-heavy)
- Keep global layout reusable:
  - Header, footer, and top-level shell from `masterPage`
- Migrate per-page content separately:
  - Route-specific content blocks + SEO metadata
- Blog pages likely need dedicated extraction or rewrite because they depend on many app chunks.
