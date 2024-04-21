import { Controller, Get } from '@nestjs/common';
import { CrisAppService } from './cris_app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class CrisAppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly crisAppService: CrisAppService) {}

  //@Get()
  //getHello(): string {
    //return this.crisAppService.getHello();
  //}
  @EventPattern('new_cris')
  handleNewEmail(data:any){
    console.log('Este es el evento entrante', data)

    }
  }

