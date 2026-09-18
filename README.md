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

To roll back, copy a previous image from a deployment summary, open the **Roll Back Fly.io**
workflow in GitHub Actions, choose **Run workflow**, and provide the complete
`registry.fly.io/budoso-homepage:...` image name. Deployments and rollbacks share a concurrency
lock, so they cannot modify production simultaneously.
