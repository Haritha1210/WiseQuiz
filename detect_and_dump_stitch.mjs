import puppeteer from "puppeteer-core";
import fs from "fs";

async function main() {
  const wsUrl = process.env.AGY_BROWSER_WS_URL;
  if (!wsUrl) {
    console.error("AGY_BROWSER_WS_URL is not set");
    return;
  }

  console.log("Connecting to browser...");
  const browser = await puppeteer.connect({
    browserWSEndpoint: wsUrl,
    defaultViewport: null
  });

  console.log("Waiting for Stitch project tab to be open...");
  let stitchPage = null;
  
  // Poll for 20 seconds
  for (let i = 0; i < 20; i++) {
    const pages = await browser.pages();
    stitchPage = pages.find(p => p.url().includes("stitch.withgoogle.com/p/12876713756165224785"));
    if (stitchPage) {
      break;
    }
    await new Promise(r => setTimeout(r, 1000));
  }

  if (!stitchPage) {
    console.error("Stitch tab not found after 20 seconds. Please open the link in your browser.");
    await browser.disconnect();
    return;
  }

  console.log("Found Stitch tab:", stitchPage.url());
  console.log("Dumping iframes and images...");

  const domData = await stitchPage.evaluate(() => {
    const iframes = Array.from(document.querySelectorAll("iframe")).map(f => f.src);
    const imgs = Array.from(document.querySelectorAll("img")).map(img => img.src);
    const links = Array.from(document.querySelectorAll("a")).map(a => ({ href: a.href, text: a.innerText }));
    return {
      title: document.title,
      iframes,
      imgs,
      links,
      body: document.body.innerHTML.substring(0, 100000) // first 100k chars
    };
  });

  fs.writeFileSync("stitch_dom_dump.json", JSON.stringify(domData, null, 2));
  console.log("DOM data dumped to stitch_dom_dump.json");

  await browser.disconnect();
}

main().catch(console.error);
