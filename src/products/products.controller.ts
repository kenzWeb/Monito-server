/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Products } from './products.model';
import { ProductsService } from './products.service';

@Controller('api/v1/products')
export class ProductsController {
  constructor(private ProductsService: ProductsService) {}

  @Get()
  async getAllBook(): Promise<Products[]> {
    return this.ProductsService.getAllProd();
  }

  @Post()
  async postDog(@Body() postData: Products): Promise<Products> {
    return this.ProductsService.createProd(postData);
  }

  @Get(':id')
  async getDog(@Param('id') id: number): Promise<Products | null> {
    return this.ProductsService.getProd(id);
  }

  @Delete(':id')
  async deleteDog(@Param('id') id: number): Promise<Products | null> {
    return this.ProductsService.deleteProd(id);
  }

  @Put(':id')
  async updateDog(
    @Body() postData: Products,
    @Param('id') id: number,
  ): Promise<Products> {
    return this.ProductsService.updateProd(id, postData);
  }
}
