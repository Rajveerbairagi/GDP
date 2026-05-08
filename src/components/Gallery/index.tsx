'use client';
import { motion } from 'framer-motion';
import GalleryImage from './GalleryImage';
import { galleryImages } from './galleryData';

const Gallery = () => {
  return (
    <section className="py-20 bg-black" id="gallery">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-gray-400 uppercase tracking-wider mb-4">
            Witness The Awesomeness
          </h3>
          <h2 className="text-5xl font-bold text-white mb-8">Gallery</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            GDP more precisely Digital Diaspor brings both from the captures of a particular to
            the really eye soothing captures to our viewers!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <GalleryImage
              key={image.id}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;