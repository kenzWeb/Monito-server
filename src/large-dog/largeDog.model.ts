import { Prisma } from '@prisma/client';

export class LargeDog implements Prisma.LargeDogCreateInput {
  name: string;
}
