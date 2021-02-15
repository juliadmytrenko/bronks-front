-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "isNew" SET DEFAULT true,
ALTER COLUMN "isVerified" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Store" ALTER COLUMN "isVerified" SET DEFAULT false;
