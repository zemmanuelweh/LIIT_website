import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Loader } from 'lucide-react';
import { useTestimonials } from '../hooks/useApi';

const Testimonials: React.FC = () => {
  const { testimonials, loading, error } = useTestimonials();

  if (loading) {
    return (
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <Loader className="h-8 w-8 animate-spin text-white" />
            <span className="ml-2 text-white">Loading testimonials...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <p>Error loading testimonials. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-16 bg-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Hear from our graduates who have transformed their careers through our programs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                {Array.from({ length: Math.floor(testimonial.attributes.rating || 5) }, (_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <Quote className="h-8 w-8 text-blue-200 mb-4" />

              <p className="text-gray-600 mb-6 italic">"{testimonial.attributes.content}"</p>

              <div className="flex items-center">
                <img
                  src={testimonial.attributes.image?.data?.attributes?.url || 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'}
                  alt={testimonial.attributes.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.attributes.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.attributes.program}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;