import React, { useEffect, useState } from 'react';
import './styles.css';

interface Spark {
  id: number;
  x: number;
  y: number;
  angle: number;
}

const ClickSparks: React.FC = () => {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newSparks: Spark[] = [];
      const sparkCount = 12;

      for (let i = 0; i < sparkCount; i++) {
        const angle = (i / sparkCount) * Math.PI * 2;
        newSparks.push({
          id: nextId + i,
          x: e.clientX,
          y: e.clientY,
          angle,
        });
      }

      setSparks((prev) => [...prev, ...newSparks]);
      setNextId((prev) => prev + sparkCount);

      // Remove sparks after animation completes
      setTimeout(() => {
        setSparks((prev) => prev.slice(sparkCount));
      }, 800);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [nextId]);

  return (
    <div className="sparks-container">
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="spark"
          style={{
            '--x': `${spark.x}px`,
            '--y': `${spark.y}px`,
            '--angle': `${spark.angle}rad`,
          } as React.CSSProperties}
        >
          <div className="spark-dot"></div>
        </div>
      ))}
    </div>
  );
};

export default ClickSparks;
