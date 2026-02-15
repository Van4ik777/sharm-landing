const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

/**
 * Image Optimization Script
 * Optimizes all images in the public/img directory
 * Converts to WebP format and creates multiple sizes for responsive loading
 */

const imageDir = path.join(__dirname, '../public/img');
const outputDir = path.join(__dirname, '../public/img/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

/**
 * Optimize images with multiple sizes
 * @param {string} imagePath - Path to the original image
 * @param {string} filename - Original filename
 */
async function optimizeImage(imagePath, filename) {
  try {
    const nameWithoutExt = path.parse(filename).name;
    
    // Define sizes for responsive images
    const sizes = [
      { width: 320, suffix: '_sm' },
      { width: 640, suffix: '_md' },
      { width: 1024, suffix: '_lg' },
      { width: 1920, suffix: '_xl' }
    ];

    // Original quality optimization
    await sharp(imagePath)
      .resize(1920, 1920, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, `${nameWithoutExt}.webp`));

    // Generate responsive sizes
    for (const size of sizes) {
      await sharp(imagePath)
        .resize(size.width, size.width, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(path.join(outputDir, `${nameWithoutExt}${size.suffix}.webp`));
    }

    // Also create JPEG fallback for older browsers
    await sharp(imagePath)
      .resize(1920, 1920, { withoutEnlargement: true })
      .jpeg({ quality: 75, progressive: true })
      .toFile(path.join(outputDir, `${nameWithoutExt}.jpg`));

    console.log(`✓ Optimized: ${filename}`);
  } catch (error) {
    console.error(`✗ Error optimizing ${filename}:`, error.message);
  }
}

/**
 * Recursively process all images in directory
 * @param {string} dir - Directory to process
 */
async function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively process subdirectories
      processDirectory(filePath);
    } else if (/(\.jpg|\.jpeg|\.png|\.gif)$/i.test(file)) {
      // Process image files
      await optimizeImage(filePath, file);
    }
  }
}

/**
 * Main optimization function
 */
async function optimizeAllImages() {
  console.log('🚀 Starting image optimization...');
  console.log(`📁 Source directory: ${imageDir}`);
  console.log(`📤 Output directory: ${outputDir}\n`);

  try {
    await processDirectory(imageDir);
    console.log('\n✅ Image optimization complete!');
    console.log('💡 Use optimized images from the "optimized" folder');
  } catch (error) {
    console.error('❌ Optimization failed:', error);
  }
}

// Run optimization
optimizeAllImages();

