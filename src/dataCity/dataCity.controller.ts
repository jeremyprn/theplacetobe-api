import { Controller, Get, Query } from '@nestjs/common';
import { DataCityService } from './dataCity.service';

@Controller("city")
export class DataCityController {
  constructor(private readonly dataCityService: DataCityService) {}

  @Get('/')
  getCsvData(@Query('name') name: string): any {
    return this.dataCityService.getData(name);
  }
}
