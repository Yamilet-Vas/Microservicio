import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(@Inject('CRIS_SERVICE')private clientCris:ClientProxy){

  }

  getHello(): string {
    return 'Hola soy la App Principal!';
  }
  newUser(user:any){
    this.clientCris.emit('new_cris', user)
    return 'Tarea_Terminada'
  }

}
