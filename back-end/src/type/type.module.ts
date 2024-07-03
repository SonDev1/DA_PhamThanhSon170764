import { Module } from '@nestjs/common';
import { TypeController } from './type.controller';
import { TypeService } from './service/type.service';
import { TypeRepository } from './repository/type.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Type, TypeSchema } from './schema/type.shema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Type.name, schema: TypeSchema }]),
  ],
  controllers: [TypeController],
  providers: [TypeService, TypeRepository],
})
export class TypeModule {}
