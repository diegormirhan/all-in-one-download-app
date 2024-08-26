const http = require('https');

const options = {
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

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		const res = JSON.parse(body.toString());
		const formatted = res.medias
		console.log(formatted);
	});
});

req.write(JSON.stringify({
  url: 'https://www.instagram.com/p/C-zXx4WpRqg/?utm_source=ig_web_copy_link'
}));
req.end();