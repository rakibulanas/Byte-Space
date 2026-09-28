# ByteSpace

An online learning platform where students find courses and creators publish them.

**Live site:** https://bytespace-three.vercel.app

## Pages

| Page     | Path       | What it has                                                              |
| -------- | ---------- | ------------------------------------------------------------------------ |
| Home     | `/`        | Hero with search, featured courses, learning paths, testimonials, footer |
| Courses  | `/courses` | Search, category filter, and pagination                                  |
| Sign In  | `/sign-in` | Login form                                                               |
| Register | `/join`    | Sign-up form                                                             |

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Prettier

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Scripts

| Command          | What it does                   |
| ---------------- | ------------------------------ |
| `npm run dev`    | Start the dev server           |
| `npm run build`  | Build for production           |
| `npm run start`  | Run the production build       |
| `npm run lint`   | Check code with ESLint         |
| `npm run format` | Format all files with Prettier |

## Folder Structure

```
app/
  components/   Reusable sections (Navbar, Hero, CourseCard, Footer...)
  courses/      Courses page
  sign-in/      Sign in page
  join/         Register page
  page.tsx      Home page
  globals.css   Colors, fonts, and global styles
public/images/  All images and design assets
```
