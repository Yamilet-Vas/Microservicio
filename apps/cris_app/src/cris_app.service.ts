import { Injectable } from '@nestjs/common';

@Injectable()
export class CrisAppService {
  getHello(): string {
    return 'Hola soy el microservicio Mail';
  }
}
