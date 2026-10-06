import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
  const { scrollY, scrollYProgress } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setShow(v > 600));
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          className="to-top"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg width="52" height="52" viewBox="0 0 52 52">
            <circle cx="26" cy="26" r="23" fill="none" stroke="var(--border)" strokeWidth="3" />
            <motion.circle cx="26" cy="26" r="23" fill="none" stroke="var(--accent)" strokeWidth="3"
              strokeLinecap="round" style={{ pathLength: scrollYProgress, rotate: -90, transformOrigin: "26px 26px" }} />
          </svg>
          <FiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
