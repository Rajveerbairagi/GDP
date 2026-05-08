'use client';
import { motion } from 'framer-motion';

interface GalleryImageProps {
  src: string;
  alt: string;
}

const GalleryImage = ({ src, alt }: GalleryImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-lg"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
      />
    </motion.div>
  );
};

export default GalleryImage;