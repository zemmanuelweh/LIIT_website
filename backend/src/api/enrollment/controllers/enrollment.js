'use strict';

/**
 * enrollment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::enrollment.enrollment', ({ strapi }) => ({
  async create(ctx) {
    try {
      // Set the application date to current time
      ctx.request.body.data.applicationDate = new Date();
      
      // Create the enrollment record
      const response = await super.create(ctx);
      
      // Send notification email (you can implement this with a service)
      // await strapi.service('api::enrollment.enrollment').sendNotificationEmail(response.data);
      
      return response;
    } catch (error) {
      ctx.throw(500, error);
    }
  }
}));