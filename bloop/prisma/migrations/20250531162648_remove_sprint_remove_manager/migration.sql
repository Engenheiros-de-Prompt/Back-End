/*
  Warnings:

  - You are about to drop the `Manager` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sprint` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Manager` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Manager" DROP CONSTRAINT "Manager_userId_fkey";

-- DropForeignKey
ALTER TABLE "Sprint" DROP CONSTRAINT "Sprint_teamId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "Manager" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "Manager";

-- DropTable
DROP TABLE "Sprint";
