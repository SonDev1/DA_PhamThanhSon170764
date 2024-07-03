import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Type {
  @Prop()
  name: string;

  @Prop()
  categoryId: string;
}

export const TypeSchema = SchemaFactory.createForClass(Type);
