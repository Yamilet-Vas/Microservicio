import { Module } from '@nestjs/common';
import { CrisAppController } from './cris_app.controller';
import { CrisAppService } from './cris_app.service';

@Module({
  imports: [],
  controllers: [CrisAppController],
  providers: [CrisAppService],
})
export class CrisAppModule {}
