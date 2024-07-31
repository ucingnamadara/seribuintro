import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UploadDocument = HydratedDocument<Upload>;

@Schema()
export class Upload {
  @Prop()
  name: string;

  @Prop()
  uploadedDatetime: Date;
}

export const UploadSchema = SchemaFactory.createForClass(Upload);
