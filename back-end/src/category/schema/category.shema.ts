import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Category {
  @Prop()
  name: string;

  @Prop()
  gender: string;

  @Prop()
  order: number;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
