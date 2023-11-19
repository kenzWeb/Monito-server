import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Dog } from './dog.model';

@Injectable()
export class DogService {
  constructor(private prisma: PrismaService) {}

  async getAllDogs(): Promise<Dog[]> {
    return this.prisma.dog.findMany();
  }

  async getDog(id: number): Promise<Dog | null> {
    return this.prisma.dog.findUnique({ where: { id: Number(id) } });
  }

  async createDog(data: Dog): Promise<Dog> {
    return this.prisma.dog.create({
      data,
    });
  }

  async updateDog(id: number, data: Dog): Promise<Dog> {
    return this.prisma.dog.update({
      where: { id: Number(id) },
      data: { name: data.name, gender: data.gender },
    });
  }

  async deleteDog(id: number): Promise<Dog> {
    return this.prisma.dog.delete({
      where: { id: Number(id) },
    });
  }
}
