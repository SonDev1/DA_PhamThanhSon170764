import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Type } from '../schema/type.shema';
import { CreateTypeDto } from '../dto/CreateType.dto';

@Injectable()
export class TypeRepository {
  constructor(
    @InjectModel(Type.name)
    private typeModel: Model<Type>,
  ) {}

  async getAll() {
    return await this.typeModel.find();
  }

  async getTypeByCategoryId(categoryId: string) {
    return await this.typeModel.find({ categoryId: categoryId });
  }

  async create(data: any) {
    return this.typeModel.create(data);
  }
}
