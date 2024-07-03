import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProductRepository } from '../repository/product.repository';
import { CreateProductDto } from '../dto/createProduct.dto';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  async getProductSortByOriginPrice(sortOrder: string) {
    if (sortOrder) {
      console.log('sortOrder in service: ' + sortOrder);
      return await this.productRepository.findAllAndSort(sortOrder);
    }
    return await this.productRepository.getAll();
  }

  async getProductByTypeId(typeId: string) {
    return await this.productRepository.getProductByTypeId(typeId);
  }

  async createProduct(createProductDto: CreateProductDto) {
    try {
      const Newproduct = await this.productRepository.create(createProductDto);
      return {
        message: 'Create product success',
      };
    } catch (err) {
      console.log(err);
      throw new HttpException('Create product error', HttpStatus.BAD_REQUEST);
    }
  }
}
