import fs from "fs";

const content = fs.readFileSync("public/app.js", "utf8");
const lines = content.split("\n");

console.log("Occurrences of resultEmoji:");
lines.forEach((line, idx) => {
  if (line.includes("resultEmoji")) {
    console.log(`  Line ${idx + 1}: ${line}`);
  }
});

console.log("\nOccurrences of emojis (e.g. 🥇, 🥈, 🥉, 🔥):");
lines.forEach((line, idx) => {
  if (line.includes("🥇") || line.includes("🥈") || line.includes("🥉") || line.includes("🔥") || line.includes("🏆") || line.includes("🌟") || line.includes("🎯")) {
    console.log(`  Line ${idx + 1}: ${line}`);
  }
});
