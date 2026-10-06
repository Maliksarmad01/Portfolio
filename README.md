<div align="center">

# Muhammad Sarmad Sajjad — Portfolio

A fast, animated, fully responsive developer portfolio showcasing AI/ML research, full-stack projects, and experience.

[**Live Site**](#) · [**LinkedIn**](https://www.linkedin.com/in/malik-sarmad01) · [**GitHub**](https://github.com/Maliksarmad01)

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white)
![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)

</div>

---

## Overview

This is my personal portfolio website. It presents my background in **AI/ML and web development**: research projects, internships, certifications, skills, and a way to contact me. It is a single-page React app with no backend.

## Features

- **Animated experience:** preloader, hero sequence, scroll-triggered reveals, scroll progress bar, and cursor glow, all built with Framer Motion
- **Interactive 3D elements:** tilt cards, a spinning cube, and magnetic buttons
- **Dark / light theme:** follows the system preference and remembers your choice
- **Responsive design:** works from phones to widescreen, with a mobile hamburger menu
- **Projects showcase:** cards with tech-stack tags
- **Skills:** animated progress bars grouped by Web Development, Machine Learning, and Tools
- **Experience & certifications:** timeline of roles, internships, awards, and publications
- **Resume viewer:** embedded PDF preview plus one-click download
- **Contact form:** client-side validation, delivered to my inbox through Formspree

## Tech Stack

| Area | Tools |
|---|---|
| Framework | React 18 |
| Build tool | Vite 5 |
| Animation | Framer Motion |
| Icons | react-icons |
| PDF viewer | react-pdf |
| Contact form | Formspree |
| Hosting | Vercel |

## Project Structure

```
portfolio/
├── public/                 # Static files (favicon, CV PDF)
├── src/
│   ├── components/         # Hero, About, Skills, Projects, Experience,
│   │                       # Certifications, Resume, Contact, Footer, ...
│   ├── context/            # ThemeContext (dark/light mode)
│   ├── App.jsx             # Page layout
│   ├── App.css             # Design tokens and global styles
│   └── main.jsx            # Entry point
├── index.html
├── vite.config.js
└── package.json
```

## Getting Started

**Prerequisites:** [Node.js](https://nodejs.org) 18 or newer.

```bash
# 1. Clone the repository
git clone https://github.com/Maliksarmad01/Portfolio.git
cd Portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

### Available scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Customizing

| To change... | Edit |
|---|---|
| Projects | `src/components/Projects.jsx` |
| Skills and levels | `src/components/Skills.jsx` |
| Work experience | `src/components/Experience.jsx` |
| Certifications and awards | `src/components/Certifications.jsx` |
| Social and contact links | `Hero.jsx`, `Contact.jsx`, `Footer.jsx` |
| Colors and fonts | CSS variables at the top of `src/App.css` |
| Resume | Replace `public/M-Sarmad-Sajjad-CV.pdf` and update the filename in `Resume.jsx` and `Hero.jsx` |

### Contact form setup

1. Create a free form at [formspree.io](https://formspree.io).
2. Copy your form URL (`https://formspree.io/f/xxxxxxxx`).
3. Paste it into `FORMSPREE_ENDPOINT` in `src/components/Contact.jsx`.

## Deployment

The site is deployed on **Vercel**:

1. Push the repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Keep the detected settings: **Framework** Vite, **Build** `npm run build`, **Output** `dist`.
4. Click **Deploy**. Every push to `main` redeploys automatically.

> **Deploying to GitHub Pages instead?** Set `base: "/Portfolio/"` in `vite.config.js` and publish the `dist` folder (for example with the `gh-pages` package).

## Contact

- **Email:** maliksarmadsajjad8@gmail.com
- **LinkedIn:** [linkedin.com/in/malik-sarmad01](https://www.linkedin.com/in/malik-sarmad01)
- **GitHub:** [@Maliksarmad01](https://github.com/Maliksarmad01)

---

<div align="center">
Built with React and Framer Motion by Muhammad Sarmad Sajjad
</div>
