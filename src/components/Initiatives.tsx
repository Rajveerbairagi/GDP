'use client';
import { motion } from 'framer-motion';
import { initiatives } from '../data/initiatives';

const Initiatives = () => {
  return (
    <section className="py-20" id="initiatives">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Our Initiatives</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our various programs and events designed to promote entrepreneurship
            and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {initiative.title}
                </h3>
                <p className="text-gray-600">{initiative.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;