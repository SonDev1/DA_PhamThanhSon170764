import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProductRepository } from '../repository/product.repository';
import { CreateProductDto } from '../dto/createProduct.dto';
import { Types } from 'mongoose';
import { TypeService } from 'src/type/service/type.service';
@Injectable()
export class ProductService {
  private readonly _limit = 2;
  constructor(
    private productRepository: ProductRepository,
    private typeService: TypeService,
  ) {}

  async getProductSortByOriginPrice(sortOrder: string) {
    if (sortOrder) {
      console.log('sortOrder in service: ' + sortOrder);
      return await this.productRepository.findAllAndSort(sortOrder);
    }
    return await this.productRepository.getAll();
  }

  async getProductByTypeId(typeId: string) {
    console.log('typeId :', typeId);
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

  async getProductsByFilter(filter: any) {
    const types = await this.typeService.getTypesByCategoryId(
      filter.categoryId,
    );
    const typeIds = types.map((type) => type._id);
    const products = await this.productRepository.getProductByTypeIds(typeIds);

    const filteredProducts = products.filter((product) => {
      return (
        (filter.typeId == null || product.typeId.toString() == filter.typeId) &&
        (filter.dialColor == null || product.dialColor == filter.dialColor) &&
        (filter.dialSize == null || product.dialSize == filter.dialSize) &&
        (filter.strapMaterial == null ||
          product.strapMaterial == filter.strapMaterial)
      );
    });

    if (filter._sort) {
      const sortOrder = filter._sort === 'asc' ? 1 : -1;
      filteredProducts.sort((a, b) => sortOrder * (a.salePrice - b.salePrice));
    }

    let skip = (filter._page - 1) * this._limit;
    const result = filteredProducts.slice(skip, skip + this._limit);
    const totalPage = Math.ceil(filteredProducts.length / this._limit);

    return {
      rows: result,
      totalPage,
      page: filter._page,
    };
  }

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
