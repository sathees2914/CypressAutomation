const fs = require("fs-extra");
const { PNG } = require("pngjs");
const pixelmatch = require("pixelmatch");

// Load images
const img1Path =
  "C://Users//Lenovo//CypressAutomation//twoImageCheck//cypress//e2e//image1.png"; // Change to .jfif if needed
const img2Path =
  "C://Users//Lenovo//CypressAutomation//twoImageCheck//cypress//e2e//image2.png"; // Change to .jfif if needed

const img1 = PNG.sync.read(fs.readFileSync(img1Path));
const img2 = PNG.sync.read(fs.readFileSync(img2Path));

// Compare images
const { width, height } = img1;
const diff = new PNG({ width, height });
const numDiffPixels = pixelmatch(
  img1.data,
  img2.data,
  diff.data,
  width,
  height,
  { threshold: 0.1 }
);

// Save the diff image
fs.writeFileSync("diff.png", PNG.sync.write(diff));

console.log(`Number of different pixels: ${numDiffPixels}`);
