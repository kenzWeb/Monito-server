-- CreateTable
CREATE TABLE "Dog" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "img" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "vaccinated" BOOLEAN NOT NULL,
    "dewormed" BOOLEAN NOT NULL,
    "SKU" BOOLEAN NOT NULL,
    "cert" BOOLEAN NOT NULL,
    "microchip" BOOLEAN NOT NULL,

    CONSTRAINT "Dog_pkey" PRIMARY KEY ("id")
);
