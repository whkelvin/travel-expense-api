/*
  Warnings:

  - You are about to drop the `test` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `test`;

-- CreateTable
CREATE TABLE `expense` (
    `itemId` INTEGER NOT NULL AUTO_INCREMENT,
    `country` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`itemId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
