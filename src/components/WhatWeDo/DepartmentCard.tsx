'use client';
import { motion } from 'framer-motion';

interface DepartmentCardProps {
  title: string;
  description: string;
}

const DepartmentCard = ({ title, description }: DepartmentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-black p-8 rounded-lg"
    >
      <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider text-center">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed ">
        {description}
      </p>
    </motion.div>
  );
};

export default DepartmentCard;