import { Prisma } from '@prisma/client';

export class PopularDog implements Prisma.PopularDogCreateInput {
  name: string;
}