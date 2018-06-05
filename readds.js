const fs = require('fs');

let text = '';

const readerStream = fs.createReadStream('text.txt');

readerStream.setEncoding('utf-8');

//events

readerStream.on('data', (chunk) => {
    text += chunk;
});

readerStream.on('end', () => {
    console.log(text);
});

readerStream.on('error', (err) => {
    console.error(err.stack);
});

console.log('Read stream complete');