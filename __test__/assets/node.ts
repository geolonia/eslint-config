import fs from 'fs';

type Map = {
  [key in 'a' | 'b']: string;
}

const map: Map = {
  'a': 'aaa',
  'b': 'bbb',
};
process.stdout.write(JSON.stringify(map));

const text = fs.readFileSync('hello.txt', 'utf-8');
process.stdout.write(text);
