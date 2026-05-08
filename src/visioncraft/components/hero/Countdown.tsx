'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  targetDate: number;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="z-10"
    >
      <div className="bg-vision-blue bg-opacity-10 rounded-xl border border-vision-gold px-4 py-2 shadow-md flex gap-3 md:gap-6 justify-center items-center">
        <div className="flex flex-col items-center">
          <span className="bg-black bg-opacity-50 px-2 py-1 rounded-md text-vision-gold">
            {timeLeft.days.toString().padStart(2, "0")}
          </span>
          <span className="text-xs md:text-sm text-vision-gold">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-black bg-opacity-50 px-2 py-1 rounded-md text-vision-gold">
            {timeLeft.hours.toString().padStart(2, "0")}
          </span>
          <span className="text-xs md:text-sm text-vision-gold">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-black bg-opacity-50 px-2 py-1 rounded-md text-vision-gold">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </span>
          <span className="text-xs md:text-sm text-vision-gold">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-black bg-opacity-50 px-2 py-1 rounded-md text-vision-gold">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </span>
          <span className="text-xs md:text-sm text-vision-gold">Seconds</span>
        </div>
      </div>
    </motion.div>
  );
  
};  

export default Countdown;