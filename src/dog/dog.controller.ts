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
import { Dog } from './dog.model';
import { DogService } from './dog.service';

@Controller('api/v1/dog')
export class DogController {
  constructor(private readonly DogService: DogService) {}

  @Get()
  async getAllBook(): Promise<Dog[]> {
    return this.DogService.getAllDogs();
  }

  @Post()
  async postDog(@Body() postData: Dog): Promise<Dog> {
    return this.DogService.createDog(postData);
  }

  @Get(':id')
  async getDog(@Param('id') id: number): Promise<Dog | null> {
    return this.DogService.getDog(id);
  }

  @Delete(':id')
  async deleteDog(@Param('id') id: number): Promise<Dog | null> {
    return this.DogService.deleteDog(id);
  }

  @Put()
  async updateDog(
    @Body() postData: Dog,
    @Param('id') id: number,
  ): Promise<Dog> {
    return this.DogService.updateDog(id, postData);
  }
}
