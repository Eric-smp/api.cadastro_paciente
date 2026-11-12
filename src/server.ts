// src/server.ts

import { buildApp } from "./app";

const app = buildApp();

async function start() {
  try {
    await app.listen({
      port: 3333,
      host: "127.0.0.1",
    });

    console.log("Server running on port 3333");
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}

start();
