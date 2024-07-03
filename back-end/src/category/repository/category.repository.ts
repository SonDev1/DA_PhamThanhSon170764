import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from '../schema/category.shema';
import { CreateCategoryDto } from '../dto/CreateCategory.dto';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectModel(Category.name)
    private categoryModel: Model<Category>,
  ) {}

  async findByGender(gender: string) {
    return await this.categoryModel.aggregate([
      {
        $match: { gender: gender },
      },
      {
        $lookup: {
          from: 'types',
          localField: '_id',
          foreignField: 'categoryId',
          as: 'type',
        },
      },
    ]);
  }

  async getAll() {
    return await this.categoryModel.find();
  }

  async create(createCategoryDto: CreateCategoryDto) {
    return this.categoryModel.create(createCategoryDto);
  }
}
