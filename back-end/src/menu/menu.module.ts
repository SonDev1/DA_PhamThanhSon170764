import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuRepository } from './repository/menu.repository';
import { Menu, MenuSchema } from './schema/menu.shema';
import { MenuService } from './service/menu.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Menu.name, schema: MenuSchema }]),
  ],
  controllers: [MenuController],
  providers: [MenuService, MenuRepository],
})
export class MenuModule {}
