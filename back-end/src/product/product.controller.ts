import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateProductDto } from 'src/product/dto/CreateProduct.dto';
import { ProductService } from 'src/product/service/product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('')
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }

  @Get('')
  getProductSortByOriginPrice(@Query('sortOrder') sortOrder: string) {
    return this.productService.getProductSortByOriginPrice(sortOrder);
  }

  @Get(':typeId')
  getProductBycategoryId(@Param('typeId') typeId: string) {
    return this.productService.getProductByTypeId(typeId);
  }
}