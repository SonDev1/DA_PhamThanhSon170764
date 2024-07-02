import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CategoryRepository } from '../repository/category.repository';
import { CreateCategoryDto } from '../dto/CreateCategory.dto';

@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  async getAllCategory() {
    return await this.categoryRepository.getAll();
  }

  async getCategoryByGender(gender: string) {
    return await this.categoryRepository.findByGender(gender);
  }

  async createCategory(createCategoryDto: CreateCategoryDto) {
    try {
      const Newcategory =
        await this.categoryRepository.create(createCategoryDto);
      return {
        message: 'Create category success',
      };
    } catch (err) {
      console.log(err);
      throw new HttpException('Create category error', HttpStatus.BAD_REQUEST);
    }
  }
}
