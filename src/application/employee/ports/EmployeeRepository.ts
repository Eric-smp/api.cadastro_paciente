import type { User } from "../../../domain/user/User";

export interface EmployeeRepository {
  findByEmail(email: string): Promise<User | null>;
  saveEmployee(employee: User): Promise<void>;
}
