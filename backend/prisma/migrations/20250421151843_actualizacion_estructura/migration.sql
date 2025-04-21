/*
  Warnings:

  - You are about to drop the column `fulname` on the `user` table. All the data in the column will be lost.
  - Added the required column `fullname` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `fulname`,
    ADD COLUMN `fullname` VARCHAR(32) NOT NULL;
