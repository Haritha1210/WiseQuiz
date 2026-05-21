import fs from "fs";
import readline from "readline";

async function main() {
  const logPath = "C:\\Users\\HP\\.gemini\\antigravity\\brain\\5efc1ade-f1e1-4971-b9b9-9dc1bf483979\\.system_generated\\logs\\transcript.jsonl";
  if (!fs.existsSync(logPath)) {
    console.error("Log file does not exist at:", logPath);
    return;
  }

  const fileStream = fs.createReadStream(logPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let lineCount = 0;
  for await (const line of rl) {
    lineCount++;
    if (line.toLowerCase().includes("stitch") || line.toLowerCase().includes("api_key") || line.toLowerCase().includes("url")) {
      console.log(`Line ${lineCount}: ${line.substring(0, 300)}...`);
    }
  }
}

main();
