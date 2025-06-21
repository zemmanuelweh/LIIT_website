import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, BookOpen, CreditCard, Users, Settings } from 'lucide-react';

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const categories = [
    { name: 'All', icon: BookOpen },
    { name: 'Admissions', icon: Users },
    { name: 'Programs', icon: BookOpen },
    { name: 'Fees & Payment', icon: CreditCard },
    { name: 'Technical', icon: Settings }
  ];

  const faqData = [
    {
      category: 'Admissions',
      question: 'What are the admission requirements?',
      answer: 'To apply for our programs, you need a high school diploma or equivalent. Some programs may have specific prerequisites. You can apply online through our enrollment page or visit our campus for assistance.'
    },
    {
      category: 'Admissions',
      question: 'When do applications open?',
      answer: 'We accept applications year-round with multiple intake periods: January, April, July, and October. We recommend applying at least 4 weeks before your preferred start date.'
    },
    {
      category: 'Admissions',
      question: 'Can I transfer credits from another institution?',
      answer: 'Yes, we accept transfer credits from accredited institutions. Our admissions team will evaluate your transcripts and determine which credits can be applied to your program.'
    },
    {
      category: 'Programs',
      question: 'What is the difference between diploma and certificate programs?',
      answer: 'Diploma programs are typically 2-3 years and provide comprehensive training in a field. Certificate programs are 6 months to 1 year and focus on specific skills or specializations.'
    },
    {
      category: 'Programs',
      question: 'Are classes available online?',
      answer: 'We offer a hybrid learning model with both in-person and online components. Some programs have fully online options, while others require hands-on laboratory work on campus.'
    },
    {
      category: 'Programs',
      question: 'What support is available for students?',
      answer: 'We provide comprehensive student support including academic advising, career counseling, tutoring services, library access, and technical support for online learning platforms.'
    },
    {
      category: 'Fees & Payment',
      question: 'How much do programs cost?',
      answer: 'Program fees vary by course length and type. Certificate programs range from $1,200-$1,500, while diploma programs range from $2,200-$3,000. Payment plans are available.'
    },
    {
      category: 'Fees & Payment',
      question: 'Do you offer payment plans?',
      answer: 'Yes, we offer flexible payment plans to make education affordable. You can pay in installments throughout your program duration. Contact our finance office for details.'
    },
    {
      category: 'Fees & Payment',
      question: 'Are there scholarships available?',
      answer: 'We offer merit-based scholarships and need-based financial aid. Scholarships are awarded based on academic performance, community involvement, and financial need.'
    },
    {
      category: 'Technical',
      question: 'What technology do I need for online classes?',
      answer: 'You need a computer or tablet with internet access, webcam, and microphone. We provide access to necessary software and learning management systems.'
    },
    {
      category: 'Technical',
      question: 'How do I access my student portal?',
      answer: 'After enrollment, you\'ll receive login credentials via email. The student portal allows you to view schedules, grades, make payments, and access course materials.'
    },
    {
      category: 'Technical',
      question: 'What if I have technical difficulties?',
      answer: 'Our IT support team is available Monday-Friday 8AM-5PM. You can contact them via email at tech@list.edu.lr or call our main number for assistance.'
    }
  ];

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Find answers to common questions about LIST programs, admissions, and services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeCategory === category.name
                      ? 'bg-blue-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full mr-3">
                      {faq.category}
                    </span>
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transform transition-transform ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-500 text-lg mb-4">No questions found matching your search.</div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('All');
                }}
                className="text-blue-700 font-semibold hover:text-blue-800"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our admissions team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="tel:+231123456789"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;