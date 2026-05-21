import puppeteer from "puppeteer-core";
import fs from "fs";

async function main() {
  const wsUrl = process.env.AGY_BROWSER_WS_URL;
  if (!wsUrl) {
    console.error("AGY_BROWSER_WS_URL is not set");
    return;
  }

  console.log("Connecting to browser...");
  try {
    const browser = await puppeteer.connect({
      browserWSEndpoint: wsUrl,
      defaultViewport: { width: 1440, height: 900 }
    });

    console.log("Creating new page...");
    const page = await browser.newPage();

    console.log("Navigating to Stitch project...");
    await page.goto("https://stitch.withgoogle.com/p/12876713756165224785", {
      waitUntil: "networkidle2",
      timeout: 60000
    });

    console.log("Page loaded!");
    console.log("Current URL:", page.url());
    console.log("Title:", await page.title());

    // Take screenshot to see if we're logged in
    console.log("Taking screenshot...");
    await page.screenshot({ path: "stitch_project_screenshot.png" });
    console.log("Screenshot saved to stitch_project_screenshot.png");

    await page.close();
    await browser.disconnect();
  } catch (err) {
    console.error("Error:", err);
  }
}

main();
