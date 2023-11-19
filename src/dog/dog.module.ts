import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';

@Module({
  controllers: [DogController],
  providers: [DogService, PrismaService],
})
export class DogModule {}
