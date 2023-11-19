import { Prisma } from '@prisma/client';

export class Products implements Prisma.ProductsCreateInput {
  name: string;
  price: number;
  size: string;
  img: string;
  color: string;
  product: string;
}
