import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ClientsModule, Transport} from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from './user.entity'; 

@Module ({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql' ,
      host: 'localhost' ,
      port: 3306,
      username: 'Yamilet' ,
      password: 'Cristel2' ,
      database: 'yv', 
      entities: [User],
      synchronize: true,
}),
    ClientsModule.register([
      {
        name: 'CRIS_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001,
        },
      },
    ]),
   TypeOrmModule.forFeature([User]),
   ],
   controllers: [AppController],
   providers: [AppService],
})  
export class AppModule {}
