import { Test, TestingModule } from '@nestjs/testing';
import { DownloadService } from './download.service';
import * as https from 'https';

 jest.mock('https');

describe('DownloadService', () => {
  let service: DownloadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DownloadService],
    }).compile();

    service = module.get<DownloadService>(DownloadService);
  });

  it('deve baixar mídia com sucesso', async () => {
    const mockResponseData = JSON.stringify({message: 'ok'});
  });
});
