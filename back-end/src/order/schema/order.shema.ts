import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ProductOrder } from 'src/interface/product-order.interface';

export class ShippingInfo {
  @Prop({ required: true })
  receiver: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  addressDetail: string;
}

@Schema()
export class Order {
  @Prop()
  userId: Types.ObjectId;

  @Prop()
  products: ProductOrder[];

  @Prop({ required: true })
  totalAmount: number;

  @Prop({ default: Date.now })
  orderDate: Date;

  @Prop()
  shippingInfo: ShippingInfo;

  @Prop({ default: 'pending' })
  status: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
