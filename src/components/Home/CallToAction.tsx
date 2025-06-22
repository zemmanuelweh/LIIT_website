import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="section-padding gradient-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Join thousands of students who have transformed their careers at LIIT. 
              Take the first step towards a brighter future today.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link
              to="/programs"
              className="inline-flex items-center justify-center px-8 py-4 btn-outline"
            >
              Explore Programs
            </Link>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                <Phone className="h-6 w-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Call Us</div>
                <div className="text-gray-200">+231 123 456 789</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                <Mail className="h-6 w-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Email Us</div>
                <div className="text-gray-200">info@liit.edu.lr</div>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-gray-300 mb-4">
              🎓 Applications for 2024 intake are now open
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
              <span>✓ Flexible Payment Plans</span>
              <span>✓ Scholarship Opportunities</span>
              <span>✓ Career Support Services</span>
              <span>✓ Modern Facilities</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
  );
};

export default CallToAction;