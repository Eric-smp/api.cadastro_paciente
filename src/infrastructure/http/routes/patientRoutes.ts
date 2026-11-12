import type { FastifyInstance } from "fastify";

import { CreatePatientController } from "../controllers/CreatePatientController";

import { createPatientUseCase } from "../../config/container";

export async function patientRoutes(app: FastifyInstance) {
  const controller = new CreatePatientController(createPatientUseCase);

  app.post("/patients", (request, reply) => {
    return controller.handle(request, reply);
  });
}
