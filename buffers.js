let buffer = new Buffer(10);


buffer = new Buffer('im a string', 'utf-8');

buffer.write('hello', 'utf-8');

console.log(buffer.toString('utf-8'));