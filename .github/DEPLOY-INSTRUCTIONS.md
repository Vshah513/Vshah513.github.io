# GitHub Pages deployment

This repo deploys to **https://vshah513.github.io** via GitHub Actions.

## If "Deployments" is empty or not updating

1. **Set Pages to use GitHub Actions**
   - Open: https://github.com/Vshah513/Vshah513.github.io/settings/pages
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.
   - Save. After the next push to `main`, a deployment will appear.

2. **Check that the workflow runs**
   - Open: https://github.com/Vshah513/Vshah513.github.io/actions
   - Click the latest **Deploy to GitHub Pages** run. If it’s red, open it and fix the error (often `npm ci` or build).

3. **Pushes go to this repo**
   - We push to `origin` = **Vshah513/Vshah513.github.io** (this repo). That’s correct for GitHub Pages.
