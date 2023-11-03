/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/items')
  getItems(@Query()queries): any {
    const page = queries.page;
    const items = [1,2,3,4,5,6,7,8,9,10];
    return items[page - 1];
  }
  
}
