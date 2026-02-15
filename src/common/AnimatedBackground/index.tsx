import React from 'react';
import './styles.css';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="animated-bg">
      <div className="gradient-blur gradient-1"></div>
      <div className="gradient-blur gradient-2"></div>
      <div className="gradient-blur gradient-3"></div>
      <div className="grid-pattern"></div>
      <div className="noise"></div>
    </div>
  );
};

export default AnimatedBackground;
