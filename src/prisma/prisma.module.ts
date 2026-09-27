// Deixa o banco disponível para o resto do app.
// providers = "eu crio isso". exports = "os outros podem usar".
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
