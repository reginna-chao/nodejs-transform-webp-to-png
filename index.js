const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = './src';
const distDir = './dist';

// Ensure that the dist folder exists, and empty it if it does.
if (fs.existsSync(distDir)) {
  fs.rmdirSync(distDir, { recursive: true })
}
fs.mkdirSync(distDir);

// Read the files in the src folder.
fs.readdir(srcDir, (err, files) => {
  if (err) {
    console.err('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    const srcFilePath = path.join(srcDir, file);
    const distFilePath = path.join(distDir, file.replace(/\.webp$/, '.png')); // Convert to PNG

    sharp(srcFilePath)
      .toFormat('png') // Convert to PNG
      .toFile(distFilePath, (err, info) => {
        if (err) {
          console.error(`Error converting ${file}`, err);
        } else {
          console.log(`Converted ${file} to ${info.format}`, info);
        }
      })
  });
});
