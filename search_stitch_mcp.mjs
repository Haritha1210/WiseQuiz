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

async function main() {
  const targetDir = "c:\\Users\\HP\\Desktop\\Quiz app\\node_modules\\@_davideast\\stitch-mcp\\dist";
  if (!fs.existsSync(targetDir)) {
    console.error("Directory does not exist:", targetDir);
    return;
  }

  walkDir(targetDir, (filePath) => {
    if (filePath.endsWith(".js")) {
      const content = fs.readFileSync(filePath, "utf8");
      if (content.includes("storage.googleapis.com") || content.includes("stitch.googleapis.com") || content.includes("googleusercontent.com")) {
        console.log("Found in:", filePath);
        // Find matching lines
        const lines = content.split("\n");
        lines.forEach((line, idx) => {
          if (line.includes("storage.googleapis.com") || line.includes("stitch.googleapis.com") || line.includes("googleusercontent.com")) {
            console.log(`  Line ${idx + 1}: ${line.trim().substring(0, 150)}`);
          }
        });
      }
    }
  });
}

main();
