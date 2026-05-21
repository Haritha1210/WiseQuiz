import fs from "fs";
import path from "path";

function walkDir(dir, callback) {
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
  const targetDir = "c:\\Users\\HP\\Desktop\\Quiz app\\node_modules\\@_davideast\\stitch-mcp\\dist";
  walkDir(targetDir, (filePath) => {
    if (filePath.endsWith(".js")) {
      const content = fs.readFileSync(filePath, "utf8");
      if (content.includes("Checking Google Cloud CLI")) {
        console.log("Found in:", filePath);
        const lines = content.split("\n");
        lines.forEach((line, idx) => {
          if (line.includes("Checking Google Cloud CLI")) {
            console.log(`  Line ${idx + 1}: ${line.trim().substring(0, 150)}`);
          }
        });
      }
    }
  });
}

main();
