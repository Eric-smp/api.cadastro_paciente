import { prisma } from "./prisma/client";
import { User } from "../../domain/user/User";
import { UserRole } from "../../domain/user/UserRole";

import type { PatientRepository } from "../../application/patient/ports/PatientRepository";

export class PrismaPatientRepository implements PatientRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.role !== UserRole.PATIENT) {
      return null;
    }

    return new User(user.id, user.name, user.email, UserRole.PATIENT);
  }
  async save(patient: User): Promise<void> {
    await prisma.user.create({
      data: {
        id: patient.id,
        name: patient.name,
        email: patient.email,
        role: patient.role,
      },
    });
  }
}
