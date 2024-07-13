import { ObjectId } from 'mongodb';

export interface ProductOrder {
  productId: ObjectId;
  quantity: number;
  price: number;
}
