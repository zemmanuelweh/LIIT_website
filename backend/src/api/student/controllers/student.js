'use strict';

/**
 * student controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::student.student', ({ strapi }) => ({
  async login(ctx) {
    try {
      const { studentId, password } = ctx.request.body;
      
      if (!studentId || !password) {
        return ctx.badRequest('Student ID and password are required');
      }
      
      // Find student by studentId
      const student = await strapi.entityService.findMany('api::student.student', {
        filters: { studentId: studentId },
        limit: 1
      });
      
      if (!student || student.length === 0) {
        return ctx.unauthorized('Invalid credentials');
      }
      
      // In a real application, you would hash and compare passwords
      // For demo purposes, we'll do a simple comparison
      if (student[0].password !== password) {
        return ctx.unauthorized('Invalid credentials');
      }
      
      // Remove password from response
      const { password: _, ...studentData } = student[0];
      
      return {
        success: true,
        student: studentData
      };
    } catch (error) {
      ctx.throw(500, error);
    }
  }
}));