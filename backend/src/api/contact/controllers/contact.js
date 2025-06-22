'use strict';

/**
 * contact controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact.contact', ({ strapi }) => ({
  async create(ctx) {
    try {
      // Set the submission date to current time
      ctx.request.body.data.submissionDate = new Date();
      
      // Create the contact record
      const response = await super.create(ctx);
      
      // Send notification email (you can implement this with a service)
      // await strapi.service('api::contact.contact').sendNotificationEmail(response.data);
      
      return response;
    } catch (error) {
      ctx.throw(500, error);
    }
  }
}));