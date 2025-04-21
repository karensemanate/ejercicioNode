/*
  Warnings:

  - Added the required column `user_Id` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pet` ADD COLUMN `user_Id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fulname` VARCHAR(32) NOT NULL,
    `email` VARCHAR(32) NOT NULL,
    `password` VARCHAR(64) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pet` ADD CONSTRAINT `Pet_user_Id_fkey` FOREIGN KEY (`user_Id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
