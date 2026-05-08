'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Who can participate in CodeStruct?',
    answer:
      'Anyone looking to boost their problem-solving skills and grow through real-world challenges — from beginners to pros — is welcome at CodeStruct!',
  },
  {
    question: 'What skill level should I be at?',
    answer:
      'We\'ve designed the problems over a wide range of difficulties to accommodate many skill levels. If you\'re familiar with if-conditions, loops, strings, and integers, you can start solving problems!',
  },
  {
    question: 'How many questions are there? What are they like?',
    answer:
      'There are typically 5 to 6 questions in each contest, ranging from easy to challenging. The format loosely follows the Codeforces-style pattern — designed to test logic, problem-solving, and real-world application of concepts.',
  },
  //  TODO:- Answer this question!!
  {
    question: 'How is CodeStruct conducted? ',
    answer:
      'VisionCraft is a 100% online event hosted via Google Meet. You can join from anywhere and learn from the comfort of your space.',
  },
  {
    question: 'Is CodeStruct a solo or team-based contest?',
    answer:
      'CodeStruct is designed for individual participation. Each participant competes solo to encourage personal growth, independent problem-solving, and to help sharpen core logical thinking skills.',
  },
  {
    question: 'Is there any entrance fee?',
    answer:
      'Nope, it\'s absolutely free! Just bring your curiosity and passion to learn — we’ve got the rest covered.',
  },
  {
    question: 'Still have questions?',
    answer:
      'Join our whatsapp community now!!',
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
        <h2 className="text-3xl md:text-4xl font-jetbrains text-vision-blue mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-900 text-lg">
          Stuck somewhere? CodeStruct is here—guiding both curious beginners and seasoned coders.
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
              <h3 className="text-lg font-semibold text-vision-blue">{faq.question}</h3>
              <span className="text-xl text-vision-blue">
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
                  <p className="text-gray-900 mt-3">{faq.answer}</p>
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

