import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TypeService } from './service/type.service';
import { CreateTypeDto } from './dto/CreateType.dto';

@Controller('types')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @Post('')
  createType(@Body() createTypeDto: CreateTypeDto) {
    return this.typeService.createType(createTypeDto);
  }

  @Get('')
  getAllType() {
    return this.typeService.getAllType();
  }

  @Get(':categoryId')
  getTypeBycategoryId(@Param('categoryId') categoryId: string) {
    return this.typeService.getTypeByCategoryId(categoryId);
  }
}
