# Don Jose Tacos

Astro restaurant website focused on San Jose shrimp tacos (tacos de camarón), a complete menu, Google Maps directions, and phone pickup orders at +1 (669) 301-6355.

## Pages

- `/`: signature shrimp taco homepage.
- `/menu`: readable food categories and AI-redesigned menu poster.
- `/locations`: 3365 Keaton Loop, opening hours, and Google Maps directions.
- `/order`: tap-to-call pickup ordering.
- `/gallery`: curated photo gallery, with Menu, Food & drinks, and Tacos. Video category and rendering removed.

## Content

Menu options and fillings live in `src/data/menu.ts`. The uploaded boards have conflicting and obscured prices, so customers are directed to call for current pricing and availability. Owner-confirmed location: 3365 Keaton Loop, San Jose, CA. Opening hours: Sunday 9 AM–7 PM; Monday 9 AM–4 PM; Tuesday–Saturday 9 AM–9 PM. Map embeds and directions use the confirmed street address; the business listing link comes from the supplied Google Maps listing. No invented hours, prices, awards, or reviews are included.

Generated image assets are in `public/images/`, with compressed WebP files used by the site and PNG originals preserved. Uploaded reference images remain in `public/media/` and `src/assets/menu/`. The three food/menu assets and transparent navbar mascot logo were made with the built-in image_gen tool. The navbar logo is extracted from the redesigned menu artwork and saved as `public/images/don-jose-logo-ai.webp` (PNG master retained). Exact prompts and sources are recorded in `docs/image-assets.json`. The menu poster consolidates the main truck menu; the HTML menu also includes photographed specials. Image generation prompts and source provenance are retained in project documentation; public photo captions and descriptions focus on the food.

## Development

Use Node 22.12+ and the installed dependencies. Build with `npm run build`. Start the local development server with `npm run dev -- --background` per AGENTS.md. Manage it with `npm run astro -- dev status`, `npm run astro -- dev logs`, and `npm run astro -- dev stop`.

To recompress the generated PNG assets, run `node scripts/optimize-images.mjs` (uses the installed Sharp package).

The project retains its existing Cloudflare adapter and hosting configuration. This update does not publish or deploy the site.

## Search crawling

The production domain is `https://donjosetacos.com/`. `npm run build` generates `/sitemap.xml` from all built public HTML pages and updates `/robots.txt` with its absolute URL in both `public/` and `dist/client/`. Pages include canonical links for the production domain. If the primary domain changes, update `astro.config.mjs` and the sitemap command in `package.json`. Both crawl files must be included in each deployment.
