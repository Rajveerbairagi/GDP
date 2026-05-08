'use client';
import { motion } from 'framer-motion';

const InkSpace = () => {
  return (
    <section className="py-20 bg-black" id="inkspace">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <motion.img
              src="/inkspace.jpg"
              alt="GDP's InkSpace"
              className="w-full max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-5xl font-bold text-white mb-8">GDP's InkSpace</h2>
            <div className="space-y-6 text-gray-400">
            <p>
              
          
We are thrilled to unveil the GDP's InkSpace - your gateway to the dynamic
world of Technology with the Moto of, Innovate, Nurture, Knowledge, Start,
Prosper, Academics, Collaborate, Endorse, at RGPV 
                            </p>
              <p>
              
GDP's InkSpace is an innovative platform designed to keep students
connected and informed. It serves as a comprehensive hub where you can find
a wide range of resources tailored to enhance your academic journey. Key
features of InkSpace include:
              </p>
              <p>
              
Articles & Blogs: Stay updated with insightful articles covering the latest
news, events, and stories related to college life. From student achievements to
faculty highlights, InkSpace brings everything to your fingertips.
College Updates: Never miss important announcements, events, or deadlines.
Our platform ensures you're always in the loop with timely notifications about
college activities, workshops, and more.
              </p>
              <p>
              
Subject Notes: Access a curated collection of subject notes and study materials
to support your academic success. These resources are contributed by students
and faculty to provide concise, easy-to-understand content for better exam
preparation.
              </p>
              <p>
              
Whether you want to stay informed, boost your learning, or engage with your
college community, InkSpace is your go-to destination! Have fun exploring
the world of Technology with GDP's InkSpace
              </p>
              <motion.button
                className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = "https://ink-space-omega.vercel.app/"}

              >
                READ GDP'S INKSPACE
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InkSpace;
