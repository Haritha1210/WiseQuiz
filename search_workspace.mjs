import fs from "fs";
import path from "path";

const targetIds = [
  "12876713756165224785",
  "9cea832f419b47a6be6916950e3ae6bf",
  "f7198de83c2542269b35ad6ea542c987",
  "1c360596f7af4a619633a21e5413e5aa",
  "1d6df8d2e1594c548f3fb67ff14e2114"
];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    if (f === "node_modules" || f === ".git") return;
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
  const rootDir = "c:\\Users\\HP\\Desktop\\Quiz app";
  walkDir(rootDir, (filePath) => {
    if (filePath.endsWith(".mjs") || filePath.endsWith(".js") || filePath.endsWith(".json") || filePath.endsWith(".css") || filePath.endsWith(".html") || filePath.endsWith(".md")) {
      const content = fs.readFileSync(filePath, "utf8");
      targetIds.forEach(id => {
        if (content.includes(id)) {
          console.log(`Found ID ${id} in file: ${filePath}`);
        }
      });
    }
  });
}

main();
