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
import { SmallDog } from '@prisma/client';
import { SmallDogService } from './smallDog.service';

@Controller('api/v1/dog/small')
export class SmallDogController {
  constructor(private readonly SmallDogService: SmallDogService) {}

  @Get()
  async getAllSmallDog(): Promise<SmallDog[]> {
    return this.SmallDogService.getAllSmallDog();
  }

  @Post()
  async postSmallDog(@Body() postData: SmallDog): Promise<SmallDog> {
    return this.SmallDogService.createSmallDog(postData);
  }

  @Get(':id')
  async getSmallDog(@Param('id') id: number): Promise<SmallDog | null> {
    return this.SmallDogService.getSmallDog(id);
  }

  @Delete(':id')
  async deleteSmallDog(@Param('id') id: number): Promise<SmallDog | null> {
    return this.SmallDogService.deleteSmallDog(id);
  }

  @Put()
  async updateSmallDog(
    @Body() postData: SmallDog,
    @Param('id') id: number,
  ): Promise<SmallDog> {
    return this.SmallDogService.updateSmallDog(id, postData);
  }
}
