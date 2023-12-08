import { Prisma } from '@prisma/client';

export class SmallDog implements Prisma.SmallDogCreateInput {
  name: string;
}
