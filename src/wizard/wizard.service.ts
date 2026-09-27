// Busca os bruxos no banco.
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WizardService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const wizards = await this.prisma.wizard.findMany({
      orderBy: { id: 'asc' },
      include: { house: true },
    });

    return wizards.map((wizard) => ({
      nome: wizard.nome,
      sobrenome: wizard.sobrenome,
      dataNascimento: wizard.dataNascimento.toISOString().slice(0, 10),
      casa: wizard.house.nome,
    }));
  }
}
