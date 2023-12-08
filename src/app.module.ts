import { Module } from '@nestjs/common';
import { DogModule } from './dog/dog.module';
import { LargeDogModule } from './large-dog/largeDog.module';
import { PopularDogModule } from './popular-dog/popularDog.module';
import { ProductsModule } from './products/products.module';
import { SmallDogModule } from './small-dog/smallDog.module';

@Module({
  imports: [
    PopularDogModule,
    SmallDogModule,
    LargeDogModule,
    DogModule,
    ProductsModule,
  ],
})
export class AppModule {}
