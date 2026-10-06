import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const gx = useSpring(x, { stiffness: 80, damping: 20 });
  const gy = useSpring(y, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const mv = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", mv);
    return () => window.removeEventListener("mousemove", mv);
  }, []);

  return <motion.div className="cursor-glow" style={{ x: gx, y: gy }} />;
}