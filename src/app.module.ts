import { Module } from '@nestjs/common';
import { DogModule } from './dog/dog.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [DogModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
