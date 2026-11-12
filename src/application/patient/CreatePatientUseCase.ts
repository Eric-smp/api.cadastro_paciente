import { randomUUIDv7 } from "bun";
import type { PatientRepository } from "./ports/PatientRepository";
import { User } from "../../domain/user/User";
import { UserRole } from "../../domain/user/UserRole";

interface CreatePatientInput {
  name: string;
  email: string;
}

export class CreatePatientUseCase {
  constructor(private readonly patientRepository: PatientRepository) {}
  async execute(input: CreatePatientInput): Promise<User> {
    const existingPatient = await this.patientRepository.findByEmail(
      input.email,
    );
    if (existingPatient) {
      throw new Error("Patient alredy exists");
    }
    const patient = new User(
      randomUUIDv7(),
      input.name,
      input.email,
      UserRole.PATIENT,
    );
    await this.patientRepository.save(patient);
    return patient;
  }
}
