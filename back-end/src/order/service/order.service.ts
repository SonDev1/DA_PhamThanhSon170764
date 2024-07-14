import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { OrderRepository } from '../repository/order.repository';
import { ObjectId } from 'mongodb';
import { CreateOrderDto } from '../dto/CreateOrder.dto';
import { CartService } from './../../cart/service/cart.service';
import { log } from 'console';

@Injectable()
export class OrderService {
  constructor(
    private orderRepository: OrderRepository,
    private cartService: CartService,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    let totalAmount = 0;
    let productIds = [];
    createOrderDto.products.forEach((product) => {
      totalAmount += product.quantity * product.price;
      productIds.push(product.productId);
    });
    const userIdObject = new Types.ObjectId(createOrderDto.userId);
    const newOrder = { ...createOrderDto, userId: userIdObject, totalAmount };

    try {
      if (createOrderDto.isInCart) {
        await this.cartService.deleteCartByProductIdsAndUserId(
          createOrderDto.userId,
          productIds,
        );
      }

      const orderExist = await this.orderRepository.create(newOrder);
      return {
        mesage: 'create order successfully',
        orderExist,
      };
    } catch (err) {
      throw new HttpException('Create order error', HttpStatus.BAD_REQUEST);
    }
  }
}
