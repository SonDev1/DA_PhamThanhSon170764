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

  async getProductsByGender(categoryId: string) {
    return await this.productRepository.getProductsByCategoryId(categoryId);
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
    console.log('createProductDto :', createProductDto);

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
