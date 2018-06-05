// console.log(__dirname);
// console.log(__filename);

// setTimeout(function() {
//     console.log('rsg');
// }, 3000);

// console.log(process.cwd());
// console.log(process.cpuUsage());

// console.log(process.argv);

// const fs = require('fs');

// fs.readFile();
// fs.writeFile();

const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.headers);

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('This is our server');
    res.end('<h1>HELLO WORLD</h1>');
});

server.listen(port, hostname, () => {
    console.log(`Open http://${hostname}:${port}/`);
});