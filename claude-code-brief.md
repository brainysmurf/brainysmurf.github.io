# Claude Code Master Brief
## Personal Brand Site — Hugo + GitHub Pages + Beehiiv

You are executing a full agentic build of a personal brand website.
Read this entire brief before taking any action. Then execute each phase
in order, checking off each step as you complete it.

---

## PHASE 1 — ENVIRONMENT SETUP

1. Check if Hugo is installed by running `hugo version`.
   - If not installed, detect the OS and install Hugo using the correct
     method (brew for macOS, choco for Windows, apt for Linux).
   - Confirm installation succeeded before continuing.

2. Check if Git is installed. If not, tell me and pause.

3. Ask me for the following before continuing:
   - My GitHub username
   - My full name (for the site author config)
   - My professional title/role (e.g. "Software Developer & EdTech Thinker")
   - A 2–3 sentence bio for the About page
   - My Beehiiv newsletter embed URL (tell me to go to
     beehiiv.com → Settings → Newsletter → Embed and paste the iframe src URL.
     If I don't have one yet, use a placeholder and note where to replace it.)

4. Create the Hugo site:
   ```
   hugo new site site
   cd site
   ```

5. Initialise a git repository:
   ```
   git init
   git checkout -b main
   ```

6. Create a GitHub repository named `[username].github.io` using the
   GitHub CLI (`gh repo create`) if available, or give me the exact
   manual steps if not.

7. Connect the local repo to GitHub:
   ```
   git remote add origin https://github.com/[username]/[username].github.io.git
   ```

8. Create the folder structure:
   ```
   /site/themes/custom/
   /site/themes/custom/layouts/
   /site/themes/custom/layouts/partials/nav/
   /site/themes/custom/layouts/partials/hero/
   /site/themes/custom/layouts/partials/post-list/
   /site/themes/custom/layouts/partials/single-post/
   /site/themes/custom/layouts/partials/footer/
   /site/themes/custom/static/css/
   /site/themes/custom/static/js/
   /site/content/posts/
   /linkedin/drafts/
   /linkedin/published/
   /meta-posts/
   /scripts/
   ```

9. Create `hugo.toml` with the following config:
   ```toml
   baseURL = "https://[username].github.io/"
   languageCode = "en-us"
   title = "[Full Name]"
   theme = "custom"
   paginate = 10

   [params]
     author = "[Full Name]"
     role = "[role]"
     description = "[bio]"
     beehiivUrl = "[beehiiv embed URL]"

   [menu]
     [[menu.main]]
       name = "Posts"
       url = "/posts/"
       weight = 1
     [[menu.main]]
       name = "About"
       url = "/about/"
       weight = 2
     [[menu.main]]
       name = "Newsletter"
       url = "/newsletter/"
       weight = 3
   ```

---

## PHASE 2 — DIRECTOR AGENT: DESIGN TOKEN SYSTEM

You are now acting as the DIRECTOR AGENT.
Your responsibility is to interpret the mood brief below and produce
a design token file that all component agents must use.

### Mood Brief
> "Technical but human. Minimal but not cold. The kind of site where a
> software developer who also cares about education would feel at home.
> Dark mode first. Confident typography. Subtle, purposeful motion."

### Your Task
Create `/site/themes/custom/static/css/tokens.css` with the following,
and add a comment on every token explaining why it fits the mood:

- **Color palette**: dark mode base colors + light mode overrides wrapped
  in `@media (prefers-color-scheme: light)`. Include: background, surface,
  border, text-primary, text-secondary, text-muted, accent, accent-hover,
  accent-subtle, success, warning.
- **Typography**: Choose 1 sans-serif (for UI/body) and 1 monospace
  (for code and subtle accents). Use system fonts or Google Fonts.
  Define a full type scale: xs, sm, base, lg, xl, 2xl, 3xl, 4xl.
  Define font weights: normal, medium, semibold, bold.
  Define line heights: tight, normal, relaxed.
- **Spacing**: 4px base grid. Define: 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24.
- **Border radius**: none, sm, md, lg, full.
- **Transitions**: fast (150ms), base (250ms), slow (400ms). All ease-in-out.
- **Shadows**: sm, md, lg — subtle, not dramatic.
- **Layout**: max-width-prose (65ch), max-width-site (1200px).

After creating tokens.css, create a `TOKENS.md` file in the project root
that documents every token in a readable table — this is the contract all
component agents must honour.

---

## PHASE 3 — COMPONENT AGENTS

You will now act as each component agent in sequence.
Rules that apply to ALL component agents:
- Read tokens.css before writing a single line of CSS
- Use ONLY CSS custom properties from tokens.css — no hardcoded values
- Produce exactly 3 variants per component
- Save variants as `variant-1.html`, `variant-2.html`, `variant-3.html`
  in the component's partials folder
- Begin each file with a comment block:
  ```
  {{/* VARIANT [N]: [Name] — [One sentence personality description] */}}
  {{/* Tokens used: list the key tokens this variant leans on */}}
  {{/* Design decision: explain 2-3 intentional choices made */}}
  ```
- All variants must be responsive (mobile-first)
- Use vanilla JS only — no frameworks

---

### AGENT 1 — NAV AGENT
Folder: `/site/themes/custom/layouts/partials/nav/`

Design a site navigation component. It must include:
- Site name/logo (left aligned)
- Menu links from Hugo's `.Site.Menus.main`
- A dark/light mode toggle button
- Mobile hamburger menu for screens under 768px

Produce 3 variants with these distinct personalities:
- **Variant 1 — "The Minimal Bar"**: Single line, understated,
  text-only, lets content breathe. Almost disappears into the page.
- **Variant 2 — "The Bold Header"**: Slightly taller, accent underline
  on active link, monospace font for the site name.
- **Variant 3 — "The Sticky Focused"**: Sticks to top on scroll,
  blurs background behind it, collapses to compact height after scroll.

Include the JS for mobile toggle and dark mode toggle inline in each variant.

---

### AGENT 2 — HERO AGENT
Folder: `/site/themes/custom/layouts/partials/hero/`

Design the homepage hero section. It must include:
- Author name (large)
- Role/title
- Short bio (from `.Site.Params.description`)
- A CTA button linking to /posts/
- A secondary CTA linking to /newsletter/

Produce 3 variants with these distinct personalities:
- **Variant 1 — "The Statement"**: Full-viewport-height, name in very
  large type, role in monospace below it, centered, sparse.
- **Variant 2 — "The Editor"**: Compact, left-aligned, feels like the
  top of a publication. Bio is prominent. Posts feed starts immediately
  below the fold.
- **Variant 3 — "The Builder"**: Includes a subtle animated typing
  effect on the role/title. Slight terminal aesthetic. Feels like
  someone who builds things.

---

### AGENT 3 — POST LIST AGENT
Folder: `/site/themes/custom/layouts/partials/post-list/`

Design the component that renders a list of blog posts.
Each post item must show: title, date, read time estimate, tags, excerpt.

Produce 3 variants with these distinct personalities:
- **Variant 1 — "The Feed"**: Card-based, slight border, hover lift
  effect. Clean and familiar.
- **Variant 2 — "The Publication"**: List-style, typographic hierarchy,
  no cards. Feels like a magazine index.
- **Variant 3 — "The Dense Grid"**: 2-column grid on desktop, metadata
  (date, tags) in monospace, dense information design.

---

### AGENT 4 — SINGLE POST AGENT
Folder: `/site/themes/custom/layouts/partials/single-post/`

Design the layout for reading a single blog post. Must include:
- Post title
- Date, read time, tags
- Full post body (with styled: headings, paragraphs, blockquotes,
  code blocks, inline code, lists, links)
- A "Back to posts" link
- A newsletter signup section at the bottom using `.Site.Params.beehiivUrl`

Produce 3 variants with these distinct personalities:
- **Variant 1 — "The Reader"**: Centered prose column, 65ch max-width,
  generous line height, optimised purely for reading comfort.
- **Variant 2 — "The Annotated"**: Slightly wider, with a sticky
  right-side column showing estimated read time and tags. Desktop only.
- **Variant 3 — "The Technical"**: Code blocks are prominent and
  beautifully styled. Monospace font bleeds into headings.
  Good for developer-focused posts.

---

### AGENT 5 — FOOTER AGENT
Folder: `/site/themes/custom/layouts/partials/footer/`

Design the site footer. Must include:
- Copyright line
- Links: Posts, About, Newsletter
- A short tagline
- Social links (placeholders for LinkedIn and GitHub)

Produce 3 variants:
- **Variant 1 — "The Quiet"**: One line, minimal, almost invisible.
- **Variant 2 — "The Structured"**: Two-column layout. Links left,
  tagline and social right.
- **Variant 3 — "The Human"**: Slightly warmer, includes a one-line
  personal sign-off message.

---

## PHASE 4 — BASE LAYOUTS

Create the following Hugo layout files that wire the partials together.
Each file should use Hugo template syntax to include the chosen partial.
Use `variant-1.html` as the default for all components (I will use the
assemble script to swap variants later).

- `/site/themes/custom/layouts/index.html` — homepage (nav + hero + post-list + footer)
- `/site/themes/custom/layouts/_default/list.html` — posts list page
- `/site/themes/custom/layouts/_default/single.html` — single post page
- `/site/themes/custom/layouts/page/single.html` — for About and Newsletter pages
- `/site/themes/custom/layouts/partials/head.html` — `<head>` with meta tags,
  tokens.css linked, Open Graph tags
- `/site/content/about.md` — About page with the bio provided in Phase 1
- `/site/content/newsletter.md` — Newsletter page with Beehiiv embed

---

## PHASE 5 — REVIEW PAGE

Create `/site/themes/custom/layouts/review.html`

This is a special Hugo page that renders all variants of all components
on a single scrollable page so I can compare them visually.

Structure it as:
```
[Section header: NAV]
  [Variant 1 — label + component rendered in an iframe or div]
  [Variant 2 — label + component]
  [Variant 3 — label + component]
[Section header: HERO]
  ... and so on for each component
```

Add a sticky top bar on the review page that says:
"DESIGN REVIEW MODE — use assemble.sh to combine variants"

Create `/site/content/review.md` with `layout: review` in the front matter
so it's accessible at `localhost:1313/review`.

---

## PHASE 6 — CONTENT SCAFFOLDING

Create 3 initial posts in `/site/content/posts/` with correct Hugo front matter:

```yaml
---
title: ""
date: [today's date]
draft: false
tags: []
description: ""
readTime: "X min read"
---
```

**Post 1** — Title: "I built my personal brand site with Claude Code — here's exactly what happened"
Topic: The story of this project. Honest, first-person, opinionated.
Tags: [meta, claude-code, software-development]

**Post 2** — Title: "Why LLMs in K-12 education is the most underrated story in tech right now"
Topic: Opinionated take on LLMs in education. Specific, not generic.
Tags: [edtech, llms, k12, education]

**Post 3** — Title: "The software development skill that AI can't replace (yet)"
Topic: A confident take on where human judgment still wins in software dev.
Tags: [software-development, ai, career]

Also create LinkedIn-adapted versions of all 3 posts in `/linkedin/drafts/`
with a stronger hook, shorter paragraphs, and 5 hashtags at the end.

---

## PHASE 7 — ASSEMBLY SCRIPT

Create `/scripts/assemble.sh`:

```bash
#!/bin/bash
# Usage: ./scripts/assemble.sh --nav 2 --hero 1 --posts 3 --single 2 --footer 1
# Copies chosen variants into active Hugo layout files then launches hugo server
```

The script should:
- Accept `--nav`, `--hero`, `--posts`, `--single`, `--footer` arguments (1, 2, or 3)
- Copy the chosen variant file to the active partial path
  (e.g. `nav/variant-2.html` → `partials/nav.html`)
- Print a summary of which variants were assembled
- Run `hugo server -D` so I can preview immediately
- Default to variant 1 for any argument not provided

Make the script executable: `chmod +x scripts/assemble.sh`

---

## PHASE 8 — GITHUB ACTIONS DEPLOYMENT

Create `/.github/workflows/deploy.yml`:

```yaml
name: Deploy Hugo site to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: true
          fetch-depth: 0
      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v3
        with:
          hugo-version: 'latest'
      - name: Build
        run: hugo --minify --source site
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./site/public
```

---

## PHASE 9 — FINAL CHECKS

1. Run `hugo server -D` from the `/site` directory and confirm there are
   no build errors.
2. Run `./scripts/assemble.sh` with no arguments (defaults to all variant 1)
   and confirm the site builds cleanly.
3. Create a `README.md` in the project root that documents:
   - How to run the review page
   - How to use assemble.sh
   - How to write and publish a new post
   - How to deploy (push to main)
4. Do an initial git commit:
   ```
   git add .
   git commit -m "feat: initial site build with multi-agent design system"
   git push -u origin main
   ```
5. Tell me the URL where my site will be live and confirm the GitHub Action
   has been triggered.

---

## DONE

When all phases are complete, print a summary:
- ✅ or ❌ for each phase
- The local preview URL
- The live GitHub Pages URL
- The review page URL
- The assemble.sh usage example
- Any items that need my manual input (e.g. Beehiiv URL, GitHub auth)
