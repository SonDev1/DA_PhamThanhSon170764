import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProductRepository } from '../repository/product.repository';
import { CreateProductDto } from '../dto/createProduct.dto';
import { Types } from 'mongoose';
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

  async getProductsByGender(categoryId: string) {
    return await this.productRepository.getProductsByCategoryId(categoryId);
  }

  async updateImagesOfProduct(productId: string, urlFiles: string[]) {
    try {
      const product = await this.productRepository.findById(productId);
      console.log(product);
      if (!product) {
        throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
      }

      await this.productRepository.updateImagesOfProduct(productId, urlFiles);
      return {
        message: 'Update images success',
      };
    } catch (err) {
      console.log('error', err);
      throw new HttpException(
        'Update images error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // async getProductsByFilter(filter: any) {
  //   const products = await this.productRepository.getProductByCategory(
  //     filter.categoryId,
  //   );
  //   const filteredProducts = products.filter((product) => {
  //     return (
  //       product.gender === filter.gender &&
  //       product.dialColor === filter.dialColor &&
  //       product.dialSize === filter.dialSize &&
  //       product.strapMaterial === filter.strapMaterial
  //     );
  //   });
  // }

  async createProduct(createProductDto: CreateProductDto) {
    const typeIdObject = new Types.ObjectId(createProductDto.typeId);
    const data = { ...createProductDto, typeId: typeIdObject };
    try {
      const Newproduct = await this.productRepository.create(data);
      return {
        message: 'Create product success',
      };
    } catch (err) {
      console.log(err);
      throw new HttpException('Create product error', HttpStatus.BAD_REQUEST);
    }
  }
}
