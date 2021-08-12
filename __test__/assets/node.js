const fs = require('fs');

const text = fs.readFileSync('hello.txt', 'utf-8');
process.stdout.write(text);
