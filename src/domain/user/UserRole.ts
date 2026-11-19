const Roles = {
  EMPLOYEE: "EMPLOYEE",
  PATIENT: "PATIENT",
} as const;

export type UserRole = (typeof Roles)[keyof typeof Roles];
