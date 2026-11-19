import { prisma } from "./prisma/client";
import { User } from "../../domain/user/User";

import type { PatientRepository } from "../../application/patient/ports/PatientRepository";

export class PrismaPatientRepository implements PatientRepository {
  async findByEmail(email: string, cpf: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email, cpf },
    });

    if (!user || user.role !== "PATIENT") {
      return null;
    }

    return new User(user.id, user.name, user.email, user.cpf, "PATIENT");
  }
  async save(patient: User): Promise<void> {
    await prisma.user.create({
      data: {
        id: patient.id,
        name: patient.name,
        email: patient.email,
        cpf: patient.cpf,
        role: patient.role,
      },
    });
  }
}
