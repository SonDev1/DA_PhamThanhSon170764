import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { Menu } from '../schema/menu.shema';
import { CreateMenuDto } from '../dto/CreateMenu.dto';
@Injectable()
export class MenuRepository {
  constructor(
    @InjectModel(Menu.name)
    private cartModel: Model<Menu>,
  ) {}

  async create(createMenuDto: CreateMenuDto) {
    return await this.cartModel.create(createMenuDto);
  }
}
