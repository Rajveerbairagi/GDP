'use client';
import { motion } from 'framer-motion';
import { teamMembers } from '../data/team';

const Team = () => {
  return (
    <section className="py-20 bg-gray-50" id="team">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated individuals working to promote entrepreneurship
            and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;