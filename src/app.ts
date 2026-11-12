// src/app.ts

import Fastify from "fastify";

import { patientRoutes } from "./infrastructure/http/routes/patientRoutes";

export function buildApp() {
  const app = Fastify({
    logger: true,
  });

  app.register(patientRoutes);

  return app;
}
