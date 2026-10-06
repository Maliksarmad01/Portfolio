# Portfolio Website

## How to run
1. Unzip this folder and open it in VS Code.
2. Open a terminal in the project root and run:
   ```
   npm install
   npm run dev
   ```
3. Open the localhost link Vite prints (usually http://localhost:5173).

## Features
- ✨ Animations powered by Framer Motion (page-load sequence in the hero,
  scroll-triggered reveals on every section, hover micro-interactions on
  cards and buttons)
- 🌙 Dark/Light mode toggle (top-right of the navbar), persisted in
  localStorage and defaults to the visitor's system preference
- 📱 Fully responsive, including a mobile hamburger menu
- 🎨 Custom design system: Space Grotesk (display), Inter (body), and
  JetBrains Mono (labels/tags) with light + dark color tokens defined as
  CSS variables in `src/App.css`
- 💻 Professional project cards with tech-stack tags and GitHub/details links
- 📈 Animated skill progress bars, grouped by Web Development, Machine
  Learning, and Tools & Languages
- 📄 Embedded resume viewer plus a dedicated download button
- 🔗 GitHub & LinkedIn buttons in the hero, contact section, and footer
- 📬 Contact form (name/email/message) with client-side validation and a
  confirmation message

## Content sourced from your CV
Hero, About, Skills, and Projects reflect `Muhammad_Abubakar_Cv.pdf`. Your
actual resume is included at `public/resume.pdf`, so the download button and
embedded viewer both work immediately.

## Still to do
- **GitHub & LinkedIn URLs**: currently placeholders
  (`github.com/your-username`, `linkedin.com/in/your-profile`) in
  `Hero.jsx`, `Contact.jsx`, and `Footer.jsx` — replace with your real
  profile links.
- **Project links**: each project card currently links to your GitHub
  profile as a placeholder — point them to the actual repos once available.
- **Contact form backend**: the form validates and shows a confirmation
  message, but nothing is sent anywhere yet — no backend was requested. Wire
  it up to a service like Formspree, EmailJS, or your own API endpoint if
  you want to actually receive messages.
- **Skill percentages**: the numbers in `Skills.jsx` are reasonable
  estimates based on your CV — adjust them to reflect your own judgment of
  your proficiency.
