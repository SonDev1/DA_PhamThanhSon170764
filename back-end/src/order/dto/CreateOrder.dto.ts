import { Optional } from '@nestjs/common';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  isString,
} from 'class-validator';
import { ProductOrder } from 'src/interface/product-order.interface';
import { ShippingInfo } from 'src/interface/shipping-infor.interface';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  products: ProductOrder[];

  @Optional()
  shippingInfo: ShippingInfo;

  @IsOptional()
  @IsString()
  isInCart?: Boolean;
}
