import { UserRole } from "./UserRole";

export class User {
  constructor(
    public readonly id: string,
    public name: string,
    public readonly email: string,
    public readonly role: UserRole,
  ) {
    if (!name.trim()) {
      throw new Error("User name is required");
    }
    if (!email.includes("@")) {
      throw new Error("The email neddeds be valid!");
    }
  }
  isEmployee(): boolean {
    return this.role === UserRole.EMPLOYEE;
  }
  isPatient(): boolean {
    return this.role === UserRole.PATIENT;
  }

  updateName(name: string): void {
    if (!name.trim()) {
      throw new Error("User name is required");
    }
    this.name = name;
  }
}
