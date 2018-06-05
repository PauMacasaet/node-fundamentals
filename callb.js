const dns = require('dns');

dns.resolve4('google.com', (err, addresses) => {
    if (err) {
        throw err
    } else {
        console.log('addresses: ' + JSON.stringify(addresses));
    }
});