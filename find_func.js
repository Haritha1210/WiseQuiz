import fs from 'fs';
const lines = fs.readFileSync('public/app.js', 'utf8').split('\n');
lines.forEach((line, idx) => {
  if (line.includes('async function handleQuizStart')) {
    console.log(`Found handleQuizStart at line ${idx + 1}`);
  }
});
