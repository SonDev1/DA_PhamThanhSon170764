import { IsNotEmpty, IsNumber, IsString, isString } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  productId: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
