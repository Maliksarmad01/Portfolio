import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

function Navbar({ ready = true }) {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.href.slice(1));
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -90, opacity: 0 }}
      animate={ready ? { y: 0, opacity: 1 } : {}}
      transition={{ type: "spring", stiffness: 90, damping: 16 }}
    >
      <span className="brand">Muhammad Sarmad Sajjad</span>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        {links.map((link, i) => (
          <motion.li
            key={link.href}
            initial={{ opacity: 0, y: -12 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.06 }}
          >
            <a
              href={link.href}
              className={active === link.href.slice(1) ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          </motion.li>
        ))}
      </ul>

      <div className="navbar-right">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
          <motion.span
            key={theme}
            style={{ display: "grid" }}
            initial={{ rotate: -120, scale: 0.4, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          >
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </motion.span>
        </button>
        <button className="menu-toggle" onClick={() => setOpen((p) => !p)} aria-label="Toggle menu">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </motion.nav>
  );
}

export default Navbar;
