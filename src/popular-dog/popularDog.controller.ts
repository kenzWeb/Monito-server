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
import { PopularDog, SmallDog } from '@prisma/client';
import { PopularDogService } from './popularDog.service';

@Controller('api/v1/dog/popular')
export class PopularDogController {
  constructor(private readonly PopularDogService: PopularDogService) {}

  @Get()
  async getAllSmallDog(): Promise<SmallDog[]> {
    return this.PopularDogService.getAllPopularDog();
  }

  @Post()
  async postSmallDog(@Body() postData: SmallDog): Promise<PopularDog> {
    return this.PopularDogService.createPopularDog(postData);
  }

  @Get(':id')
  async getSmallDog(@Param('id') id: number): Promise<PopularDog | null> {
    return this.PopularDogService.getPopularDog(id);
  }

  @Delete(':id')
  async deleteSmallDog(@Param('id') id: number): Promise<PopularDog | null> {
    return this.PopularDogService.deletePopularDog(id);
  }

  @Put()
  async updateSmallDog(
    @Body() postData: PopularDog,
    @Param('id') id: number,
  ): Promise<PopularDog> {
    return this.PopularDogService.updatePopularDog(id, postData);
  }
}
