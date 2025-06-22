'use strict';

module.exports = {
  routes: [
    // Default routes
    {
      method: 'GET',
      path: '/students',
      handler: 'student.find',
    },
    {
      method: 'GET',
      path: '/students/:id',
      handler: 'student.findOne',
    },
    {
      method: 'POST',
      path: '/students',
      handler: 'student.create',
    },
    {
      method: 'PUT',
      path: '/students/:id',
      handler: 'student.update',
    },
    {
      method: 'DELETE',
      path: '/students/:id',
      handler: 'student.delete',
    },

    // Your custom login route
    {
      method: 'POST',
      path: '/students/login',
      handler: 'student.login',
      config: {
        auth: false,
      },
    },
  ],
};
