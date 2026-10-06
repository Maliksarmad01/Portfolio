import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const projects = [
  {
    name: "XAI-Based Breast Cancer Detection using Reinforcement Learning",
    description:
      "Explainable deep learning system for classifying mammograms into Normal, Benign, and Malignant classes using EfficientNet and DenseNet121 with ensemble prediction, Grad-CAM explanations, and doctor feedback for reinforcement learning-based optimization.",
    tags: ["PyTorch", "EfficientNet", "DenseNet121", "Grad-CAM", "XAI", "RL"],
  },
  {
    name: "Fraud Investigation Agent",
    description:
      "AI agent that investigates suspicious transactions by analyzing transaction patterns, assessing fraud risk, and generating structured investigation reports with recommended actions.",
    tags: ["Python", "AI Agent", "LLM", "Fraud Detection"],
  },
  {
    name: "Sehat Guftagu",
    description:
      "Healthcare web platform designed to provide an interactive digital experience for patients and healthcare users, built with a modern full-stack architecture and responsive user interface.",
    tags: ["Next.js", "React", "JavaScript", "Healthcare"],
  },
  {
    name: "College ERP Management System",
    description:
      "Django-based college management platform for handling students, teachers, courses, attendance, academic records, and administrative operations through a centralized web system.",
    tags: ["Python", "Django", "SQLite", "HTML", "CSS"],
  },
  {
    name: "Techy Electronics E-Commerce",
    description:
      "Full-stack MERN e-commerce platform for browsing and managing electronic products with product listings, shopping functionality, user interactions, and a responsive frontend.",
    tags: ["React", "Node.js", "Express", "MongoDB", "MERN"],
  },
  {
    name: "Document Intelligence System",
    description:
      "AI-powered document processing project focused on extracting and analyzing information from documents to reduce manual processing and improve information accessibility.",
    tags: ["Python", "AI", "Document AI", "NLP"],
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

function Projects() {
  return (
    <section id="projects">
      <SectionTitle>Projects</SectionTitle>

      <div className="projects">
        {projects.map((project, index) => (
          <TiltCard
            className="card"
            key={project.name}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariant}
          >
            <h3>{project.name}</h3>
            <p className="card-desc">{project.description}</p>

            <div className="tag-row">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}

export default Projects;
