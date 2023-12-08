import { Injectable } from '@nestjs/common';
import { SmallDog } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SmallDogService {
  constructor(private prisma: PrismaService) {}

  async getAllSmallDog(): Promise<SmallDog[]> {
    return this.prisma.smallDog.findMany();
  }

  async getSmallDog(id: number): Promise<SmallDog | null> {
    return this.prisma.smallDog.findUnique({ where: { id: Number(id) } });
  }

  async createSmallDog(data: SmallDog): Promise<SmallDog> {
    return this.prisma.smallDog.create({
      data,
    });
  }

  async updateSmallDog(id: number, data: SmallDog): Promise<SmallDog> {
    return this.prisma.smallDog.update({
      where: { id: Number(id) },
      data: { name: data.name },
    });
  }

  async deleteSmallDog(id: number): Promise<SmallDog> {
    return this.prisma.smallDog.delete({
      where: { id: Number(id) },
    });
  }
}
