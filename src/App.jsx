import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import TechMarquee from "./components/TechMarquee";
import Preloader from "./components/Preloader";
import BackToTop from "./components/BackToTop";

function App() {
  const [ready, setReady] = useState(false);
  const { scrollY } = useScroll();
  const auroraY = useTransform(scrollY, [0, 3000], [0, -220]);

  return (
    <ThemeProvider>
      <Preloader onDone={() => setReady(true)} />
      <motion.div className="aurora" style={{ y: auroraY }} aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
      </motion.div>
      <Navbar ready={ready} />
      <ScrollProgress />
      <Hero ready={ready} />
      <TechMarquee />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}

export default App;
