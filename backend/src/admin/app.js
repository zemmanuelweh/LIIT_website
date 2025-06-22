const config = {
  locales: ['en'],
  translations: {
    en: {
      'app.components.LeftMenu.navbrand.title': 'LIIT Admin',
      'app.components.LeftMenu.navbrand.workplace': 'Administration Panel',
      'Auth.form.welcome.title': 'Welcome to LIIT!',
      'Auth.form.welcome.subtitle': 'Log in to your account',
      'HomePage.welcome': 'Welcome to LIIT Administration',
      'HomePage.welcome.again': 'Welcome back!',
      'global.content-manager': 'Content Manager',
    },
  },
  theme: {
    light: {
      colors: {
        primary100: '#f0f9ff',
        primary200: '#e0f2fe',
        primary500: '#1d4ed8',
        primary600: '#1e40af',
        primary700: '#1e3a8a',
        danger700: '#dc2626',
      },
    },
  },
  head: {
    favicon: '/favicon.ico',
  },
  auth: {
    logo: '/logo.png',
  },
  menu: {
    logo: '/logo.png',
  },
  tutorials: false,
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log('LIIT Admin Panel initialized');
};

export default {
  config,
  bootstrap,
};