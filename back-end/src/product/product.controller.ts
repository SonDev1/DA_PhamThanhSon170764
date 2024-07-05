import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateProductDto } from 'src/product/dto/CreateProduct.dto';
import { ProductService } from 'src/product/service/product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('')
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }

  @Get('type/:typeId')
  getProductByTypeId(@Param('typeId') typeId: string) {
    return this.productService.getProductByTypeId(typeId);
  }

  @Get(':productId')
  getProductById(@Param('productId') productId: string) {
    return this.productService.getProductById(productId);
  }

  @Get('')
  getProductsByFilter(@Query() filter: any) {
    return this.productService.getProductsByFilter(filter);
  }
}
