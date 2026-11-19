import { prisma } from "./prisma/client";
import { User } from "../../domain/user/User";

import type { PatientRepository } from "../../application/patient/ports/PatientRepository";
import type { EmployeeRepository } from "../../application/employee/ports/EmployeeRepository";

export class PrimaEmployeeRepository implements EmployeeRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.role !== "EMPLOYEE") {
      return null;
    }

    return new User(user.id, user.name, user.email, user.cpf, "EMPLOYEE");
  }
  async saveEmployee(patient: User): Promise<void> {
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
