import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      program: 'Computer Science Diploma',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'LIIT provided me with the technical skills and confidence I needed to land my dream job as a software developer. The practical approach to learning made all the difference.',
      rating: 4.5
    },
    {
      name: 'Michael Davies',
      program: 'Business Administration',
      image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'The business program at LIIT opened doors I never thought possible. The faculty\'s industry experience and mentorship were invaluable to my career growth.',
      rating: 5
    },
    {
      name: 'Grace Kannah',
      program: 'Digital Marketing Certificate',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'In just one year, I transformed my marketing skills completely. The hands-on projects and real-world applications helped me start my own successful agency.',
      rating: 5
    }
  ];

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
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <Quote className="h-8 w-8 text-blue-200 mb-4" />

              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.program}</p>
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