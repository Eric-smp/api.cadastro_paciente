// infrastructure/config/container.ts

import { CreatePatientUseCase } from "../../application/patient/CreatePatientUseCase";
import { PrismaPatientRepository } from "../persistence/PrismaPatientRepository";

const patientRepository = new PrismaPatientRepository();

export const createPatientUseCase = new CreatePatientUseCase(patientRepository);
