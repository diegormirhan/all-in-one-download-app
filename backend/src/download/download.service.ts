import { Injectable } from '@nestjs/common';
import * as https from 'https';

@Injectable()
export class DownloadService {
    async downloadMedia(url: string, platform: string): Promise<string> {
        const options = this.getOptions();
        return new Promise((resolve, reject) => {
            const req = https.request(options, (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', () => {
                    try {
                        resolve(this.processResponse(data, platform));
                    } catch (error) {
                        reject(`Erro ao processar dados: ${error.message}`);
                    }
                });
            });

            req.on('end', (e) => {
                reject(`Error: ${e.message}`);
            });

            req.write(JSON.stringify({ url }));
            req.end();
        });
    }

    private getOptions() {
        return {
            method: 'POST',
            hostname: 'auto-download-all-in-one-big.p.rapidapi.com',
            port: null,
            path: '/v1/social/autolink',
            headers: {
                'x-rapidapi-key': 'b123b81d68msh1692f054412acb1p1ad85bjsn3bb8c4ab41e0',
                'x-rapidapi-host': 'auto-download-all-in-one-big.p.rapidapi.com',
                'Content-Type': 'application/json'
            }
        };
    }

    private processResponse(response: string, platform: string): any {
        const parsedResponse = JSON.parse(response);
        console.log(parsedResponse);
        switch (platform) {
            case 'instagram':
                return {
                    videoUrl: parsedResponse.medias[0].url,
                    imageUrl: "b",
                }
            default:
                throw new Error('Plataforma não suportada');
        }
    }
}
