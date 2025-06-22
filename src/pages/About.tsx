import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const leadership = [
    {
      name: 'Mr. Amoss Bardyl',
      position: 'President & Lead founder',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Mr Bardyl brings over 5 years of experience in higher education and technology leadership.'
    },
    {
      name: 'Dr Standley ',
      position: 'Director of Programs',
      image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Mr Weh oversees all academic programs and curriculum development at LIIT.'
    },
    {
      name: 'Emmanuel Weh',
      position: 'Co-founder & Director of Student Affairs',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Mr Weh ensures student success through comprehensive support services and programs.'
    }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in education and service delivery'
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description: 'We welcome students from all backgrounds and provide equal opportunities'
    },
    {
      icon: BookOpen,
      title: 'Innovation',
      description: 'We embrace new technologies and modern teaching methodologies'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We conduct ourselves with honesty, transparency, and ethical standards'
    }
  ];

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About LIST</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Empowering Liberia through quality education in science, technology, and innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Target className="h-8 w-8 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To provide accessible, quality technical and vocational education that equips 
                    students with practical skills, knowledge, and values necessary for personal 
                    development, career advancement, and contribution to Liberia's socio-economic growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-lg flex-shrink-0">
                  <Eye className="h-8 w-8 text-yellow-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To be the leading institution for innovation and technology education in Liberia, 
                    recognized for excellence in teaching, innovation, and producing graduates who 
                    drive technological advancement and economic development.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students collaborating"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/20 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at LIIT
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our History</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg mx-auto text-gray-600"
            >
              <p className="text-xl leading-relaxed mb-6">
                Founded in 2024, the Liberia Institute of Innovation and Technology (LIIT) emerged from 
                a vision to bridge the skills gap in Liberia's growing technology sector. Recognizing 
                the need for practical, industry-relevant education, our founders established LIIT as 
                a premier institution for technical and vocational training.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Since our inception, we have grown from a small technical training center to a 
                comprehensive educational institution offering diploma and certificate programs 
                across multiple disciplines. Our commitment to excellence and innovation has made 
                us a trusted partner for students, employers, and the broader community.
              </p>

              <p className="text-lg leading-relaxed">
                Today, LIIT continues to evolve, embracing new technologies and teaching methodologies 
                while maintaining our core commitment to providing accessible, quality education that 
                transforms lives and contributes to Liberia's development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals leading LIIT toward excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-700 font-medium mb-3">{leader.position}</p>
                  <p className="text-gray-600">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;