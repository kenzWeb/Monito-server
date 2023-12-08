import { Injectable } from '@nestjs/common';
import { PopularDog } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PopularDogService {
  constructor(private prisma: PrismaService) {}

  async getAllPopularDog(): Promise<PopularDog[]> {
    return this.prisma.popularDog.findMany();
  }

  async getPopularDog(id: number): Promise<PopularDog | null> {
    return this.prisma.popularDog.findUnique({ where: { id: Number(id) } });
  }

  async createPopularDog(data: PopularDog): Promise<PopularDog> {
    return this.prisma.popularDog.create({
      data,
    });
  }

  async updatePopularDog(id: number, data: PopularDog): Promise<PopularDog> {
    return this.prisma.popularDog.update({
      where: { id: Number(id) },
      data: { name: data.name },
    });
  }

  async deletePopularDog(id: number): Promise<PopularDog> {
    return this.prisma.popularDog.delete({
      where: { id: Number(id) },
    });
  }
}
