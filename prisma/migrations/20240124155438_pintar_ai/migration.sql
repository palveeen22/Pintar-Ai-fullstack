/*
  Warnings:

  - You are about to drop the column `portofolio_id` on the `Jurnal` table. All the data in the column will be lost.
  - You are about to drop the column `portofolio` on the `Researcher` table. All the data in the column will be lost.
  - You are about to drop the `Chat_Room` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[title]` on the table `Jurnal` will be added. If there are existing duplicate values, this will fail.
  - Made the column `isPremium` on table `Researcher` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Chat_Room" DROP CONSTRAINT "Chat_Room_investorId_fkey";

-- DropForeignKey
ALTER TABLE "Chat_Room" DROP CONSTRAINT "Chat_Room_researcherId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_investorId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_researcherId_fkey";

-- AlterTable
ALTER TABLE "Jurnal" DROP COLUMN "portofolio_id";

-- AlterTable
ALTER TABLE "Researcher" DROP COLUMN "portofolio",
ALTER COLUMN "isPremium" SET NOT NULL;

-- DropTable
DROP TABLE "Chat_Room";

-- DropTable
DROP TABLE "Comment";

-- CreateIndex
CREATE UNIQUE INDEX "Jurnal_title_key" ON "Jurnal"("title");
