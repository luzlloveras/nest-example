/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, BadRequestException } from '@nestjs/common';
import { AppService } from './app.service';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  users: any;
  counter: number;
  
  constructor(private readonly appService: AppService) {
    this.counter = 0;
    this.users = [];
  }
  /*
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
   */
  @Get('/api/users')
  getUsers(): any {
    return this.users;
  }

  @Get('/api/users/qty')
  getUsersQty(): any {
    return this.users.lenght;
  }
 

  @Get('/api/users/:id')
  getUsersById(@Param('id') id): any {
    console.log(this.users.find((user) => this.users.id === Number(id)));
    return this.users.find((user) => this.users.id === Number(id));
  }
 
  @Post('/api/users')
  createUser(@Body() userData: any) {
    const {name, surname, age} = userData
    if(!userData?.name || !userData?.surname || !userData?.age ){
      throw new BadRequestException('Invalid data');
    }
    const userLenght = this.users.lenght;
    
    this.counter++;

    const newUser = {
      id: this.counter + 1,
      name: name, 
      surname: surname,
      age: age,
    };
    
    this.users.push(newUser);
  }

  @Get('/api/pokemon')
  async getPokemon(): Promise<any> {
    const { data } = await firstValueFrom (
      await this.appService.getPokemonByName('ditto'),
    )
    return data;
  }



}


