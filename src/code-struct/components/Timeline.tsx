'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

import arrowAnimation from '../assests/arrow2.json';


interface ScheduleItem {
  day: string;
  date: string;
  items: string[];
}

const schedule: ScheduleItem[] = [
  {
    day: 'Day 1 [17/05]',
    date: 'UI/UX Foundations',
    items: [
      'Basics of UI/UX Design',
      'Design Principles',
      'Wireframing & Prototyping',
      'Variants & Components in Figma',
      'Auto Layout in Figma',
    ],
  },
  {
    day: 'Day 2 [18/05]',
    date: 'Advanced UI/UX & Showcase',
    items: [
      'Design Systems',
      'Dev-Handoff & Collaboration in Figma',
      'UX Basics, Documentation & Portfolio Making',
      'Mini Demo Project',
      'Prizes & Certificate Distribution',
    ],
  },
];

// Custom throttle function with TypeScript
const throttle = <T extends (...args: any[]) => void>(func: T, limit: number): ((...args: Parameters<T>) => void) => {
  let lastFunc: NodeJS.Timeout | undefined;
  let lastRan: number | undefined;
  return (...args: Parameters<T>) => {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      if (lastFunc) clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan! >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan!));
    }
  };
};

const lerp = (start: number, end: number, factor: number): number => {
  return start + (end - start) * factor;
};

const Timeline: React.FC = () => {
  const [cursorTop, setCursorTop] = useState<number>(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const prevCursorTop = useRef<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateCursorPosition = () => {
      if (!timelineRef.current) return;

      const timeline = timelineRef.current;
      const { top, height } = timeline.getBoundingClientRect();
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate timeline's top and bottom relative to document
      const timelineTop = top + scrollY;
      const timelineBottom = timelineTop + height;

      // Calculate scroll progress
      const scrollProgress = Math.max(0, Math.min(1, (scrollY + windowHeight / 2 - timelineTop) / (timelineBottom - timelineTop - windowHeight / 2)));

      // Target cursor position
      const targetPosition = scrollProgress * (height - 32); // Subtract arrow height (h-8 = 32px)

      // Smooth cursor position with lerp
      const smoothedPosition = lerp(prevCursorTop.current, targetPosition, 0.3);
      setCursorTop(smoothedPosition);
      prevCursorTop.current = smoothedPosition;
    };

    const handleScroll = () => {
      requestAnimationFrame(updateCursorPosition);
    };

    const throttledScroll = throttle(handleScroll, 100);

    window.addEventListener('scroll', throttledScroll);
    const timeoutId = setTimeout(updateCursorPosition, 0);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return (
    <section className="bg-transparent text-white py-20 px-4 sm:px-6 md:px-20">
      <div className="max-w-5xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-jetbrains text-center text-vision-blue mb-12 tracking-wide"
        >
          Contests Timeline
        </motion.h2>

        <div className="relative" ref={timelineRef}>
          {/* Central Timeline Line (Yellow) */}
          <div className="absolute left-[2rem] sm:left-1/2 sm:-translate-x-1/2 w-1.5 bg-gradient-to-b from-vision-gold to-yellow-400/50 h-full rounded-full z-0"></div>

          {/* Lottie Arrow */}
          <div
            className="absolute left-9 sm:left-1/2 sm:-translate-x-1/2 w-8 h-8 z-10 transition-all duration-300"
            style={{ top: `${cursorTop}px`, transform: 'translateY(-50%)', filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.6))' }}
          >
            <Lottie
              animationData={arrowAnimation}
              loop={true}
              style={{ width: '4rem', height: '4rem', transform: 'translateX(-50%)' }}
            />
          </div>

          {schedule.map((session, index) => (
            <div key={index} className="relative mb-16">
              {/* Sticky Day Header */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="sticky top-0 z-20 bg-transparent flex justify-center md:justify-start items-center mb-6"
                style={{ top: '4rem' }}
              >
                <div className="relative flex items-baseline">
                  <motion.h3
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-jetbrains text-vision-blue px-4 py-2 bg-gradient-to-r from-vision-gold/20 to-transparent rounded-lg"
                    style={{
                      textShadow: '0 0 8px rgba(255, 215, 0, 0.6), 0 0 16px rgba(255, 215, 0, 0.4)',
                    }}
                  >
                    {session.day}
                    <span className="absolute bottom-[-0.5rem] left-1/2 md:left-4 transform -translate-x-1/2 md:translate-x-0 w-16 h-1 bg-gradient-to-r from-vision-gold to-transparent rounded-full"></span>
                  </motion.h3>
                </div>
              </motion.div>
              <p className="text-sm text-vision-blue text-center md:text-left md:ml-4 italic font-light mb-6">{session.date}</p>

              {/* Item Cards */}
              <div className="space-y-8">
                {session.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className={`relative flex justify-end md:${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`w-10/12 sm:w-10/12 md:w-5/12 relative pl-8 md:pl-0 md:${i % 2 === 0 ? 'pr-16' : 'pl-16'}`}
                    >
                      {/* Small Dot (Desktop Only) */}
                      <div
                        className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 ${
                          i % 2 === 0 ? 'right-[-2.5rem] left-auto' : 'left-[-2.5rem]'
                        } w-4 h-4 bg-vision-gold/80 rounded-full border border-vision-gold shadow-sm z-10`}
                      ></div>
                      {/* Lines (Desktop Only) */}
                      <div
                        className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 ${
                          i % 2 === 0 ? 'right-[-2.5rem] w-10' : 'left-[-2.5rem] w-10'
                        } h-px bg-vision-gold/50`}
                      ></div>
                      <div
                        className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 ${
                          i % 2 === 0 ? 'right-0 w-[calc(2.5rem-0.5px)]' : 'left-0 w-[calc(2.5rem-0.5px)]'
                        } h-px bg-vision-gold/50`}
                      ></div>
                      <motion.div
                        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                        className="relative bg-white/10 backdrop-blur-xl border border-vision-gold/30 rounded-xl p-4 sm:p-5 shadow-xl hover:shadow-2xl transition-all duration-300"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-vision-gold/15 to-transparent rounded-xl"></div>
                        <p className="relative text-vision-blue text-sm sm:text-base font-jetbrains z-10">{item}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;