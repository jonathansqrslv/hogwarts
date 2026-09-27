// Arquivo que liga o servidor. É daqui que o programa começa.
import 'reflect-metadata';
import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Todas as rotas começam com /api/v1.
  // Exemplo: /api/v1/health
  app.setGlobalPrefix('api/v1');

  // Abre na porta 3000. Para testar: http://localhost:3000/api/v1/health
  await app.listen(3000);
}

bootstrap();
