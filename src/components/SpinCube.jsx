const faces = ["React", "Python", "PyTorch", "Node", "Mongo", "OpenCV"];

export default function SpinCube() {
  return (
    <div className="cube-scene" aria-hidden="true">
      <div className="cube">
        {faces.map((f, i) => (
          <div className={`cube-face face-${i}`} key={f}>{f}</div>
        ))}
      </div>
    </div>
  );
}
