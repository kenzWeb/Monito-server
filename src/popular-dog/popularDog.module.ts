import { Module } from '@nestjs/common';
import { PopularDogService } from './popularDog.service';
import { PrismaService } from 'src/prisma.service'
import { PopularDogController } from './popularDog.controller';

@Module({
  controllers: [PopularDogController],
  providers: [PopularDogService, PrismaService],
})
export class PopularDogModule {}
