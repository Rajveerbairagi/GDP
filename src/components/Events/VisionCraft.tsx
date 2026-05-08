'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Visioncraft: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/visioncraft');
  };

  return (
    <section className="py-20 bg-grey-50" id="visioncraft">
      <div className="max-w-7xl mx-auto px-4">
        <div><h2 className="text-5xl font-bold font-neoneon text-center text-primary mb-8">Vision Craft</h2></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <motion.img
              src="/visioncraft-event.jpg"
              alt="Vision Craft"
              className="w-full max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
          
          <div className="order-1 md:order-2">
            
            <div className="space-y-6 text-gray-600">
            <p>
              
          
            <strong>Unlock the design thinking mindset and craft interfaces that resonate.</strong>
                            </p>
              <p>
              
              We are excited to unveil VisionCraft – a dynamic 2-day online UI UX design bootcamp hosted
               by GDP,Graphixel -  a community active in RGPV. With the mission to Inspire, Design, Learn, 
               and Lead, VisionCraft is your one-stop destination to explore the creative side of technology 
               and build essential design skills in today’s digital age.
              </p>
              <p>
              
              In today’s digital-first world, design is not just how it looks—it’s how it works.
               Whether it's the way a button feels, the flow of an app, or how a user gets from 
               point A to point B, UI UX design is at the heart of user experience. And that's exactly what VisionCraft is all about.
              </p>
              <p>
              
              An excellent opportunity to build your portfolio and learn UI/UX fundamentals from UI designing and
               prototyping to design systems and UX documentation, and all about the design thinking process- 
               we have got you fully covered to become completely industry ready!
              </p>
              <p>
              
              So whether you’re here to learn, explore a career in UI/UX, or just design something awesome—<strong>VisionCraft is your canvas.</strong>
              </p>
              <motion.button
                className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClick}

              >
                Know more!
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Visioncraft;
