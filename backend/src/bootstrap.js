'use strict';

module.exports = async ({ strapi }) => {
  // Create default admin user if it doesn't exist
  const adminUser = await strapi.query('admin::user').findOne({
    where: { email: 'admin@liit.edu.lr' }
  });

  if (!adminUser) {
    const adminRole = await strapi.query('admin::role').findOne({
      where: { code: 'strapi-super-admin' }
    });

    if (adminRole) {
      await strapi.query('admin::user').create({
        data: {
          firstname: 'LIIT',
          lastname: 'Admin',
          email: 'admin@liit.edu.lr',
          password: 'Admin123!',
          isActive: true,
          roles: [adminRole.id]
        }
      });
      console.log('Default admin user created: admin@liit.edu.lr / Admin123!');
    }
  }

  // Seed some initial data
  await seedInitialData(strapi);
};

async function seedInitialData(strapi) {
  // Check if programs already exist
  const existingPrograms = await strapi.entityService.findMany('api::program.program');
  
  if (existingPrograms.length === 0) {
    // Seed programs
    const programs = [
      {
        title: 'Computer Science Diploma',
        description: 'Comprehensive program covering programming, software development, database management, and system analysis.',
        category: 'Computer Science',
        duration: '2 Years',
        fees: '$2,500',
        level: 'Diploma',
        features: ['Programming Languages', 'Web Development', 'Database Design', 'Software Engineering'],
        students: '120+',
        prerequisites: 'High School Diploma or equivalent',
        career_outcomes: 'Software Developer, Web Developer, Database Administrator, System Analyst',
        publishedAt: new Date()
      },
      {
        title: 'Information Technology Certificate',
        description: 'Focused program on IT fundamentals, network management, and technical support.',
        category: 'Computer Science',
        duration: '1 Year',
        fees: '$1,200',
        level: 'Certificate',
        features: ['Network Administration', 'Hardware Support', 'System Maintenance', 'Cybersecurity Basics'],
        students: '95+',
        prerequisites: 'Basic computer literacy',
        career_outcomes: 'IT Support Specialist, Network Technician, Help Desk Analyst',
        publishedAt: new Date()
      },
      {
        title: 'Engineering Technology Diploma',
        description: 'Practical engineering program covering mechanical, electrical, and civil engineering principles.',
        category: 'Engineering',
        duration: '2.5 Years',
        fees: '$3,000',
        level: 'Diploma',
        features: ['Engineering Drawing', 'Project Management', 'Quality Control', 'Safety Protocols'],
        students: '85+',
        prerequisites: 'High School Diploma with Mathematics and Science',
        career_outcomes: 'Engineering Technician, Project Coordinator, Quality Control Inspector',
        publishedAt: new Date()
      },
      {
        title: 'Business Administration Diploma',
        description: 'Complete business management program covering finance, marketing, and organizational leadership.',
        category: 'Business',
        duration: '2 Years',
        fees: '$2,200',
        level: 'Diploma',
        features: ['Financial Management', 'Marketing Strategy', 'Human Resources', 'Business Law'],
        students: '150+',
        prerequisites: 'High School Diploma',
        career_outcomes: 'Business Manager, Marketing Coordinator, HR Assistant, Administrative Officer',
        publishedAt: new Date()
      },
      {
        title: 'Digital Marketing Certificate',
        description: 'Modern marketing program focusing on digital platforms, social media, and online advertising.',
        category: 'Digital Media',
        duration: '1 Year',
        fees: '$1,500',
        level: 'Certificate',
        features: ['Social Media Marketing', 'SEO/SEM', 'Content Creation', 'Analytics'],
        students: '110+',
        prerequisites: 'Basic computer skills',
        career_outcomes: 'Digital Marketing Specialist, Social Media Manager, Content Creator',
        publishedAt: new Date()
      }
    ];

    for (const program of programs) {
      await strapi.entityService.create('api::program.program', { data: program });
    }
    console.log('Initial programs seeded');
  }

  // Seed FAQs
  const existingFAQs = await strapi.entityService.findMany('api::faq.faq');
  
  if (existingFAQs.length === 0) {
    const faqs = [
      {
        question: 'What are the admission requirements?',
        answer: 'To apply for our programs, you need a high school diploma or equivalent. Some programs may have specific prerequisites. You can apply online through our enrollment page or visit our campus for assistance.',
        category: 'Admissions',
        order: 1,
        publishedAt: new Date()
      },
      {
        question: 'When do applications open?',
        answer: 'We accept applications year-round with multiple intake periods: January, April, July, and October. We recommend applying at least 4 weeks before your preferred start date.',
        category: 'Admissions',
        order: 2,
        publishedAt: new Date()
      },
      {
        question: 'How much do programs cost?',
        answer: 'Program fees vary by course length and type. Certificate programs range from $1,200-$1,500, while diploma programs range from $2,200-$3,000. Payment plans are available.',
        category: 'Fees & Payment',
        order: 3,
        publishedAt: new Date()
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes, we offer flexible payment plans to make education affordable. You can pay in installments throughout your program duration. Contact our finance office for details.',
        category: 'Fees & Payment',
        order: 4,
        publishedAt: new Date()
      }
    ];

    for (const faq of faqs) {
      await strapi.entityService.create('api::faq.faq', { data: faq });
    }
    console.log('Initial FAQs seeded');
  }

  // Seed testimonials
  const existingTestimonials = await strapi.entityService.findMany('api::testimonial.testimonial');
  
  if (existingTestimonials.length === 0) {
    const testimonials = [
      {
        name: 'Sarah Johnson',
        program: 'Computer Science Diploma',
        text: 'LIIT provided me with the technical skills and confidence I needed to land my dream job as a software developer. The practical approach to learning made all the difference.',
        rating: 5,
        featured: true,
        publishedAt: new Date()
      },
      {
        name: 'Michael Davies',
        program: 'Business Administration',
        text: 'The business program at LIIT opened doors I never thought possible. The faculty\'s industry experience and mentorship were invaluable to my career growth.',
        rating: 5,
        featured: false,
        publishedAt: new Date()
      },
      {
        name: 'Grace Kannah',
        program: 'Digital Marketing Certificate',
        text: 'In just one year, I transformed my marketing skills completely. The hands-on projects and real-world applications helped me start my own successful agency.',
        rating: 5,
        featured: false,
        publishedAt: new Date()
      }
    ];

    for (const testimonial of testimonials) {
      await strapi.entityService.create('api::testimonial.testimonial', { data: testimonial });
    }
    console.log('Initial testimonials seeded');
  }

  // Seed demo student
  const existingStudents = await strapi.entityService.findMany('api::student.student');
  
  if (existingStudents.length === 0) {
    const demoStudent = {
      studentId: 'LIST2024001',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@student.liit.edu.lr',
      program: 'Computer Science Diploma',
      year: '2nd Year',
      gpa: 3.75,
      enrollmentDate: '2023-01-15',
      status: 'active',
      password: 'demo123'
    };

    await strapi.entityService.create('api::student.student', { data: demoStudent });
    console.log('Demo student created: LIST2024001 / demo123');
  }
}