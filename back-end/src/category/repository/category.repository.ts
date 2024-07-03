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
        $addFields: {
          categoryIdString: { $toString: '$_id' },
        },
      },
      {
        $lookup: {
          from: 'types',
          localField: 'categoryIdString',
          foreignField: 'categoyrId',
          as: 'type',
        },
      },
      {
        $project: {
          categoryIdString: 0, // Optionally remove the temporary field
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
