const url = require('url');

const urlString = 'https://www.example.com:8080/products?category=electronics&sort=price';

const parsedUrl = url.parse(urlString);

const output = `
Protocol: ${parsedUrl.protocol}
Hostname: ${parsedUrl.hostname}
Port: ${parsedUrl.port}
Pathname: ${parsedUrl.pathname}
Query Parameters (string): ${parsedUrl.query}
`;

console.log(output);
