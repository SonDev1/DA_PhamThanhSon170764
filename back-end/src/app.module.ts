import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { TypeModule } from './type/type.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UploadModule } from './upload/upload.module';
import { CartModule } from './cart/cart.module';
require('dotenv').config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'uploads', 'products'),
      serveRoot: '/api/uploads/products',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'uploads', 'avatars'),
      serveRoot: '/api/uploads/avatars',
    }),
    AuthModule,
    UserModule,
    CategoryModule,
    TypeModule,
    ProductModule,
    UploadModule,
    CartModule,
  ],
})
export class AppModule {}
