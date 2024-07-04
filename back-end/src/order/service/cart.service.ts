import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { OrderRepository } from '../repository/cart.repository';
import { ObjectId } from 'mongodb';

@Injectable()
export class OrderService {
  constructor(private cartRepository: OrderRepository) {}
}
