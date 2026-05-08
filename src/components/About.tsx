'use client';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">About Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          
GDP, RGPV Bhopal is an innovative and dynamic student committee dedicated to fostering growth, skill
development, and leadership across multiple domains. The committee is divided into five specialized
departments, each working towards creating an impactful and collaborative environment for students to grow
professionally and personally
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {['COLLABORATION', 'DEVELOPMENT', 'LEADERSHIP'].map((value, index) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">{value}</h3>
              <p className="text-gray-600">
                We believe in fostering {value.toLowerCase()} through hands-on experience and
                mentorship from industry experts.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
