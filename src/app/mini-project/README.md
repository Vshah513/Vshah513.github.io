# Mini Project — ivy-dev.com

This route links to **ivy-dev.com** and to the Consulting Idea repo (different GitHub account).

## Linking the Consulting-idea repo to this repo

The live site is at **https://ivy-dev.com**. The source lives in a separate repo:

- **Repo:** https://github.com/ishandhodu/Consulting-idea

You have two ways to “add it to your github.io area”:

### Option 1: Link only (current)

The Mini Project page already links to both ivy-dev.com and the GitHub repo. No extra setup. Visitors use your GitHub Pages site to discover and open ivy-dev.com.

### Option 2: Add as a Git submodule (code inside this repo)

If you want the Consulting-idea code to live inside this repo (e.g. to edit both in one place or deploy from one repo):

```bash
# From your Vshah513.github.io repo root
git submodule add https://github.com/ishandhodu/Consulting-idea.git consulting-idea
git add .gitmodules consulting-idea
git commit -m "Add Consulting-idea as submodule"
git push
```

Then you can:

- Work on Consulting-idea in the `consulting-idea/` folder (it’s still its own git repo; commit from there and push to ishandhodu/Consulting-idea).
- If you want that app served under your GitHub Pages domain, you’d need to build it and either copy the build output into a path in this repo (e.g. `public/consulting-idea/`) or use a separate GitHub Pages site for that repo and link to it from the Mini Project page.

For most cases, Option 1 (link only) is enough.
