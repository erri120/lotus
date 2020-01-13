const markdownpdf = require('markdown-pdf');
const fs = require('fs');
const path = require('path');

if(!fs.existsSync(path.join(__dirname, 'built')))
    fs.mkdirSync(path.join(__dirname, 'build'));

fs.createReadStream(path.join(__dirname, 'README.md'))
  .pipe(markdownpdf())
  .pipe(fs.createWriteStream(path.join(__dirname, 'build', 'README.pdf')));
