import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader({ onDone }) {
  const [n, setN] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t0 = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min((t - t0) / 1800, 1);
      setN(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => { onDone(); setShow(false); }, 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence onExitComplete={() => { document.body.style.overflow = ""; }}>
      {show && (
        <motion.div
          className="preloader"
          style={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="preloader-logo">
            {"MSS".split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ y: 60, opacity: 0, rotateX: -80 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ delay: 0.15 * i, type: "spring", stiffness: 120, damping: 12 }}
              >
                {c}
              </motion.span>
            ))}
          </div>
          <p className="preloader-sub">Portfolio · {String(n).padStart(3, "0")}%</p>
          <div className="preloader-bar"><span style={{ width: `${n}%` }} /></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
