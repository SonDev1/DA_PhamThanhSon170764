import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Type } from '../schema/type.shema';
import { CreateTypeDto } from '../dto/CreateType.dto';
import { ObjectId } from 'mongodb';
@Injectable()
export class TypeRepository {
  constructor(
    @InjectModel(Type.name)
    private typeModel: Model<Type>,
  ) {}

  async getAll() {
    return await this.typeModel.find();
  }

  async getTypesByCategoryId(categoryId: string) {
    const categoryIdObject = new ObjectId(categoryId);
    return await this.typeModel.find({ categoryId: categoryIdObject });
  }

  async create(data: any) {
    return this.typeModel.create(data);
  }
}
