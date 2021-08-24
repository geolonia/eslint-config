const fs = require('fs');

const text = fs.readFileSync('hello.txt', 'utf-8');
process.stdout.write(text);

// block spacing
function hello() { process.stdout.write('hello'); }

// keyword spacing
if (process.env.HELLO){
  hello('hello');
}

// key spacing
JSON.stringify({ a: 'a' });
