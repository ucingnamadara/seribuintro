import { Module } from '@nestjs/common';
import { FileController } from './controller/file.controller';
import { FileService } from './service/file.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://mongo:mongo@localhost:27017/gukpus?authSource=admin',
    ),
  ],
  controllers: [FileController],
  providers: [FileService],
})
export class AppModule {}
