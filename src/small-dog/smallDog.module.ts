import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SmallDogController } from './smallDog.controller';
import { SmallDogService } from './smallDog.service';

@Module({
  controllers: [SmallDogController],
  providers: [SmallDogService, PrismaService],
})
export class SmallDogModule {}
