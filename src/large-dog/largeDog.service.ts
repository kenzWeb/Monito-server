import { Injectable } from '@nestjs/common';
import { LargeDog } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LargeDogService {
  constructor(private prisma: PrismaService) {}

  async getAllLargeDog(): Promise<LargeDog[]> {
    return this.prisma.largeDog.findMany();
  }

  async getLargeDog(id: number): Promise<LargeDog | null> {
    return this.prisma.largeDog.findUnique({ where: { id: Number(id) } });
  }

  async createLargeDog(data: LargeDog): Promise<LargeDog> {
    return this.prisma.largeDog.create({
      data,
    });
  }

  async updateLargeDog(id: number, data: LargeDog): Promise<LargeDog> {
    return this.prisma.largeDog.update({
      where: { id: Number(id) },
      data: { name: data.name },
    });
  }

  async deleteLargeDog(id: number): Promise<LargeDog> {
    return this.prisma.largeDog.delete({
      where: { id: Number(id) },
    });
  }
}
