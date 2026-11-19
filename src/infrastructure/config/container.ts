// infrastructure/config/container.ts

import { CreateEmployeeUseCase } from "../../application/employee/CreateEmployeeUseCase";
import { CreatePatientUseCase } from "../../application/patient/CreatePatientUseCase";
import { PrimaEmployeeRepository } from "../persistence/PrismaEmployeeRepository";
import { PrismaPatientRepository } from "../persistence/PrismaPatientRepository";

const patientRepository = new PrismaPatientRepository();

export const createPatientUseCase = new CreatePatientUseCase(patientRepository);

const employeeRepository = new PrimaEmployeeRepository();
export const createEmployeUseCase = new CreateEmployeeUseCase(
  employeeRepository,
);
