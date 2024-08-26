import { Controller, Post, Body } from '@nestjs/common';
import { DownloadService } from './download.service';

@Controller('download')
export class DownloadController {
    constructor(private readonly downloadService: DownloadService) {}

    @Post()
    async download(@Body() body: {url: string, platform: string}) {
        const { url, platform } = body;
        return this.downloadService.downloadMedia(url, platform);
    }
}
