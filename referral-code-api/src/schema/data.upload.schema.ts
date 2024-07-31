import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Upload } from './upload.schema';

export type dataUploadDocument = HydratedDocument<DataUpload>;

@Schema()
export class DataUpload {
  @Prop()
  name: string;

  @Prop()
  dob: Date;

  @Prop()
  pob: string;

  @Prop()
  email: string;

  @Prop()
  referralCode: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Upload' }] })
  uploadDocument: Upload;
}

export const DataUploadSchema = SchemaFactory.createForClass(DataUpload);
