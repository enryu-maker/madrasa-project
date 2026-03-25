const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.css') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');
let count = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('emerald') || content.includes('Emerald')) {
    content = content.replace(/emerald/g, 'sky').replace(/Emerald/g, 'Sky');
    fs.writeFileSync(file, content, 'utf8');
    count++;
  }
});
console.log('Replaced in ' + count + ' files.');
