import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { FiDownload, FiEye } from "react-icons/fi";

function Resume() {
  const resumeUrl = `${import.meta.env.BASE_URL}M-Sarmad-Sajjad-CV.pdf`;
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="resume">
      <SectionTitle>Resume</SectionTitle>

      <motion.div
        className="resume-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="resume-download">
          <a
            className="btn btn-primary"
            href={resumeUrl}
            download="M-Sarmad-Sajjad-CV.pdf"
          >
            <FiDownload /> Download PDF
          </a>
          {!showPreview && (
            <button
              className="btn btn-outline"
              type="button"
              onClick={() => setShowPreview(true)}
            >
              <FiEye /> Preview Resume
            </button>
          )}
        </div>

        {showPreview && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 600 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: "hidden" }}><iframe src={resumeUrl} width="100%" height="600px" title="Resume"></iframe></motion.div>
        )}
      </motion.div>
    </section>
  );
}

export default Resume;
