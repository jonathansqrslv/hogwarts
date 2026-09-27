/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `House` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "House_nome_key" ON "House"("nome");
