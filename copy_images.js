const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'public', 'img');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

const images = {
  'banner_bg_1779277795688.png': 'banner_bg.png',
  'thumb_ancient_1779277816305.png': 'thumb_ancient.png',
  'thumb_biology_1779277831703.png': 'thumb_biology.png'
};

const artifactDir = 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\b6afd85b-be71-4977-b46e-dae5b839ad4e';

for (const [srcName, destName] of Object.entries(images)) {
  const src = path.join(artifactDir, srcName);
  const dest = path.join(imgDir, destName);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${destName}`);
  }
}
