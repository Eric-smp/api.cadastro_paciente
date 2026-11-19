import type { User } from "../../../domain/user/User";

export interface PatientRepository<T> {
  findByEmail(email: T, cpf: T): Promise<User | null>;

  save(patient: User): Promise<void>;
}
