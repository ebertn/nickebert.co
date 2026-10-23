// Static assets in dist/ are served by Workers Static Assets. This script only
// runs for the apps listed in wrangler.jsonc `assets.run_worker_first`, which
// live in their own Workers and are reached through service bindings.
const APPS = {
  '/atom-visualizer': 'ATOM_VISUALIZER',
  '/unsure-calculator': 'UNSURE_CALCULATOR',
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    for (const [prefix, binding] of Object.entries(APPS)) {
      if (url.pathname === prefix) {
        url.pathname = `${prefix}/`
        return Response.redirect(url.toString(), 301)
      }
      if (url.pathname.startsWith(`${prefix}/`)) {
        url.pathname = url.pathname.slice(prefix.length)
        return env[binding].fetch(new Request(url, request))
      }
    }

    return env.ASSETS.fetch(request)
  },
}
