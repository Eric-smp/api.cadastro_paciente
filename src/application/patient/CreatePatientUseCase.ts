import { randomUUIDv7 } from "bun";
import type { PatientRepository } from "./ports/PatientRepository";
import { User } from "../../domain/user/User";

interface CreatePatientInput {
  name: string;
  email: string;
  cpf: string;
}

export class CreatePatientUseCase {
  constructor(private readonly patientRepository: PatientRepository<string>) {}
  async execute(input: CreatePatientInput): Promise<User> {
    const existingPatient = await this.patientRepository.findByEmail(
      input.email,
      input.cpf,
    );

    if (existingPatient) {
      throw new Error("Patient alredy exists");
    }
    const patient = new User(
      randomUUIDv7(),
      input.name,
      input.email,
      input.cpf,
      "PATIENT",
    );
    await this.patientRepository.save(patient);
    return patient;
  }
}
