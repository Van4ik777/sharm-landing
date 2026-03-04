import { SvgIconProps } from "../types";
import OptimizedImage from "../ImageOptimizer";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => {
  // Определяем путь в зависимости от типа изображения
  const imagePath = src.includes('.svg') ? 
    src : // Если это SVG, ищем в корне optimized
    `svg/${src}`; // Иначе ищем в svg папке

  return (
    <OptimizedImage 
      src={imagePath} 
      alt={src} 
      width={width} 
      height={height} 
      loading="eager" 
    />
  );
};
