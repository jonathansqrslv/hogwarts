// Configuração do Prisma (a ferramenta que fala com o banco).
// schema = onde ficam as tabelas. seed = o arquivo que enche o banco de exemplo.
import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    seed: 'tsx prisma/seed.ts',
  },
  datasource: {
    url: env('DATABASE_URL'),
  },
});
