import type { FastifyRequest, FastifyReply } from "fastify";
import type { CreatePatientUseCase } from "../../../application/patient/CreatePatientUseCase";
import { createPatientSchema } from "../schema/createPatientSchema";
import { email } from "zod";

export class CreatePatientController {
  constructor(private readonly createPatientUseCase: CreatePatientUseCase) {}
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const result = createPatientSchema.safeParse(request.body);
    if (!result.success) {
      return reply.status(400).send({
        message: "Invalid patient data",
        errors: result.error.flatten(),
      });
    }

    const patient = await this.createPatientUseCase.execute(result.data);

    return reply.status(200).send({
      id: patient.id,
      name: patient.name,
      email: patient.email,
      role: patient.role,
    });
  }
}
