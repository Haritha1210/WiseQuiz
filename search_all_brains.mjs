import fs from "fs";
import path from "path";

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

function main() {
  const brainDir = "C:\\Users\\HP\\.gemini\\antigravity\\brain";
  console.log("Searching in brainDir:", brainDir);
  
  walkDir(brainDir, (filePath) => {
    if (filePath.endsWith(".md") || filePath.endsWith(".html") || filePath.endsWith(".js") || filePath.endsWith(".json")) {
      try {
        const content = fs.readFileSync(filePath, "utf8");
        if (content.includes("QuizMind") || content.includes("Conquer the trivia")) {
          console.log(`Found in: ${filePath}`);
          // Print matching line preview
          const lines = content.split("\n");
          lines.forEach((line, idx) => {
            if (line.includes("QuizMind") || line.includes("Conquer the trivia")) {
              console.log(`  Line ${idx + 1}: ${line.trim().substring(0, 150)}`);
            }
          });
        }
      } catch (err) {
        // Ignore read errors
      }
    }
  });
}

main();
