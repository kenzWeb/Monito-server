import { Module } from '@nestjs/common';
import { LargeDogModule } from './large-dog/largeDog.module';
import { PopularDogModule } from './popular-dog/popularDog.module';
import { SmallDogModule } from './small-dog/smallDog.module';

@Module({
  imports: [PopularDogModule, SmallDogModule, LargeDogModule],
})
export class AppModule {}
