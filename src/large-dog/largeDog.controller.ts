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
import { LargeDog } from '@prisma/client';
import { LargeDogService } from './largeDog.service';

@Controller('api/v1/dog/large')
export class LargeDogController {
  constructor(private readonly LargeDogService: LargeDogService) {}

  @Get()
  async getAllLargeDog(): Promise<LargeDog[]> {
    return this.LargeDogService.getAllLargeDog();
  }

  @Post()
  async postLargeDog(@Body() postData: LargeDog): Promise<LargeDog> {
    return this.LargeDogService.createLargeDog(postData);
  }

  @Get(':id')
  async getLargeDog(@Param('id') id: number): Promise<LargeDog | null> {
    return this.LargeDogService.getLargeDog(id);
  }

  @Delete(':id')
  async deleteLargeDog(@Param('id') id: number): Promise<LargeDog | null> {
    return this.LargeDogService.deleteLargeDog(id);
  }

  @Put()
  async updateLargeDog(
    @Body() postData: LargeDog,
    @Param('id') id: number,
  ): Promise<LargeDog> {
    return this.LargeDogService.updateLargeDog(id, postData);
  }
}
