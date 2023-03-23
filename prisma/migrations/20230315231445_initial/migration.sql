-- CreateTable
CREATE TABLE `expense` (
    `itemId` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `subcategory` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `cost` INTEGER NOT NULL,
    `paidOption` VARCHAR(191) NOT NULL,
    `note` VARCHAR(191) NULL,

    PRIMARY KEY (`itemId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
