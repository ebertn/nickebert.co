My personal portfolio website 🎉🎉

Check it out live here: https://nickebert.co

## Deployment

Pull requests to `main` run the type-check and production build. A successful push to `main`
deploys the site to the Fly.io app `budoso-homepage` and smoke-tests the homepage and resume.

The workflows require an app-scoped Fly deploy token stored as `FLY_API_TOKEN` in the GitHub
`production` environment:

```bash
fly tokens create deploy --app budoso-homepage --expiry 8760h
```

To restore the previous completed release, open the **Roll Back Fly.io** workflow in GitHub
Actions and choose **Run workflow** with the image field empty. To restore an older release,
provide its complete `registry.fly.io/budoso-homepage:...` image name from a deployment summary.
Deployments and rollbacks share a concurrency lock, so they cannot modify production
simultaneously.
