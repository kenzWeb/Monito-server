import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LargeDogController } from './largeDog.controller';
import { LargeDogService } from './largeDog.service';

@Module({
  controllers: [LargeDogController],
  providers: [LargeDogService, PrismaService],
})
export class LargeDogModule {}
