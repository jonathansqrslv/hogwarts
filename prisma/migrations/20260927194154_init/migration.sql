-- CreateTable
CREATE TABLE "House" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "House_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wizard" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "dataNascimento" DATE NOT NULL,
    "houseId" INTEGER NOT NULL,

    CONSTRAINT "Wizard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Wizard" ADD CONSTRAINT "Wizard_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
