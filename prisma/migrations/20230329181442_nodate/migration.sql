/*
  Warnings:

  - You are about to drop the column `date` on the `expense` table. All the data in the column will be lost.
  - Added the required column `category` to the `expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cost` to the `expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paidOption` to the `expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subcategory` to the `expense` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `expense` DROP COLUMN `date`,
    ADD COLUMN `category` VARCHAR(191) NOT NULL,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `cost` INTEGER NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `note` VARCHAR(191) NULL,
    ADD COLUMN `paidOption` VARCHAR(191) NOT NULL,
    ADD COLUMN `subcategory` VARCHAR(191) NOT NULL;
