// src/main.ts

import { createPatientUseCase } from "./infrastructure/config/container";

async function main() {
  const patient = await createPatientUseCase.execute({
    name: "Carlos Silva",
    email: "carlos@example.com",
  });

  console.log("Paciente criado:", patient);
}

main().catch(console.error);
