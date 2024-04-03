import { NestFactory } from '@nestjs/core';
import { CrisAppModule } from './cris_app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
/** Esto es el 
 * microservicio de EMAIL
 */
async function bootstrap() {
  
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    CrisAppModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
