import fs from 'fs';

const lines = fs.readFileSync('public/index.html', 'utf8').split('\n');
lines.forEach((line, idx) => {
  console.log(`${idx + 1}: ${line}`);
});
