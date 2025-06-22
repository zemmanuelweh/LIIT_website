import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Users, Award, ArrowRight, Loader } from 'lucide-react';
import { usePrograms } from '../hooks/useApi';

const ProgramHighlights: React.FC = () => {
  const { programs, loading, error } = usePrograms();

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <Loader className="h-8 w-8 animate-spin text-blue-700" />
            <span className="ml-2 text-gray-600">Loading programs...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-red-600">
            <p>Error loading programs. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  const featuredPrograms = programs.slice(0, 4);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most sought-after programs designed to meet industry demands
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={program.attributes.image?.data?.attributes?.url || 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=800'}
                  alt={program.attributes.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {program.attributes.featured && (
                  <div className="absolute top-4 left-4 bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.attributes.title}</h3>
                <p className="text-gray-600 mb-4">{program.attributes.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {program.attributes.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    {program.attributes.enrolledStudents || '0'}+
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    to="/programs"
                    className="text-blue-700 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/enrollment"
                    className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors flex items-center text-sm"
                  >
                    Enroll
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/programs"
            className="inline-flex items-center bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            View All Programs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramHighlights;