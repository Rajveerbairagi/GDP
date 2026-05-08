'use client';
import { motion } from 'framer-motion';

interface DepartmentW {
  title: string;
  description: string;
}

const DepartmentCardW = ({ title, description }: DepartmentW) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white p-8 rounded-lg"
    >
      <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider text-center">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed ">
        {description}
      </p>
    </motion.div>
  );
};

export default DepartmentCardW;