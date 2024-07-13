import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './service/order.service';
import { CreateOrderDto } from './dto/CreateOrder.dto';
import { CreateCartDto } from 'src/cart/dto/CreateCart.dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('')
  CreateOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.createOrder(createOrderDto);
  }
}
