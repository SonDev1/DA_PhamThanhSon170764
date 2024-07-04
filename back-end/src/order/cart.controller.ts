import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { OrderService } from './service/cart.service';
import { Product } from 'src/product/schema/product.shema';

@Controller('carts')
export class OrderController {
  constructor(private readonly cartService: OrderService) {}
}
