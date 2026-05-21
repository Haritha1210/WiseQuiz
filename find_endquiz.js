import fs from 'fs';
const lines = fs.readFileSync('public/app.js', 'utf8').split('\n');
lines.forEach((line, idx) => {
  if (line.includes('function endQuiz')) {
    console.log(`Found endQuiz at line ${idx + 1}`);
  }
});
