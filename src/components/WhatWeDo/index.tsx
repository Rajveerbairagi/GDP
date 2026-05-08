'use client';
import { motion } from 'framer-motion';
import DepartmentCard from './DepartmentCard';
import { departments } from './departments';
import DepartmentCardW from './DepartmentCardW';
import { departmentsw } from './departmentsW';

const WhatWeDo = () => {
  return (
    <section className="" id="what-we-do">
      <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-8">What We Do.</h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
          we believe in growth through collaboration and innovation. By bringing together students with different skill sets and
interests, we aim to create a vibrant and supportive environment that drives personal development and fosters community spirit.
Whether you're a budding developer, a creative designer, a programming enthusiast, or a music lover, GDP offers you the
platform to develop your passion, enhance your skills. We're not just a committee; we are pioneers in driving growth, inspiring
creativity, and fostering a spirit of collaboration!          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {departments.map((dept, index) => (
            <DepartmentCard
              key={index}
              title={dept.title}
              description={dept.description}
            />
          ))}
        </div>
        </div>
        </section>
        <section className='bg-grey-50'>
        <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {departmentsw.map((dept, index) => (
            <DepartmentCardW
              key={index}
              title={dept.title}
              description={dept.description}
            />
          ))}
        </div>
        </div>
      </section>
    </section>
  );
};

export default WhatWeDo;
