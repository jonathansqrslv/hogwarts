// Lista as partes do app.
// Criou uma parte nova (um módulo)? Coloque o nome dela em imports.
import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { PrismaModule } from './prisma/prisma.module';
import { WizardModule } from './wizard/wizard.module';

@Module({ imports: [HealthModule, PrismaModule, WizardModule] })
export class AppModule {}
