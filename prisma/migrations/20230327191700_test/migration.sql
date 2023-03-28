/*
  Warnings:

  - You are about to drop the `expense` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `expense`;

-- CreateTable
CREATE TABLE `test` (
    `itemId` INTEGER NOT NULL AUTO_INCREMENT,
    `country` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`itemId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
