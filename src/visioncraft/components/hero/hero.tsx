'use client';
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section ref={containerRef} className="relative h-[150vh]">
      {/* Sticky Hero Content */}
      <motion.div
        style={{
          scale,
          opacity,
          backgroundImage: "url('/bag.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="sticky top-0 h-screen w-full flex brightness-125 flex-col items-center justify-center will-change-transform will-change-opacity"
      >
        {/* Foreground content */}
        <div className="z-10 text-center px-4">
          <motion.img
            loading="lazy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="/visioncraft.png"
            alt="visioncraft"
            className="mx-auto w-full max-w-xs md:max-w-md lg:max-w-lg object-contain"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-vision-gold font-neoneon text-center md:text-5xl mb-2 z-10"
          >
            UI/UX Bootcamp
            <br />
            By GDP - GraphiXel
          </motion.p>

          {/* Register Button and Countdown */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
          <motion.a
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="bg-vision-gold text-vision-blue font-Helvetica text-lg md:text-xl px-6 py-3 rounded-md hover:bg-vision-blue hover:text-vision-gold transition-all ease-in-out duration-300 shadow-lg z-1"
>
  The event is concluded!
</motion.a>


            
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
