import SectionTitle from "./SectionTitle";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import TiltCard from "./TiltCard";

const experience = [
  {
    role: "AI/ML Intern",
    company: "Texense",
    period: "Sep 2025 – Dec 2025",
    location: "Remote",
    points: [
      "Worked on software solutions and computer-vision applications for technology-driven product development.",
      "Researched and evaluated technical approaches to improve application performance, reliability, and real-time processing.",
      "Developed FastAPI-based model-serving endpoints and integrated trained AI models into real-time applications.",
      "Worked with Python, PyTorch, and OpenCV for machine learning and computer-vision solutions.",
      "Applied optimization techniques including model quantization and mixed-precision inference.",
      "Collaborated with cross-functional team members to troubleshoot issues and refine project requirements and solutions.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "Jun 2024 – Sep 2025",
    location: "Remote",
    points: [
      "Designed, developed, and maintained responsive websites and web applications for independent clients.",
      "Managed complete freelance projects including requirements gathering, client communication, development, testing, and delivery.",
      "Built front-end interfaces and back-end functionality using modern web technologies.",
      "Integrated databases to support dynamic web application functionality.",
      "Managed project timelines and incorporated client feedback throughout the development process.",
      "Strengthened client communication, problem-solving, and independent project management skills.",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "University of Management and Technology",
    period: "Mar 2024 – Aug 2025",
    location: "Lahore, Pakistan",
    points: [
      "Supported 100+ students in Machine Learning, Data Structures & Algorithms, and Object-Oriented Programming labs.",
      "Explained technical concepts clearly and assisted students with project requirements and implementation approaches.",
      "Reviewed student projects and provided technical feedback to identify issues and improve solutions.",
      "Guided students through problem-solving, debugging, and technical decision-making.",
      "Assisted students in developing practical programming and software development skills.",
    ],
  },
];

const itemVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
    },
  }),
};

function Experience() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 80%", "end 60%"] });
  return (
    <section id="experience">
      <SectionTitle>Professional Experience</SectionTitle>

      <div className="experience-list" ref={listRef}>
        <div className="timeline-track"><motion.div className="timeline-fill" style={{ scaleY: scrollYProgress }} /></div>
        {experience.map((job, index) => (
          <TiltCard
            className="card experience-card"
            key={`${job.role}-${job.company}`}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariant}
          >
            <div className="experience-header">
              <div>
                <h3>{job.role}</h3>
                <p className="experience-company">
                  {job.company}
                </p>
              </div>

              <div className="experience-meta">
                <span className="experience-period">
                  {job.period}
                </span>

                <span className="experience-location">
                  {job.location}
                </span>
              </div>
            </div>

            <ul className="experience-points">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}

export default Experience;

