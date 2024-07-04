import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TypeRepository } from '../repository/type.repository';
import { CreateTypeDto } from '../dto/CreateType.dto';
import { Types } from 'mongoose';
@Injectable()
export class TypeService {
  constructor(private typeRepository: TypeRepository) {}

  async getAllType() {
    return await this.typeRepository.getAll();
  }

  async getTypesByCategoryId(categoryId: string) {
    return await this.typeRepository.getTypesByCategoryId(categoryId);
  }

  async createType(createTypeDto: CreateTypeDto) {
    try {
      const categoryIdObject = new Types.ObjectId(createTypeDto.categoryId);
      const data = { ...createTypeDto, categoryId: categoryIdObject };
      const Newtype = await this.typeRepository.create(data);
      return {
        message: 'Create type success',
      };
    } catch (err) {
      console.log(err);
      throw new HttpException('Create type error', HttpStatus.BAD_REQUEST);
    }
  }
}
