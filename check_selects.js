import fs from "fs";

const content = fs.readFileSync("public/app.js", "utf8");
const lines = content.split("\n");

lines.forEach((line, idx) => {
  if (line.includes("quizCategorySelect") || line.includes("quizDifficultySelect")) {
    console.log(`Line ${idx + 1}: ${line}`);
  }
});
