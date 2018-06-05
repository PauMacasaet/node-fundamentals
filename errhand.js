const fs = require('fs');

const path = __dirname;

fs.readFile(`${path}/foo.txt`, function(err, data) {
    // if an error occurred: throw

    if (err) {
        console.error(err.message);
        throw err;
    }
    console.log(data.toString('utf-8'));
});