import { useEffect, useRef } from "react";

const N = 170;

export default function HeroScene() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    const ctx = c.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf, t = 0;
    const m = { x: 0, y: 0, tx: 0, ty: 0 };
    const pts = Array.from({ length: N }, (_, i) => {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const a = i * 2.399963;
      return { x: Math.cos(a) * r, y, z: Math.sin(a) * r };
    });

    const size = () => {
      const b = c.getBoundingClientRect();
      w = b.width; h = b.height;
      c.width = w * dpr; c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    size();
    const ro = new ResizeObserver(size);
    ro.observe(c);
    const mv = (e) => {
      const b = c.getBoundingClientRect();
      m.tx = (e.clientX - b.left) / b.width - 0.5;
      m.ty = (e.clientY - b.top) / b.height - 0.5;
    };
    window.addEventListener("mousemove", mv);

    const draw = () => {
      t += reduce ? 0 : 0.006;
      m.x += (m.tx - m.x) * 0.05;
      m.y += (m.ty - m.y) * 0.05;
      const st = getComputedStyle(document.documentElement);
      const a = st.getPropertyValue("--accent").trim();
      const b2 = st.getPropertyValue("--accent-2").trim();
      ctx.clearRect(0, 0, w, h);
      const R = Math.min(w, h) * 0.34, cx = w / 2, cy = h / 2;
      const ay = t + m.x * 1.4, ax = m.y * 1.4 + 0.3;
      const cY = Math.cos(ay), sY = Math.sin(ay), cX = Math.cos(ax), sX = Math.sin(ax);
      const P = pts.map((p) => {
        const x = p.x * cY - p.z * sY;
        let z = p.x * sY + p.z * cY;
        const y = p.y * cX - z * sX;
        z = p.y * sX + z * cX;
        const s = 1 + z * 0.18;
        return { x: cx + x * R * s, y: cy + y * R * s, z, s };
      });
      ctx.lineWidth = 1;
      ctx.strokeStyle = a;
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, dz = pts[i].z - pts[j].z;
          if (dx * dx + dy * dy + dz * dz < 0.16) {
            ctx.globalAlpha = 0.08 + 0.24 * (((P[i].z + P[j].z) / 2 + 1) / 2);
            ctx.beginPath();
            ctx.moveTo(P[i].x, P[i].y);
            ctx.lineTo(P[j].x, P[j].y);
            ctx.stroke();
          }
        }
      }
      P.forEach((p, i) => {
        ctx.globalAlpha = 0.35 + 0.65 * ((p.z + 1) / 2);
        ctx.fillStyle = i % 5 === 0 ? b2 : a;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6 + 1.8 * ((p.z + 1) / 2), 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", mv);
    };
  }, []);

  return <canvas ref={ref} className="hero-canvas" />;
}
