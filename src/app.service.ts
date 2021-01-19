import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! from pooja';
  }
  getAbout(): string {
    return 'Pooja Software developer';
  }
}
