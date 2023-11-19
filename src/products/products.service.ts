import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Products } from './products.model';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getAllProd(): Promise<Products[]> {
    return this.prisma.products.findMany();
  }

  async getProd(id: number): Promise<Products | null> {
    return this.prisma.products.findUnique({ where: { id: Number(id) } });
  }

  async createProd(data: Products): Promise<Products> {
    return this.prisma.products.create({
      data,
    });
  }

  async updateProd(id: number, data: Products): Promise<Products> {
    return this.prisma.products.update({
      where: { id: Number(id) },
      data: { name: data.name, img: data.img },
    });
  }

  async deleteProd(id: number): Promise<Products> {
    return this.prisma.products.delete({
      where: { id: Number(id) },
    });
  }
}
