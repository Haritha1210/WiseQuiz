import puppeteer from "puppeteer-core";
import fs from "fs";
import path from "path";

async function main() {
  const wsUrl = process.env.AGY_BROWSER_WS_URL;
  if (!wsUrl) {
    console.error("AGY_BROWSER_WS_URL is not set");
    process.exit(1);
  }

  console.log("Connecting to browser...");
  const browser = await puppeteer.connect({
    browserWSEndpoint: wsUrl,
    defaultViewport: null
  });

  console.log("Searching for the Stitch tab...");
  const pages = await browser.pages();
  const stitchPage = pages.find(p => p.url().includes("stitch.withgoogle.com"));

  if (!stitchPage) {
    console.error("Stitch tab not found! Please open https://stitch.withgoogle.com/p/12876713756165224785 in your browser.");
    await browser.disconnect();
    process.exit(1);
  }

  console.log("Found Stitch tab:", stitchPage.url());

  // Let's check cookies and localStorage to find authorization
  const authInfo = await stitchPage.evaluate(async () => {
    console.log("Inspecting page storage...");
    const storage = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      storage[key] = localStorage.getItem(key);
    }
    return {
      url: window.location.href,
      localStorage: storage,
      cookies: document.cookie
    };
  });

  console.log("Checking if we can query the screens using the page context...");
  
  // Let's try to query the screen API directly using the page's fetch
  const screens = [
    { name: "QuizMind Landing Page", id: "9cea832f419b47a6be6916950e3ae6bf", prefix: "landing" },
    { name: "Quiz Results", id: "f7198de83c2542269b35ad6ea542c987", prefix: "results" },
    { name: "Leaderboard", id: "1c360596f7af4a619633a21e5413e5aa", prefix: "leaderboard" },
    { name: "Quiz Interface", id: "1d6df8d2e1594c548f3fb67ff14e2114", prefix: "quiz" }
  ];

  const outputDir = path.resolve("./public/stitch_assets");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const screen of screens) {
    console.log(`\nFetching details for ${screen.name}...`);
    
    // We run the fetch inside the page context because it has cookies and credentials
    const screenData = await stitchPage.evaluate(async (screenId) => {
      // Helper to fetch Google APIs with credentials
      try {
        // Find if there's any active token in localStorage or window
        // Stitch usually calls: https://stitch.googleapis.com/v1/projects/.../screens/...
        // Or it calls a proxy on the same origin: /_/Nemo/... or similar
        // Let's test different fetch endpoints.
        const project_id = "12876713756165224785";
        
        // Let's check WIZ_global_data
        const apiKey = window.WIZ_global_data?.c7zZhc || "";
        
        // Let's try the direct googleapis URL first
        const apiResponse = await fetch(`https://stitch.googleapis.com/v1/projects/${project_id}/screens/${screenId}?key=${apiKey}`);
        if (apiResponse.ok) {
          return await apiResponse.json();
        }
        
        return { error: `HTTP ${apiResponse.status}: ${apiResponse.statusText}` };
      } catch (err) {
        return { error: err.message };
      }
    }, screen.id);

    console.log("API Response:", JSON.stringify(screenData, null, 2));

    if (screenData && !screenData.error) {
      const htmlUrl = screenData.htmlCode?.downloadUrl;
      const imageUrl = screenData.screenshot?.downloadUrl;
      
      if (htmlUrl) {
        console.log(`Downloading HTML from ${htmlUrl}`);
        const response = await fetch(htmlUrl);
        if (response.ok) {
          fs.writeFileSync(path.join(outputDir, `${screen.prefix}.html`), await response.text());
          console.log(`Saved ${screen.prefix}.html`);
        } else {
          console.error(`Failed to download HTML: ${response.statusText}`);
        }
      }

      if (imageUrl) {
        console.log(`Downloading image from ${imageUrl}`);
        const response = await fetch(imageUrl);
        if (response.ok) {
          const buffer = await response.arrayBuffer();
          fs.writeFileSync(path.join(outputDir, `${screen.prefix}.png`), Buffer.from(buffer));
          console.log(`Saved ${screen.prefix}.png`);
        } else {
          console.error(`Failed to download image: ${response.statusText}`);
        }
      }
    } else {
      console.error(`Failed to retrieve screen metadata: ${screenData?.error}`);
    }
  }

  await browser.disconnect();
}

main().catch(console.error);
