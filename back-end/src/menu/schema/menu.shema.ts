import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
@Schema()
export class Menu {}

export const MenuSchema = SchemaFactory.createForClass(Menu);
