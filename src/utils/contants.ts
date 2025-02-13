import { z } from "zod";

const envSchema = z.object({ BASE_PORT: z.string().min(4).nonempty() });

const { success, error, data } = envSchema.safeParse(process.env);

if (!success) {
  console.error("❌ Error al cargar las variables de entorno, favor verificar el archivo .env ", error.format());
  process.exit(1);
}

export const { BASE_PORT: app_port } = data;
