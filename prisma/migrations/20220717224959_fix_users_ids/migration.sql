/*
  Warnings:

  - Made the column `userId` on table `cards` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `credentials` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `notes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `sessions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `wifi` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "cards" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "credentials" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "notes" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "sessions" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "wifi" ALTER COLUMN "userId" SET NOT NULL;
