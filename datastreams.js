const fs = require('fs');

let data = 'this was a data stream';

let writerStream = fs.createWriteStream('new.txt');

writerStream.write(data, 'utf-8');

writerStream.end()

// events

writerStream.on('finish', () => {
    console.log('Writing completed');
});

writerStream.on('error', (err) => {
    console.error(err.stack);
});

console.log('COMPLETED');