import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { parse } from 'papaparse';
import { TDataCity } from './dataCity.spec';

@Injectable()
export class DataCityService {
  getData(name: string): any[] {
    const filePath = `files/commune_2022.csv`;

    if (fs.existsSync(filePath)) {
      const csvData = fs.readFileSync(filePath, 'utf-8');
      const jsonData = parse(csvData, { header: true }).data;
      const filteredData = jsonData.filter(
        (row: TDataCity) => row.LIBELLE === name,
      );
      return filteredData;
    } else {
      return [
        {
          error: `No data for "${name}"`,
        },
      ];
    }
  }
}
