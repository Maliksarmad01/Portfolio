import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function TiltCard({ children, className = "", max = 8, ...rest }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(mx, { stiffness: 200, damping: 18 });
  const rotateX = useSpring(my, { stiffness: 200, damping: 18 });

  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    mx.set((px - 0.5) * 2 * max);
    my.set(-(py - 0.5) * 2 * max);
    ref.current.style.setProperty("--mx", `${px * 100}%`);
    ref.current.style.setProperty("--my", `${py * 100}%`);
  };
  const leave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      ref={ref}
      className={`tilt ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={move}
      onMouseLeave={leave}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
