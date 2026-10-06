import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import Counter from "./Counter";
import TiltCard from "./TiltCard";

const stats = [
  { number: "6+", label: "Projects Built" },
  { number: "3.74", label: "GPA" },
  { number: "2+", label: "Years Experience" },
  { number: "100+", label: "Students Supported" },
];

function About() {
  return (
    <section id="about">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Get to know me
      </motion.p>

      <SectionTitle>About Me</SectionTitle>

      <div className="about-grid">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I'm a Computer Science graduate from the University of Management
          and Technology (UMT), Lahore, with a 3.74 GPA and hands-on
          experience in software development, AI/ML, computer vision, and
          web applications. My experience includes working with Python,
          PyTorch, OpenCV, FastAPI, React, databases, and modern development
          tools to build practical technology solutions.
          <br />
          <br />
          I've worked on machine learning and computer vision applications,
          full-stack web projects, APIs, and research-oriented systems. My
          projects include an explainable breast cancer detection system,
          multilingual lecture assistant, AI fraud investigation workflow,
          and image classification applications.
          <br />
          <br />
          I enjoy solving technical problems, learning new technologies, and
          turning ideas into reliable and useful software solutions.
        </motion.p>

        <motion.div
          className="stat-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stats.map((stat) => (
            <TiltCard className="stat-card" key={stat.label} max={12}>
              <div className="stat-number">
                {(() => {
                  const m = stat.number.match(/^([\d.]+)(.*)$/);
                  return <Counter to={parseFloat(m[1])} decimals={(m[1].split(".")[1] || "").length} suffix={m[2]} />;
                })()}
              </div>
              <div className="stat-label">{stat.label}</div>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;

