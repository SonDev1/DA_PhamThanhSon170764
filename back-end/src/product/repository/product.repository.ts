import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from '../dto/createProduct.dto';
import { Product } from '../schema/product.shema';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<Product>,
  ) {}

  async getAll() {
    return await this.productModel.find();
  }

  async findAllAndSort(sortOrder: string) {
    console.log('sortOrder in repo: ' + sortOrder);
    if (sortOrder === 'asc') {
      return await this.productModel.find().sort({ salePrice: 'asc' });
    }
    return await this.productModel.find().sort({ salePrice: 'desc' });
  }

  async getProductByTypeId(typeId: string) {
    return await this.productModel.find({ typeId: typeId });
  }

  async create(createProductDto: CreateProductDto) {
    return this.productModel.create(createProductDto);
  }
}
