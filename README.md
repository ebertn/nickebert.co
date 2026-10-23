My personal portfolio website 🎉🎉

Check it out live here: https://nickebert.co

## Deployment

The site runs on Cloudflare Workers as the `nickebert-co` Worker (see `wrangler.jsonc`). The Vite
build in `dist/` is served as static assets with SPA fallback. `worker/index.js` only handles
`/atom-visualizer/` and `/unsure-calculator/`, which it proxies to their Fly.io apps.

Pull requests to `main` run the type-check and production build. A successful push to `main`
deploys with `wrangler deploy` and smoke-tests the homepage, resume, and a proxied app.

The workflows need these secrets in the GitHub `production` environment:

- `CLOUDFLARE_API_TOKEN`: an API token from the "Edit Cloudflare Workers" template, scoped to
  this account and the `nickebert.co` zone.
- `CLOUDFLARE_ACCOUNT_ID`: the account ID shown on the Cloudflare dashboard.

Run `npm run preview:worker` to test the Worker locally, or `npm run deploy` to deploy by hand
after `npx wrangler login`.

To restore the previous version, open the **Roll Back Cloudflare Workers** workflow in GitHub
Actions and choose **Run workflow** with the version field empty. To restore an older version,
provide its version ID from a deployment summary or `npx wrangler versions list`. Deployments
and rollbacks share a concurrency lock, so they cannot modify production simultaneously.
