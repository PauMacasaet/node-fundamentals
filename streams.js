const crypto = require('crypto');
const fs = require('fs');
const zlib = require('zlib');

var password = new Buffer(process.env.PASS || 'password');
var encryptStream = crypto.createCipher('aes-256-cbc', password);

var gzip = zlib.createGzip();
var readStream = fs.createReadStream('new.txt');
var writeStream = fs.createWriteStream('new1.txt');

readStream
    .pipe(encryptStream)
    .pipe(gzip)
    .pipe(writeStream)
    .on('finsh', () => {
        console.log('done');
    });

console.log('COMPLETE');