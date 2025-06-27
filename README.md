# Learnr Demo

A minimal, modern Next.js + TypeScript + Tailwind CSS frontend demo that replicates the core Learnr user experience.

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

### 4. Lint your code

```bash
npm run lint
```

## Stack

- [Next.js](https://nextjs.org/) (TypeScript, classic `pages` router)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) (PostCSS)
- [TypeScript](https://www.typescriptlang.org/)

---

## Linting and Formatting

- Run `npm run lint` to check for code quality issues using ESLint (with Next.js and Prettier).
- Run `npm run format` to automatically format your codebase with Prettier (see `.prettierrc` for config).

## Accessibility

- All interactive elements (buttons, links, modals) have proper aria-labels and keyboard support.
- Booking modal uses correct roles and focus management for accessibility compliance.
- Loading and error states use semantic, screen-reader-friendly markup.
- Custom 404 page provides clear navigation and SEO metadata.

**Enjoy exploring Learnr!**

---

**Brand note:** The brand accent color is **orange** (`brand`/`orange` in Tailwind). All previous blue accents have been replaced with orange for brand consistency.