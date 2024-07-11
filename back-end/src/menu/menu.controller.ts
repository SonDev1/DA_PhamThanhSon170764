import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { MenuService } from './service/menu.service';
import { CreateMenuDto } from './dto/CreateMenu.dto';

@Controller('menus')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post('')
  createMenu(@Body() createMenuDto: CreateMenuDto) {
    console.log('createMenuDto :', createMenuDto);
    return this.menuService.createMenu(createMenuDto);
  }

  @Get('')
  getAllMenu() {
    return this.menuService.getAllMenus();
  }
}
