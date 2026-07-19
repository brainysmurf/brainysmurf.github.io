# Adam Morris — Personal Brand Site

Hugo-powered personal site with three switchable themes, deployed to GitHub Pages.

## Themes

| Theme | Personality | Typography | Accent |
|-------|-------------|------------|--------|
| `minimal` | Clean, understated, content-first | Inter + JetBrains Mono | Steel blue |
| `editorial` | Publication quality, confident | Fraunces + Source Sans 3 | Amber/gold |
| `builder` | Terminal aesthetic, developer-focused | IBM Plex Sans + Mono | Green |

## Quick Start

```bash
# Preview with a theme
./scripts/switch-theme.sh minimal      # or editorial, or builder

# Or manually
cd site
hugo server -D --theme editorial
```

The site will be available at `http://localhost:1313/`.

## Switching Themes

`switch-theme.sh` updates `hugo.toml` and starts the dev server:

```bash
./scripts/switch-theme.sh minimal
./scripts/switch-theme.sh editorial
./scripts/switch-theme.sh builder
```

Or edit `site/hugo.toml` directly:

```toml
theme = "builder"
```

## Writing a New Post

```bash
cd site
hugo new content posts/my-new-post.md
```

Then edit the front matter:

```yaml
---
title: "My New Post"
date: 2026-03-14
draft: false
tags: ["topic"]
description: "A short summary for cards and meta tags."
readTime: "5 min read"
---
```

Set `draft: false` when ready to publish. Drafts are visible locally with `hugo server -D` but excluded from production builds.

## Writing LinkedIn Drafts

Save adapted versions of posts in `linkedin/drafts/`. Move to `linkedin/published/` after posting.

## Deploying

Push to `main` and GitHub Actions will build and deploy automatically:

```bash
git add .
git commit -m "Add new post"
git push
```

The site will be live at `https://brainysmurf.github.io/`.

The deploy workflow is in `.github/workflows/deploy.yml`.

## Configuration

Key settings in `site/hugo.toml`:

```toml
[params]
  author = "Adam Morris"
  role = "Product Director"
  description = "Your bio here"
  beehiivUrl = "https://embeds.beehiiv.com/YOUR_ID"  # Replace with real embed URL
  linkedin = "https://linkedin.com/in/adammorris"
```

## Project Structure

```
site/
  content/
    posts/          # Blog posts
    about.md        # About page
    newsletter.md   # Newsletter page
  themes/
    minimal/        # Theme 1 — clean, understated
    editorial/      # Theme 2 — publication feel
    builder/        # Theme 3 — terminal aesthetic
  hugo.toml         # Site config
linkedin/
  drafts/           # LinkedIn post drafts
  published/        # Posted LinkedIn content
scripts/
  switch-theme.sh   # Theme switcher + dev server
.github/
  workflows/
    deploy.yml      # GitHub Pages deploy
```
