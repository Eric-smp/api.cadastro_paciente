import { randomUUIDv7 } from "bun";
import { User } from "../../domain/user/User";
import type { EmployeeRepository } from "./ports/EmployeeRepository";

interface CreateEmployeeInpute {
  name: string;
  email: string;
  cpf: string;
}

export class CreateEmployeeUseCase {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async execut(input: CreateEmployeeInpute) {
    const existingEmployee = await this.employeeRepository.findByEmail(
      input.email,
    );

    if (!existingEmployee) {
      throw new Error("Funcionário já existente");
    }

    const employee = new User(
      randomUUIDv7(),
      input.name,
      input.email,
      input.cpf,
      "EMPLOYEE",
    );

    await this.employeeRepository.saveEmployee(employee);
    return employee;
  }
}
