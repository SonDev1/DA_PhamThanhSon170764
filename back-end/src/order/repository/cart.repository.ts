import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { Order } from '../schema/cart.shema';
@Injectable()
export class OrderRepository {
  constructor(
    @InjectModel(Order.name)
    private cartModel: Model<Order>,
  ) {}
}
