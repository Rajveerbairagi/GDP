'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Who should attend VisionCraft?',
    answer:
      'Students curious about digital design, developers aiming to upskill in front-end, and creators wanting to build intuitive, user-friendly products will benefit the most.',
  },
  {
    question: 'Is the event beginner-friendly?',
    answer:
      'Absolutely! Whether you’re just exploring UI/UX or already on your journey, VisionCraft offers a guided and interactive learning experience for all skill levels.',
  },
  {
    question: 'What will I learn during the bootcamp?',
    answer:
      'You’ll explore design thinking, UI/UX fundamentals, hands-on Figma sessions, and portfolio-building strategies—all under the guidance of design professionals.',
  },
  {
    question: 'How is VisionCraft conducted?',
    answer:
      'VisionCraft is a 100% online event hosted via Google Meet. You can join from anywhere and learn from the comfort of your space.',
  },
  {
    question: 'Why should I attend VisionCraft?',
    answer:
      'Design is more than aesthetics—it’s about solving problems. VisionCraft equips you with the mindset, tools, and confidence to design smarter and with impact.',
  },
  {
    question: 'Is there any registration fee?',
    answer:
      'The event has limited seats, and details are available on the registration page. Reserve your spot early to ensure participation!',
  },
  {
    question: 'Will I get a certificate?',
    answer:
      'Yes! Participants who attend the bootcamp and complete the activities will receive a certificate of participation and be eligible for exciting rewards.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faqs' className="px-6 py-20 md:px-20 bg-transparent text-white">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-neoneon text-vision-gold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-300 text-lg">
          Got questions? We've got answers—whether you’re a newbie or an experienced creator.
        </p>
      </div>

      <div className="space-y-6 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 shadow-md hover:shadow-yellow-400/20 transition duration-300 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-vision-gold">{faq.question}</h3>
              <span className="text-xl text-vision-gold">
                {openIndex === index ? '−' : '+'}
              </span>
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-300 mt-3">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
