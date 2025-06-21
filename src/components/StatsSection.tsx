import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Award, Building } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: '2,500+',
      label: 'Students Trained',
      description: 'Across all programs'
    },
    {
      icon: GraduationCap,
      number: '1,800+',
      label: 'Graduates',
      description: 'Successfully employed'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Programs',
      description: 'Diploma & Certificate'
    },
    {
      icon: Building,
      number: '5+',
      label: 'Years',
      description: 'Of excellence'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-blue-700" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;