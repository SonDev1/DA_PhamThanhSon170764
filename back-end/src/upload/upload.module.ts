import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { ProductModule } from 'src/product/product.module';
import { TypeModule } from 'src/type/type.module';

@Module({
  imports: [ProductModule, TypeModule],
  controllers: [UploadController],
})
export class UploadModule {}
