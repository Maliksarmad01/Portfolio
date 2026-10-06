import { motion } from "framer-motion";

const word = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function SectionTitle({ children }) {
  return (
    <motion.h2
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
    >
      {String(children).split(" ").map((w, i) => (
        <span className="word-mask" key={i}>
          <motion.span className="word" variants={word}>{w}</motion.span>
        </span>
      ))}
      <motion.span
        className="title-bar"
        variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.8, delay: 0.3 } } }}
      />
    </motion.h2>
  );
}
