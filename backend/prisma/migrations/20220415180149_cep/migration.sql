-- CreateTable
CREATE TABLE `Cep` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cep` VARCHAR(191) NOT NULL,
    `logradouro` VARCHAR(191) NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `municipio` VARCHAR(191) NOT NULL,
    `uf` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
