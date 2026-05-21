const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, 'public', 'app.js');
const questionsPath = path.join(__dirname, 'data', 'questions.json');

const questions = fs.readFileSync(questionsPath, 'utf8');
let appJs = fs.readFileSync(appJsPath, 'utf8');

// The FALLBACK_QUESTIONS array starts at line 2 and ends at line 18 roughly.
// We can use a regex to replace it.
const regex = /const FALLBACK_QUESTIONS = \[[\s\S]*?\];/;
appJs = appJs.replace(regex, `const FALLBACK_QUESTIONS = ${questions};`);

fs.writeFileSync(appJsPath, appJs);
console.log('Successfully injected robust questions into app.js FALLBACK_QUESTIONS!');
