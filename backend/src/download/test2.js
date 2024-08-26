const axios = require('axios');

async function fetchMedia(url, platform) {
    const response = await axios.post('http://localhost:3333/download', {
        url,
        platform,
    });
    console.log(response.data);
    return response.data;
}
fetchMedia('https://www.instagram.com/p/C-zXx4WpRqg/?utm_source=ig_web_copy_link', 'instagram')