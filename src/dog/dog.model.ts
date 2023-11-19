import { Prisma } from '@prisma/client';

export class Dog implements Prisma.DogCreateInput {
  name: string;
  price: number;
  img: string;
  color: string;
  size: string;
  gender: string;
}
