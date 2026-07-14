import cors from '@fastify/cors';
import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';

export default fp(async function (fastify: FastifyInstance) {
  fastify.register(cors, {
    origin: [
      'http://localhost:4200', // frontend (web)
      'http://localhost:4300', // frontend (web) [preview]
      'http://localhost:4201', // landing
      'http://localhost:4301', // landing [preview]
      'capacitor://localhost', // Capacitor (Android/iOS)
      'http://localhost', // Pour le dev Capacitor
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });
});
