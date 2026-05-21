import puppeteer from "puppeteer-core";

async function main() {
  const wsUrl = process.env.AGY_BROWSER_WS_URL;
  if (!wsUrl) {
    console.error("AGY_BROWSER_WS_URL is not set");
    return;
  }

  console.log("Connecting to browser at:", wsUrl);
  try {
    const browser = await puppeteer.connect({
      browserWSEndpoint: wsUrl,
      defaultViewport: null
    });

    console.log("Connected successfully!");
    const pages = await browser.pages();
    console.log(`Found ${pages.length} open pages:`);
    for (const page of pages) {
      console.log(`- [${await page.title()}] -> ${page.url()}`);
    }

    await browser.disconnect();
  } catch (err) {
    console.error("Error connecting to browser:", err);
  }
}

main();
