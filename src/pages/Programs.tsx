import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Users, Award, Filter, Search, ArrowRight } from 'lucide-react';

const Programs: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Computer Science', 'Engineering', 'Business', 'Digital Media'];

  const programs = [
    {
      title: 'Computer Science Diploma',
      category: 'Computer Science',
      duration: '2 Years',
      students: '120+',
      fees: '$2,500',
      description: 'Comprehensive program covering programming, software development, database management, and system analysis.',
      features: ['Programming Languages', 'Web Development', 'Database Design', 'Software Engineering'],
      image: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=800',
      level: 'Diploma'
    },
    {
      title: 'Information Technology Certificate',
      category: 'Computer Science',
      duration: '1 Year',
      students: '95+',
      fees: '$1,200',
      description: 'Focused program on IT fundamentals, network management, and technical support.',
      features: ['Network Administration', 'Hardware Support', 'System Maintenance', 'Cybersecurity Basics'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      level: 'Certificate'
    },
    {
      title: 'Engineering Technology Diploma',
      category: 'Engineering',
      duration: '2.5 Years',
      students: '85+',
      fees: '$3,000',
      description: 'Practical engineering program covering mechanical, electrical, and civil engineering principles.',
      features: ['Engineering Drawing', 'Project Management', 'Quality Control', 'Safety Protocols'],
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      level: 'Diploma'
    },
    {
      title: 'Business Administration Diploma',
      category: 'Business',
      duration: '2 Years',
      students: '150+',
      fees: '$2,200',
      description: 'Complete business management program covering finance, marketing, and organizational leadership.',
      features: ['Financial Management', 'Marketing Strategy', 'Human Resources', 'Business Law'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      level: 'Diploma'
    },
    {
      title: 'Digital Marketing Certificate',
      category: 'Digital Media',
      duration: '1 Year',
      students: '110+',
      fees: '$1,500',
      description: 'Modern marketing program focusing on digital platforms, social media, and online advertising.',
      features: ['Social Media Marketing', 'SEO/SEM', 'Content Creation', 'Analytics'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      level: 'Certificate'
    },
    {
      title: 'Graphic Design Certificate',
      category: 'Digital Media',
      duration: '1 Year',
      students: '75+',
      fees: '$1,400',
      description: 'Creative program covering visual design, branding, and digital media production.',
      features: ['Adobe Creative Suite', 'Brand Design', 'Print Media', 'Digital Illustration'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      level: 'Certificate'
    }
  ];

  const filteredPrograms = programs.filter(program => {
    const matchesCategory = selectedCategory === 'All' || program.category === selectedCategory;
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          program.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Academic Programs</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Discover our comprehensive range of diploma and certificate programs designed for your success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {program.level}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {program.fees}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{program.description}</p>

                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {program.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {program.students}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {program.features.slice(0, 2).map((feature, i) => (
                          <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                            {feature}
                          </span>
                        ))}
                        {program.features.length > 2 && (
                          <span className="text-blue-700 text-xs">+{program.features.length - 2} more</span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <button className="text-blue-700 font-semibold hover:text-blue-800 transition-colors text-sm">
                        View Details
                      </button>
                      <Link
                        to="/enrollment"
                        className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors flex items-center text-sm"
                      >
                        Enroll Now
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {filteredPrograms.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-500 text-lg">No programs found matching your criteria.</div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Take the first step towards your future. Our admissions team is ready to help you choose the right program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/enrollment"
                className="inline-flex items-center bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
              >
                Contact Admissions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Programs;