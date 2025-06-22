'use strict';

/**
 * student router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

const defaultRouter = createCoreRouter('api::student.student');

const customRoutes = {
  routes: [
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

// Merge custom routes with default routes
defaultRouter.routes.push(...customRoutes.routes);

module.exports = defaultRouter;