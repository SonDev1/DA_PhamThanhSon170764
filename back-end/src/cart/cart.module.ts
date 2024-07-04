import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './service/cart.service';
import { CartRepository } from './repository/cart.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Cart, CartSchema } from './schema/cart.shema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cart.name, schema: CartSchema }]),
  ],
  controllers: [CartController],
  providers: [CartService, CartRepository],
})
export class CartModule {}
