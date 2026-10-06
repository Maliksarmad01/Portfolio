import { motion } from "framer-motion";
import { FiLinkedin, FiMail } from "react-icons/fi";

function Footer() {
  return (
    <motion.footer initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <div className="footer-socials">
        <a
          className="social-icon"
          href="https://www.linkedin.com/in/malik-sarmad01"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FiLinkedin />
        </a>
        <a
          className="social-icon"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=maliksarmadsajjad8@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Email"
        >
          <FiMail />
        </a>

      </div>
      <p>© 2026 Muhammad Sarmad Sajjad. Built with React &amp; Framer Motion.</p>
    </motion.footer>
  );
}

export default Footer;
