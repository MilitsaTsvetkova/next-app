/*
  Warnings:

  - You are about to drop the column `refresh_token_expires_in` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Account` ADD COLUMN `refresh_token_expires_in` INTEGER NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `refresh_token_expires_in`;
