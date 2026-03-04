const fs = require('fs');
const path = require('path');

/**
 * Скрипт для автоматической замены всех путей к изображениям на оптимизированные
 */

// Директории для обработки
const srcDir = path.join(__dirname, '../src');
const publicDir = path.join(__dirname, '../public');

// Функция для проверки, существует ли оптимизированная версия изображения
const hasOptimizedVersion = (imagePath) => {
  const extensions = ['.webp', '_sm.webp', '_md.webp', '_lg.webp'];
  const baseDir = imagePath.includes('/img/svg/') ? 
    path.join(publicDir, 'img/optimized') : 
    path.join(publicDir, 'img/optimized');
  
  for (const ext of extensions) {
    const fileName = path.basename(imagePath).replace(/\.(png|jpg|jpeg|gif)$/i, '');
    const optimizedPath = path.join(baseDir, `${fileName}${ext}`);
    if (fs.existsSync(optimizedPath)) {
      return true;
    }
  }
  return false;
};

// Функция для обновления путей в файле
const updateImagePaths = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Заменяем пути к изображениям
    content = content.replace(
      /src=["']\/img\/(svg\/|sectors\/)([^"']+)["']/g,
      (match, p1, p2) => {
        const fullPath = `/img/${p1}${p2}`;
        if (hasOptimizedVersion(fullPath)) {
          const fileName = path.basename(p2).replace(/\.(png|jpg|jpeg|gif)$/i, '');
          return `src="/img/optimized/${fileName}.webp"`;
        }
        return match;
      }
    );
    
    // Заменяем в компонентах React
    content = content.replace(
      /src=["']([^"']*\/img\/(svg\/|sectors\/)([^"']+)["']/g,
      (match, p1, p2) => {
        const fullPath = `/img/${p1}${p2}`;
        if (hasOptimizedVersion(fullPath)) {
          const fileName = path.basename(p2).replace(/\.(png|jpg|jpeg|gif)$/i, '');
          return `src="/img/optimized/${fileName}.webp"`;
        }
        return match;
      }
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`✓ Updated: ${filePath}`);
  } catch (error) {
    console.error(`✗ Error updating ${filePath}:`, error.message);
  }
};

// Рекурсивная обработка директории
const processDirectory = (dir) => {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx')) {
      updateImagePaths(filePath);
    }
  }
};

// Главная функция
function updateAllImages() {
  console.log('🚀 Starting image path optimization...');
  console.log(`📁 Processing directory: ${srcDir}`);
  
  try {
    processDirectory(srcDir);
    console.log('\n✅ Image path optimization complete!');
    console.log('💡 All images now use optimized versions when available');
  } catch (error) {
    console.error('❌ Optimization failed:', error);
  }
}

// Запуск
updateAllImages();
