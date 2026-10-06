import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { AnimatePresence, motion } from "framer-motion";
import { FiMail, FiPhone, FiLinkedin, FiSend } from "react-icons/fi";
import SpinCube from "./SpinCube";

// Contact form submissions are sent to your email via Formspree (free, no backend needed).
// 1. Go to https://formspree.io and sign up (free tier).
// 2. Create a new form and set the notification email to your address.
// 3. Copy the form endpoint it gives you and paste it below, replacing YOUR_FORM_ID.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setStatus(`Thanks, ${form.name.split(" ")[0] || "there"}! I'll get back to you soon.`);
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong — please email me directly instead.");
      }
    } catch {
      setStatus("Something went wrong — please email me directly instead.");
    }
  };

  return (
    <section id="contact">
      <SectionTitle>Get In Touch</SectionTitle>

      <div className="contact-wrap">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>
            Feel free to reach out for collaborations, internship
            opportunities, or just to say hello.
          </p>

          <div className="contact-details">
            <div className="contact-detail-row">
              <FiMail /> maliksarmadsajjad8@gmail.com
            </div>
            <div className="contact-detail-row">
              <FiPhone /> +92 346 4007881
            </div>
          </div>

          <div className="social-row">
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/malik-sarmad01"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </div>

          <SpinCube />
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button className="btn btn-primary" type="submit">
            <FiSend /> Send Message
          </button>
          <AnimatePresence mode="wait">{status && <motion.p key={status} className="form-status" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>{status}</motion.p>}</AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
