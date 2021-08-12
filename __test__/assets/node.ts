import fs from 'fs';

const text = fs.readFileSync('hello.txt', 'utf-8');
process.stdout.write(text);
