/*
  Warnings:

  - You are about to drop the column `Score` on the `Feedback` table. All the data in the column will be lost.
  - Added the required column `comment` to the `Feedback` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `Hard` on the `Feedback` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `Soft` on the `Feedback` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "Score",
ADD COLUMN     "comment" TEXT NOT NULL,
DROP COLUMN "Hard",
ADD COLUMN     "Hard" INTEGER NOT NULL,
DROP COLUMN "Soft",
ADD COLUMN     "Soft" INTEGER NOT NULL;
