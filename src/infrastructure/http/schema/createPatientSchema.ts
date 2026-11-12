import z from "zod";

export const createPatientSchema = z.object({
  name: z.string().trim().min(3),
  email: z.email(),
});

export type CreatePatientBody = z.infer<typeof createPatientSchema>;
