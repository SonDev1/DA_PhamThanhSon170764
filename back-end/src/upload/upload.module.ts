import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [ProductModule],
  controllers: [UploadController],
})
export class UploadModule {}
