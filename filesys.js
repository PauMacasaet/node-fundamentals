const fs = require('fs');

fs.mkdir('filesys', () => {
    fs.writeFile('filesys/file.txt', 'utf8', (err, data) => {
        fs.readFile('file.txt', (err, data) => {
            console.log(data.toString('utf-8'));
        });
    });
});