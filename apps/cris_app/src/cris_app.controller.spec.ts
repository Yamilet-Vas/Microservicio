import { Test, TestingModule } from '@nestjs/testing';
import { CrisAppController } from './cris_app.controller';
import { CrisAppService } from './cris_app.service';

describe('CrisAppController', () => {
  let crisAppController: CrisAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CrisAppController],
      providers: [CrisAppService],
    }).compile();

    crisAppController = app.get<CrisAppController>(CrisAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(crisAppController.getHello()).toBe('Hello World!');
    });
  });
});
