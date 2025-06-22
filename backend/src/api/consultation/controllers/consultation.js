'use strict';

/**
 * consultation controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::consultation.consultation', ({ strapi }) => ({
  async create(ctx) {
    try {
      // Set the request date to current time
      ctx.request.body.data.requestDate = new Date();
      
      // Create the consultation record
      const response = await super.create(ctx);
      
      // Send notification email (you can implement this with a service)
      // await strapi.service('api::consultation.consultation').sendNotificationEmail(response.data);
      
      return response;
    } catch (error) {
      ctx.throw(500, error);
    }
  }
}));