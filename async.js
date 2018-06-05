const fs = require('fs');
const path = __dirname;

console.log('Before');

fs.readFile(path, function(error, data) {
    console.log('** During **');
});

console.log('after');