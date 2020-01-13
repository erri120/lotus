const markdownpdf = require('markdown-pdf');
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, 'build');
const inPath = path.join(__dirname, 'README.md');
const outPath = path.join(buildDir, 'README.pdf')

if(!fs.existsSync(buildDir))
    fs.mkdirSync(buildDir);

if(fs.existsSync(outPath))
    fs.unlinkSync(outPath);

fs.createReadStream(inPath)
  .pipe(markdownpdf())
  .pipe(fs.createWriteStream(outPath));
