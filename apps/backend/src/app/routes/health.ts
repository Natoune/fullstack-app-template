import { FastifyInstance } from 'fastify';
import type { HealthCheckResponse } from '@fullstack-app-template/shared';

export default async function (fastify: FastifyInstance) {
  fastify.get('/health', async function () {
    const response: HealthCheckResponse = {
      status: 'healthy',
      version: '1.0.0',
      timestamp: Date.now(),
    };
    return response;
  });

  fastify.get('/greet', async function (request) {
    const name = (request.query as { name?: string }).name || 'World';
    return {
      message: `Hello, ${name}!`,
      from: 'backend',
    };
  });
}
