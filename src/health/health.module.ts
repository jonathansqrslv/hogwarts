// Parte do app que só responde "estou no ar?".
// O controller abaixo é quem atende o pedido.
import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';

@Module({ controllers: [HealthController] })
export class HealthModule {}
