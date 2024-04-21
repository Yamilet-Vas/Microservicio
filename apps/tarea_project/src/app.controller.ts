import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) {}

  @Get()
  newUser(@Body() body:any) {
    return this.appService.newUser(body);
  }
}
