import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSecurityService } from './dataSecurity/dataSecurity.service';
import { DataSecurityController } from './dataSecurity/dataSecurity.controller';
import { DataCityService } from './dataCity/dataCity.service';
import { DataCityController } from './dataCity/dataCity.controller';

@Module({
  imports: [],
  controllers: [AppController, DataSecurityController, DataCityController],
  providers: [AppService, DataSecurityService, DataCityService],
})
export class AppModule {}
