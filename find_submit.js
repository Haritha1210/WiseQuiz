import fs from 'fs';
const lines = fs.readFileSync('public/app.js', 'utf8').split('\n');
lines.forEach((line, idx) => {
  if (line.includes('submitScore') || line.includes('function showResults')) {
    console.log(`Line ${idx + 1}: ${line}`);
  }
});
