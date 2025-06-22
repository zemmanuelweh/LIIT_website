module.exports = ({ env }) => ({
  // Email plugin configuration
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.gmail.com'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: env('SMTP_DEFAULT_FROM', 'noreply@liit.edu.lr'),
        defaultReplyTo: env('SMTP_DEFAULT_REPLY_TO', 'info@liit.edu.lr'),
      },
    },
  },

  // Upload plugin for file handling
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 10000000, // 10MB
      },
    },
  },

  // Documentation plugin
  documentation: {
    enabled: true,
    config: {
      openapi: '3.0.0',
      info: {
        version: '1.0.0',
        title: 'LIIT API Documentation',
        description: 'API documentation for Liberia Institute of Innovation & Technology',
        contact: {
          name: 'LIIT Development Team',
          email: 'dev@liit.edu.lr',
        },
      },
      servers: [
        {
          url: 'http://localhost:1337/api',
          description: 'Development server',
        },
      ],
    },
  },
});