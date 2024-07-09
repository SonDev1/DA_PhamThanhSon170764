import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { MenuRepository } from '../repository/menu.repository';
import { ObjectId } from 'mongodb';
import { CreateMenuDto } from '../dto/CreateMenu.dto';

@Injectable()
export class MenuService {
  constructor(private menuRepository: MenuRepository) {}

  async createMenu(createMenuDto: CreateMenuDto) {
    return await this.menuRepository.create(createMenuDto);
  }
}
