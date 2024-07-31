import { Controller, Get, Post } from '@nestjs/common';
import { FileService } from '../service/file.service';

@Controller('/file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post()
  uploadFile() {}

  //pagination
  @Get()
  getDataById() {}

  @Get()
  downloadFile() {}
}
