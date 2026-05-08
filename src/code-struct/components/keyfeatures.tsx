'use client';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Exclusive Speaker Session',
    description:
      'Get inspired by real industry stories, trends, and insights from expert designers. Discover what the industry demands and how AI is reshaping workflows.',
  },
  {
    title: 'Hands-on Workshops',
    description:
      'Work directly in Figma during guided live sessions. Learn how to wireframe, prototype, and design user interfaces that solve real problems.',
  },
  {
    title: 'Design Challenges & Feedback',
    description:
      'Test your creativity with real challenges and gain practical feedback from experienced mentors to help polish your portfolio.',
  },
  {
    title: 'Community & Networking',
    description:
      'Meet fellow creators, share ideas, and build connections. VisionCraft is more than a bootcamp—it’s the beginning of your design journey.',
  },
  {
    title: 'Hands-on Workshops',
    description:
      'Work directly in Figma during guided live sessions. Learn how to wireframe, prototype, and design user interfaces that solve real problems.',
  },
  {
    title: 'Hands-on Workshops',
    description:
      'Work directly in Figma during guided live sessions. Learn how to wireframe, prototype, and design user interfaces that solve real problems.',
  },
];

const KeyFeatures = () => {
  return (
    <section className="px-6 py-14 md:px-20 bg-transparent text-white" id="keyfeatures">
      <div className="max-w-4xl mx-auto text-center mb-12">
      <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-jetbrains text-center text-vision-blue mb-8"
        >
          Key Features of CodeStruct
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-900 max-w-3xl mx-auto mb-12 text-lg"
        >
          From expert talks to real-world design challenges, VisionCraft is designed to give you a complete UI/UX experience—all in just two days.
        </motion.p>
      </div>

<div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
  {features.map((feature, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.48, delay: idx * 0.14, type: "spring", stiffness: 60 }}
      className="group bg-vision-blue rounded-3xl p-8 border border-gray-700 shadow-[0_6px_42px_0_rgba(0,0,0,0.24)] hover:shadow-vision-gold ring-0 focus-within:ring-2 focus-within:ring-vision-gold/80 transition-all duration-300 relative overflow-hidden"
      tabIndex={0}
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/[0.03] via-transparent to-[#242536]/[0.03] rounded-3xl z-0" />
      <h3 className="relative z-10 text-2xl font-bold text-vision-gold mb-2">
        {feature.title}
      </h3>
      <p className="relative z-10 text-gray-300 text-base leading-relaxed font-medium mb-1">
        {feature.description}
      </p>
    </motion.div>
  ))}
</div>

    </section>
  );
};

export default KeyFeatures;
