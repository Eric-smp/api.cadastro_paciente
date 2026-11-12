import type { User } from "../../../domain/user/User";

export interface PatientRepository {
  findByEmail(email: string): Promise<User | null>;
  save(patient: User): Promise<void>;
}
