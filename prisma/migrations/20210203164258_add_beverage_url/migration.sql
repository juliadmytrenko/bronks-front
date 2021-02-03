/*
  Warnings:

  - Added the required column `img` to the `Beverage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Beverage" ADD COLUMN     "img" TEXT NOT NULL;
