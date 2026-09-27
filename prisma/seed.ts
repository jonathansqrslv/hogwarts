// Coloca dados de exemplo no banco: as 4 casas e alguns bruxos.
// Para rodar: npx prisma db seed
// Se a casa ou o bruxo já existir, pula. Assim não duplica.
import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL is not set');
}

const prisma = new PrismaClient({ adapter: new PrismaPg(connectionString) });

const houses = ['Grifinória', 'Sonserina', 'Corvinal', 'Lufa-Lufa'];

// Bruxos de exemplo. house precisa ser o nome de uma casa da lista acima.
const wizards = [
  {
    nome: 'Harry',
    sobrenome: 'Potter',
    dataNascimento: new Date('1980-07-31'),
    house: 'Grifinória',
  },
  {
    nome: 'Hermione',
    sobrenome: 'Granger',
    dataNascimento: new Date('1979-09-19'),
    house: 'Grifinória',
  },
  {
    nome: 'Draco',
    sobrenome: 'Malfoy',
    dataNascimento: new Date('1980-06-05'),
    house: 'Sonserina',
  },
  {
    nome: 'Luna',
    sobrenome: 'Lovegood',
    dataNascimento: new Date('1981-02-13'),
    house: 'Corvinal',
  },
];

async function main() {
  // Cria cada casa, se ainda não existir.
  for (const nome of houses) {
    const existing = await prisma.house.findFirst({ where: { nome } });
    if (!existing) {
      await prisma.house.create({ data: { nome } });
    }
  }

  // Cria cada bruxo e liga ele na casa pelo nome.
  for (const wizard of wizards) {
    const existing = await prisma.wizard.findFirst({
      where: { nome: wizard.nome, sobrenome: wizard.sobrenome },
    });
    if (!existing) {
      await prisma.wizard.create({
        data: {
          nome: wizard.nome,
          sobrenome: wizard.sobrenome,
          dataNascimento: wizard.dataNascimento,
          house: { connect: { nome: wizard.house } },
        },
      });
    }
  }

  // Mostra no terminal o que ficou gravado.
  console.log(
    await prisma.wizard.findMany({
      orderBy: { id: 'asc' },
      include: { house: { select: { nome: true } } },
    }),
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
