import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize/types';

@Injectable()
export class AppService {
  constructor(private sequelize: Sequelize){

  }
  getHello(): string {
    return 'Hello World! from pooja';
  }
  getAbout(): string {
    return 'Pooja Software developer';
  }
}
