import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { MenuRepository } from '../repository/menu.repository';
import { ObjectId } from 'mongodb';
import { CreateMenuDto } from '../dto/CreateMenu.dto';
import { Category } from 'src/category/schema/category.shema';
import { CategoryService } from './../../category/service/category.service';

@Injectable()
export class MenuService {
  constructor(
    private menuRepository: MenuRepository,
    // private categoryService: CategoryService,
  ) {}

  async createMenu(createMenuDto: CreateMenuDto) {
    return await this.menuRepository.create(createMenuDto);
  }

  async getAllMenus() {
    const menus = await this.menuRepository.findAll();
    return menus;
  }
}
