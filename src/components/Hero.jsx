
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroScene from "./HeroScene";
import Magnetic from "./Magnetic";
import { FiLinkedin, FiMail } from "react-icons/fi";

const roles = [
  "AI / ML Engineer",
  "Full-Stack Web Developer",
  "Computer Vision Developer",
  "Software Developer",
];

function useTypewriter(words, speed = 70, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting
              ? current.slice(0, t.length - 1)
              : current.slice(0, t.length + 1)
          );
        },
        deleting ? speed / 2 : speed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } };
const fade = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const wordV = {
  hidden: { y: "110%", rotate: 6 },
  show: { y: 0, rotate: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
const Word = ({ children, grad }) => (
  <span className="word-mask">
    <motion.span className={`word ${grad ? "grad" : ""}`} variants={wordV}>{children}</motion.span>
  </span>
);

function Hero({ ready = true }) {
  const typed = useTypewriter(roles);
  const { scrollY } = useScroll();
  const sceneY = useTransform(scrollY, [0, 700], [0, 90]);
  const textY = useTransform(scrollY, [0, 700], [0, -60]);

  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-text"
        style={{ y: textY }}
        variants={container}
        initial="hidden"
        animate={ready ? "show" : "hidden"}
      >
        <motion.h1 variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}>
          <Word>Hi,</Word><Word>I'm</Word>
          <Word grad>Muhammad</Word><Word grad>Sarmad</Word><Word grad>Sajjad</Word>
        </motion.h1>

        <motion.p className="role-line" variants={fade}>
          {typed}
          <span className="cursor">|</span>
        </motion.p>

        <motion.p className="tagline" variants={fade}>
          Computer Science graduate with hands-on experience in AI/ML,
          computer vision, full-stack web development, APIs, and database
          systems. I build practical technology solutions using Python,
          PyTorch, FastAPI, React, and modern development tools.
        </motion.p>

        <motion.div className="hero-actions" variants={fade}>
          <Magnetic>
            <a className="btn btn-primary" href={`${import.meta.env.BASE_URL}M-Sarmad-Sajjad-CV.pdf`} download="Muhammad_Sarmad_Sajjad_CV.pdf">
              Download CV
            </a>
          </Magnetic>
          <Magnetic>
            <a className="btn btn-outline" href="#projects">View Projects</a>
          </Magnetic>
        </motion.div>

        <motion.div className="social-row" variants={fade}>
          <Magnetic strength={0.5}>
            <a className="social-icon" href="https://www.linkedin.com/in/malik-sarmad01" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          </Magnetic>
          <Magnetic strength={0.5}>
            <a className="social-icon" href="https://mail.google.com/mail/?view=cm&fs=1&to=maliksarmadsajjad8@gmail.com" target="_blank" rel="noreferrer" aria-label="Email"><FiMail /></a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scene"
        style={{ y: sceneY }}
        initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
        animate={ready ? { opacity: 1, scale: 1, rotate: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <HeroScene />
      </motion.div>

      <motion.a
        href="#about"
        className="scroll-hint"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.8 }}
      >
        <motion.span animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }} transition={{ repeat: Infinity, duration: 1.8 }} />
      </motion.a>
    </section>
  );
}

export default Hero;
