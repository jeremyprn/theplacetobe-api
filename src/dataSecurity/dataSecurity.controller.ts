import { Controller, Get, Query } from '@nestjs/common';
import { DataSecurityService } from './dataSecurity.service';

@Controller("security")
export class DataSecurityController {
  constructor(private readonly dataSecurityService: DataSecurityService) {}

  @Get('/')
  getCsvData(@Query('code') code: string): any[] {
    return this.dataSecurityService.getData(code);
  }
}
