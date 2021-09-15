const fs = require('fs');

const text = fs.readFileSync('hello.txt', 'utf-8');
process.stdout.write(text);

// block spacing
function hello() { process.stdout.write('hello'); }

// keyword spacing
// space-before-blocks
if (process.env.HELLO) {
  hello('hello');
}

// key spacing
JSON.stringify({ a: 'a' });

JSON.stringify([1, 1, 1, 1, 1]);

module.exports = class {
  constructor() {
    const self = this;
    return self;
  }
};
