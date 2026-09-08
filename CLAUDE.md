# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Ananya Shailesh, built with Remix, Three.js, and Framer Motion, deployed to Cloudflare Pages. Based on the open-source [portfolio template](https://github.com/HamishMW/portfolio) by Hamish Williams, restyled with the author's own content and projects.

Live site: https://portfolio-63m.pages.dev

## Commands

Requires Node.js `19.9.0`+ (see `.node-version`/`engines`, though the file currently pins `18.0.0` — verify locally) and npm `9.6.3`+.

```bash
npm install          # install deps; postinstall copies the draco decoder from three.js into public/draco
npm run dev          # start local dev server (Remix + Vite) on port 7777
npm run build        # remix vite:build -> build/client and build/server
npm run start        # serve the built client via wrangler pages dev (production-like)
npm run deploy       # build + wrangler pages deploy ./build/client --project-name portfolio

npm run dev:storybook     # Storybook dev server on port 6006
npm run build:storybook   # build static Storybook
npm run deploy:storybook  # deploy Storybook to its own Cloudflare Pages project
```

There is no lint or test script wired up in `package.json` — ESLint config (`.eslintrc.cjs`) exists but must be invoked directly, e.g. `npx eslint app`. There is no test runner in this repo.

For local dev with the contact form / theme cookie, copy `.dev.vars.example` to `.dev.vars` and fill in AWS SES + session secret values (see Architecture notes below on the contact form, since the client currently does not use these).

## Architecture

**Routing**: Remix with Cloudflare Pages adapter (`@remix-run/cloudflare-pages`). Routes are NOT auto-discovered from the filesystem in the usual Remix way — `vite.config.js` defines a single custom route (`/` → `routes/home/route.js`), and every other route directory under `app/routes/` (`contact`, `projects.guardian-bot`, `projects.pawguard`, `projects.polaris-gcs`, `uses`, plus flat files `$.jsx` and `api.set-theme.js`) relies on Remix's default flat-file convention layered on top. Each route folder follows a `route.js` (thin re-export) + `<name>.jsx` (actual component/logic) + `<name>.module.css` split — follow this pattern when adding routes.
- `app/routes/$.jsx` is the catch-all 404 handler.
- `app/routes/api.set-theme.js` is a resource route (no UI) used by the theme toggle fetcher in `app/root.jsx`.

**Cloudflare Pages Functions**: `functions/[[path]].js` is the actual entrypoint Cloudflare invokes; it wraps the Remix server build (`../build/server`, produced by `npm run build`) via `createPagesFunctionHandler`. `wrangler.toml` declares a KV namespace binding (`MY_KV`) available in `context.cloudflare.env`.

**Theming**: Theme (dark/light) is stored server-side in a signed cookie session (`app/root.jsx`, using `createCookieSessionStorage` with `SESSION_SECRET` from Cloudflare env). The loader reads the theme from the cookie on each request (SSR, no flash); `api.set-theme.js` is the action that updates it via a Remix `useFetcher` form submission from `layouts/navbar/theme-toggle.jsx`. Theme tokens/CSS variables live in `app/components/theme-provider/theme.js` and are injected as inline `<style>` (`themeStyles`) in `root.jsx` to avoid FOUC.

**Contact form**: `app/routes/contact/contact.jsx` posts directly to the Web3Forms API (`https://api.web3forms.com/submit`) from the client with a hardcoded access key — it does not use the AWS SES path implied by `.dev.vars.example` and the `@aws-sdk/client-ses` dependency. If asked to touch the contact form, check whether SES wiring is expected to be reinstated or whether Web3Forms is the intended long-term approach before assuming either.

**Content/config**: `app/config.json` holds site-wide metadata (name, role, social links, the ASCII art logged to the console in `root.jsx`). Project case-study pages are hand-written JSX (not MDX) per project: `routes/projects.guardian-bot`, `routes/projects.pawguard`, `routes/projects.polaris-gcs`. MDX support (`@mdx-js/rollup`, `rehype-prism`, `rehype-slug`, frontmatter) is wired into `vite.config.js` for blog/post-style content — see `app/layouts/post/` for the MDX rendering layout, even though no MDX posts currently exist in the routes tree.

**3D/WebGL**: Three.js scenes (e.g. `routes/home/displacement-sphere.jsx`, `components/model/`, `components/carousel/`) use raw GLSL shaders (`.glsl` files, imported thanks to `assetsInclude` in `vite.config.js`) and `.glb`/`.hdr` assets from `app/assets/`. The Draco decoder (`public/draco/`) is populated by `scripts/draco.cjs` on `postinstall` and is gitignored — if it's missing, rerun `npm install` or `node scripts/draco.cjs` directly.

**Components**: Shared UI lives in `app/components/<name>/`, each with `index.js` (export), `<name>.jsx`, `<name>.module.css` (CSS Modules), and often `<name>.stories.jsx` for Storybook. Path alias `~/*` maps to `app/*` (`jsconfig.json`, enabled in Vite via `vite-jsconfig-paths`).

**Styling**: CSS Modules throughout, plus global styles in `app/global.module.css` and `app/reset.module.css`, imported once in `root.jsx`. PostCSS is configured with `postcss-custom-media` for shared breakpoints.
