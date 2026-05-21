import fs from 'fs';

const lines = fs.readFileSync('public/style.css', 'utf8').split('\n');
lines.forEach((line, idx) => {
  if (line.includes('color: white') || line.includes('color: #fff')) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});
