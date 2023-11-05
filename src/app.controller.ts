/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Query, Param } from '@nestjs/common';
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

  @Get('/api/items/:id')
  getParam(@Param() params): any {
    const items = [
      { id: 1 , name: "item 1"},
      { id: 2 , name: "item 2"},
      { id: 3 , name: "item 3"},
    ];
    const searchId = params.id;
    const item = items.find((item) => item.id == searchId);
    return item;
  }
  
}
