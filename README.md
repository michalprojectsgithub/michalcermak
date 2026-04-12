# michalcermak

Personal website for Michal Čermák — product manager, indie developer, artist.

Built with [Astro](https://astro.build) + Tailwind CSS. Deployed to GitHub Pages.

## Setup

```bash
npm install
npm run dev        # http://localhost:4321/michalcermak/
npm run build      # output to dist/
npm run preview    # preview the build locally
```

## Deploy

Push to `main`. GitHub Actions builds and deploys automatically to:
https://michalprojectsgithub.github.io/michalcermak

## Custom domain

1. Add your domain to `public/CNAME` (one line, no protocol): `yourdomain.com`
2. Configure DNS: CNAME pointing to `michalprojectsgithub.github.io`
3. In GitHub repo settings → Pages → enable "Enforce HTTPS"

## Retheme

All colour tokens are in `src/styles/global.css` inside the `@theme {}` block. Change values there — no component edits needed.

## Adding content

- **Journal post:** create `src/content/journal/my-post-title.mdx` with frontmatter
- **Project:** create `src/content/projects/my-project.md`
- **Piano piece:** create `src/content/piano/piece-name.md`
- **Book:** create `src/content/books/book-title.md`
- **Anime:** create `src/content/anime-learnings/show-title.md`
- **Art:** create `src/content/art/piece-title.md` and add image to `public/art/`
