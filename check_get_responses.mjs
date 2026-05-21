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

async function checkGet() {
  for (const url of urls) {
    try {
      const res = await fetch(url);
      console.log(`URL: ${url}`);
      console.log(`  Status: ${res.status}`);
      const text = await res.text();
      console.log(`  Body length: ${text.length}`);
      console.log(`  Preview (first 150 chars): ${text.substring(0, 150).replace(/\n/g, ' ')}\n`);
    } catch (err) {
      console.error(`URL: ${url} failed: ${err.message}\n`);
    }
  }
}

checkGet();
