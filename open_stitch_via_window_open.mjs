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

    const pages = await browser.pages();
    const chatPage = pages.find(p => p.url().includes("127.0.0.1") || p.url().includes("localhost"));
    if (!chatPage) {
      console.error("Could not find the chat UI page");
      await browser.disconnect();
      return;
    }

    console.log("Found chat page:", chatPage.url());
    console.log("Opening Stitch project via window.open...");
    await chatPage.evaluate(() => {
      window.stitchTab = window.open("https://stitch.withgoogle.com/p/12876713756165224785");
    });

    console.log("Waiting for new page to appear...");
    await new Promise(resolve => setTimeout(resolve, 8000));

    const allPages = await browser.pages();
    console.log(`Now found ${allPages.length} open pages:`);
    for (const p of allPages) {
      console.log(`- [${await p.title()}] -> ${p.url()}`);
    }

    const stitchPage = allPages.find(p => p.url().includes("stitch.withgoogle.com"));
    if (stitchPage) {
      console.log("Found Stitch page! Taking screenshot...");
      await stitchPage.screenshot({ path: "stitch_open_screenshot.png" });
      console.log("Screenshot saved to stitch_open_screenshot.png");
      
      // Close the Stitch page
      await stitchPage.close();
    } else {
      console.log("Stitch page not found in list of pages.");
    }

    await browser.disconnect();
  } catch (err) {
    console.error("Error:", err);
  }
}

main();
