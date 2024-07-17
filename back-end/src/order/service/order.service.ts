import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { OrderRepository } from '../repository/order.repository';
import { ObjectId } from 'mongodb';
import { CreateOrderDto } from '../dto/CreateOrder.dto';
import { CartService } from './../../cart/service/cart.service';
import { log } from 'console';
import { PaymentService } from './../../payment/payment.service';

@Injectable()
export class OrderService {
  constructor(
    @Inject(forwardRef(() => PaymentService))
    private readonly paymentService: PaymentService,
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
      console.log('createOrderDto.isInCart :', createOrderDto.isInCart);
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

  async paymentOrder(orderId: string) {
    const orderExist = await this.orderRepository.findById(orderId);
    const urlPayment = await this.paymentService.createZaloPayment(
      orderExist.totalAmount,
      orderId,
    );
    return {
      message: 'create url payment order successfully',
      urlPayment,
    };
  }

  async updateStatus(orderId: string) {
    const orderExist = await this.orderRepository.findById(orderId);
    if (!orderExist) {
      throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
    }
    const paymentStatus = 'Success';
    await this.orderRepository.updateStatus(orderId, paymentStatus);
  }
}
