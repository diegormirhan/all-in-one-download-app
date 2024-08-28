"use server";

export async function fetchData(url) {
    try {
        const response = await fetch('https://xfpyn8mcmh.execute-api.us-east-1.amazonaws.com/prod/api/download', {
            method: 'POST',
            headers: {
                'x-api-key': '14385290384753948782304123840928315740986',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: url
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        throw error;
    }
}
