import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TypeRepository } from '../repository/type.repository';
import { CreateTypeDto } from '../dto/CreateType.dto';

@Injectable()
export class TypeService {
  constructor(private typeRepository: TypeRepository) {}

  async getAllType() {
    return await this.typeRepository.getAll();
  }

  async getTypeByCategoryId(categoryId: string) {
    return await this.typeRepository.getTypeByCategoryId(categoryId);
  }

  async createType(createTypeDto: CreateTypeDto) {
    try {
      const Newtype = await this.typeRepository.create(createTypeDto);
      return {
        message: 'Create type success',
      };
    } catch (err) {
      console.log(err);
      throw new HttpException('Create type error', HttpStatus.BAD_REQUEST);
    }
  }
}
