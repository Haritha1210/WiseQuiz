import { stitch } from "@google/stitch-sdk";
import fs from "fs";
import path from "path";

async function main() {
  try {
    const projectId = "12876713756165224785";
    console.log(`Accessing project: ${projectId}`);
    
    const project = stitch.project(projectId);
    const outputDir = path.resolve("./stitch_assets");
    
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    console.log(`Downloading assets to: ${outputDir}`);
    const result = await project.downloadAssets(outputDir);
    console.log("Download result:", JSON.stringify(result, null, 2));
  } catch (err) {
    console.error("Error downloading assets:", err);
  }
}
main();
