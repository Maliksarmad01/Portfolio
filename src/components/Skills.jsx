import Counter from "./Counter";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Web Development",
    skills: [
      { name: "HTML / CSS", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "React.js", level: 85 },
      { name: "Node.js / Express.js", level: 82 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "AI / Machine Learning",
    skills: [
      { name: "Python", level: 95 },
      { name: "Machine Learning", level: 90 },
      { name: "Deep Learning", level: 90 },
      { name: "Computer Vision", level: 88 },
      { name: "Transfer Learning", level: 90 },
      { name: "Explainable AI (XAI)", level: 85 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "PyTorch", level: 88 },
      { name: "OpenCV", level: 86 },
      { name: "Scikit-learn", level: 88 },
      { name: "Pandas / NumPy", level: 90 },
      { name: "Matplotlib", level: 85 },
    ],
  },
  {
    title: "Programming & Tools",
    skills: [
      { name: "C / C++", level: 85 },
      { name: "Git / GitHub", level: 82 },
      { name: "VS Code", level: 92 },
      { name: "Jupyter Notebook", level: 92 },
      { name: "Google Colab", level: 90 },
    ],
  },
];

const barVariant = {
  hidden: { width: 0 },
  visible: (level) => ({
    width: `${level}%`,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  }),
};

function Skills() {
  return (
    <section id="skills">
      <SectionTitle>Skills</SectionTitle>

      <div className="skills-groups">
        {skillGroups.map((group) => (
          <motion.div
            className="skills-group"
            key={group.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>{group.title}</h3>

            {group.skills.map((skill) => (
              <div className="skill-row" key={skill.name}>
                <div className="skill-row-top">
                  <span>{skill.name}</span>
                  <span className="skill-pct"><Counter to={skill.level} suffix="%" /></span>
                </div>

                <div className="skill-bar-track">
                  <motion.div
                    className="skill-bar-fill"
                    custom={skill.level}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={barVariant}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
