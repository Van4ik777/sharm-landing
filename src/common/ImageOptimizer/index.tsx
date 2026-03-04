import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  loading?: 'eager' | 'lazy';
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}

// Функция для получения оптимизированного пути к изображению
const getOptimizedImagePath = (originalPath: string): string => {
  // Если это уже оптимизированный путь, возвращаем как есть
  if (originalPath.includes('/img/optimized/')) {
    return originalPath;
  }
  
  // Для SVG файлов ищем в корне optimized
  if (originalPath.endsWith('.svg')) {
    return `/img/optimized/${originalPath}`;
  }
  
  // Получаем имя файла без расширения
  const fileName = originalPath.split('/').pop()?.replace(/\.(png|jpg|jpeg|gif)$/i, '') || '';
  
  // Проверяем доступные оптимизированные версии в порядке приоритета
  const optimizedVersions = [
    `/img/optimized/${fileName}.webp`,
    `/img/optimized/${fileName}_lg.webp`,
    `/img/optimized/${fileName}_md.webp`,
    `/img/optimized/${fileName}_sm.webp`
  ];
  
  // Возвращаем первый существующий оптимизированный файл
  return optimizedVersions[0] || originalPath;
};

// Компонент для оптимизированных изображений с fallback
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  loading = 'lazy',
  style,
  onLoad,
  onError
}) => {
  const [imageError, setImageError] = useState(false);
  const optimizedSrc = getOptimizedImagePath(src);
  const fallbackSrc = src.startsWith('/') ? src : `/img/${src}`;

  const handleError = () => {
    setImageError(true);
    onError?.();
  };

  // Для SVG не используем picture, так как это векторный формат
  if (src.endsWith('.svg')) {
    return (
      <img
        src={imageError ? fallbackSrc : optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        style={style}
        onLoad={onLoad}
        onError={handleError}
      />
    );
  }

  // Если WebP не поддерживается или произошла ошибка, используем оригинал
  const imageSrc = imageError ? fallbackSrc : optimizedSrc;

  return (
    <picture>
      <source 
        srcSet={optimizedSrc} 
        type="image/webp" 
      />
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        style={style}
        onLoad={onLoad}
        onError={handleError}
      />
    </picture>
  );
};

export default OptimizedImage;
