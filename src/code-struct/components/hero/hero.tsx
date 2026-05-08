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
          backgroundImage: "url('/Star1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="sticky top-0 h-screen w-full flex brightness-100 flex-col items-center justify-center will-change-transform will-change-opacity"
      >
        {/* Foreground content */}
        <div className="z-10 text-center flex-row px-4">
          <motion.img
            loading="lazy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="/CS-preview.png"
            alt="::<<CS;"
            className="mx-auto w-full max-w-3xl md:max-w-5xl lg:max-w-[1600px] h-auto object-contain"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-vision-blue font-jetbrains text-center md:text-5xl mb-2 z-10"
          >
            Code Struct
            <br />
            By GDP - CodAiX
          </motion.p>

          {/* Register Button and Countdown */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
          <motion.a
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="bg-vision-blue text-vision-gold font-jetbrains text-lg md:text-xl px-6 py-3 rounded-md hover:bg-vision-gold hover:text-vision-blue transition-all ease-in-out duration-300 shadow-lg z-1"
>
  WebAPP is under construction!
</motion.a>


            
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;