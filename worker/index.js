// Static assets in dist/ are served by Workers Static Assets. This script only
// runs for the proxied apps listed in wrangler.jsonc `assets.run_worker_first`.
const PROXIES = {
  '/atom-visualizer': 'https://atom-visualizer.fly.dev',
  '/unsure-calculator': 'https://unsure-calculator.fly.dev',
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    for (const [prefix, origin] of Object.entries(PROXIES)) {
      if (url.pathname === prefix) {
        url.pathname = `${prefix}/`
        return Response.redirect(url.toString(), 301)
      }
      if (url.pathname.startsWith(`${prefix}/`)) {
        const target = new URL(url.pathname.slice(prefix.length) + url.search, origin)
        return fetch(new Request(target, request))
      }
    }

    return env.ASSETS.fetch(request)
  },
}
