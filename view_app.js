import fs from 'fs';

const lines = fs.readFileSync('public/app.js', 'utf8').split('\n');
console.log('--- Event Listeners Section ---');
for (let i = 130; i < 170; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}
