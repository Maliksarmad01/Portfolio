const items = ["Python", "PyTorch", "OpenCV", "FastAPI", "React", "Node.js", "MongoDB", "TensorFlow", "Scikit-learn", "Git", "C++", "Explainable AI"];

export default function TechMarquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items].map((t, i) => (
          <span className="marquee-item" key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
