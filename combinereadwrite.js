const fs = require('fs');

const readerstream = fs.createReadStream('text.txt');

const writerStream = fs.createWriteStream('text2.txt');

readerstream.pipe(writerStream);

console.log('PIPE STREAM COMPLETED');