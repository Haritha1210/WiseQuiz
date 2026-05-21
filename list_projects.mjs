import { stitch } from "@google/stitch-sdk";

async function main() {
  try {
    console.log("Fetching accessible projects...");
    const projects = await stitch.projects();
    console.log(`Found ${projects.length} projects:`);
    for (const p of projects) {
      console.log(`- Title: ${p.data?.title}, ID: ${p.id}`);
    }
  } catch (err) {
    console.error("Error listing projects:", err);
  }
}

main();
