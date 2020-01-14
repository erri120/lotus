const markdownpdf = require('markdown-pdf');
const fs = require('fs');
const path = require('path');
const _ = require("underscore");

const buildDir = path.join(__dirname, 'build');
const cssPath = path.join(__dirname, 'css.css');

const inPaths = {
    readme: path.join(__dirname, 'README.md'),
    changelog: path.join(__dirname, 'CHANGELOG.md')
};


if(!fs.existsSync(buildDir))
    fs.mkdirSync(buildDir);

_.map(inPaths, (cur) => {
    const outPath = cur.replace(__dirname, buildDir).replace('.md', '.pdf');
    if(fs.existsSync(outPath))
        fs.unlinkSync(outPath);

    fs.createReadStream(cur)
    .pipe(markdownpdf({
        cssPath: cssPath
    }))
    .pipe(fs.createWriteStream(outPath));
});
