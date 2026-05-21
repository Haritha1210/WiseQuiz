import { stitch, Screen } from "@google/stitch-sdk";
import fs from "fs";
import path from "path";

const projectId = "12876713756165224785";

const screens = [
  { name: "QuizMind Landing Page", id: "9cea832f419b47a6be6916950e3ae6bf", filePrefix: "landing" },
  { name: "Quiz Results", id: "f7198de83c2542269b35ad6ea542c987", filePrefix: "results" },
  { name: "Leaderboard", id: "1c360596f7af4a619633a21e5413e5aa", filePrefix: "leaderboard" },
  { name: "Quiz Interface", id: "1d6df8d2e1594c548f3fb67ff14e2114", filePrefix: "quiz" }
];

async function downloadFile(url, destPath) {
  console.log(`Downloading from ${url} to ${destPath}`);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }
  const buffer = await response.arrayBuffer();
  fs.writeFileSync(destPath, Buffer.from(buffer));
}

async function main() {
  try {
    const outputDir = path.resolve("./stitch_assets");
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    for (const screenInfo of screens) {
      console.log(`\n--- Fetching: ${screenInfo.name} (ID: ${screenInfo.id}) ---`);
      
      // Instantiate Screen directly using the stitch client proxy
      const screen = new Screen(stitch, { projectId: projectId, id: screenInfo.id });
      
      console.log("Retrieving HTML download URL...");
      const htmlUrl = await screen.getHtml();
      if (htmlUrl) {
        const destHtml = path.join(outputDir, `${screenInfo.filePrefix}.html`);
        await downloadFile(htmlUrl, destHtml);
      } else {
        console.warn("No HTML URL returned");
      }

      console.log("Retrieving Image download URL...");
      const imageUrl = await screen.getImage();
      if (imageUrl) {
        const destImg = path.join(outputDir, `${screenInfo.filePrefix}.png`);
        await downloadFile(imageUrl, destImg);
      } else {
        console.warn("No Image URL returned");
      }
    }
    console.log("\nAll downloads completed successfully!");
  } catch (err) {
    console.error("Error in download script:", err);
  }
}

main();
