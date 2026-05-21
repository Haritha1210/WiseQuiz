import fs from "fs";
import readline from "readline";

async function main() {
  const logPath = "C:\\Users\\HP\\.gemini\\antigravity\\brain\\f22cf118-8f63-4f9e-93fc-c55c5d8d5c4d\\.system_generated\\logs\\transcript.jsonl";
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
  const lines = [];
  for await (const line of rl) {
    lineCount++;
    lines.push({ count: lineCount, line: line });
  }

  const totalLines = lines.length;
  console.log("Total lines in transcript:", totalLines);
  const start = Math.max(0, totalLines - 50);
  for (let i = start; i < totalLines; i++) {
    console.log(`Line ${lines[i].count}: ${lines[i].line.substring(0, 1000)}`);
  }
}

main();
