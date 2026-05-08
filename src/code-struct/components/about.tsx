'use client';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Real-World Inspired Problems",
    description: "Encourages thinking beyond abstract DSA toward real-world applicability.",
  },
  {
    title: "Concept-Driven Questions",
    description: "Each problem focuses on a core CS/DSA concept, helps in building a deeper understanding rather than just pattern solving.",
  },
  {
    title: "Realistic Constraints",
    description: "Problems have limited constraints to allow simulation-focused approaches rather than only brute-force avoidance.",
  },
  {
    title: "Code Review Based Scoring",
    description: "Submissions are reviewed manually for clarity, logic, and elegance.",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-transparent text-white pt-32 pb-20 px-4 md:px-20" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-jetbrains text-center text-vision-blue mb-8"
        >
          About CodeStruct
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-950 max-w-3xl mx-auto mb-12 text-lg"
        >
          Step beyond basic coding drills — CodeStruct brings you weekly contests built around real-world challenges. Dive into tech-driven scenarios, sharpen your problem-solving skills, and level up your thinking. Whether you're a beginner or a pro, this is your arena to learn, grow, and thrive.
        </motion.p>

        <div className="grid gap-y-8 gap-x-8 md:grid-cols-2">
  {features.map((feature, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: idx * 0.14 }}
      className="bg-vision-blue rounded-3xl p-8 shadow-xl border border-gray-700 hover:shadow-vision-gold transition-all duration-300 group focus-within:ring-2 ring-vision-gold"
      tabIndex={0}
    >
      <h3 className="text-2xl font-bold text-vision-gold mb-3 group-hover:underline">
        {feature.title}
      </h3>
      <p className="text-gray-300 text-base leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
};

export default AboutSection;

