import fs from "fs";

const projectId = "12876713756165224785";
const screenId = "9cea832f419b47a6be6916950e3ae6bf";

const urls = [
  `https://stitch.withgoogle.com/p/${projectId}/screens/${screenId}`,
  `https://stitch.withgoogle.com/p/${projectId}/screens/${screenId}/code.html`,
  `https://stitch.withgoogle.com/p/${projectId}/screens/${screenId}/code`,
  `https://stitch.withgoogle.com/p/${projectId}/screens/${screenId}/download`,
  `https://stitch.withgoogle.com/p/${projectId}/screens/${screenId}/preview`,
  `https://stitch.withgoogle.com/p/${projectId}/screens/${screenId}/image`,
  `https://stitch.withgoogle.com/p/${projectId}/screens/${screenId}/image.png`,
  `https://stitch.withgoogle.com/p/${projectId}/screens/${screenId}/screenshot`,
  `https://stitch.withgoogle.com/p/${projectId}/screens/${screenId}/screenshot.png`
];

async function testUrls() {
  for (const url of urls) {
    try {
      const res = await fetch(url, { method: "HEAD" });
      console.log(`URL: ${url}`);
      console.log(`  Status: ${res.status} ${res.statusText}`);
      console.log(`  Content-Type: ${res.headers.get("content-type")}`);
      console.log(`  Content-Length: ${res.headers.get("content-length")}\n`);
    } catch (err) {
      console.error(`URL: ${url} failed with error: ${err.message}\n`);
    }
  }
}

testUrls();
