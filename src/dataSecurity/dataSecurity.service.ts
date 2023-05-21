import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { parse } from 'papaparse';
import { TDataSecurity } from './dataSecurity.spec';

@Injectable()
export class DataSecurityService {
  getData(code: string): any[] {
    const fileName = `${code.substring(0, 2)}-data.gouv-2022.csv`;
    const filePath = `files/security/${fileName}`;

    if (fs.existsSync(filePath)) {
      const csvData = fs.readFileSync(filePath, 'utf-8');
      const jsonData = parse(csvData, { header: true }).data;
      const filteredData = jsonData.filter(
        (row: TDataSecurity) => row.CODGEO_2022 === code,
      );
      return filteredData;
    } else {
      return [
        {
          error: `No data for "${code}", the specified code must be between 01*** and 99*** (or 2A and 2B)`,
        },
      ];
    }
  }
}
