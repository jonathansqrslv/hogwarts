// Fala com o banco de dados (Postgres).
// A senha e o endereço ficam no arquivo .env, na variável DATABASE_URL.
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error('DATABASE_URL is not set');
    }
    super({ adapter: new PrismaPg(connectionString) });
  }

  // Quando o app abre, conecta no banco.
  async onModuleInit() {
    await this.$connect();
  }

  // Quando o app fecha, desconecta.
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
