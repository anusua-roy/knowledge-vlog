# Knowledge Vlog

A personal, static, data-driven knowledge base for documenting technical concepts, interview preparation, and learning notes.

The project is intentionally simple:

* No backend
* No CMS
* No database
* Content is stored as TypeScript data objects
* Automatically deployed via GitHub Pages on every push

This allows fast content creation with minimal maintenance.

---

## Why this project exists

This repository is meant to:

* Capture clear explanations of technical concepts
* Serve as a revision aid before interviews
* Act as a long-term personal knowledge garden
* Be publicly accessible and easy to extend

The focus is on clarity and correctness, not flashy UI.

---

## Tech Stack

* React
* Vite
* TypeScript
* GitHub Pages (static deployment)

---

## Project Structure

```
src/
 ├─ components/        # UI components (stable, rarely changes)
 ├─ data/
 │   ├─ types.ts       # Core content schema
 │   └─ articles/      # One file per article
 ├─ App.tsx
 └─ main.tsx

public/
 └─ images/            # Diagrams and visual assets
```

---

## Content Model

Each article is stored as a TypeScript object following a strict schema.

High-level fields include:

* title
* description
* tags
* level (beginner / intermediate / advanced)
* prerequisites
* estimated reading time
* last updated date
* structured content blocks (text, list, code, table, image)

This keeps content predictable, readable, and easy to render.

---

## Adding a New Article

1. Create a new file inside:

   ```
   src/data/articles/
   ```
2. Export an `Article` object
3. Add the export to:

   ```
   src/data/articles/index.ts
   ```
4. Commit and push

The site deploys automatically.

---

## Writing Articles with LLMs

A reusable prompt for generating articles that match the schema and style of this repository is included.

See:

```
PROMPT.md
```

---

## Deployment

The site is deployed automatically using GitHub Actions and GitHub Pages.

On every push to the `main` branch:

* The app is built
* Static files are deployed
* The live site updates

No manual steps are required.

---

## Author

Built and maintained by Anusua Roy.

* GitHub: [https://github.com/anusua-roy](https://github.com/anusua-roy)
* LinkedIn: [https://www.linkedin.com/in/anusuaroy/](https://www.linkedin.com/in/anusuaroy/)
* Portfolio: [https://my-portfolio-anusua-roys-projects.vercel.app/](https://my-portfolio-anusua-roys-projects.vercel.app/)
