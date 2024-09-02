"use server";
import { Agent } from 'http';

const httpAgent = new Agent({
  keepAlive: true,
  maxSockets: Infinity,
});

function getOptions(url) {
    return {
        method: 'POST',
        headers: {
            'x-rapidapi-key': process.env.RAPID_API_KEY,
            'x-rapidapi-host': 'auto-download-all-in-one-big.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({url}),
        agent: httpAgent
    };
}

export async function fetchData(url, maxRetries = 5, delay = 50) {
    try {
        const endpoint = 'https://auto-download-all-in-one-big.p.rapidapi.com/v1/social/autolink';
        const options = getOptions(url);

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                const response = await fetch(endpoint, options);
                if (response.status === 200) {
                    const data = await response.json();
                    return data;
                } else {
                    console.log(`Tentativa ${attempt} falhou. Status: ${response.statusCode}`);
                }
            } catch (error) {
                console.log(`Erro na tentativa ${attempt}: ${error.message}`)
            }
            await new Promise(resolve => setTimeout(resolve, delay))
        }
        throw new Error(`Falhou após ${maxRetries} tentativas`);
    } catch (error) {
        throw error;
    }
}
