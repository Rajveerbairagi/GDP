'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Codestruct: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/codestruct');
  };

  return (
    <section className="py-20 bg-grey-50" id="codestruct">
      <div className="max-w-7xl mx-auto px-4">
        <div><h2 className="text-5xl font-bold font-jetbrains text-center text-primary mb-8">Code Struct</h2></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <motion.img
              src="/codestruct-event.jpg"
              alt="Code Struct"
              className="w-full max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
          
          <div className="order-1 md:order-2">
            
            <div className="space-y-6 text-gray-600">
            <p>
              
          
            <strong>Dive into tech-driven scenarios, sharpen your problem-solving skills, and level up your thinking.</strong>
            </p>
            <p>
              
              Code Struct is a weekly online coding contest series organized by CodeAiX, GDP — an active community in RGPV.
              This series is designed to go beyond traditional DSA practice. It focuses on real-world inspired problem-solving — 
              merging core data structures and algorithms with practical tech-based scenarios. 

              </p>
              <p>
              
              Problem-solving is at the core of all technological innovation — from building scalable systems to designing intelligent solutions.
              Whether it’s software development, AI, or system design, the ability to think critically and solve complex problems 
              efficiently is what sets great engineers apart. Code Struct is built to nurture this mindset through challenges rooted
              in real-world scenarios, helping you grow beyond just theory and code.

              </p>
              <p>
              
              CodeStruct is thus an ideal springboard to strengthen your problem-solving skills, explore real-world scenarios, 
              and grow from a curious beginner to a confident thinker.

              </p>
              <p>
              
              Whether you're just a newbie or an Expert,  CodeStruct is your launchpad to <strong>learn, grow, and 
              collaborate</strong> with a passionate community of problem solvers!
        
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

export default Codestruct;

