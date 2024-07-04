import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './service/product.service';
import { ProductRepository } from './repository/product.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schema/product.shema';
import { TypeService } from 'src/type/service/type.service';
import { TypeModule } from 'src/type/type.module';
import { TypeRepository } from 'src/type/repository/type.repository';
import { Type, TypeSchema } from 'src/type/schema/type.shema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    MongooseModule.forFeature([{ name: Type.name, schema: TypeSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository, TypeService, TypeRepository],
  exports: [ProductService],
})
export class ProductModule {}
