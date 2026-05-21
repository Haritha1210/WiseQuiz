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
    if (filePath.endsWith("transcript.jsonl")) {
      const content = fs.readFileSync(filePath, "utf8");
      if (content.includes("https://") && (content.includes("9cea832f") || content.includes("12876713756165224785") || content.includes("storage.googleapis.com"))) {
        console.log(`Found matching log file: ${filePath}`);
        const lines = content.split("\n");
        lines.forEach((line, idx) => {
          if (line.includes("https://") && (line.includes("9cea832f") || line.includes("12876713756165224785") || line.includes("storage.googleapis.com"))) {
            // Find all URLs in the line using regex
            const matches = line.match(/https:\/\/[^\s"'\\]+/g);
            if (matches) {
              matches.forEach(url => {
                console.log(`  Line ${idx + 1}: ${url}`);
              });
            }
          }
        });
      }
    }
  });
}

main();
