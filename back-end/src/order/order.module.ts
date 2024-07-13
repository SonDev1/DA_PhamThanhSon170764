import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './service/order.service';
import { OrderRepository } from './repository/order.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './schema/order.shema';
import { CartService } from 'src/cart/service/cart.service';
import { CartModule } from 'src/cart/cart.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    CartModule,
  ],
  controllers: [OrderController],
  providers: [OrderService, OrderRepository, CartService],
})
export class OrderModule {}