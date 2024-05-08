import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) {}

  @Post('User')
  public async newUser(@Body() 
  body:{name: string; email:string}) 
  {
    return this.appService.newUser(body);
    }
}
