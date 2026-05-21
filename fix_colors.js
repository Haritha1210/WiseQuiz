import fs from 'fs';

let content = fs.readFileSync('public/style.css', 'utf8');
content = content.replace(/rgba\(255,\s*255,\s*255,\s*/g, 'rgba(0, 0, 0, ');
fs.writeFileSync('public/style.css', content);
console.log('Replaced all translucent white with translucent black in style.css');
