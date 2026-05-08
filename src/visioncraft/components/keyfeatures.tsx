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
];

const KeyFeatures = () => {
  return (
    <section className="px-6 py-20 md:px-20 bg-transparent text-white" id="keyfeatures">
      <div className="max-w-4xl mx-auto text-center mb-12">
      <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-neoneon text-center text-vision-gold mb-8"
        >
          Key Features of VisionCraft
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-300 max-w-3xl mx-auto mb-12 text-lg"
        >
          From expert talks to real-world design challenges, VisionCraft is designed to give you a complete UI/UX experience—all in just two days.
        </motion.p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                    className="bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-700 hover:shadow-vision-gold transition"
                  >
                    <h3 className="text-xl font-semibold text-vision-gold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
    </section>
  );
};

export default KeyFeatures;
