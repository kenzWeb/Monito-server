-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "img" TEXT,
    "color" TEXT,
    "size" TEXT,
    "product" TEXT,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
