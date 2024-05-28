/*
  Warnings:

  - You are about to alter the column `description` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(5000)`.

*/
-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "description" SET DATA TYPE VARCHAR(5000);
