/*
  Warnings:

  - The migration will change the primary key for the `Beer` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `product_id` on the `Beer` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Beer" DROP CONSTRAINT "Beer_product_id_fkey";

-- AlterTable
ALTER TABLE "Beer" DROP CONSTRAINT "Beer_pkey",
DROP COLUMN "product_id",
ADD COLUMN     "product_slug" TEXT NOT NULL DEFAULT E'lol',
ADD PRIMARY KEY ("product_slug");

-- AddForeignKey
ALTER TABLE "Beer" ADD FOREIGN KEY ("product_slug") REFERENCES "Product"("slug") ON DELETE CASCADE ON UPDATE CASCADE;
