// Parte do app que cuida dos bruxos.
// O controller atende o pedido. O service busca no banco.
import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { WizardController } from './wizard.controller';
import { WizardService } from './wizard.service';

@Module({
  imports: [PrismaModule],
  controllers: [WizardController],
  providers: [WizardService],
})
export class WizardModule {}
