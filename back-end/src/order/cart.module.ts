import { Module } from '@nestjs/common';
import { OrderController } from './cart.controller';
import { OrderService } from './service/cart.service';
import { OrderRepository } from './repository/cart.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './schema/cart.shema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],
  controllers: [OrderController],
  providers: [OrderService, OrderRepository],
})
export class OrderModule {}
