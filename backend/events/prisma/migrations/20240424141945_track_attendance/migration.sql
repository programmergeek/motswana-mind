/*
  Warnings:

  - Added the required column `attended` to the `EventAttendee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EventAttendee" ADD COLUMN     "attended" BOOLEAN NOT NULL;
