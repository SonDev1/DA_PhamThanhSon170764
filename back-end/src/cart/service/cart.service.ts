import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { CartRepository } from '../repository/cart.repository';
import { CreateCartDto } from '../dto/CreateCart.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class CartService {
  constructor(private cartRepository: CartRepository) {}

  async createCart(createCartDto: CreateCartDto) {
    const userIdObject = new Types.ObjectId(createCartDto.userId);
    const productIdObject = new Types.ObjectId(createCartDto.productId);

    try {
      const existingCart =
        await this.cartRepository.getCartByProductIdAndUserId(
          productIdObject,
          userIdObject,
        );

      if (existingCart) {
        const updatedCart = await this.cartRepository.updateCartQuantity(
          productIdObject,
          userIdObject,
          createCartDto.quantity,
        );
        return {
          message: 'Cart quantity updated successfully',
          cart: updatedCart,
        };
      } else {
        const data = {
          userId: userIdObject,
          productId: productIdObject,
          quantity: createCartDto.quantity,
        };
        const newCart = await this.cartRepository.create(data);
        return {
          message: 'Create cart success',
          cart: newCart,
        };
      }
    } catch (err) {
      throw new HttpException('Create cart error', HttpStatus.BAD_REQUEST);
    }
  }

  async getCartByUserId(userId: string) {
    const userIdObject = new Types.ObjectId(userId);
    return this.cartRepository.getByUserId(userIdObject);
  }

  async getCartByProductIdAndUserId(productId: ObjectId, userId: ObjectId) {
    return await this.cartRepository.getCartByProductIdAndUserId(
      productId,
      userId,
    );
  }

  async getAllCarts() {
    return this.cartRepository.getAll();
  }

  async deleteCartByProductIdAndUserId(productId: ObjectId, userId: ObjectId) {
    return await this.cartRepository.deleteCartByProductIdAndUserId(
      productId,
      userId,
    );
  }

  async deleteCartsByUserId(userId: string, productIds: string[]) {
    const userIdObjectId = new ObjectId(userId);
    const productIdsObjectId = productIds.map(
      (productId) => new ObjectId(productId),
    );
    try {
      productIdsObjectId.forEach(async (productId) => {
        await this.deleteCartByProductIdAndUserId(productId, userIdObjectId);
      });
    } catch (err) {}
  }
}
