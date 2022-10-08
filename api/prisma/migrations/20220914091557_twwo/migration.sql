/*
  Warnings:

  - You are about to drop the column `locaton` on the `artist` table. All the data in the column will be lost.
  - Added the required column `location` to the `Artist` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `artist` DROP COLUMN `locaton`,
    ADD COLUMN `location` VARCHAR(191) NOT NULL;
